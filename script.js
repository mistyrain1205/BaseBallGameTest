const lastNames = ["佐藤", "鈴木", "高橋", "田中", "伊藤", "渡辺", "山本", "中村", "小林", "加藤", "吉田", "山田", "佐々木", "山口", "松本", "井上", "木村", "林", "斎藤", "清水", "山崎", "阿部", "森", "池田", "橋本", "山下", "石川", "中島", "前田", "藤田", "小川", "後藤", "岡田", "長谷川", "村上", "近藤", "石井", "斉藤", "坂本", "遠藤", "青木", "藤井", "西村", "福田", "太田", "三浦", "藤原", "岡本", "松田", "中川", "中野", "原田", "小野", "田村", "竹内", "金子", "和田", "中山", "石田", "上田", "森田", "小島", "柴田", "原", "宮崎", "酒井", "工藤", "横山", "安藤", "宮本", "内田", "高木", "安達", "谷口", "今井", "丸山", "小山", "高田", "河野", "藤本", "大塚", "村田", "武田", "上野", "杉山", "増田", "小島", "大西", "菅原", "大久保", "松尾", "久保", "佐野", "野村", "千葉", "市川", "古川", "島田", "渡部", "高野", "杉本", "菊地", "野口", "吉村", "小松", "新井", "石原", "松井", "水野", "岩崎", "桜井", "木下", "池田", "山内", "飯田", "西田", "本田", "菊池", "中田", "吉川", "福島", "河合", "平野", "西山", "安部", "森本", "矢野", "荒木", "馬場", "大城", "松島", "吉岡", "小沢", "飯塚", "北村", "深沢", "川口", "平井", "大山", "岩田", "寺田", "樋口", "大野", "中根", "水谷", "永井", "小宮", "成田", "中居", "内藤", "三宅", "浅野", "田口", "石河", "望月", "石坂", "柏木", "大石", "関", "川上", "村井", "植田", "小池", "白井", "岡", "金井", "栗原", "高山", "服部", "野中", "中谷", "岩井", "宮田", "榎本", "吉野", "三木", "石本", "秋山", "富田", "岸本", "松村", "堀", "松岡", "大橋", "河村", "石塚", "片山", "今村", "細川", "田辺", "内山", "白石", "大沢", "大谷", "荒井", "川崎", "北村", "浜田", "塚本", "本間", "西", "平岡", "長野", "安井", "小倉", "出口", "松原", "岡崎", "小栗", "武藤", "松下", "大関", "大島", "大滝", "小田", "根本", "矢島", "高島", "大内", "小西", "大村", "大川", "中里", "中西", "中島", "大竹", "大坪", "大原", "大庭", "大類", "大矢", "大和田", "大平", "大里", "大野", "大隅", "大場", "大槻", "大久保", "大江", "大貫", "大沼", "大畑", "大林", "大町", "大森", "大浦", "大友", "大木", "大河原", "大金", "大倉", "大滝", "大貫", "大西", "大場", "大林", "大村", "大森", "大山", "大和", "小口", "小田", "小名", "小野", "小川", "小倉", "小沢", "小島", "小林", "小松", "小山", "小池", "小泉", "小坂", "小林", "小宮", "小森", "小柳", "小谷", "小倉", "小泉", "小田", "小野", "小泉", "小川", "小松", "小山", "小野", "小原"];
const firstNames = ["健太", "翔", "裕也", "直樹", "和也", "拓也", "大輔", "亮", "俊介", "勇気", "翔太", "拓真", "裕太", "健太郎", "慎太郎", "大輝", "海人", "蓮", "湊", "悠真", "颯真", "陽向", "大和", "悠人", "陽翔", "陽太", "樹", "駿", "翼", "輝", "誠", "剛", "哲也", "浩二", "伸一", "雅弘", "隆", "正弘", "敏之", "裕司", "貴之", "英樹", "博", "勝", "修", "充", "宏", "晃", "明", "聡", "徹", "淳", "隆之", "克典", "健", "剛志", "康夫", "一輝", "龍二", "和樹", "聖矢", "光希", "大河", "太陽", "陸", "空", "海", "大雅", "龍一", "銀次", "鉄平", "剛士", "大介", "康介", "京介", "亮介", "洋介", "俊介", "啓介", "佑介", "和馬", "竜馬", "勝馬", "悠馬", "拓馬", "大馬", "翔馬", "勇馬", "颯馬", "星馬", "優", "隼", "誠", "忍", "進", "力", "勝", "守", "等", "実", "光", "輝", "耀", "晃", "昭", "彰", "顕", "晶", "章", "晃", "信", "義", "忠", "孝", "智", "仁", "勇", "礼", "廉", "謙", "幸助", "喜一", "善治", "鉄雄", "武蔵", "雷蔵", "源次郎", "勘助", "半蔵", "慶次", "左近", "右近", "小太郎", "五郎", "六郎", "七郎", "八郎", "九郎", "十郎", "太郎", "次郎", "三郎", "四郎", "五郎", "一郎", "健司", "浩司", "慎司", "正司", "英司", "貴司", "雄司", "啓司", "勝司", "幸司", "隆司", "敏司", "宏司", "真司", "竜司", "健一", "浩一", "一真", "一磨", "一毅", "一樹", "一也", "一馬", "一輝", "一平", "健二", "浩二", "二郎", "二三男", "修二", "竜二", "研二", "憲二", "慎二", "賢二", "健三", "浩三", "三郎", "三四郎", "省三", "晋三", "謙三", "賢三", "陽三", "龍三", "大樹", "直也", "哲夫", "秀樹", "和雄", "博之", "裕介", "良太", "正樹", "康弘", "一夫", "茂樹", "隆弘", "徳夫", "達也", "和久", "嘉男", "英明", "博文", "俊也", "正一", "正二", "正三", "正四", "正五", "正六", "正七", "正八", "正九", "正十", "伸也", "純一", "雅之", "誠一", "健吾", "浩一", "竜也", "大輔", "慎一", "晃司", "幸弘", "克己", "雅樹", "泰弘", "英一", "昌宏", "和夫", "博明", "裕章", "秀信", "雅之", "光宏", "裕信", "康昭", "正信", "貴広", "和彦", "利道", "秀也", "英紀", "和幸", "和正", "和明", "和人", "和也", "和真", "和磨", "和毅", "和樹", "和馬", "智也", "智広", "智之", "智明", "智和", "智樹", "智真", "智宏", "智一", "智二", "和秀", "和宏", "和広", "和弘", "和裕", "和英", "和明", "和也", "和樹", "和正", "明夫", "明弘", "明広", "明宏", "明裕", "明英", "明和", "明也", "明樹", "明正", "清", "潔", "廉", "澄", "純", "真", "実", "誠", "正", "直", "勇気", "豪", "剛", "強", "猛", "毅", "武", "士", "志", "勇", "海斗", "陸斗", "空斗", "大斗", "翔斗", "悠斗", "陽斗", "颯斗", "湊斗", "蓮斗", "朝日", "夕日", "明日", "輝日", "春日", "夏日", "秋日", "冬日", "晴日", "吉日", "大和", "日本", "飛鳥", "奈良", "平安", "鎌倉", "室町", "安土", "桃山", "江戸", "明治", "大正", "昭和", "平成", "令和", "将来", "未来", "過去", "現在", "希望", "大地", "天空", "海洋", "深海", "宇宙", "銀河", "恒星", "惑星", "流星", "彗星", "大輝", "陽輝", "月輝", "星輝", "天輝", "光輝", "明輝", "正輝", "直輝", "英輝", "和真", "悠真", "遥真", "陽真", "颯真", "蓮真", "翔真", "匠真", "亮真", "拓真", "大我", "真我", "悠我", "陽我", "凌我", "大雅", "優雅", "和雅", "風雅", "光雅", "大介", "俊介", "亮介", "圭介", "康介", "洋介", "佑介", "裕介", "駿介", "啓介", "健太", "翔太", "陽太", "颯太", "悠太", "湊太", "慎太", "竜太", "涼太", "勘太", "一心", "一心", "志心", "誠心", "正心", "真心", "和心", "光心", "悠心", "陽心", "大河", "清河", "銀河", "悠河", "星河", "光河", "天河", "翔河", "颯河", "湊河", "琥珀", "翡翠", "珊瑚", "瑠璃", "瑪瑙", "水晶", "真珠", "金剛", "白金", "黄金", "蒼空", "美空", "星空", "碧空", "陽空", "悠空", "翔空", "颯空", "湊空", "大空", "大和", "和人", "和真", "和磨", "和毅", "和樹", "和也", "和馬", "和輝", "和平", "健吾", "慎吾", "真吾", "大吾", "啓吾", "駿吾", "竜吾", "翔吾", "誠吾", "正吾", "大樹", "直樹", "和樹", "真樹", "正樹", "英樹", "浩樹", "智樹", "悠樹", "光樹", "大輔", "亮輔", "俊輔", "圭輔", "庸輔", "祐輔", "康輔", "啓輔", "裕輔", "駿輔", "大輝", "光輝", "陽輝", "瑞輝", "拓輝", "一輝", "和輝", "直輝", "嘉輝", "昂輝"];

