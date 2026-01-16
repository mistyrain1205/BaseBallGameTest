const lastNames = ["佐藤", "鈴木", "高橋", "田中", "伊藤", "渡辺", "山本", "中村", "小林", "加藤", "吉田", "山田", "佐々木", "山口", "松本", "井上", "木村", "林", "斎藤", "清水", "山崎", "阿部", "森", "池田", "橋本", "山下", "石川", "中島", "前田", "藤田", "小川", "後藤", "岡田", "長谷川", "村上", "近藤", "石井", "斉藤", "坂本", "遠藤", "青木", "藤井", "西村", "福田", "太田", "三浦", "藤原", "岡本", "松田", "中川", "中野", "原田", "小野", "田村", "竹内", "金子", "和田", "中山", "石田", "上田", "森田", "小島", "柴田", "原", "宮崎", "酒井", "工藤", "横山", "安藤", "宮本", "内田", "高木", "安達", "谷口", "今井", "丸山", "小山", "高田", "河野", "藤本", "大塚", "村田", "武田", "上野", "杉山", "増田", "小島", "大西", "菅原", "大久保", "松尾", "久保", "佐野", "野村", "千葉", "市川", "古川", "島田", "渡部", "高野", "杉本", "菊地", "野口", "吉村", "小松", "新井", "石原", "松井", "水野", "岩崎", "桜井", "木下", "池田", "山内", "飯田", "西田", "本田", "菊池", "中田", "吉川", "福島", "河合", "平野", "西山", "安部", "森本", "矢野", "荒木", "馬場", "大城", "松島", "吉岡", "小沢", "飯塚", "北村", "深沢", "川口", "平井", "大山", "岩田", "寺田", "樋口", "大野", "中根", "水谷", "永井", "小宮", "成田", "中居", "内藤", "三宅", "浅野", "田口", "石河", "望月", "石坂", "柏木", "大石", "関", "川上", "村井", "植田", "小池", "白井", "岡", "金井", "栗原", "高山", "服部", "野中", "中谷", "岩井", "宮田", "榎本", "吉野", "三木", "石本", "秋山", "富田", "岸本", "松村", "堀", "松岡", "大橋", "河村", "石塚", "片山", "今村", "細川", "田辺", "内山", "白石", "大沢", "大谷", "荒井", "川崎", "北村", "浜田", "塚本", "本間", "西", "平岡", "長野", "安井", "小倉", "出口", "松原", "岡崎", "小栗", "武藤", "松下", "大関", "大島", "大滝", "小田", "根本", "矢島", "高島", "大内", "小西", "大村", "大川", "中里", "中西", "中島", "大竹", "大坪", "大原", "大庭", "大類", "大矢", "大和田", "大平", "大里", "大野", "大隅", "大場", "大槻", "大久保", "大江", "大貫", "大沼", "大畑", "大林", "大町", "大森", "大浦", "大友", "大木", "大河原", "大金", "大倉", "大滝", "大貫", "大西", "大場", "大林", "大村", "大森", "大山", "大和", "小口", "小田", "小名", "小野", "小川", "小倉", "小沢", "小島", "小林", "小松", "小山", "小池", "小泉", "小坂", "小林", "小宮", "小森", "小柳", "小谷", "小倉", "小泉", "小田", "小野", "小泉", "小川", "小松", "小山", "小野", "小原"];
const firstNames = ["健太", "翔", "裕也", "直樹", "和也", "拓也", "大輔", "亮", "俊介", "勇気", "翔太", "拓真", "裕太", "健太郎", "慎太郎", "大輝", "海人", "蓮", "湊", "悠真", "颯真", "陽向", "大和", "悠人", "陽翔", "陽太", "樹", "駿", "翼", "輝", "誠", "剛", "哲也", "浩二", "伸一", "雅弘", "隆", "正弘", "敏之", "裕司", "貴之", "英樹", "博", "勝", "修", "充", "宏", "晃", "明", "聡", "徹", "淳", "隆之", "克典", "健", "剛志", "康夫", "一輝", "龍二", "和樹", "聖矢", "光希", "大河", "太陽", "陸", "空", "海", "大雅", "龍一", "銀次", "鉄平", "剛士", "大介", "康介", "京介", "亮介", "洋介", "俊介", "啓介", "佑介", "和馬", "竜馬", "勝馬", "悠馬", "拓馬", "大馬", "翔馬", "勇馬", "颯馬", "星馬", "優", "隼", "誠", "忍", "進", "力", "勝", "守", "等", "実", "光", "輝", "耀", "晃", "昭", "彰", "顕", "晶", "章", "晃", "信", "義", "忠", "孝", "智", "仁", "勇", "礼", "廉", "謙", "幸助", "喜一", "善治", "鉄雄", "武蔵", "雷蔵", "源次郎", "勘助", "半蔵", "慶次", "左近", "右近", "小太郎", "五郎", "六郎", "七郎", "八郎", "九郎", "十郎", "太郎", "次郎", "三郎", "四郎", "五郎", "一郎", "健司", "浩司", "慎司", "正司", "英司", "貴司", "雄司", "啓司", "勝司", "幸司", "隆司", "敏司", "宏司", "真司", "竜司", "健一", "浩一", "一真", "一磨", "一毅", "一樹", "一也", "一馬", "一輝", "一平", "健二", "浩二", "二郎", "二三男", "修二", "竜二", "研二", "憲二", "慎二", "賢二", "健三", "浩三", "三郎", "三四郎", "省三", "晋三", "謙三", "賢三", "陽三", "龍三", "大樹", "直也", "哲夫", "秀樹", "和雄", "博之", "裕介", "良太", "正樹", "康弘", "一夫", "茂樹", "隆弘", "徳夫", "達也", "和久", "嘉男", "英明", "博文", "俊也", "正一", "正二", "正三", "正四", "正五", "正六", "正七", "正八", "正九", "正十", "伸也", "純一", "雅之", "誠一", "健吾", "浩一", "竜也", "大輔", "慎一", "晃司", "幸弘", "克己", "雅樹", "泰弘", "英一", "昌宏", "和夫", "博明", "裕章", "秀信", "雅之", "光宏", "裕信", "康昭", "正信", "貴広", "和彦", "利道", "秀也", "英紀", "和幸", "和正", "和明", "和人", "和也", "和真", "和磨", "和毅", "和樹", "和馬", "智也", "智広", "智之", "智明", "智和", "智樹", "智真", "智宏", "智一", "智二", "和秀", "和宏", "和広", "和弘", "和裕", "和英", "和明", "和也", "和樹", "和正", "明夫", "明弘", "明広", "明宏", "明裕", "明英", "明和", "明也", "明樹", "明正", "清", "潔", "廉", "澄", "純", "真", "実", "誠", "正", "直", "勇気", "豪", "剛", "強", "猛", "毅", "武", "士", "志", "勇", "海斗", "陸斗", "空斗", "大斗", "翔斗", "悠斗", "陽斗", "颯斗", "湊斗", "蓮斗", "朝日", "夕日", "明日", "輝日", "春日", "夏日", "秋日", "冬日", "晴日", "吉日", "大和", "日本", "飛鳥", "奈良", "平安", "鎌倉", "室町", "安土", "桃山", "江戸", "明治", "大正", "昭和", "平成", "令和", "将来", "未来", "過去", "現在", "希望", "大地", "天空", "海洋", "深海", "宇宙", "銀河", "恒星", "惑星", "流星", "彗星", "大輝", "陽輝", "月輝", "星輝", "天輝", "光輝", "明輝", "正輝", "直輝", "英輝", "和真", "悠真", "遥真", "陽真", "颯真", "蓮真", "翔真", "匠真", "亮真", "拓真", "大我", "真我", "悠我", "陽我", "凌我", "大雅", "優雅", "和雅", "風雅", "光雅", "大介", "俊介", "亮介", "圭介", "康介", "洋介", "佑介", "裕介", "駿介", "啓介", "健太", "翔太", "陽太", "颯太", "悠太", "湊太", "慎太", "竜太", "涼太", "勘太", "一心", "一心", "志心", "誠心", "正心", "真心", "和心", "光心", "悠心", "陽心", "大河", "清河", "銀河", "悠河", "星河", "光河", "天河", "翔河", "颯河", "湊河", "琥珀", "翡翠", "珊瑚", "瑠璃", "瑪瑙", "水晶", "真珠", "金剛", "白金", "黄金", "蒼空", "美空", "星空", "碧空", "陽空", "悠空", "翔空", "颯空", "湊空", "大空", "大和", "和人", "和真", "和磨", "和毅", "和樹", "和也", "和馬", "和輝", "和平", "健吾", "慎吾", "真吾", "大吾", "啓吾", "駿吾", "竜吾", "翔吾", "誠吾", "正吾", "大樹", "直樹", "和樹", "真樹", "正樹", "英樹", "浩樹", "智樹", "悠樹", "光樹", "大輔", "亮輔", "俊輔", "圭輔", "庸輔", "祐輔", "康輔", "啓輔", "裕輔", "駿輔", "大輝", "光輝", "陽輝", "瑞輝", "拓輝", "一輝", "和輝", "直輝", "嘉輝", "昂輝"];

