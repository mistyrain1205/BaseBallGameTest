using UnityEngine;
using System.Collections.Generic;
using System.Linq;

using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using TMPro;

namespace BaseballSim {
    public enum Position { Pitcher, Catcher, First, Second, Third, Short, Left, Center, Right, DH }
    public enum PitcherRole { Starter, Reliever, Closer, None }
    public enum Rank { S, A, B, C, D }
    public enum ResultType { Out, Single, Double, Triple, HomeRun, Walk, StrikeOut, DeadBall }
    public enum PitcherCommand { Kiwadoi, Strike, Hazuse, Kensei, Auto, Time }
    public enum BatterCommand { Aggressive, Look, Bunt, Steal, Auto, Time }
    public enum PitchResult { Ball, CalledStrike, SwingingStrike, Foul, InPlay, PickoffSuccess, PickoffFail }

    [System.Serializable]
    public class PlayerStats {
        public int meet;
        public int power;
        public int speed;
        public int eye;
        public int bunt;
        public int defense;
        public int velocity;
        public int control;
        public int stamina;
    }

    [System.Serializable]
    public class Player {
        public int id;
        public string name;
        public Position mainPos;
        public PlayerStats stats;
        
        // 状態管理
        public int currentStamina;
        public int maxStamina;
        public int warmUpLevel = 0; // 0~100
        public bool isWarmingUp = false;
        public List<PitcherRole> aptitude = new List<PitcherRole>();

        public Player(int id, string name, Position pos, PlayerStats stats) {
            this.id = id;
            this.name = name;
            this.mainPos = pos;
            this.stats = stats;
            this.maxStamina = stats.stamina;
            this.currentStamina = stats.stamina;
        }

        public Rank GetRank(int score) {
            if (score > 60) return Rank.S;
            if (score > 50) return Rank.A;
            if (score > 40) return Rank.B;
            if (score > 30) return Rank.C;
            return Rank.D;
        }

        public Rank BattingRank => GetRank((stats.meet + stats.power + stats.eye) / 3);
        public Rank RunRank => GetRank((stats.speed + stats.bunt) / 2);
        public Rank DefRank => GetRank(stats.defense);

        public (double velocity, double control) GetCurrentPitchingStats() {
            double multiplier = 1.0;
            // ブルペン準備不足補正
            if (warmUpLevel < 100) multiplier *= 0.7 + (warmUpLevel * 0.003);
            // スタミナ切れ補正
            if (currentStamina <= 10) multiplier *= 0.8;
            return (stats.velocity * multiplier, stats.control * multiplier);
        }
    }

    public class Team {
        public int id;
        public string name;
        public List<Player> players;
        public Team(int id, string name, List<Player> roster) {
            this.id = id;
            this.name = name;
            this.players = roster;
        }
    }

    public class GameState {
        public int scoreHome = 0;
        public int scoreAway = 0;
        public int inning = 1;
        public bool isBottom = false;
        public int balls = 0;
        public int strikes = 0;
        public int outs = 0;
        public Player[] runners = new Player[4];
        public bool gameEnded = false;

        public void Reset() {
            scoreHome = scoreAway = 0;
            inning = 1;
            isBottom = false;
            balls = strikes = outs = 0;
            System.Array.Clear(runners, 0, 4);
            gameEnded = false;
        }
    }

    public class BaseballSimulation : MonoBehaviour {
        [Header("UI References")]
        public TextMeshProUGUI textAwayScore;
        public TextMeshProUGUI textHomeScore;
        public TextMeshProUGUI textInning;
        public TextMeshProUGUI textLog;
        public TextMeshProUGUI textBatterInfo;
        public Image[] baseDots; // 0:1塁, 1:2塁, 2:3塁

        private GameState state;
        private Team homeTeam;
        private Team awayTeam;
        private List<Player> homeLineup;
        private List<Player> awayLineup;
        private Player homePitcher;
        private Player awayPitcher;
        private int homeBatterIdx = 0;
        private int awayBatterIdx = 0;

        private static readonly string[] LastNames = { "佐藤", "鈴木", "高橋", "田中", "伊藤", "渡辺", "山本", "中村", "小林", "加藤", "吉田", "山田" };
        private static readonly string[] FirstNames = { "健太", "翔", "裕也", "直樹", "和也", "拓也", "大輔", "亮" };