// 固定チームデータ
const TEAM_DATA = {
    0: { // 東京パイレーツ
        pitchers: [
            { name: "海堂 尊", velocity: 158, control: 92, stamina: 85, rank: "S" },
            { name: "佐藤 寿也", velocity: 145, control: 78, stamina: 65, rank: "A" }
        ],
        fielders: [
            { name: "イチロー", pos: "右", meet: 95, power: 75, speed: 90 },
            { name: "松井 秀喜", pos: "中", meet: 85, power: 95, speed: 60 }
        ]
    },
    1: { // 大阪タイガース
        pitchers: [
            { name: "ダルビッシュ", velocity: 156, control: 88, stamina: 82, rank: "S" }
        ],
        fielders: [
            { name: "バース", pos: "一", meet: 92, power: 98, speed: 40 },
            { name: "岡田 彰布", pos: "二", meet: 82, power: 85, speed: 55 }
        ]
    }
};

function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function rand(max, seed = null) {
    if (seed !== null) return Math.floor(seededRandom(seed) * max);
    return Math.floor(Math.random() * max);
}

// デバッグ用：画面上にエラーを表示
window.onerror = function (msg, url, lineNo, columnNo, error) {
    const log = document.getElementById('game-log');
    if (log) {
        const entry = document.createElement('div');
        entry.style.color = "#ff4444";
        entry.style.background = "rgba(0,0,0,0.8)";
        entry.style.padding = "10px";
        entry.style.border = "1px solid red";
        entry.innerHTML = `<strong>JS Error:</strong> ${msg} (Line: ${lineNo})`;
        log.prepend(entry);
    }
    return false;
};

class Player {
    constructor(id, forcedPos = null, fixedData = null) {
        this.id = id;
        const seed = id * 123.456;
        this.name = fixedData?.name || (lastNames[rand(lastNames.length, seed)] + " " + firstNames[rand(firstNames.length, seed + 1)]);
        this.mainPos = fixedData?.pos || forcedPos || ["投", "捕", "一", "二", "三", "遊", "左", "中", "右"][rand(9, seed + 2)];

        if (this.mainPos === "投") {
            this.velocity = fixedData?.velocity || (130 + rand(30, seed + 5));
            this.control = fixedData?.control || (40 + rand(40, seed + 4));
            this.maxStamina = fixedData?.stamina || (40 + rand(50, seed + 3));
            this.currentStamina = this.maxStamina;
            this.warmUpLevel = 0;
            this.isWarmingUp = false;
            this.stats = { meet: 20, power: 20, speed: 30, eye: 30, bunt: 50, defense: 50 };
        } else {
            this.stats = {
                meet: fixedData?.meet || (30 + rand(40, seed + 6)),
                power: fixedData?.power || (30 + rand(40, seed + 7)),
                speed: fixedData?.speed || (30 + rand(50, seed + 8)),
                eye: fixedData?.eye || (30 + rand(50, seed + 9)),
                bunt: fixedData?.bunt || (30 + rand(50, seed + 10)),
                defense: 40 + rand(40, seed + 11),
                shoulder: 40 + rand(40, seed + 12),
                throwing: 40 + rand(40, seed + 13)
            };
        }
    }
    get overallRank() {
        let score = (this.mainPos === "投") ?
            (this.maxStamina * 0.4 + this.control * 0.3 + (this.velocity - 120) * 0.3) :
            (this.stats.meet + this.stats.power + this.stats.eye) / 3;
        if (score > 60) return "S"; if (score > 50) return "A"; if (score > 40) return "B"; if (score > 30) return "C"; return "D";
    }
    get colorClass() {
        if (this.mainPos === "投") return "pos-p"; if (this.mainPos === "捕") return "pos-c";
        if (["一", "二", "三", "遊"].includes(this.mainPos)) return "pos-i"; return "pos-o";
    }
    getPitchingStats() {
        let multiplier = 1.0;
        if (this.warmUpLevel < 100) multiplier *= 0.7 + (this.warmUpLevel * 0.003);
        if (this.currentStamina <= 10) multiplier *= 0.8;
        return { vel: this.velocity * multiplier, ctl: this.control * multiplier };
    }
}

const AtBatResult = { Single: 'ヒット', Double: 'ツーベース', Triple: 'スリーベース', HR: 'ホームラン', BB: 'フォアボール', K: '三振', GroundOut: 'ゴロ', FlyOut: 'フライ', Error: 'エラー', DeadBall: 'デッドボール' };