const PITCH_DATA = {
    // 1. ファストボール系 (Fastballs)
    'フォーシーム': { abbr: 'ストレート', dx: 0, dy: -1.2, category: 'Fastball', velMod: 0, ctlMod: 10, break: 5, junk: 0, desc: '全ての基本。制球が安定する。' },
    'ツーシーム': { abbr: '2シーム', dx: 0, dy: -1.0, category: 'Fastball', velMod: -2, ctlMod: 0, break: 15, junk: 15, desc: '利き腕方向に沈む。ゴロを打たせる。' },
    'カットボール': { abbr: 'カット', dx: -0.6, dy: -0.4, category: 'Fastball', velMod: -4, ctlMod: 5, break: 20, junk: 10, desc: '小さく曲がる。打ち損じを誘う。' },
    'SFF': { abbr: 'スプリット', dx: 0, dy: 0.9, category: 'Fastball', velMod: -6, ctlMod: -5, break: 30, junk: 25, desc: '高速で落ちる。空振りとゴロの両立。' },
    // 2. ブレイキングボール系 (Breaking)
    'スライダー': { abbr: 'スライダー', dx: -1.2, dy: 0, category: 'Breaking', velMod: -12, ctlMod: 2, break: 45, junk: 10, desc: '横に鋭く曲がる。空振りを奪う性能No.1。' },
    'カーブ': { abbr: 'カーブ', dx: -0.8, dy: 0.8, category: 'Breaking', velMod: -25, ctlMod: 0, break: 40, junk: 5, desc: '縦に大きく割れる。タイミングを狂わせる。' },
    'シュート': { abbr: 'シュート', dx: 1.2, dy: 0, category: 'Breaking', velMod: -8, ctlMod: -5, break: 25, junk: 25, desc: '内角を突き、詰まらせる。' },
    'シンカー': { abbr: 'シンカー', dx: 0.8, dy: 0.8, category: 'Breaking', velMod: -15, ctlMod: -5, break: 35, junk: 40, desc: '斜め下に落ちる。ゴロを奪いやすい。' },
    // 3. オフスピード系 (Off-speed)
    'チェンジアップ': { abbr: 'チェンジ', dx: 0, dy: 0.7, category: 'OffSpeed', velMod: -20, ctlMod: 10, break: 25, junk: 15, desc: '直球との速度差。選球眼を無効化。' },
    'フォーク': { abbr: 'フォーク', dx: 0, dy: 1.2, category: 'OffSpeed', velMod: -18, ctlMod: -10, break: 55, junk: 35, desc: '真下に落ちる。確実に空振りを奪う。' },
    'パーム': { abbr: 'パーム', dx: -0.3, dy: 1, category: 'OffSpeed', velMod: -22, ctlMod: 0, break: 35, junk: 45, desc: '独特の揺れで、打者のミートを削る。' },
    // 4. ジャンクピッチ系 (Junk)
    'スローボール': { abbr: 'スロー', dx: 0, dy: 0.4, category: 'Junk', velMod: -50, ctlMod: 15, break: 10, junk: 5, desc: '超スロー。不意を突く。' }
};