        void Awake() {
            state = new GameState();
            SetupTeams();
        }

        void Start() {
            UpdateUI();
            AddLog("--- プロ野球シミュレーター ---");
        }

        [ContextMenu("Start New Game")]
        public void StartNewGame() {
            StopAllCoroutines();
            state.Reset();
            homeBatterIdx = 0;
            awayBatterIdx = 0;
            UpdateUI();
            AddLog("<color=yellow>プレイボール！</color>");
        }

        public void OnNextPitchButton() {
            if (state.gameEnded) return;
            Step();
        }

        void SetupTeams() {
            // 東京パイレーツ
            List<Player> p0 = new List<Player>();
            p0.Add(new Player(1, "海堂 尊", Position.Pitcher, new PlayerStats { velocity = 158, control = 92, stamina = 85, defense = 70 }));
            p0.First().warmUpLevel = 100;
            p0.Add(new Player(2, "イチロー", Position.Right, new PlayerStats { meet = 95, power = 75, speed = 95, eye = 90, defense = 98 }));
            for (int i = 3; i <= 25; i++) p0.Add(GenerateRandomPlayer(i, i <= 10 ? Position.Pitcher : (Position)(i % 9 + 1)));
            homeTeam = new Team(0, "東京パイレーツ", p0);
            homeLineup = p0.Where(p => p.mainPos != Position.Pitcher).Take(9).ToList();
            homePitcher = p0.First(p => p.mainPos == Position.Pitcher);

            // 大阪タイガース
            List<Player> p1 = new List<Player>();
            p1.Add(new Player(101, "ダルビッシュ", Position.Pitcher, new PlayerStats { velocity = 156, control = 88, stamina = 82, defense = 75 }));
            p1.First().warmUpLevel = 100;
            p1.Add(new Player(102, "バース", Position.First, new PlayerStats { meet = 92, power = 98, speed = 40, eye = 85, defense = 45 }));
            for (int i = 3; i <= 25; i++) p1.Add(GenerateRandomPlayer(100 + i, i <= 10 ? Position.Pitcher : (Position)(i % 9 + 1)));
            awayTeam = new Team(1, "大阪タイガース", p1);
            awayLineup = p1.Where(p => p.mainPos != Position.Pitcher).Take(9).ToList();
            awayPitcher = p1.First(p => p.mainPos == Position.Pitcher);
        }

        Player GenerateRandomPlayer(int id, Position pos) {
            string name = LastNames[id % LastNames.Length] + " " + FirstNames[id % FirstNames.Length];
            PlayerStats s = new PlayerStats {
                meet = 40 + (id % 40), power = 40 + (id % 50), speed = 40 + (id % 50), eye = 40 + (id % 40),
                velocity = 135 + (id % 20), control = 40 + (id % 40), stamina = 50 + (id % 40),
                defense = 40 + (id % 40), bunt = 30 + (id % 50)
            };
            Player p = new Player(id, name, pos, s);
            if (pos == Position.Pitcher) p.warmUpLevel = 50; // 控えは半分準備
            return p;
        }

        void Step() {
            Player batter = state.isBottom ? homeLineup[homeBatterIdx] : awayLineup[awayBatterIdx];
            Player pitcher = state.isBottom ? awayPitcher : homePitcher;
            
            // ブルペンの更新
            UpdateBullpen();

            // コマンドの決定 (AIまたはデフォルト)
            PitcherCommand pCmd = PitcherCommand.Auto;
            BatterCommand bCmd = BatterCommand.Auto;

            // 1球実行
            PitchResult res = ExecuteOnePitch(batter, pitcher, pCmd, bCmd);
            ProcessPitchResult(res, batter, pitcher);

            UpdateUI();
        }