class Team {
    constructor(id, name, city, colorClass) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.colorClass = colorClass; // CSS class for themes
        this.players = this.generateRoster();
    }

    generateRoster() {
        const roster = [];
        const teamData = TEAM_DATA[this.id] || { pitchers: [], fielders: [] };

        // 投手25名
        for (let i = 0; i < 25; i++) {
            const fixed = teamData.pitchers[i] || null;
            roster.push(new Player(this.id * 1000 + i, "投", fixed));
        }
        // 野手35名
        const positions = ["捕", "一", "二", "三", "遊", "左", "中", "右"];
        for (let i = 0; i < 35; i++) {
            const fixed = teamData.fielders[i] || null;
            const pos = fixed?.pos || positions[i % positions.length];
            roster.push(new Player(this.id * 1000 + 25 + i, pos, fixed));
        }
        return roster;
    }
}

class GameState {
    constructor() {
        this.scoreHome = 0; this.scoreAway = 0; this.inning = 1; this.isBottom = false;
        this.balls = 0; this.strikes = 0;
        this.outs = 0; this.runners = [null, null, null, null];
        this.batterIdx = 0; this.cpuBatterIdx = 0;
        this.pitcher = null; this.cpuPitcher = null;
        this.bench = []; this.cpuBench = [];
        this.runsThisInning = 0;
        this.currentCommand = { Pitcher: 'Auto', Batter: 'Auto' };
        this.gameEnded = false;
    }

    reset() {
        this.scoreHome = 0; this.scoreAway = 0; this.inning = 1; this.isBottom = false;
        this.balls = 0; this.strikes = 0; this.outs = 0;
        this.runners = [null, null, null, null];
        this.runsThisInning = 0;
        this.currentCommand = { Pitcher: 'Auto', Batter: 'Auto' };
        this.gameEnded = false;
        this.updateUI();
        this.addLog("--- プレイボール！ ---", "event");
    }

    executeOnePitch(batter, pitcher, pCmd, bCmd) {
        const stats = pitcher.getPitchingStats();
        pitcher.currentStamina -= 1;

        let activeCtl = stats.ctl;
        let strikeRate = 50 + (activeCtl * 0.3);

        if (pCmd === 'Kiwadoi') {
            strikeRate -= 20;
            activeCtl += 15;
        } else if (pCmd === 'Strike') {
            strikeRate += 25;
            activeCtl -= 15;
        }

        let isStrikeZone = (Math.random() * 100) < strikeRate;
        let doesSwing = false;

        if (isStrikeZone) {
            let swingProb = 90;
            if (bCmd === 'Look') swingProb = 40;
            doesSwing = (Math.random() * 100) < swingProb;
        } else {
            let swingProb = Math.max(5, 50 - (batter.stats.eye * 0.5));
            if (bCmd === 'Aggressive') swingProb += 20;
            if (bCmd === 'Look') swingProb -= 20;
            doesSwing = (Math.random() * 100) < swingProb;
        }

        let isBunt = (bCmd === 'Bunt');
        if (isBunt) {
            // バント判定 (ミートとバント適性に依存)
            let buntSuccessBase = 30 + (batter.stats.bunt * 0.5) + (batter.stats.meet * 0.2) - (pitcher.stats.velocity * 0.1);
            let roll = Math.random() * 100;

            if (roll < buntSuccessBase) {
                return 'InPlay'; // 成功（フェアグラウンドへ）
            } else if (roll < buntSuccessBase + 20) {
                // ファウル
                if (this.strikes === 2) return 'BuntOut'; // スリーバント失敗
                return 'Foul';
            } else {
                // 空振りまたは見逃し
                return isStrikeZone ? 'SwingingStrike' : 'Ball';
            }
        }

        if (bCmd === 'Bunt') doesSwing = true; // (Legacy line, covered above but keep if needed for structure)
        if (bCmd === 'Steal') {
            const activeRunners = this.runners.map((r, i) => r ? i : null).filter(i => i !== null && i > 0);
            if (activeRunners.length > 0) {
                const base = Math.max(...activeRunners);
                const runner = this.runners[base];
                if (base < 3) {
                    const stealProb = 20 + runner.stats.speed * 0.5 - pitcher.control * 0.2;
                    if (Math.random() * 100 < stealProb) {
                        this.addLog(`<strong>${runner.name}</strong>: <strong>盗塁成功！</strong>`, "event");
                        this.runners[base + 1] = runner;
                        this.runners[base] = null;
                    } else {
                        this.addLog(`<strong>${runner.name}</strong>: <strong>盗塁失敗！</strong>`, "out");
                        this.runners[base] = null;
                        this.outs++;
                    }
                    if (this.outs >= 3) return 'StealOut'; // Special result to handle inning end
                }
            }
        }

        if (!doesSwing) {
            return isStrikeZone ? 'CalledStrike' : 'Ball';
        } else {
            // Rebalanced contact rate: floor it at 60% and add meet influence
            let contactRate = 60 + (batter.stats.meet * 0.35) + (activeCtl * 0.05);
            if (pCmd === 'Strike') contactRate += 5;
            if (bCmd === 'Aggressive') contactRate -= 15;
            if (bCmd === 'Bunt') contactRate = 95;

            if ((Math.random() * 100) > contactRate) return 'SwingingStrike';

            // Rebalanced InPlay ratio: more balls in play, fewer fouls
            if (Math.random() < 0.65) return 'InPlay';
            return 'Foul';
        }
    }

    processPitchResult(res, batter, pitcher, fielders, bCmd = 'Auto') {
        const safeBCmd = bCmd || 'Auto';
        let msg = `<strong>${pitcher.name}</strong> vs <strong>${batter.name}</strong>: `;
        switch (res) {
            case 'Ball':
                this.balls++;
                this.addLog(msg + "ボール", "ball");
                break;
            case 'CalledStrike':
                this.strikes++;
                this.addLog(msg + "見逃しストライク", "strike");
                break;
            case 'SwingingStrike':
                this.strikes++;
                this.addLog(msg + "空振りストライク", "strike");
                break;
            case 'Foul':
                if (this.strikes < 2) this.strikes++;
                this.addLog(msg + "ファウル", "strike");
                break;
            case 'InPlay':
                this.addLog(msg + (safeBCmd === 'Bunt' ? "バントした！" : "打った！"), "hit");
                this.resolveInPlay(batter, pitcher, fielders, safeBCmd === 'Bunt');
                return; // At-bat ends in resolveInPlay
            case 'StealOut':
                this.nextHalfInning();
                return;
            case 'BuntOut':
                this.addLog(msg + "<span style='color:var(--error-red)'>スリーバント失敗！</span>", "out");
                this.completeAtBat('StrikeOut', batter, "2ストライクからのバントがファウルとなりました。");
                return;
        }

        if (this.balls >= 4) {
            this.addLog("<span style='color:orange'>フォアボール！</span>", "event");
            this.completeAtBat('Walk', batter);
        } else if (this.strikes >= 3) {
            this.addLog("<span style='color:cyan'>三振！</span>", "out");
            this.completeAtBat('StrikeOut', batter);
        }
        this.updateUI();
    }

