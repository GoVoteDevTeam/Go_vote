const politics = [
    {
        id:1,
        name: "自由民主党",     //政党名
        catchcopy: "地域の声で、新たな日本へ。",       //キャッチコピー
        detail: "自由民主党は、日本の経済成長と国民の幸福追求を目指し、企業活性化や雇用創出、教育充実、社会保障改革、外交・安全保障強化など、幅広い政策分野で積極的に取り組んでいます。\n地方創生や防災対策も重視し、国家の繁栄と国民の幸せを実現するため、具体的な施策を展開しています。", //詳細
        img: "jimin.jpg",      //写真
    },
    {
        id:2,
        name: "立憲民主党",
        catchcopy:"生活安全保障。",
        detail: "立憲民主党は、民主主義、憲法の尊重、社会的な公正を基盤とし、国民の幸福と豊かさを追求することを目指しています。政治の透明性や公共の利益を重視し、格差の是正や社会的弱者への支援、人権の保護を主要な政策として掲げています。\n経済政策では、持続可能な成長と雇用創出に取り組みながら、地域経済の振興や中小企業の支援を推進しています。教育や医療、福祉の充実も重視し、多様な人々が平等にチャンスを得られる社会の実現を目指しています。\n国内外の平和と協力にも力を注ぎ、持続可能な社会の実現に貢献しています。",
        img: "rikken.jpg",      
    },
    {
        id:3,
        name: "日本維新の会",
        catchcopy: "身を切る改革、実行中。",
        detail: "日本維新の会は、政治改革と地方分権を掲げ、日本の政治・行政の効率化や財政再建を目指しています。\n特に、官僚制度の見直しや政治家の公務員制度導入、行政改革などを重視しています。経済政策では、競争力強化や成長戦略の実施を目指し、規制緩和や税制改革を進めています。\nまた、地方分権を進めるために、地方自治体の財政改革や地域の振興策を支援しています。教育改革や安全保障政策にも取り組み、教育の質の向上や国防体制の強化を目指しています。\nさらに、地域の課題に積極的に取り組むため、防災や都市開発、観光振興などの政策も展開しています。\n日本維新の会は、政治の改革と地方分権を通じて、国民の生活向上と国家の発展を目指しています。",
        img: "isin.jpg",      
    },
    {
        id:4,
        name: "公明党",
        catchcopy: "日本を、前へ。小さな声を、聴く力。",
        detail: "公明党は、子育て支援充実、人生１００年時代の健康・生活支援、女性・若者支援、がん・うつ・認知症対策、災害対策、行政効率化、ユニバーサル社会の実現に力を注いでいます。子どもへの児童手当拡充や医療費助成拡大、０～２歳の保育無償化、専業主婦家庭への保育支援、相談支援制度の恒久化、不登校児童生徒支援など、子育てを支えます。さらに、がん・うつ・認知症に寄り添い、女性・若者を応援し、災害時の迅速な対応、行政の効率化、静的マイノリティーへの支援、ヤングケアラーへの支援も行い、ユニバーサル社会の実現に向けて取り組んでいます。",
        img: "koumei.jpg",      
    },
    {
        id:5,
        name: "日本共産党",
        catchcopy: "平和でも、暮らしでも、希望がもてる日本に。",
        detail: "日本維新の会は、政治改革と地方分権を重視し、効率的な行政や財政再建を目指す政党です。\n経済政策では競争力強化や成長戦略を追求し、規制緩和や税制改革を進めます。地方自治体の財政改革や地域振興策にも注力し、教育改革や安全保障政策にも取り組みます。\n防災や都市開発、観光振興など地域課題にも対応し、国民の生活向上と国家の発展を目指します。",
        img: "kyousan.jpg",      
    },
    {
        id:6,
        name: "国民民主党",
        catchcopy: "給料を上げる。国を守る。",
        detail: "国民民主党は、市民の声を重視し、社会の公正や民主主義の実現を目指す政党です。\n格差是正や社会保障の充実、労働環境の改善など、社会的な課題に取り組みます。経済政策では持続的な成長と雇用の創出を追求し、中小企業や地方経済の支援を重視します。\n教育や医療、福祉の充実も重要な政策領域であり、安心して生活できる社会を実現するために取り組んでいます。国内外の平和と協力にも力を注ぎ、持続可能な社会の実現に貢献しています。",
        img: "kokumin.jpg",      
    },
    {
        id:7,
        name: "れいわ新選組",
        catchcopy:"「日本を守る」とは「あなた守る」ことから始まる。",
        detail:"れいわ新選組の目標は、現代の日本においても正義と公平を追求し、国民の幸福と社会の安定を実現することです。\n政治改革や腐敗の根絶、行政の透明性の確保など、政治システムの健全化を重視しています。また、経済発展と雇用創出、地域振興を目指し、社会の格差是正や持続可能な成長に注力します。\n教育の充実や医療福祉の向上、環境保護や防災対策も重要な政策課題として取り組んでいます。\n国内外の平和と協力も大切な価値観であり、健全な国際関係の構築を目指します。",
        img: "reiwa.jpg",      
    },
    {
        id:8,
        name: "社会民主党",
        catchcopy: "外交でアジアの平和を！",
        detail: "社会民主党は、社会正義と民主主義を基盤に、国民の幸福追求と公共の福祉を重視する政党です。\n格差是正や社会保障充実、労働者の権利保護など、社会的課題に取り組みます。経済政策では持続的な成長と共生を目指し、中小企業や地域経済の振興に注力します。\n教育・医療・福祉の充実、地球環境の保護、平和と協調外交も重要な政策領域であり、持続可能な社会の実現を追求します。\n労働者の権利やジェンダー平等、人権の尊重も重要な価値観として掲げ、社会の多様性と包括性を実現するために取り組んでいます。",
        img: "shamin.jpg",      
    },
    {
        id:9,
        name: "政治家女子48党",
        catchcopy:"会いに行けるアイドルから、会いに行ける政治家??",
        detail: "政治家女子48党は、女性の政治参画の推進に力を入れ、女性の登用や政治の場での活躍を促進します。\n次に、若者の政治への関心を高めるために、政治教育の充実や若者向けの政策提案を行います。\nまた、社会課題に対して多様な視点と解決策を提供し、社会の包括性やジェンダー平等を実現するための政策を展開します。さらに、地域に根ざした活動を通じて、地方の課題解決や地域振興に取り組みます。\nまた、環境保護や持続可能な社会の実現、平和への取り組みも重要な政策領域です。\n全体として、市民の声を反映させながら、より包括的で公正な社会を築くために政策を展開します。",
        img: "poli48.jpg",      
    },
    {
        id:10,
        name: "参政党",
        catchcopy:"投票したい政党がないから、自分たちでゼロからつくる。",
        detail: " 参政党は、日本の政治団体であり、一般市民の政治参加を促進することを目的としています。\n党名の通り、政治への参加や意見表明を広く受け入れ、政策や社会問題に市民の声を反映させることを重視しています。\n参政権の拡大や選挙制度改革、政治の透明性や公共の利益の追求など、民主主義の原則に基づく政治改革を推進します。\nまた、市民との対話や協力を通じて、社会の課題に対する解決策の模索や政策提言を行い、より公正で包括的な社会の実現を目指しています。",
        img: "sansei.jpg",      
    },
]

export default politics;