        PitchResult ExecuteOnePitch(Player batter, Player pitcher, PitcherCommand pCmd, BatterCommand bCmd) {
            var (baseVel, baseCtl) = pitcher.GetCurrentPitchingStats();
            pitcher.currentStamina -= 1;

            double activeCtl = baseCtl;
            double strikeRate = 50 + (activeCtl * 0.3);

            if (pCmd == PitcherCommand.Kiwadoi) {
                strikeRate -= 20; 
                activeCtl += 15;
            } else if (pCmd == PitcherCommand.Strike) {
                strikeRate += 25;
                activeCtl -= 15;
            }

            bool isStrikeZone = Random.Range(0, 100) < strikeRate;
            bool doesSwing = false;
            
            if (isStrikeZone) {
                double swingProb = 90;
                if (bCmd == BatterCommand.Look) swingProb = 40;
                doesSwing = Random.Range(0, 100) < swingProb;
            } else {
                double swingProb = Mathf.Max(5, 50 - (batter.stats.eye * 0.5f));
                if (bCmd == BatterCommand.Aggressive) swingProb += 20;
                if (bCmd == BatterCommand.Look) swingProb -= 20;
                doesSwing = Random.Range(0, 100) < swingProb;
            }

            if (bCmd == BatterCommand.Bunt) doesSwing = true;

            if (!doesSwing) {
                return isStrikeZone ? PitchResult.CalledStrike : PitchResult.Ball;
            } else {
                double contactRate = (batter.stats.meet * 0.8) + (activeCtl * 0.1); 
                if (pCmd == PitcherCommand.Strike) contactRate += 10;
                if (bCmd == BatterCommand.Aggressive) contactRate -= 10;
                if (bCmd == BatterCommand.Bunt) contactRate = 90;

                if (Random.Range(0, 100) > contactRate) return PitchResult.SwingingStrike;

                if (Random.Range(0, 100) < 40) return PitchResult.InPlay;
                return PitchResult.Foul;
            }
        }

        void ProcessPitchResult(PitchResult res, Player batter, Player pitcher) {
            string log = $"<color=lightblue>{state.inning}回{(state.isBottom ? "裏" : "表")}</color> {pitcher.name} vs {batter.name}: ";
            
            switch (res) {
                case PitchResult.Ball:
                    state.balls++;
                    AddLog(log + "ボール");
                    break;
                case PitchResult.CalledStrike:
                    state.strikes++;
                    AddLog(log + "見逃しストライク");
                    break;
                case PitchResult.SwingingStrike:
                    state.strikes++;
                    AddLog(log + "空振りストライク");
                    break;
                case PitchResult.Foul:
                    if (state.strikes < 2) state.strikes++;
                    AddLog(log + "ファウル");
                    break;
                case PitchResult.InPlay:
                    AddLog(log + "打った！");
                    ResolveInPlay(batter);
                    return; // 打席終了処理はResolveInPlayで行う
            }

            if (state.balls >= 4) {
                AddLog("<color=orange>フォアボール！</color>");
                CompleteAtBat(ResultType.Walk, batter);
            } else if (state.strikes >= 3) {
                AddLog("<color=cyan>三振！</color>");
                CompleteAtBat(ResultType.StrikeOut, batter);
            }
        }

        void ResolveInPlay(Player batter) {
            // ヒット判定のロジック (提供されたコードをベースに拡張)
            float r = Random.Range(0f, 100f);
            float hrProb = 2f + (batter.stats.power * 0.05f);
            float hitProb = 15f + (batter.stats.meet * 0.1f); // 投手補正は既にかかっている想定

            if (r < hrProb) {
                CompleteAtBat(ResultType.HomeRun, batter);
            } else if (r < hrProb + hitProb) {
                ResultType hitType = DetermineHitType(batter.stats.speed);
                CompleteAtBat(hitType, batter);
            } else {
                CompleteAtBat(ResultType.Out, batter);
            }
        }

        ResultType DetermineHitType(int speed) {
            float subRoll = Random.Range(0f, 100f);
            float prob3B = speed * 0.05f;
            float prob2B = 10.0f + (speed * 0.1f);

            if (subRoll < prob3B) return ResultType.Triple;
            if (subRoll < prob3B + prob2B) return ResultType.Double;
            return ResultType.Single;
        }

        void CompleteAtBat(ResultType res, Player batter) {
            state.balls = 0;
            state.strikes = 0;
            
            string resName = res switch {
                ResultType.HomeRun => "ホームラン",
                ResultType.Triple => "スリーベース",
                ResultType.Double => "ツーベース",
                ResultType.Single => "ヒット",
                ResultType.Walk => "四球",
                ResultType.StrikeOut => "三振",
                _ => "アウト"
            };
            AddLog($"<b>{resName}！</b>");

            ProcessAtBatResult(res, batter);

            if (state.isBottom) homeBatterIdx = (homeBatterIdx + 1) % 9;
            else awayBatterIdx = (awayBatterIdx + 1) % 9;
        }