    resolveInPlay(batter, pitcher, fielders, isBunt = false) {
        // 0. 打球方向の決定
        const posProb = isBunt ? [10, 15, 15, 5, 20, 5, 0, 0, 0] : [5, 2, 10, 15, 10, 15, 13, 15, 15];
        const posNames = ["ピッチャー", "キャッチャー", "ファースト", "セカンド", "サード", "ショート", "レフト", "センター", "ライト"];

        let roll = Math.random() * posProb.reduce((a, b) => a + b, 0);
        let currentSum = 0;
        let targetPosIndex = 0;
        for (let i = 0; i < posProb.length; i++) {
            currentSum += posProb[i];
            if (roll < currentSum) { targetPosIndex = i; break; }
        }

        const targetName = posNames[targetPosIndex];
        const isInfield = targetPosIndex <= 5;
        const fielder = fielders[targetPosIndex] || { name: targetName, stats: { defense: 50, shoulder: 50, throwing: 50 } };
        const fStats = fielder.stats || { defense: 50, shoulder: 50, throwing: 50 };

        // 1. 打球の「深さ」を決定 (バントは極めて浅い)
        let hitDepth = isBunt ? (Math.random() * 15 + 5) : (Math.floor(Math.random() * 70) + 20 + (batter.stats.power / 10));
        hitDepth = Math.min(100, Math.max(0, hitDepth));

        if (isBunt) {
            this.addLog(`<strong>${targetName}</strong> の前に転がした！ (バント)`, "event");
        } else {
            const depthText = hitDepth < 40 ? "浅い" : (hitDepth < 70 ? "定位置の" : "深い");
            this.addLog(`打球は ${!isInfield ? depthText + " " : ""}<strong>${targetName}</strong> への当たり！`, "event");
        }

        // ホームランの事前判定
        let hrProb = isBunt ? 0 : (2 + (batter.stats.power * 0.05));
        if (!isInfield && hitDepth > 85 && (Math.random() * 100 < hrProb)) {
            let desc = `打球は大きな放物線を描いて${targetName}外野席へ！`;
            this.completeAtBat('HomeRun', batter, desc);
            return;
        }

        // バント独自の成功判定 (野手の処理)
        if (isBunt) {
            let buntQuality = (batter.stats.bunt * 0.6) + (Math.random() * 40);
            let defenseReact = (fStats.defense * 0.7) + (Math.random() * 30);
            const hasRunners = this.runners.slice(1).some(r => r !== null);

            if (buntQuality > defenseReact + 10) {
                // 絶妙なバント
                if (!hasRunners) {
                    this.completeAtBat('Single', batter, "絶妙なコースに転がった！ セーフティバント成功！", fielder, targetPosIndex, hitDepth);
                } else {
                    this.addLog("ランナーが進塁！ 送りバント成功！", "event");
                    this.advanceRunners(1, batter);
                    this.outs++;
                    this.completeAtBat('Out', batter, "自らはアウトになりました。");
                }
                return;
            } else if (buntQuality < defenseReact - 10) {
                if (hasRunners) {
                    this.addLog("野手が素早く処理！ 2塁送球... アウト！", "out");
                    this.outs++;
                }
                this.completeAtBat('Out', batter, "ファーストへ送球されてアウト。");
                return;
            }
        }

        // 2. 捕球判定 (Thresholds: Center is harder)
        let defenseThreshold = 0;
        if (targetPosIndex === 7) defenseThreshold = 60; // センター
        else if (!isInfield) defenseThreshold = 40; // 両翼

        let hitQuality = (batter.stats.meet * 0.3) + (batter.stats.power * 0.3) + (Math.random() * 50);
        let catchScore = (fStats.defense - defenseThreshold) * 0.8 + (Math.random() * 30);

        // エラー判定
        let catchErrorRate = Math.max(0.5, 3.0 + (80 - fStats.defense) * 0.1);
        if (Math.random() * 100 < catchErrorRate) {
            this.completeAtBat('Error', batter, `あっと！ ${targetName} がファンブル！ エラーで出塁！`, fielder);
            return;
        }

        if (hitQuality > catchScore) {
            // ヒット
            let desc = (hitDepth > 70 && !isInfield) ? `${targetName}の頭上を越えた！ 長打コース！` : `鋭い打球が ${targetName} の横を抜けた！ ヒット！`;
            let hitType = 'Single';
            if (!isInfield) {
                if (hitDepth > 70 && batter.stats.speed > 60) hitType = 'Double';
                else if (hitDepth > 90 && batter.stats.speed > 80) hitType = 'Triple';
            }
            this.completeAtBat(hitType, batter, desc, fielder, targetPosIndex, hitDepth);
            return;
        }

        // 3. 送球判定 (内野のみ)
        if (!isInfield) {
            let desc = (catchScore - hitQuality < 15) ? `背走して... ${targetName} がナイスキャッチ！` : `${targetName} が落下点に入ってアウト。`;
            this.addLog(`<em>${desc}</em>`, "event");
            this.outs++;

            // タッチアップ判定 (Position and Depth modifiers)
            if (this.runners[3] && this.outs < 3) {
                const tagUpRes = this.checkTagUp(this.runners[3], fielder, hitDepth, targetPosIndex);
                if (tagUpRes === 1) { // セーフ
                    if (this.isBottom) this.scoreHome++; else this.scoreAway++;
                    this.runners[3] = null;
                    this.triggerScoreEffect(1);
                    this.addLog(`<span style="color:var(--accent-gold)">+1点！ (タッチアップ)</span>`, "event");
                } else if (tagUpRes === 2) { // アウト
                    this.runners[3] = null;
                    this.outs++;
                }
            }
            this.completeAtBat('Out', batter, "", fielder);
            return;
        }

        this.addLog(`${targetName} が捕って一塁へ送球！`, "event");

        // 悪送球判定
        let throwErrorProb = Math.max(0.5, 5.0 + (70 - fStats.throwing) * 0.2);
        if (Math.random() * 100 < throwErrorProb) {
            this.completeAtBat('Error', batter, "あっと！ 送球が逸れた！ ファースト取れない！ エラー！！", fielder);
            return;
        }

        let runnerScore = batter.stats.speed + (Math.random() * 30);
        let throwScore = 40 + (fStats.shoulder * 0.6) + ((catchScore - hitQuality) * 0.3) + (Math.random() * 20);

        if (targetName === "ショート" || targetName === "サード") {
            runnerScore += 10;
            throwScore += (fStats.shoulder * 0.2);
        }

        if (throwScore > runnerScore) {
            let desc = (throwScore - runnerScore < 15) ? "際どいタイミング... アウト！ ナイスプレー！" : "余裕を持ってアウト。";
            this.completeAtBat('Out', batter, desc, fielder);
        } else {
            let desc = (runnerScore - throwScore < 15) ? "間一髪セーフ！ 足が勝った！ 内野安打！" : "深い当たり！ 投げられない！ 内野安打。";
            this.completeAtBat('Single', batter, desc, fielder);
        }
    }