const TEAM_DATA = {
    0: { // 東京パイレーツ
        pitchers: [
            { name: "海堂 尊", velocity: 154, control: 92, stamina: 85, rank: "S" },
            { name: "佐藤 寿也", velocity: 140, control: 78, stamina: 65, rank: "A" }
        ],
        fielders: [
            { name: "岡本 和夫", pos: "一", meet: 73, power: 85, speed: 46 },
            { name: "吉川 直弥", pos: "二", meet: 82, power: 52, speed: 81 }
        ]
    },
    1: { // 大阪タイガース
        pitchers: [
            { name: "ダルビッシュ", velocity: 152, control: 88, stamina: 82, rank: "S" }
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
        entry.style.border = "2px solid #ff0000";
        entry.style.borderRadius = "8px";
        entry.style.margin = "10px 0";
        entry.style.fontSize = "12px";
        entry.style.zIndex = "9999";
        const stack = error && error.stack ? `<br><small style="color:#aaa">${error.stack.split('\n').slice(0, 3).join('<br>')}</small>` : '';
        entry.innerHTML = `<strong>Critical JS Error:</strong> ${msg}<br><small>Location: ${lineNo}:${columnNo}</small>${stack}`;
        log.prepend(entry);
    }
    console.error("Simulation Error:", msg, url, lineNo, columnNo, error);
    return false;
};

// Promiseの拒否もキャッチ
window.onunhandledrejection = event => {
    console.error("Unhandled Promise Rejection:", event.reason);
};

class Player {
    constructor(id, forcedPos = null, fixedData = null) {
        this.id = id;
        const seed = id * 123.456;
        this.name = fixedData?.name || (lastNames[rand(lastNames.length, seed)] + " " + firstNames[rand(firstNames.length, seed + 1)]);
        this.mainPos = fixedData?.pos || forcedPos || ["投", "捕", "一", "二", "三", "遊", "左", "中", "右"][rand(9, seed + 2)];

        if (this.mainPos === "投") {
            this.velocity = fixedData?.velocity || (135 + rand(20, seed + 5));
            this.control = fixedData?.control || (40 + rand(40, seed + 4));
            this.maxStamina = fixedData?.stamina || (40 + rand(50, seed + 3));
            this.currentStamina = this.maxStamina;
            this.warmUpLevel = 0;
            this.isWarmingUp = false;
            // 役割判定
            this.pitcherRole = (this.maxStamina > 70) ? "先発" : (this.control > 75 ? "抑え" : "中継ぎ");
            this.stats = { meet: 20, power: 20, speed: 30, eye: 30, bunt: 50, defense: 50 };
            // 持ち球生成
            this.pitches = { 'フォーシーム': 3 + rand(3, seed + 100) }; // 基本の直球
            const pitchNames = Object.keys(PITCH_DATA).filter(n => n !== 'フォーシーム');
            const numPitches = 2 + rand(3, seed + 101); // 2~4種類の変化球
            for (let i = 0; i < numPitches; i++) {
                const pName = pitchNames[rand(pitchNames.length, seed + 200 + i)];
                if (!this.pitches[pName]) this.pitches[pName] = 1 + rand(5, seed + 300 + i);
            }
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
    get rankClass() {
        const r = this.overallRank.toLowerCase();
        return `rank-${r}`;
    }
    get playerType() {
        if (this.mainPos === "投") return this.pitcherRole;
        const s = this.stats;
        const defAvg = (s.defense + s.shoulder + s.throwing) / 3;
        const maxVal = Math.max(s.meet, s.power, s.speed, defAvg);
        if (maxVal === s.power) return "パワー型";
        if (maxVal === s.meet) return "ミート型";
        if (maxVal === s.speed) return "走塁型";
        return "守備型";
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
        this.fielders = []; // 現在の守備陣を保持
    }

    reset() {
        this.scoreHome = 0; this.scoreAway = 0; this.inning = 1; this.isBottom = false;
        this.balls = 0; this.strikes = 0; this.outs = 0;
        this.runners = [null, null, null, null];
        this.runsThisInning = 0;
        this.currentCommand = { Pitcher: 'Auto', Batter: 'Auto' };
        this.gameEnded = false;
        this.initializeFielders(); // 守備位置の初期化
        this.updateUI();
        this.addLog("--- プレイボール！ ---", "event");
    }

    // 守備マーカーの生成
    initializeFielders() {
        const fieldLayer = document.getElementById('fielders-layer');
        if (!fieldLayer) return;
        fieldLayer.innerHTML = ''; // 清掃
        const posClasses = ['pos-p', 'pos-c', 'pos-1b', 'pos-2b', 'pos-3b', 'pos-ss', 'pos-lf', 'pos-cf', 'pos-rf'];
        for (let i = 0; i < 9; i++) {
            const marker = document.createElement('div');
            marker.className = `fielder-marker ${posClasses[i]}`;
            marker.id = `fielder-${i}`;
            marker.innerHTML = `<div class="fielder-dot"></div><div class="fielder-pos">${posClasses[i].replace('pos-', '').toUpperCase()}</div>`;
            fieldLayer.appendChild(marker);
        }
    }

    // ボールの移動
    updateBallPos(x, y, possessedIndex = -1) {
        const ball = document.getElementById('ball-possession');
        const hitSpot = document.getElementById('hit-spot');
        if (!ball || !hitSpot) return;

        ball.classList.remove('hidden');
        if (possessedIndex >= 0) {
            // 野手が持っている場合
            const fielder = document.getElementById(`fielder-${possessedIndex}`);
            if (fielder) {
                const rect = fielder.getBoundingClientRect();
                const parentRect = document.getElementById('diamond-field').getBoundingClientRect();
                ball.style.left = (rect.left + rect.width / 2 - parentRect.left) + 'px';
                ball.style.top = (rect.top + rect.height / 2 - parentRect.top) + 'px';
                ball.classList.add('possessed');
            }
        } else {
            // 飛球・着弾点
            ball.style.left = x + '%';
            ball.style.top = y + '%';
            ball.classList.remove('possessed');

            hitSpot.style.left = x + '%';
            hitSpot.style.top = y + '%';
            hitSpot.classList.remove('hidden');
        }
    }

    clearBall() {
        document.getElementById('ball-possession')?.classList.add('hidden');
        document.getElementById('hit-spot')?.classList.add('hidden');
    }

    executeOnePitch(batter, pitcher, pCmd, bCmd) {
        // 球種選択 (Pitch Selection)
        const pitchList = Object.keys(pitcher.pitches);
        const pitchName = pitchList[rand(pitchList.length)];
        const pLevel = pitcher.pitches[pitchName];
        const pInfo = PITCH_DATA[pitchName];

        const stats = pitcher.getPitchingStats();
        pitcher.currentStamina -= 1;

        // 球速計算 (Base Vel + Mod + Level Bonus)
        let displayVel = stats.vel + pInfo.velMod + (pLevel * 0.5) + (Math.random() * 4 - 2);

        // 制球とストライク率
        let activeCtl = stats.ctl + pInfo.ctlMod + (pLevel * 1.5);
        let strikeRate = 45 + (activeCtl * 0.35);

        if (pCmd === 'Kiwadoi') { strikeRate -= 20; activeCtl += 15; }
        else if (pCmd === 'Strike') { strikeRate += 25; activeCtl -= 15; }

        let isStrikeZone = (Math.random() * 100) < strikeRate;

        // 失投判定
        let isMistake = false;
        if (Math.random() * 100 > (activeCtl + 20)) {
            isMistake = true;
            isStrikeZone = true; // 真ん中へ
        }

        let doesSwing = false;
        if (isStrikeZone) {
            let swingProb = 85;
            if (pInfo.category === 'OffSpeed') swingProb -= (pLevel * 2); // タイミング外し
            if (bCmd === 'Look') swingProb = 35;
            doesSwing = (Math.random() * 100) < swingProb;
        } else {
            let eyeBonus = (pInfo.category === 'OffSpeed') ? -20 : 0;
            let swingProb = Math.max(5, 50 - (batter.stats.eye + eyeBonus) * 0.5 + (pLevel * 2));
            if (bCmd === 'Aggressive') swingProb += 25;
            if (bCmd === 'Look') swingProb -= 25;
            doesSwing = (Math.random() * 100) < swingProb;
        }

        // ログ用の文字列構築
        const pitchLogPrefix = `<strong>${pitcher.name}: ${pitchName} (${Math.floor(displayVel)}km/h)</strong> - `;

        let isBunt = (bCmd === 'Bunt');
        if (isBunt) {
            let buntSuccessBase = 30 + (batter.stats.bunt * 0.5) + (batter.stats.meet * 0.2) - (displayVel * 0.1);
            let roll = Math.random() * 100;
            if (roll < buntSuccessBase) {
                this.addLog(pitchLogPrefix + "バント！", "event");
                return 'InPlay';
            } else if (roll < buntSuccessBase + 20) {
                this.addLog(pitchLogPrefix + "バント空振り/ファウル", "strike");
                if (this.strikes === 2) return 'BuntOut';
                return 'Foul';
            } else {
                this.addLog(pitchLogPrefix + "見送り", "event");
                return isStrikeZone ? 'Strike' : 'Ball';
            }
        }

        if (doesSwing) {
            // 打撃判定
            let contactBase = batter.stats.meet * 0.6 + 40;
            if (isMistake) contactBase += 30; // 失投は打ちやすい

            // 変化球の効果
            let contactProb = contactBase - (pInfo.break * 0.5) - (pLevel * 3) - (displayVel * 0.1);
            if (bCmd === 'Power') contactProb -= 15;

            if (Math.random() * 100 < contactProb) {
                // 当たった！ -> フェア or ファウル
                let foulProb = 30 + (pInfo.break * 0.2);
                if (Math.random() * 100 < foulProb) {
                    this.addLog(pitchLogPrefix + "ファウル", "event");
                    return 'Foul';
                }

                // フェアグラウンド！ 球種に応じた打ち損じ（Junk）補正
                let hitQualityBonus = isMistake ? 20 : -(pInfo.junk * 0.3) - (pLevel);
                this.addLog(pitchLogPrefix + "打った！", "hit");
                return { type: 'InPlay', bonus: hitQualityBonus };
            } else {
                this.addLog(pitchLogPrefix + `<span style="color:var(--error-red)">空振り！</span>`, "strike");
                return 'Strike';
            }
        } else {
            const result = isStrikeZone ? 'Strike' : 'Ball';
            const resText = result === 'Strike' ? `<span style="color:var(--primary)">ストライク！</span>` : `<span style="color:var(--secondary)">ボール。</span>`;
            this.addLog(pitchLogPrefix + resText, result.toLowerCase());
            return result;
        }
    }

    processPitchResult(pResult, batter, pitcher, fielders, bCmd = 'Auto') {
        this.clearBall(); // Clear ball position at the start of processing a new pitch result
        this.fielders = fielders; // 状態を更新しておく

        if (pResult === 'Strike' || pResult === 'Ball' || pResult === 'Foul') {
            // Handled below in the switch statement
        } else if (pResult === 'InPlay') {
            this.resolveInPlay(batter, pitcher, fielders, 0, false);
            return;
        } else if (pResult && typeof pResult === 'object' && pResult.type === 'InPlay') {
            // バント時など
            this.resolveInPlay(batter, pitcher, fielders, pResult.bonus, pResult.isBunt);
            return;
        }
        else if (pResult === 'BuntOut') {
            this.addLog("<span style='color:var(--error-red)'>スリーバント失敗！</span>", "out");
            this.completeAtBat('StrikeOut', batter, "2ストライクからのバントがファウルとなりました。");
            return;
        }

        switch (pResult) {
            case 'Ball':
                this.balls++;
                break;
            case 'Strike':
            case 'CalledStrike':
            case 'SwingingStrike':
                this.strikes++;
                break;
            case 'Foul':
                if (this.strikes < 2) this.strikes++;
                break;
            case 'InPlay':
                this.resolveInPlay(batter, pitcher, fielders);
                return;
            case 'StealOut':
                this.nextHalfInning();
                return;
            case 'BuntOut':
                this.addLog("<span style='color:var(--error-red)'>スリーバント失敗！</span>", "out");
                this.completeAtBat('StrikeOut', batter, "2ストライクからのバントがファウルとなりました.");
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

    resolveInPlay(batter, pitcher, fielders, bonus = 0, isBunt = false) {
        try {
            const bCmd = this.currentCommand.Batter;
            const targetPosIndex = rand(9);
            // Order: P, C, 1B, 2B, 3B, SS, LF, CF, RF matches the defenders array and markers
            const targetName = ["ピッチャー", "キャッチャー", "ファースト", "セカンド", "サード", "ショート", "レフト", "センター", "ライト"][targetPosIndex];
            const isInfield = targetPosIndex <= 5;
            // fielders might be incomplete, handle that safely
            const fielder = (fielders && fielders[targetPosIndex]) ? fielders[targetPosIndex] : { name: targetName, stats: { defense: 50, shoulder: 50, throwing: 50 } };
            const fStats = fielder.stats || { defense: 50, shoulder: 50, throwing: 50 };

            // 1. 打球の「深さ」と「視覚的な座標」を決定
            let hitDepth = isBunt ? (Math.random() * 15 + 5) : (Math.floor(Math.random() * 70) + 20 + (batter.stats.power * 0.1));
            hitDepth = Math.min(100, Math.max(0, hitDepth));

            // 座標計算用のベース位置 (300x300のピクセル位置を%に変換)
            // Order: P, C, 1B, 2B, 3B, SS, LF, CF, RF
            const posCoords = [
                { x: 48.3, y: 49.3 }, // P  (145,148)
                { x: 48.3, y: 102.6 },// C  (145,308)
                { x: 80.0, y: 45.0 }, // 1B (240,135)
                { x: 77.3, y: 16.0 }, // 2B (232,48)
                { x: 16.6, y: 45.0 }, // 3B (50,135)
                { x: 19.3, y: 16.0 }, // SS (58,48)
                { x: 5.0, y: -1.6 },  // LF (15,-5)
                { x: 48.3, y: -18.3 },// CF (145,-55)
                { x: 91.6, y: -1.6 }  // RF (275,-5)
            ];

            const baseCoord = posCoords[targetPosIndex] || posCoords[0];
            // 飛距離に応じて多少のランダム移動を加える
            let ballX = baseCoord.x + (Math.random() * 10 - 5);
            let ballY = baseCoord.y + (Math.random() * 10 - 5);
            this.updateBallPos(ballX, ballY);

            if (isBunt) {
                this.addLog(`<strong>${targetName}</strong> の前に転がした！ (バント)`, "event");
            } else {
                const depthText = hitDepth < 40 ? "浅い" : (hitDepth < 70 ? "定位置の" : "深い");
                this.addLog(`打球は ${!isInfield ? depthText + " " : ""}<strong>${targetName}</strong> への当たり！`, "event");
            }

            // ホームラン判定（座標をさらに奥へ）
            let hrProb = isBunt ? 0 : (2 + (batter.stats.power * 0.05));
            if (!isInfield && hitDepth > 85 && (Math.random() * 100 < hrProb)) {
                this.updateBallPos(ballX, ballY - 40); // 観客席方向へ
                this.completeAtBat('HomeRun', batter, `打球は大きな放物線を描いて${targetName}外野席へ！`);
                return 'HomeRun';
            }

            // 2. 捕球判定
            let defenseThreshold = (targetPosIndex === 7) ? 50 : (!isInfield ? 30 : 0);
            let pBonus = (bCmd === 'Power') ? 15 : 0;
            let mBonus = (bCmd === 'Meet') ? 10 : 0;

            let battedBallQuality = (batter.stats.meet * 0.25) + (batter.stats.power * 0.25) + pBonus + mBonus + bonus + (Math.random() * 40);
            let catchScore = (fStats.defense * 0.9 - defenseThreshold) + (Math.random() * 25);

            // ボールが吸い込まれる（ possession更新）
            setTimeout(() => {
                // エラーやヒットでなければ捕球
                try {
                    if (!(Math.random() * 100 < (Math.max(0.2, 2.0 - (fStats.throwing + fStats.defense) * 0.01))) && battedBallQuality <= catchScore) {
                        this.updateBallPos(0, 0, targetPosIndex);
                    }
                } catch (e) {
                    console.error("Ball pos error:", e);
                }
            }, 300);

            // キャッチエラー
            let errorBase = Math.max(0.2, 2.0 - (fStats.throwing + fStats.defense) * 0.01);
            if (Math.random() * 100 < errorBase) {
                this.completeAtBat('Error', batter, `あっと！ ${targetName} がファンブル！ エラーで出塁！`, fielder);
                return 'Error';
            }

            if (battedBallQuality > catchScore) {
                // ヒット確定 (ボールを野手のさらに奥へ)
                this.updateBallPos(ballX + (Math.random() * 20 - 10), ballY - 20);
                let desc = (hitDepth > 70 && !isInfield) ? `${targetName}の頭上を越えた！ 長打コース！` : `鋭い打球が ${targetName} の横を抜けた！ ヒット！`;
                let hitType = 'Single';
                if (!isInfield) {
                    if (hitDepth > 70 && batter.stats.speed > 60) hitType = 'Double';
                    else if (hitDepth > 90 && batter.stats.speed > 80) hitType = 'Triple';
                }
                this.completeAtBat(hitType, batter, desc, fielder, targetPosIndex, hitDepth);
                return hitType;
            }

            // 3. アウトまたは送球
            if (!isInfield) {
                let desc = (catchScore - battedBallQuality < 15) ? `背走して... ${targetName} がナイスキャッチ！` : `${targetName} が落下点に入ってアウト。`;
                this.addLog(`<em>${desc}</em>`, "event");
                this.updateBallPos(0, 0, targetPosIndex); // 確実に捕球

                // タッチアップ判定
                if (this.runners[3] && this.outs < 2) {
                    const tagUpRes = this.checkTagUp(this.runners[3], fielder, hitDepth, targetPosIndex);
                    if (tagUpRes === 1) {
                        if (this.isBottom) this.scoreHome++; else this.scoreAway++;
                        this.runners[3] = null;
                        this.triggerScoreEffect(1);
                        this.addLog(`<span style="color:var(--accent-gold)">+1点！ (タッチアップ)</span>`, "event");
                    } else if (tagUpRes === 2) {
                        this.runners[3] = null;
                        this.outs++;
                    }
                }
                this.completeAtBat('Out', batter, "", fielder);
                return 'Out';
            }

            this.addLog(`${targetName} が捕って一塁へ送球！`, "event");
            this.updateBallPos(0, 0, targetPosIndex);

            let throwErrorProb = Math.max(0.1, 3.0 - (fStats.throwing * 0.025));
            if (Math.random() * 100 < throwErrorProb) {
                // 送球エラー (ボールを明後日の方向へ)
                this.updateBallPos(90, 80);
                this.completeAtBat('Error', batter, "あっと！ 送球が逸れた！ ファースト取れない！ エラー！！", fielder);
                return 'Error';
            }

            let runnerScore = batter.stats.speed + (Math.random() * 25);
            let throwScore = 45 + (fStats.shoulder * 0.65) + ((catchScore - battedBallQuality) * 0.2) + (Math.random() * 15);

            // 送球アニメーション（一塁手へ）
            setTimeout(() => this.updateBallPos(0, 0, 2), 200); // Index 2 is 1B

            if (throwScore > runnerScore) {
                let desc = (throwScore - runnerScore < 15) ? "際どいタイミング... アウト！ ナイスプレー！" : "余裕を持ってアウト。";
                this.completeAtBat('Out', batter, desc, fielder);
                return 'Out';
            } else {
                let desc = (runnerScore - throwScore < 15) ? "間一髪セーフ！ 足が勝った！ 内野安打！" : "深い当たり！ 投げられない！ 内野安打。";
                this.completeAtBat('Single', batter, desc, fielder);
                return 'Single';
            }
        } catch (e) {
            console.error("ResolveInPlay Error:", e);
            this.addLog(`System Error: ${e.message}`, "error");
            return 'Single'; // Layout fallback
        }
    }

    checkTagUp(runner, fielder, flyDepth, posIndex) {
        this.addLog(`>> 3塁ランナー <strong>${runner.name}</strong>、タッチアップの構え！`, "event");

        // ポジション補正 (6=レフト, 7=センター, 8=ライト)
        let shoulderWeight = 0;
        if (posIndex === 6) shoulderWeight = -15; // 近い (より刺されやすい)
        else if (posIndex === 8) shoulderWeight = 25; // 遠い (よりセーフになりやすい)

        if (flyDepth < 40) { // 浅いフライの基準を厳しく
            this.addLog(">> 浅いフライだ。ランナー動けない！", "event");
            return 0;
        }
        // 判断基準をより慎重に (flyDepth + speedの影響を調整)
        if ((flyDepth * 0.7 + runner.stats.speed * 0.4) < 70) {
            this.addLog(">> 無理はしない。3塁に留まる。", "event");
            return 0;
        }
        this.addLog(">> スタートを切った！ 本塁へ突っ込む！", "event");

        let runnerScore = flyDepth + runner.stats.speed + (Math.random() * 25);
        let throwMod = (fielder.stats.throwing > 70) ? 10 : -10;
        let defenseScore = fielder.stats.shoulder + 65 + throwMod - shoulderWeight + (Math.random() * 20);

        if (runnerScore > defenseScore) {
            this.addLog(runnerScore - defenseScore < 15 ? ">> 際どいタイミング... セーフ！！ ホームイン！" : ">> 送球間に合わない！ 余裕でセーフ！", "event");
            return 1;
        } else {
            // 野手の送球ミスによるセーフ
            if (Math.random() * 100 > (fielder.stats.throwing + 20)) {
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
        if (posIndex === 6) shoulderWeight = -15; // 3塁に刺しにくい（近い）が、その分油断できない
        else if (posIndex === 8) shoulderWeight = 25; // 3塁に刺しやすい（遠い）

        if (hitType === "1stTo3rd") {
            message = "1塁ランナー、2塁を回って3塁へ向かう！";
            difficulty = 70 + shoulderWeight;
        }
        else if (hitType === "ScoreFrom1st") {
            message = "1塁ランナー、一気にホームを狙う！！";
            difficulty = 90;
        }
        else if (hitType === "HustleDouble") {
            message = `打った <strong>${runner.name}</strong>、1塁を蹴って2塁へ！`;
            difficulty = 60;
        }

        // 深さによる難易度軽減 (より効果的に)
        let bonusByDepth = (hitDepth - 50);
        difficulty -= bonusByDepth;

        // リスク評価をより厳格に (difficultyに対して自信がある場合のみ突っ込む)
        let riskAssessment = runner.stats.speed * 0.8 - (fielder.stats.shoulder * 0.5);
        if (riskAssessment + (Math.random() * 30) < difficulty * 0.7) return 0;

        this.addLog(`>> ${message}`, "event");
        let runPoint = (runner.stats.speed * 1.1) + (Math.random() * 30) - difficulty;
        let defPoint = (fielder.stats.shoulder * 0.9) + (fielder.stats.throwing * 0.2) + (Math.random() * 15);

        if (runPoint > defPoint) {
            this.addLog(runPoint - defPoint < 15 ? ">> 際どいタイミング... セーフ！！！ ナイスラン！" : ">> 滑り込んだ... 余裕でセーフ！", "event");
            return 1;
        } else {
            if (Math.random() * 100 > (fielder.stats.throwing + 15)) {
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

        // 打者走者の進塁 (頻度を20% -> 10%に下げ、かつriskAssessmentを通す)
        let batterFinalPos = bases;
        if (isHit && bases === 1 && Math.random() < 0.1) {
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

    addLog(text, type = "neutral") {
        const log = document.getElementById('game-log');
        if (!log) {
            console.log("Log suppressed (no element):", text);
            return;
        }
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;

        // Perspective adjustment
        const isGood = type === 'hit' || type === 'walk' || text.includes('成功');
        const isBad = type === 'out' || type === 'error' || text.includes('失敗');
        const isUserSide = (this.isBottom); // Bottom is user usually

        let pClass = "log-neutral";
        if (isGood) pClass = isUserSide ? "log-good" : "log-bad";
        if (isBad) pClass = isUserSide ? "log-bad" : "log-good";

        entry.classList.add(pClass);
        entry.innerHTML = `<span>[${this.inning}${this.isBottom ? '裏' : '表'}]</span> ${text}`;
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
            if (rContainer && rName) {
                if (this.runners[i]) {
                    rContainer.classList.add('active');
                    rName.textContent = this.runners[i].name;
                } else {
                    rContainer.classList.remove('active');
                }
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
        this.lastBatterKey = null; // Track for announcement
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

        document.getElementById('btn-auto-lineup').onclick = () => this.autoSelectLineup();
        document.getElementById('btn-start-game').onclick = () => this.startGame();
        document.getElementById('btn-back-to-team').onclick = () => {
            document.getElementById('lineup-view').classList.add('hidden');
            this.initSetup();
            document.getElementById('team-selection-view').classList.remove('hidden');
            document.getElementById('team-list').classList.remove('hidden');
            document.getElementById('opponent-selection').classList.add('hidden');
        };
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
        this.showLineupView();
    }

    showLineupView() {
        document.getElementById('lineup-view').classList.remove('hidden');
        this.allAvailablePlayers = [...this.myTeam.players];
        this.updateLineupUI();
    }

    updateLineupUI() {
        const slotsC = document.getElementById('lineup-slots');
        slotsC.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const slot = document.createElement('div');
            slot.className = `slot drop-target ${this.lineup[i] ? 'occupied' : ''}`;
            slot.dataset.slot = i;
            slot.innerHTML = `
                <span class="slot-num">${i + 1}</span>
                <div class="slot-content">
                    ${this.lineup[i] ? this.renderMiniCard(this.lineup[i]) : '<span class="placeholder">選手をドラッグ</span>'}
                </div>
            `;
            this.addDropEventListeners(slot);
            slotsC.appendChild(slot);
        }

        const starterSlot = document.getElementById('starter-slot');
        starterSlot.innerHTML = this.starter ?
            this.renderMiniCard(this.starter) :
            '<div class="slot-placeholder">投手をドラッグ</div>';
        starterSlot.classList.toggle('occupied', !!this.starter);
        this.addDropEventListeners(starterSlot);

        const benchList = document.getElementById('bench-list');
        benchList.innerHTML = '';
        this.allAvailablePlayers.forEach(p => {
            if (this.lineup.includes(p) || this.starter === p) return;
            const card = document.createElement('div');
            card.className = `player-card-mini ${p.colorClass}`;
            card.draggable = true;
            card.innerHTML = `<span>${p.mainPos}</span><strong>${p.name}</strong>`;
            card.onclick = () => this.showPlayerDetail(p);
            card.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', p.id);
                card.classList.add('dragging');
            };
            card.ondragend = () => card.classList.remove('dragging');
            benchList.appendChild(card);
        });

        document.getElementById('btn-start-game').disabled = !(this.lineup.every(p => p !== null) && this.starter !== null);
    }

    renderMiniCard(p) {
        return `<div class="player-card-mini ${p.colorClass}" draggable="true" ondragstart="event.dataTransfer.setData('text/plain', '${p.id}')" onclick="game.showPlayerDetail('${p.id}')">
            <span>${p.mainPos}</span><strong>${p.name}</strong>
        </div>`;
    }

    // JSON.stringifyがPlayerインスタンスでエラーになる可能性があるため、IDで管理するように修正
    showPlayerDetail(playerOrId) {
        const p = typeof playerOrId === 'object' ? playerOrId : this.myTeam.players.find(x => x.id == playerOrId);
        if (!p) return;

        const modal = document.getElementById('player-detail-modal');
        const body = document.getElementById('player-detail-body');

        let statsHtml = (p.mainPos === "投") ?
            `<div class="stats-summary">
                <div class="stat-row"><span>球速</span><span>${p.velocity}km/h</span></div>
                <div class="stat-row"><span>制球</span><span>${p.control}</span></div>
                <div class="stat-row"><span>スタミナ</span><span>${p.maxStamina}</span></div>
            </div>` :
            `<div class="stats-summary">
                <div class="stat-row"><span>ミート</span><span>${p.stats.meet}</span></div>
                <div class="stat-row"><span>パワー</span><span>${p.stats.power}</span></div>
                <div class="stat-row"><span>走力</span><span>${p.stats.speed}</span></div>
                <div class="stat-row"><span>守備</span><span>${p.stats.defense}</span></div>
            </div>`;

        let extraContent = (p.mainPos === "投") ?
            `<div class="pitches-list">
                ${statsHtml}
                <div class="pitch-map-container">
                    <div class="pitch-map-bg"></div>
                    <div class="pitch-map-cross"></div>
                    ${this.renderPitchMap(p)}
                </div>
            </div>` :
            `<div class="defense-stats" style="margin-top:10px; border-top:1px solid rgba(255,255,255,0.05); padding-top:10px;">
                <div class="stat-row"><span>肩力</span><span>${p.stats.shoulder || '-'}</span></div>
                <div class="stat-row"><span>送球</span><span>${p.stats.throwing || '-'}</span></div>
            </div>`;

        body.innerHTML = `
            <div class="player-card ${p.colorClass} ${p.rankClass}">
                <div class="rank-badge">${p.overallRank}</div>
                <span class="pos">${p.mainPos}</span>
                <div class="player-info-unit">
                    <h3 style="margin-bottom:5px;">${p.name}</h3>
                    <div class="role-tag" style="opacity:0.8; font-size:0.9rem; margin-bottom:15px;">${p.playerType} / ${p.mainPos}</div>
                </div>
                ${p.mainPos !== "投" ? statsHtml : ""}
                ${extraContent}
            </div>
        `;
        modal.classList.remove('hidden');
    }

    renderPitchMap(p) {
        const zoneCounts = {};
        return Object.entries(p.pitches).map(([name, lv]) => {
            const info = PITCH_DATA[name];
            const cat = info.category.toLowerCase();
            const x = 50 + (info.dx * lv * 4.5);
            const y = 50 + (info.dy * lv * 4.5);
            const angle = Math.atan2(info.dy, info.dx) * 180 / Math.PI;
            const dist = Math.sqrt(Math.pow(info.dx * lv * 4.0, 2) + Math.pow(info.dy * lv * 4.0, 2));

            let dirClass = '';
            let zone = '';
            if (info.dx === 0 && info.dy < 0) { dirClass = 'label-n'; zone = 'north'; }
            else if (info.dx === 0 && info.dy > 0) { dirClass = 'label-s'; zone = 'south'; }
            else if (info.dx < 0 && info.dy === 0) { dirClass = 'label-w'; zone = 'west'; }
            else if (info.dx > 0 && info.dy === 0) { dirClass = 'label-e'; zone = 'east'; }
            else if (info.dx < 0 && info.dy < 0) { dirClass = 'label-nw'; zone = 'north'; }
            else if (info.dx > 0 && info.dy < 0) { dirClass = 'label-ne'; zone = 'north'; }
            else if (info.dx < 0 && info.dy > 0) { dirClass = 'label-sw'; zone = 'south'; }
            else if (info.dx > 0 && info.dy > 0) { dirClass = 'label-se'; zone = 'south'; }

            const count = zoneCounts[zone] || 0;
            zoneCounts[zone] = count + 1;
            const stackOffset = count * 14;
            let offsetStyle = '';
            if (zone === 'west' || zone === 'east') offsetStyle += `margin-top: 10px; `;
            if (dirClass === 'label-n') offsetStyle += `margin-top: ${stackOffset}px;`;
            else if (dirClass === 'label-s') offsetStyle += `margin-bottom: ${stackOffset}px;`;
            else if (dirClass === 'label-w') offsetStyle += `margin-left: ${stackOffset}px;`;
            else if (dirClass === 'label-e') offsetStyle += `margin-right: ${stackOffset}px;`;

            return `
                <div class="pitch-line line-${cat}" style="transform: rotate(${angle}deg); width: ${dist}px;"></div>
                <div class="pitch-point" style="left: ${x}%; top: ${y}%;">
                    <div class="pitch-point-dot dot-${cat}"></div>
                </div>
                <span class="pitch-edge-label ${dirClass}" style="${offsetStyle}">${info.abbr}${lv}</span>
            `;
        }).join('');
    }

    addDropEventListeners(target) {
        target.ondragover = (e) => {
            e.preventDefault();
            target.classList.add('drag-over');
        };
        target.ondragleave = () => target.classList.remove('drag-over');
        target.ondrop = (e) => {
            e.preventDefault();
            target.classList.remove('drag-over');
            const playerId = e.dataTransfer.getData('text/plain');
            const p = this.myTeam.players.find(x => x.id == playerId);
            if (!p) return;

            const slotType = target.dataset.slot;
            if (slotType === 'starter') {
                if (p.mainPos !== "投") {
                    alert("先発には投手しか配置できません！");
                    return;
                }
                this.starter = p;
            } else {
                const idx = parseInt(slotType);
                // 既に他のスロットにいる場合は入れ替え
                const oldIdx = this.lineup.indexOf(p);
                if (oldIdx > -1) this.lineup[oldIdx] = null;

                this.lineup[idx] = p;
            }
            this.updateLineupUI();
        };
    }

    autoSelectLineup() {
        const pitchers = this.myTeam.players.filter(p => p.mainPos === "投").sort((a, b) => b.velocity - a.velocity);
        const hitters = this.myTeam.players.filter(p => p.mainPos !== "投").sort((a, b) => b.stats.meet - a.stats.meet);

        this.starter = pitchers[0];
        for (let i = 0; i < 9; i++) {
            this.lineup[i] = hitters[i] || null;
        }
        this.updateLineupUI();
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
        try {
            if (this.state.gameEnded) return;

            // 特殊コマンドの即時処理
            if (type === 'Pitcher' && cmd === 'Kensei') {
                const pitcher = this.state.isBottom ? this.state.cpuPitcher : this.state.pitcher;
                if (pitcher) this.state.resolvePickoff(pitcher);
                this.state.updateBullpen();
                this.updateBatterDisplay();
                return;
            }

            this.state.currentCommand[type] = cmd;

            const isB = this.state.isBottom;
            const bIdx = isB ? this.state.batterIdx : this.state.cpuBatterIdx;
            const batter = isB ? this.lineup[bIdx] : this.state.cpuLineup[bIdx];
            const pitcher = isB ? this.state.cpuPitcher : this.state.pitcher;

            if (!batter || !pitcher) {
                console.warn("Command issued but batter/pitcher missing", { batter, pitcher });
                return;
            }

            // 守備メンバーの特定 (P + 野手8名)
            const defLineup = isB ? this.state.cpuLineup : this.lineup;
            const defenders = [pitcher];
            const posOrder = ["捕", "一", "二", "三", "遊", "左", "中", "右"];
            posOrder.forEach(pos => {
                let p = defLineup.find(x => x && x.mainPos === pos);
                if (!p) p = defLineup.find(x => x && !defenders.includes(x));
                if (p) defenders.push(p);
            });

            // 足りない場合のフォールバック（エラー防止）
            while (defenders.length < 9) defenders.push(pitcher);

            const pCmd = isB ? 'Auto' : this.state.currentCommand.Pitcher;
            const bCmd = isB ? this.state.currentCommand.Batter : 'Auto';

            // 投球前に一度表示（バッター交代時の名前コールを確実にするため）
            this.updateBatterDisplay();

            const res = this.state.executeOnePitch(batter, pitcher, pCmd, bCmd);
            this.state.processPitchResult(res, batter, pitcher, defenders, bCmd);
            this.state.updateBullpen();
            this.updateBatterDisplay();
        } catch (e) {
            console.error("Command Execution Failed:", e);
            if (this.state) this.state.addLog(`System Error: ${e.message}`, "error");
        }
    }

    updateBatterDisplay() {
        try {
            const isB = this.state.isBottom;
            const bIdx = isB ? this.state.batterIdx : this.state.cpuBatterIdx;
            const batter = isB ? this.lineup[bIdx] : this.state.cpuLineup[bIdx];
            const pitcher = isB ? this.state.cpuPitcher : this.state.pitcher;

            if (!batter || !pitcher) return;

            const batterEl = document.getElementById('current-batter');
            if (batterEl) batterEl.textContent = `${bIdx + 1}番 ${batter.name}`;

            const pitcherEl = document.getElementById('current-pitcher');
            if (pitcherEl) pitcherEl.textContent = pitcher.name;

            const pCountEl = document.getElementById('pitch-count');
            if (pCountEl) pCountEl.textContent = Math.floor(pitcher.maxStamina - pitcher.currentStamina);

            const staminaEl = document.getElementById('pitcher-stamina');
            if (staminaEl) staminaEl.textContent = Math.max(0, Math.round(pitcher.currentStamina)) + "%";

            // New Batter Announcement
            const currentKey = `${isB ? 'B' : 'T'}-${bIdx}`;
            if (this.lastBatterKey !== currentKey && !this.state.gameEnded) {
                this.state.addLog(`<div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:4px; margin-bottom:8px; font-weight:bold; color:var(--accent-gold);">${bIdx + 1}番 ${batter.mainPos} ${batter.name}</div>`, "event");
                this.lastBatterKey = currentKey;
            }

            // Toggle command groups based on offense/defense
            const pCmds = document.getElementById('pitcher-commands');
            const bCmds = document.getElementById('batter-commands');
            if (pCmds) pCmds.classList.toggle('hidden', isB);
            if (bCmds) bCmds.classList.toggle('hidden', !isB);

            // Disable steal button if no runners
            const hasRunners = this.state.runners.slice(1).some(r => r !== null);
            const stealBtn = document.querySelector("#batter-commands button[onclick*='Steal']");
            if (stealBtn) {
                stealBtn.disabled = !hasRunners;
                stealBtn.style.opacity = hasRunners ? "1" : "0.5";
                stealBtn.style.cursor = hasRunners ? "pointer" : "not-allowed";
            }
        } catch (e) {
            console.error("Display Update Failed:", e);
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
        const p = this.state.pitcher;
        const isB = this.state.isBottom;
        const bIdx = isB ? this.state.batterIdx : this.state.cpuBatterIdx;
        const b = isB ? this.lineup[bIdx] : this.state.cpuLineup[bIdx];

        if (!p || !b) return;

        document.getElementById('time-menu-content').classList.remove('hidden');
        document.getElementById('stats-view').classList.remove('hidden');
        const disp = document.getElementById('stats-display');

        disp.innerHTML = `
            <h4>投手: ${p.name}</h4>
            <div class="stats-grid">
                <div class="stat-item"><span class="stat-label">球速</span><span class="stat-value">${p.velocity}km</span></div>
                <div class="stat-item"><span class="stat-label">制球</span><span class="stat-value">${p.control}</span></div>
                <div class="stat-item"><span class="stat-label">スタミナ</span><span class="stat-value">${Math.max(0, Math.round(p.currentStamina))}/${p.maxStamina}</span></div>
            </div>
            <h4>打席: ${b.name}</h4>
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
    try {
        window.game = new BaseballSimulation();
    } catch (e) {
        console.error("Initialization Error:", e);
        const log = document.getElementById('game-log');
        if (log) {
            const entry = document.createElement('div');
            entry.style.color = "#ff4444";
            entry.style.background = "rgba(0,0,0,0.8)";
            entry.style.padding = "10px";
            entry.style.border = "1px solid red";
            entry.innerHTML = `<strong>Initialization Error:</strong> ${e.message}<br><small>${e.stack}</small>`;
            log.prepend(entry);
        }
    }
});