        void ProcessAtBatResult(ResultType res, Player batter) {
            int scored = 0;
            switch (res) {
                case ResultType.HomeRun:
                    scored = state.runners.Where(r => r != null).Count() + 1;
                    System.Array.Clear(state.runners, 0, 4);
                    break;
                case ResultType.Triple:
                    scored = AdvanceRunners(3, batter);
                    break;
                case ResultType.Double:
                    scored = AdvanceRunners(2, batter);
                    break;
                case ResultType.Single:
                case ResultType.Walk:
                    scored = AdvanceRunners(1, batter);
                    break;
                default:
                    state.outs++;
                    break;
            }

            if (scored > 0) {
                AddLog($"<color=orange>+{scored}点！</color>");
                if (state.isBottom) state.scoreHome += scored; else state.scoreAway += scored;
            }
            if (state.outs >= 3) NextInning();
        }

        void UpdateBullpen() {
            // 自チームと敵チームの控え投手の準備を進める
            foreach (var p in homeTeam.players) if (p.mainPos == Position.Pitcher && p.isWarmingUp) p.warmUpLevel = Mathf.Min(100, p.warmUpLevel + 5);
            foreach (var p in awayTeam.players) if (p.mainPos == Position.Pitcher && p.isWarmingUp) p.warmUpLevel = Mathf.Min(100, p.warmUpLevel + 5);
        }

        int AdvanceRunners(int bases, Player batter) {
            int scored = 0;
            for (int i = 3; i >= 1; i--) {
                if (state.runners[i] != null) {
                    if (i + bases >= 4) { scored++; state.runners[i] = null; }
                    else { state.runners[i + bases] = state.runners[i]; state.runners[i] = null; }
                }
            }
            state.runners[bases] = batter;
            return scored;
        }

        void NextInning() {
            state.outs = 0;
            System.Array.Clear(state.runners, 0, 4);
            AddLog("--- チェンジ ---");
            if (state.isBottom) {
                if (state.inning >= 9 && state.scoreHome != state.scoreAway) state.gameEnded = true;
                else if (state.inning >= 12) state.gameEnded = true;
                else { state.inning++; state.isBottom = false; }
            } else {
                if (state.inning >= 9 && state.scoreHome > state.scoreAway) state.gameEnded = true;
                else state.isBottom = true;
            }
            if (state.gameEnded) AddLog("<color=yellow>ゲームセット！</color>");
        }

        void AddLog(string msg) {
            if (textLog != null) textLog.text = msg + "\n" + textLog.text;
            Debug.Log(msg);
        }

        void UpdateUI() {
            if (textAwayScore) textAwayScore.text = state.scoreAway.ToString();
            if (textHomeScore) textHomeScore.text = state.scoreHome.ToString();
            if (textInning) textInning.text = $"{state.inning}回{(state.isBottom ? "裏" : "表")}";
            
            Player currentBatter = state.isBottom ? homeLineup[homeBatterIdx] : awayLineup[awayBatterIdx];
            Player currentPitcher = state.isBottom ? awayPitcher : homePitcher;

            if (textBatterInfo) {
                textBatterInfo.text = $"打者: {currentBatter.name} (ランク:{currentBatter.BattingRank})\n" +
                                      $"投手: {currentPitcher.name} (ランク:{currentPitcher.GetCurrentPitchingStats().velocity:0}km)\n" +
                                      $"カウント: <color=green>{state.balls}</color>B <color=yellow>{state.strikes}</color>S <color=red>{state.outs}</color>O\n" +
                                      $"スタミナ: {currentPitcher.currentStamina}/{currentPitcher.maxStamina}";
            }

            if (baseDots != null && baseDots.Length >= 3) {
                baseDots[0].color = state.runners[1] != null ? Color.red : Color.gray;
                baseDots[1].color = state.runners[2] != null ? Color.red : Color.gray;
                baseDots[2].color = state.runners[3] != null ? Color.red : Color.gray;
            }
        }
    }
}