    checkTagUp(runner, fielder, flyDepth, posIndex) {
        this.addLog(`>> 3塁ランナー <strong>${runner.name}</strong>、タッチアップの構え！`, "event");

        // ポジション補正 (6=レフト, 7=センター, 8=ライト)
        let shoulderWeight = 0;
        if (posIndex === 6) shoulderWeight = -10; // 近い
        else if (posIndex === 8) shoulderWeight = 20; // 遠い

        if (flyDepth < 30) {
            this.addLog(">> 浅いフライだ。ランナー動けない！", "event");
            return 0;
        }
        if ((flyDepth + runner.stats.speed * 0.5) < 60) {
            this.addLog(">> 無理はしない。3塁に留まる。", "event");
            return 0;
        }
        this.addLog(">> スタートを切った！ 本塁へ突っ込む！", "event");

        let runnerScore = flyDepth + runner.stats.speed + (Math.random() * 20);
        let throwMod = (fielder.stats.throwing > 60) ? 0 : -20;
        let defenseScore = fielder.stats.shoulder + 50 + throwMod - shoulderWeight + (Math.random() * 20);

        if (runnerScore > defenseScore) {
            this.addLog(runnerScore - defenseScore < 15 ? ">> 際どいタイミング... セーフ！！ ホームイン！" : ">> 送球間に合わない！ 余裕でセーフ！", "event");
            return 1;
        } else {
            if (Math.random() * 100 > (fielder.stats.throwing + 10)) {
                this.addLog(">> あっと！ 返球が逸れた！ その間にホームイン！", "event");
                return 1;
            }
            this.addLog(">> ストライク送球！ タッチアウト！！ 補殺完成！", "out");
            return 2;
        }
    }

    checkExtraBase(runner, fielder, hitType, posIndex = -1, hitDepth = 50) {
        let difficulty = 50, message = "";

        // ポジション補正 (6=レフト, 7=センター, 8=ライト)
        let shoulderWeight = 0;
        if (posIndex === 6) shoulderWeight = -10; // 3塁に刺しにくい（近い）
        else if (posIndex === 8) shoulderWeight = 20; // 3塁に刺しやすい（遠い）

        if (hitType === "1stTo3rd") {
            message = "1塁ランナー、2塁を回って3塁へ向かう！";
            difficulty = 60 + shoulderWeight;
        }
        else if (hitType === "ScoreFrom1st") {
            message = "1塁ランナー、一気にホームを狙う！！";
            difficulty = 80;
        }
        else if (hitType === "HustleDouble") {
            message = `打った <strong>${runner.name}</strong>、1塁を蹴って2塁へ！`;
            difficulty = 50;
        }

        // 深さによる難易度軽減
        let bonusByDepth = (hitDepth - 50) / 2;
        difficulty -= bonusByDepth;

        let riskAssessment = runner.stats.speed - (fielder.stats.shoulder / 2);
        if (riskAssessment + (Math.random() * 40) < difficulty / 2) return 0;

        this.addLog(`>> ${message}`, "event");
        let runPoint = runner.stats.speed + (Math.random() * 30) - difficulty;
        let defPoint = fielder.stats.shoulder + (fielder.stats.throwing / 4) + (Math.random() * 20);

        if (runPoint > defPoint) {
            this.addLog(">> 滑り込んだ... セーフ！！！ ナイスラン！", "event");
            return 1;
        } else {
            if (Math.random() * 100 > (fielder.stats.throwing + 5)) {
                this.addLog(">> 返球が乱れた！ セーフ！", "event");
                return 1;
            }
            this.addLog(">> 返球が速い！ タッチアウト！ 欲張りすぎた...", "out");
            return 2;
        }
    }

    determineHitType(speed) {
        let subRoll = Math.random() * 100;
        let prob3B = speed * 0.05;
        let prob2B = 10.0 + (speed * 0.1);
        if (subRoll < prob3B) return 'Triple';
        if (subRoll < prob3B + prob2B) return 'Double';
        return 'Single';
    }

    completeAtBat(res, batter, detail = "", fielder = null, posIndex = -1, hitDepth = 50) {
        this.balls = 0;
        this.strikes = 0;
        let scored = 0;

        if (detail) this.addLog(`<em>${detail}</em>`, "event");

        switch (res) {
            case 'HomeRun':
                scored = this.runners.filter(r => r !== null).length + 1;
                this.runners = [null, null, null, null];
                this.addLog("<strong>ホームラン！！！</strong>", "hit");
                break;
            case 'Triple':
                scored = this.advanceRunners(3, batter, fielder, posIndex, hitDepth);
                this.addLog("<strong>スリーベース！！</strong>", "hit");
                break;
            case 'Double':
                scored = this.advanceRunners(2, batter, fielder, posIndex, hitDepth);
                this.addLog("<strong>ツーベース！</strong>", "hit");
                break;
            case 'Single':
                scored = this.advanceRunners(1, batter, fielder, posIndex, hitDepth);
                this.addLog("ヒット！", "hit");
                break;
            case 'Walk':
                scored = this.forceAdvance(batter);
                this.addLog("フォアボールで出塁。", "event");
                break;
            case 'Error':
                scored = this.advanceRunners(1, batter, fielder, posIndex, hitDepth);
                break;
            case 'Out':
            case 'StrikeOut':
                if (res !== 'Out' || this.outs < 3) this.outs++;
                break;
        }

        if (scored > 0) {
            if (this.isBottom) this.scoreHome += scored;
            else this.scoreAway += scored;
            this.triggerScoreEffect(scored);
            this.addLog(`<span style="color:var(--accent-gold)">+${scored}点！</span>`, "event");
        }

        // Check for 3 outs or walk-off
        if (this.inning >= 9 && this.isBottom && this.scoreHome > this.scoreAway) {
            this.gameEnded = true;
            this.updateUI();
            this.endGame();
            return;
        }

        if (this.outs >= 3) {
            this.nextHalfInning();
        } else {
            if (this.isBottom) this.batterIdx = (this.batterIdx + 1) % 9;
            else this.cpuBatterIdx = (this.cpuBatterIdx + 1) % 9;
        }

        // Reset commands to Auto for next batter
        this.currentCommand = { Pitcher: 'Auto', Batter: 'Auto' };
        this.updateUI();
    }

    advanceRunners(bases, batter, fielder = null, posIndex = -1, hitDepth = 50) {
        let scored = 0;
        const newRunners = [null, null, null, null];
        const isHit = !!fielder;

        // 打者走者の進塁
        let batterFinalPos = bases;
        if (isHit && bases === 1 && Math.random() < 0.2) {
            const hustleRes = this.checkExtraBase(batter, fielder, "HustleDouble", posIndex, hitDepth);
            if (hustleRes === 1) batterFinalPos = 2;
            else if (hustleRes === 2) { this.outs++; batterFinalPos = 0; }
        }

        for (let i = 3; i >= 1; i--) {
            if (this.runners[i]) {
                let currentRunner = this.runners[i];
                let finalPos = i + bases;

                // 積極走塁判定 (1塁から3塁へ、2塁または1塁からホームへなど)
                if (isHit && this.outs < 3) {
                    if (i === 1 && bases === 1) { // 1st to 3rd?
                        const res = this.checkExtraBase(currentRunner, fielder, "1stTo3rd", posIndex, hitDepth);
                        if (res === 1) finalPos = 3;
                        else if (res === 2) { this.outs++; finalPos = 0; }
                    } else if (i === 1 && bases === 2) { // From 1st to Home?
                        const res = this.checkExtraBase(currentRunner, fielder, "ScoreFrom1st", posIndex, hitDepth);
                        if (res === 1) finalPos = 4;
                        else if (res === 2) { this.outs++; finalPos = 0; }
                    }
                }

                if (finalPos >= 4) { if (finalPos > 0) scored++; }
                else if (finalPos > 0) newRunners[finalPos] = currentRunner;
            }
        }
        if (batterFinalPos > 0 && batterFinalPos < 4) newRunners[batterFinalPos] = batter;
        else if (batterFinalPos >= 4) scored++;

        this.runners = newRunners;
        return scored;
    }

    forceAdvance(batter) {
        let scored = 0;
        if (this.runners[1]) {
            if (this.runners[2]) {
                if (this.runners[3]) scored++;
                this.runners[3] = this.runners[2];
            }
            this.runners[2] = this.runners[1];
        }
        this.runners[1] = batter;
        return scored;
    }

    updateBullpen() {
        [...this.bench, ...this.cpuBench].forEach(p => {
            if (p && p.isWarmingUp) p.warmUpLevel = Math.min(100, p.warmUpLevel + 5);
        });
    }

    resolvePickoff(pitcher) {
        const activeRunners = this.runners.map((r, i) => r ? i : null).filter(i => i !== null && i > 0);
        if (activeRunners.length === 0) {
            this.addLog(`<strong>${pitcher.name}</strong>: 牽制の構えを見せましたが、ランナーはいません。`, "event");
            return;
        }

        // ランダムにベースを選択
        const base = activeRunners[Math.floor(Math.random() * activeRunners.length)];
        const runner = this.runners[base];
        const r = Math.random() * 100;

        let msg = `<strong>${pitcher.name}</strong>が${base}塁へ牽制！ `;

        if (r < 2) { // 2% 成功
            this.addLog(msg + `<span style="color:cyan">タッチアウト！</span>`, "out");
            this.runners[base] = null;
            this.outs++;
        } else if (r > 98) { // 2% 悪送球
            this.addLog(msg + `<span style="color:var(--error-red)">悪送球！！ランナー進塁！</span>`, "event");
            this.advanceRunners(1, null);
        } else { // 96% 戻る
            this.addLog(msg + "セーフ。", "event");
        }

        if (this.outs >= 3) {
            this.nextHalfInning();
        }
        this.updateUI();
    }

    nextHalfInning() {
        this.addLog(`<div style="background:#1e293b; padding:4px 8px; border-radius:4px; text-align:center;">--- ${this.inning}回${this.isBottom ? '裏' : '表'} 終了 ---</div>`, "event");

        if (this.inning === 9 && !this.isBottom && this.scoreHome > this.scoreAway) {
            this.endGame(); return;
        }

        if (this.isBottom) {
            if (this.inning >= 9 && this.scoreHome !== this.scoreAway) { this.endGame(); return; }
            if (this.inning === 12) { this.endGame(); return; }
        }

        this.outs = 0; this.balls = 0; this.strikes = 0;
        this.runners = [null, null, null, null];
        if (this.isBottom) { this.inning++; this.isBottom = false; } else { this.isBottom = true; }
        this.updateUI();
    }

    endGame() {
        this.gameEnded = true;
        let resultMsg = this.scoreHome === this.scoreAway ? "引き分け" : `終了！ ${this.scoreAway} - ${this.scoreHome}`;
        this.addLog(`<div style="font-size:1.2rem; color:var(--accent-gold); text-align:center;"><strong>${resultMsg}</strong></div>`, "event");
    }

    addLog(msg, type = "") {
        const log = document.getElementById('game-log');
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        if (type === "hit") entry.classList.add('hit');
        else if (type === "out") entry.classList.add('out');
        else if (type === "event") entry.classList.add('event');
        entry.innerHTML = msg;
        log.prepend(entry);
        log.scrollTop = 0;
    }

    updateUI() {
        document.getElementById('score-away').textContent = this.scoreAway;
        document.getElementById('score-home').textContent = this.scoreHome;
        document.getElementById('inning-text').textContent = `${this.inning}回${this.isBottom ? '裏' : '表'}`;

        const outsC = document.getElementById('outs-container');
        outsC.innerHTML = `
            <div class="sbo-container">
                <div class="sbo-row"><span class="sbo-label">B</span><div class="sbo-dots">
                    <div class="dot b ${this.balls > 0 ? 'active' : ''}"></div>
                    <div class="dot b ${this.balls > 1 ? 'active' : ''}"></div>
                    <div class="dot b ${this.balls > 2 ? 'active' : ''}"></div>
                </div></div>
                <div class="sbo-row"><span class="sbo-label">S</span><div class="sbo-dots">
                    <div class="dot s ${this.strikes > 0 ? 'active' : ''}"></div>
                    <div class="dot s ${this.strikes > 1 ? 'active' : ''}"></div>
                </div></div>
                <div class="sbo-row"><span class="sbo-label">O</span><div class="sbo-dots">
                    <div class="dot o ${this.outs > 0 ? 'active' : ''}"></div>
                    <div class="dot o ${this.outs > 1 ? 'active' : ''}"></div>
                </div></div>
            </div>
        `;

        for (let i = 1; i <= 3; i++) {
            const rContainer = document.getElementById(`runner-${i}-container`);
            const rName = document.getElementById(`runner-${i}-name`);
            if (this.runners[i]) {
                rContainer.classList.add('active');
                rName.textContent = this.runners[i].name;
            } else {
                rContainer.classList.remove('active');
            }
        }

        // Update pitcher/batter info in footer
        const isB = this.isBottom;
        // BaseballSimulation class handles the actual updateBatterDisplay, but GameState needs to provide data
    }

    triggerScoreEffect(val) {
        const effect = document.getElementById('score-effect');
        effect.textContent = `+${val} RUNS!`;
        effect.classList.add('show');
        setTimeout(() => effect.classList.remove('show'), 1500);
    }
}

class BaseballSimulation {
    constructor() {
        this.state = new GameState();
        this.teams = [
            new Team(0, "東京パイレーツ", "東京", "team-red"),
            new Team(1, "大阪タイガース", "大阪", "team-yellow"),
            new Team(2, "名古屋ドラゴンズ", "名古屋", "team-blue"),
            new Team(3, "福岡ホークス", "福岡", "team-green"),
            new Team(4, "札幌ファイターズ", "札幌", "team-white"),
            new Team(5, "仙台イーグルス", "仙台", "team-crimson")
        ];
        this.myTeam = null;
        this.cpuTeam = null;
        this.selectedPitchers = [];
        this.selectedFielders = [];
        this.lineup = Array(9).fill(null);
        this.starter = null;
        this.initSetup();
    }

    initSetup() {
        const teamList = document.getElementById('team-list');
        teamList.innerHTML = '';
        this.teams.forEach(t => {
            const card = document.createElement('div');
            card.className = `team-card ${t.colorClass}`;
            card.innerHTML = `<h3>${t.name}</h3><p>${t.city}</p><small>所属選手: 60名</small>`;
            card.onclick = () => this.selectMyTeam(t);
            teamList.appendChild(card);
        });

        document.getElementById('btn-auto-roster').onclick = () => this.autoSelectRoster();
        document.getElementById('btn-to-lineup').onclick = () => this.showLineupView();
        document.getElementById('btn-back-to-roster').onclick = () => this.showRosterView();
        document.getElementById('btn-auto-lineup').onclick = () => this.autoSelectLineup();
        document.getElementById('btn-start-game').onclick = () => this.startGame();

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => this.applyFilter(btn);
        });
    }

    selectMyTeam(team) {
        this.myTeam = team;
        document.getElementById('selection-title').textContent = "対戦相手を選択";
        document.getElementById('team-list').classList.add('hidden');
        document.getElementById('opponent-selection').classList.remove('hidden');
        const oppList = document.getElementById('opponent-list');
        oppList.innerHTML = '';
        this.teams.forEach(t => {
            if (t.id === team.id) return;
            const card = document.createElement('div');
            card.className = `team-card ${t.colorClass}`;
            card.innerHTML = `<h3>${t.name}</h3><p>${t.city}</p>`;
            card.onclick = () => this.selectOpponentTeam(t);
            oppList.appendChild(card);
        });
    }

    selectOpponentTeam(team) {
        this.cpuTeam = team;
        document.getElementById('team-selection-view').classList.add('hidden');
        this.showRosterView();
    }

    showRosterView() {
        document.getElementById('roster-view').classList.remove('hidden');
        const rosterList = document.getElementById('roster-list');
        rosterList.innerHTML = '';
        this.myTeam.players.forEach(p => {
            const card = document.createElement('div');
            card.className = `player-card ${p.colorClass}`;
            card.dataset.pos = p.mainPos;
            if (this.selectedPitchers.includes(p) || this.selectedFielders.includes(p)) card.classList.add('selected');

            let statsHtml = (p.mainPos === "投") ?
                `<div class="stats-summary"><div class="stat-row"><span>球速</span><span>${p.velocity}km</span></div><div class="stat-row"><span>制球</span><span>${p.control}</span></div></div>` :
                `<div class="stats-summary"><div class="stat-row"><span>ミート</span><span>${p.stats.meet}</span></div><div class="stat-row"><span>パワー</span><span>${p.stats.power}</span></div></div>`;

            card.innerHTML = `<div class="overall-tag">${p.overallRank}</div><span class="pos">${p.mainPos}</span><h4>${p.name}</h4>${statsHtml}`;
            card.onclick = () => this.toggleRoster(p, card);
            rosterList.appendChild(card);
        });
    }

    toggleRoster(p, card) {
        const isP = p.mainPos === "投";
        const pool = isP ? this.selectedPitchers : this.selectedFielders;
        const limit = isP ? 12 : 15;
        const idx = pool.indexOf(p);
        if (idx > -1) { pool.splice(idx, 1); card.classList.remove('selected'); }
        else if (pool.length < limit) { pool.push(p); card.classList.add('selected'); }
        document.getElementById('pitcher-count').textContent = this.selectedPitchers.length;
        document.getElementById('fielder-count').textContent = this.selectedFielders.length;
        document.getElementById('btn-to-lineup').disabled = (this.selectedPitchers.length < 1 || this.selectedFielders.length < 9);
    }

    applyFilter(btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('#roster-list .player-card').forEach(card => {
            const pos = card.dataset.pos;
            if (filter === 'all') card.style.display = 'block';
            else if (filter === '投') card.style.display = (pos === '投') ? 'block' : 'none';
            else card.style.display = (pos !== '投') ? 'block' : 'none';
        });
    }

    autoSelectRoster() {
        this.selectedPitchers = this.myTeam.players.filter(p => p.mainPos === "投").sort((a, b) => b.velocity - a.velocity).slice(0, 12);
        this.selectedFielders = this.myTeam.players.filter(p => p.mainPos !== "投").sort((a, b) => b.stats.meet - a.stats.meet).slice(0, 15);
        this.showRosterView();
        document.getElementById('pitcher-count').textContent = this.selectedPitchers.length;
        document.getElementById('fielder-count').textContent = this.selectedFielders.length;
        document.getElementById('btn-to-lineup').disabled = false;
    }

    showLineupView() {
        document.getElementById('roster-view').classList.add('hidden');
        document.getElementById('lineup-view').classList.remove('hidden');
        this.updateLineupUI();
    }

    updateLineupUI() {
        const slotsC = document.getElementById('lineup-slots'); slotsC.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const slot = document.createElement('div'); slot.className = 'slot';
            slot.innerHTML = `<span class="slot-num">${i + 1}</span><div class="slot-content">${this.lineup[i] ? this.lineup[i].name : '選択待ち'}</div>`;
            slotsC.appendChild(slot);
        }
        document.getElementById('starter-slot').innerHTML = this.starter ? `<h4>${this.starter.name}</h4>` : '未設定';
    }

    autoSelectLineup() {
        const sortedF = [...this.selectedFielders].sort((a, b) => b.stats.meet - a.stats.meet);
        for (let i = 0; i < 9; i++) this.lineup[i] = sortedF[i];
        this.starter = this.selectedPitchers[0];
        this.updateLineupUI();
        document.getElementById('btn-start-game').disabled = false;
    }

    startGame() {
        document.getElementById('setup-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
        document.querySelector('.team-score.away .team-name').textContent = this.cpuTeam.name;
        document.querySelector('.team-score.home .team-name').textContent = this.myTeam.name;

        this.state.reset();
        this.state.pitcher = this.starter;
        this.state.pitcher.warmUpLevel = 100;

        const cpuP = this.cpuTeam.players.filter(p => p.mainPos === "投").sort((a, b) => b.velocity - a.velocity);
        this.state.cpuPitcher = cpuP[0];
        this.state.cpuPitcher.warmUpLevel = 100;
        this.state.cpuBench = cpuP.slice(1, 6);
        this.state.cpuLineup = this.cpuTeam.players.filter(p => p.mainPos !== "投").slice(0, 9);
        this.state.bench = this.selectedPitchers.filter(p => p !== this.starter);

        this.updateBatterDisplay();
    }

    issueCommand(type, cmd) {
        if (this.state.gameEnded) return;

        // 特殊コマンドの即時処理
        if (type === 'Pitcher' && cmd === 'Kensei') {
            const pitcher = this.state.isBottom ? this.state.cpuPitcher : this.state.pitcher;
            this.state.resolvePickoff(pitcher);
            this.state.updateBullpen();
            this.updateBatterDisplay();
            return;
        }

        this.state.currentCommand[type] = cmd;

        // 打者の「盗塁」コマンドは次の投球時に実行されるため、即座に次のピッチへ進む
        // ただし、牽制以外の場合は基本的に1球投げる
        const isB = this.state.isBottom;
        const batter = isB ? this.lineup[this.state.batterIdx] : this.state.cpuLineup[this.state.cpuBatterIdx];
        const pitcher = isB ? this.state.cpuPitcher : this.state.pitcher;

        // 守備メンバーの特定 (P + 野手8名)
        const defLineup = isB ? this.state.cpuLineup : this.lineup;
        const defenders = [pitcher];
        const posOrder = ["捕", "一", "二", "三", "遊", "左", "中", "右"];
        posOrder.forEach(pos => {
            let p = defLineup.find(x => x.mainPos === pos);
            if (!p) p = defLineup.find(x => !defenders.includes(x));
            defenders.push(p);
        });

        // CPU automatically chooses commands
        const pCmd = isB ? 'Auto' : this.state.currentCommand.Pitcher;
        const bCmd = isB ? this.state.currentCommand.Batter : 'Auto';

        const res = this.state.executeOnePitch(batter, pitcher, pCmd, bCmd);
        this.state.processPitchResult(res, batter, pitcher, defenders, bCmd);
        this.state.updateBullpen();
        this.updateBatterDisplay();
    }

    updateBatterDisplay() {
        const isB = this.state.isBottom;
        const bIdx = isB ? this.state.batterIdx : this.state.cpuBatterIdx;
        const batter = isB ? this.lineup[bIdx] : this.state.cpuLineup[bIdx];
        const pitcher = isB ? this.state.cpuPitcher : this.state.pitcher;

        document.getElementById('current-batter').textContent = `${bIdx + 1}番 ${batter.name}`;
        document.getElementById('current-pitcher').textContent = pitcher.name;
        document.getElementById('pitch-count').textContent = pitcher.maxStamina - pitcher.currentStamina; // Using it as pitch count approximation
        document.getElementById('pitcher-stamina').textContent = Math.round(pitcher.currentStamina) + "%";

        // Toggle command groups based on offense/defense
        document.getElementById('pitcher-commands').classList.toggle('hidden', isB);
        document.getElementById('batter-commands').classList.toggle('hidden', !isB);

        // Disable steal button if no runners
        const hasRunners = this.state.runners.slice(1).some(r => r !== null);
        const stealBtn = document.querySelector("#batter-commands button[onclick*='Steal']");
        if (stealBtn) {
            stealBtn.disabled = !hasRunners;
            stealBtn.style.opacity = hasRunners ? "1" : "0.5";
            stealBtn.style.cursor = hasRunners ? "pointer" : "not-allowed";
        }
    }

    // Time Menu Handlers
    openTimeMenu() {
        document.getElementById('time-menu-modal').classList.remove('hidden');
    }
    closeTimeMenu() {
        document.getElementById('time-menu-modal').classList.add('hidden');
        this.hideSubView();
    }
    hideSubView() {
        document.getElementById('time-menu-content').classList.add('hidden');
        document.querySelectorAll('.sub-view').forEach(v => v.classList.add('hidden'));
    }

    showBullpen() {
        document.getElementById('time-menu-content').classList.remove('hidden');
        document.getElementById('bullpen-view').classList.remove('hidden');
        const list = document.getElementById('bullpen-list');
        list.innerHTML = '';
        this.state.bench.forEach(p => {
            const item = document.createElement('div');
            item.className = `bullpen-item ${p.isWarmingUp ? 'active' : ''}`;
            item.innerHTML = `
                <div>
                    <strong>${p.name}</strong> (${p.overallRank})<br>
                    <small>準備完了度: ${p.warmUpLevel}% / スタミナ: ${p.currentStamina}</small>
                </div>
                <button class="btn ${p.isWarmingUp ? 'secondary' : 'primary'}" onclick="game.toggleWarmUp(${p.id})">
                    ${p.isWarmingUp ? '停止' : '肩を作る'}
                </button>
            `;
            list.appendChild(item);
        });
    }

    toggleWarmUp(id) {
        const p = this.state.bench.find(x => x.id === id);
        if (p) p.isWarmingUp = !p.isWarmingUp;
        this.showBullpen();
    }

    showSubstitution() {
        document.getElementById('time-menu-content').classList.remove('hidden');
        document.getElementById('sub-view').classList.remove('hidden');
        const list = document.getElementById('sub-list');
        list.innerHTML = '<h4>投手の交代</h4>';
        this.state.bench.forEach(p => {
            const item = document.createElement('div');
            item.className = 'sub-item';
            item.innerHTML = `
                <span>${p.name} (準備:${p.warmUpLevel}%)</span>
                <button class="btn primary" onclick="game.executeSubstitution(${p.id})">交代</button>
            `;
            list.appendChild(item);
        });
    }

    executeSubstitution(id) {
        const nextPIdx = this.state.bench.findIndex(x => x.id === id);
        if (nextPIdx > -1) {
            const nextP = this.state.bench.splice(nextPIdx, 1)[0];
            this.state.addLog(`投手交代: ${this.state.pitcher.name} → ${nextP.name}`, "event");
            this.state.pitcher = nextP;
            this.closeTimeMenu();
            this.updateBatterDisplay();
        }
    }

    showStats() {
        document.getElementById('time-menu-content').classList.remove('hidden');
        document.getElementById('stats-view').classList.remove('hidden');
        const disp = document.getElementById('stats-display');
        const p = this.state.pitcher;
        const b = this.state.isBottom ? this.lineup[this.state.batterIdx] : this.state.cpuLineup[this.state.cpuBatterIdx];

        disp.innerHTML = `
            <h4>投手: ${p.name}</h4>
            <div class="stats-grid">
                <div class="stat-item"><span class="stat-label">球速</span><span class="stat-value">${p.velocity}km</span></div>
                <div class="stat-item"><span class="stat-label">制球</span><span class="stat-value">${p.control}</span></div>
                <div class="stat-item"><span class="stat-label">スタミナ</span><span class="stat-value">${p.currentStamina}/${p.maxStamina}</span></div>
            </div>
            <h4>打者: ${b.name}</h4>
            <div class="stats-grid">
                <div class="stat-item"><span class="stat-label">ミート</span><span class="stat-value">${b.stats.meet}</span></div>
                <div class="stat-item"><span class="stat-label">パワー</span><span class="stat-value">${b.stats.power}</span></div>
                <div class="stat-item"><span class="stat-label">選球眼</span><span class="stat-value">${b.stats.eye}</span></div>
            </div>
        `;
    }

    resign() {
        if (confirm("試合を棄権しますか？")) {
            this.state.addLog("試合放棄のため終了しました", "event");
            this.state.endGame();
            this.closeTimeMenu();
        }
    }
}

// Initialize game instance early
document.addEventListener('DOMContentLoaded', () => {
    window.game = new BaseballSimulation();
});
