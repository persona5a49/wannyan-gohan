import './style.css'

const FOODS = [
  {name:'ニュートロ シュプレモ シニア犬用', maker:'Nutro', kcal:350, protein:26, fat:13, priceKg:1900, tags:['senior','coat','balanced','small'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41c22.08fe12c0.57b41c23.755a6e9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnyanzaq%2F4562358781827%2F&link_type=hybrid_url&ut=eyJwYW...c2V9'},
  {name:'ヒルズ サイエンス・ダイエット シニア 小型犬用', maker:'Hill’s', kcal:365, protein:19, fat:14, priceKg:1300, tags:['senior','small','cost','balanced'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41d3d.0196a071.57b41d3e.22d83eeb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsweet-pet%2F118579662%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ロイヤルカナン ミニ エイジング12+', maker:'Royal Canin', kcal:383, protein:24, fat:14, priceKg:1700, tags:['senior','small','palatable'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41e37.7d60f1c7.57b41e38.dcb0788f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1096dog%2Fw-120005-00-00%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'アカナ シニアドッグ', maker:'ACANA', kcal:332, protein:33, fat:14, priceKg:2300, tags:['senior','protein','weight'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3I7X0Y+5FPU+5YJRM'},
  {name:'ピュリナ ワン 7歳以上 ほぐし粒入り', maker:'Purina', kcal:360, protein:27, fat:13, priceKg:900, tags:['senior','cost','palatable'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41f4a.7a14458b.57b41f4b.35feaa3c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbadasai%2F4902201206563%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'このこのごはん', maker:'オモヤ', kcal:343, protein:20.9, fat:8.2, priceKg:3800, tags:['small','lowfat','japan','coat'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b796b2.783134fe.57b796b9.ae291207/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonokototomoni%2Fkonoko-01%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'モグワン ドッグフード', maker:'レティシアン', kcal:361, protein:27, fat:10, priceKg:2600, tags:['balanced','palatable','coat'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2SMA0I+3J8+1HKDAR&a8ejpredirect=https%3A%2F%2Fwww.mogwandogfood.co.jp%2F7700%2F'},
  {name:'犬猫生活 ドッグフード シニア', maker:'犬猫生活', kcal:347, protein:24, fat:10, priceKg:3200, tags:['senior','japan','lowfat'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b797c2.9582bd06.57b797c3.18668413/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Finuneko-seikatsu%2Fdog_sr_chi_sma%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'セレクトバランス エイジングケア チキン', maker:'Select Balance', kcal:350, protein:20, fat:10, priceKg:1500, tags:['senior','lowfat','cost','small'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41f84.bf4f5b64.57b41f85.19f72c13/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvetschoice%2F4541851006200%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'プロマネージ 7歳からの室内犬用', maker:'PROMANAGE', kcal:355, protein:24, fat:12, priceKg:1000, tags:['senior','cost','small'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41c22.08fe12c0.57b41c23.755a6e9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnyanzaq%2F81211%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'アイムス 7歳以上 健康サポート', maker:'IAMS', kcal:365, protein:24, fat:11, priceKg:850, tags:['senior','cost'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b5a5f6.8d9dfb7c.57b5a5f7.4393bfe4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fthinkrich%2Fsk09926%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ユーカヌバ シニア 小型犬用', maker:'Eukanuba', kcal:376, protein:27, fat:15, priceKg:1500, tags:['senior','small','palatable'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41e37.7d60f1c7.57b41e38.dcb0788f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1096dog%2Fw-162060-00-00%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ナウフレッシュ スモールブリード シニア', maker:'NOW FRESH', kcal:341, protein:24, fat:12, priceKg:3100, tags:['senior','small','grainfree','weight'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b79ceb.e7a018b7.57b79cec.f9af103e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdogparadise%2F4573160559030%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'オリジン シニア', maker:'ORIJEN', kcal:371, protein:38, fat:15, priceKg:3200, tags:['senior','protein','ingredient'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3I7X0Y+5FPU+5YRHE'},
  {name:'ソルビダ グレインフリー チキン 室内飼育7歳以上', maker:'SOLVIDA', kcal:350, protein:23, fat:10, priceKg:2600, tags:['senior','grainfree','lowfat','coat'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41f84.bf4f5b64.57b41f85.19f72c13/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvetschoice%2F4562312014527%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'アーテミス アガリクス I/S 小粒', maker:'Artemis', kcal:358, protein:24, fat:14, priceKg:2100, tags:['small','stomach','palatable'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b79ceb.e7a018b7.57b79cec.f9af103e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdogparadise%2F8133690054908%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ナチュロル', maker:'楽しい製薬', kcal:400, protein:23, fat:10, priceKg:3600, tags:['japan','palatable','ingredient'], url:'https://reason-why.jp/naturol/se/'},
  {name:'馬肉自然づくり', maker:'健康いぬ生活', kcal:399, protein:27, fat:11, priceKg:3300, tags:['japan','palatable','ingredient'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2PN3ZM+3E6W+TR13N&a8ejpredirect=http%3A%2F%2Fkenko-dog.com%2Flp%2Fbanikushizendukuri-teiki%2F'},
  {name:'Yum Yum Yum! シニア&ライト チキン', maker:'GREEN DOG', kcal:320, protein:20, fat:8.5, priceKg:4200, tags:['senior','japan','lowfat','weight','small'], url:'https://hb.afl.rakuten.co.jp/ichiba/57bd8fda.8dbe604e.57bd8fdb.677d0384/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpetoukokupremium%2F6554%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ミシュワン シニア犬用', maker:'ミシュワン', kcal:332, protein:21.5, fat:9.5, priceKg:3800, tags:['senior','japan','small','lowfat'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3257OY+4PA6+C2O5E'},
  {name:'Dr.ケアワン', maker:'アニマルライフ研究所', kcal:347, protein:22.5, fat:7.5, priceKg:3900, tags:['japan','lowfat','coat','small'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3C9KZ6+3RW8+BX3J6'},
  {name:'ペトコトフーズ チキン', maker:'PETOKOTO', kcal:150, protein:13, fat:5.4, priceKg:5200, tags:['fresh','palatable','stomach'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b799d3.42c5d4fb.57b799d4.8e599777/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpetokotofoods%2F5345%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ブッチ ブラック・レーベル', maker:'Butch', kcal:116, protein:10.5, fat:8, priceKg:2600, tags:['wet','palatable','senior'], url:'https://butch-japan.co.jp/products/blacklabel800'},
  {name:'カナガン ドッグフード チキン', maker:'レティシアン', kcal:376, protein:29, fat:15, priceKg:2600, tags:['grainfree','palatable','protein'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2Q8JLE+3J8+NSP1V&a8ejpredirect=https%3A%2F%2Fwww.canagandogfood.co.jp%2F3503%2F'},
  {name:'ネルソンズ ドッグフード', maker:'レティシアン', kcal:365, protein:28, fat:12, priceKg:2200, tags:['medium','ingredient','palatable'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2P1ODU+3J8+15NP77&a8ejpredirect=http%3A%2F%2Fwww.nelsonsdogfood.jp%2F7500%2F'},
  {name:'POCHI ザ・ドッグフード エイジングケア', maker:'POCHI', kcal:315, protein:30, fat:10, priceKg:2400, tags:['senior','weight','lowfat','protein'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b79b5b.a0865e7c.57b79b5c.9f959709/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpochi-tokyo%2Fpod0101080-1000g%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ペロリコ ドッグフード ライト', maker:'レティシアン', kcal:326, protein:22.5, fat:8, priceKg:2600, tags:['weight','lowfat','senior'], url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+34IY42+3J8+4GQLWI&a8ejpredirect=https%3A%2F%2Fwww.perolicodogfood.com%2Flight%2FPDL20000'},
  {name:'ロイヤルカナン ミニ ライトウェイトケア', maker:'Royal Canin', kcal:319, protein:30, fat:11, priceKg:1700, tags:['weight','small','lowfat'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b5a3b9.ecf57661.57b5a3ba.8d1f18b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdog-penet%2Ff11225%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ヒルズ サイエンス・ダイエット 減量サポート 小型犬用', maker:'Hill’s', kcal:313, protein:24, fat:9, priceKg:1500, tags:['weight','small','lowfat','cost'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41d3d.0196a071.57b41d3e.22d83eeb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsweet-pet%2Fset0096s%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'VetSolution 犬用 胃腸サポート', maker:'Monge', kcal:383, protein:24, fat:15, priceKg:2400, tags:['stomach','senior'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b84b87.2ec97563.57b84b88.333718c7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvetslabo%2Fdr000114%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'}
]

const PRODUCT_SLUGS = {
  'アカナ シニアドッグ': 'acana-senior-dog',
  'オリジン シニア': 'orijen-senior',
  'ミシュワン シニア犬用': 'mishone-senior',
  'モグワン ドッグフード': 'mogwan',
  'カナガン ドッグフード チキン': 'canagan-chicken',
  'ロイヤルカナン ミニ ライトウェイトケア': 'royal-canin-mini-lightweight-care',
  'ヒルズ サイエンス・ダイエット 減量サポート 小型犬用': 'hills-weight-control-small',
  'ニュートロ シュプレモ シニア犬用': 'nutro-supremo-senior'
}
function productDetailUrl(name){ return PRODUCT_SLUGS[name] ? `/products/${PRODUCT_SLUGS[name]}/` : '#' }

const THERAPEUTIC_FOODS = [
  {name:'腎臓サポート系療法食', maker:'療法食カテゴリ', tags:['kidney','therapeutic'], note:'BUN/Cre/尿検査などを見て、主治医の指示で使う候補です。自己判断で始めないでください。'},
  {name:'消化器サポート・低脂肪系療法食', maker:'療法食カテゴリ', tags:['stomach','lipid','therapeutic'], note:'下痢・嘔吐・膵炎リスク・脂質異常などで検討されることがあります。診断と処方方針の確認が必要です。'},
  {name:'肝臓サポート系療法食', maker:'療法食カテゴリ', tags:['liver','therapeutic'], note:'肝酵素上昇の理由によって適否が変わります。検査結果と症状を合わせて主治医に確認してください。'},
  {name:'糖コントロール系療法食', maker:'療法食カテゴリ', tags:['glucose','therapeutic'], note:'血糖・尿糖・体重変化を合わせて判断します。投薬中は特に自己判断で変更しないでください。'},
  {name:'尿ケア・下部尿路系療法食', maker:'療法食カテゴリ', tags:['urine','therapeutic'], note:'尿石の種類や尿pHによって合う食事が違います。尿検査結果なしで選ばないでください。'}
]
function therapeuticCandidates(a){
  const c=a.checkup||[]; const out=[]
  THERAPEUTIC_FOODS.forEach(f=>{
    if(f.tags.some(t=>c.includes(t)) || (f.tags.includes('kidney') && (labNum('cre')>=1.4 || labNum('bun')>=30)) || (f.tags.includes('liver') && (labNum('alt')>=120 || labNum('alp')>=350)) || (f.tags.includes('lipid') && (labNum('tg')>=150 || labNum('tcho')>=300)) || (f.tags.includes('glucose') && labNum('glu')>=130) || (f.tags.includes('urine') && ((labNum('usg')>0 && labNum('usg')<1.025) || labNum('upc')>=0.5))) out.push(f)
  })
  return out.slice(0,3)
}

const BREED_GROUPS = {
  toy:'超小型・小型犬', companion:'愛玩・家庭犬', retriever:'レトリーバー系', herding:'牧羊・作業犬系', terrier:'テリア系', hound:'猟犬・サイトハウンド系', spitz:'柴・スピッツ系', brachy:'短頭種', large:'大型・超大型犬', mix:'ミックス・不明'
}
const BREED_NOTES = {
  toy:'小さな体重変化でもカロリー差が出やすいので、おやつ量を数字で見ると調整しやすいです。',
  companion:'家族との距離感や生活リズムの影響を受けやすいので、急な変更より「いつもの流れ」を残すと続けやすいです。',
  retriever:'食への反応が強い子では、早食い・体重・おやつの積み重ねをセットで確認します。',
  herding:'刺激への反応や作業意欲が高い子では、退屈・興奮・ごほうび量が食事管理に影響します。',
  terrier:'こだわりや反応の強さが出やすい子では、フード変更を小さく試して成功体験を作ります。',
  hound:'匂い・探索への関心が強い子では、食いつきだけでなく散歩量と体型を一緒に見ます。',
  spitz:'慎重さや環境変化への反応が出やすい子では、安心できる手順を固定して切り替えます。',
  brachy:'体重増加・暑さ・呼吸の負担に注意し、無理な運動より食事量とおやつ管理を丁寧に見ます。',
  large:'関節・筋肉量・体重変化の影響が大きいので、急な増減を避けて記録で追います。',
  mix:'犬種名より、実際の体型・行動・便・健診結果を優先して見ます。'
}

const QUESTIONS = [
  {key:'dogName', label:'まず、うちの子の名前を教えてください（任意）', type:'text', placeholder:'例：こむぎ'},
  {key:'breedGroup', label:'体格や犬種の雰囲気で近いものは？', type:'choice', options:[['toy','超小型・小型犬'],['companion','愛玩・家庭犬'],['retriever','レトリーバー系'],['herding','牧羊・作業犬系'],['terrier','テリア系'],['hound','猟犬・サイトハウンド系'],['spitz','柴・スピッツ系'],['brachy','短頭種'],['large','大型・超大型犬'],['mix','ミックス・不明']]},
  {key:'age', label:'年齢はどのくらいですか？', type:'choice', options:[['under7','7歳未満'],['7-9','7〜9歳'],['10-12','10〜12歳'],['13+','13歳以上']]},
  {key:'weight', label:'今の体重を入れてください', type:'number', suffix:'kg', placeholder:'例：5.2'},
  {key:'body', label:'上から見た体型・触った感じに近いのは？', type:'choice', options:[['thin','肋骨が目立つ・やせ気味'],['normal','くびれがあり、ちょうどよい'],['chubby','少し丸くなってきた'],['obese','明らかにぽっちゃり']]},
  {key:'neuter', label:'避妊・去勢はしていますか？', type:'choice', options:[['yes','済み'],['no','未'],['unknown','わからない']]},
  {key:'human', label:'散歩中、知らない人に声をかけられたら？', type:'choice', cbarq:'見知らぬ人への反応・社交性を家庭向けに言い換えています', options:[['open2','しっぽを振って近づく'],['open1','少し確認してから近づく'],['watch1','飼い主の横で様子を見る'],['watch2','隠れる・吠える・強く警戒する']]},
  {key:'dogs', label:'向こうから犬が歩いてきたら？', type:'choice', cbarq:'犬への反応・警戒/友好性の参考項目です', options:[['open2','遊びたがる・近づきたがる'],['open1','相手を見て挨拶する'],['watch1','距離を取りながら観察する'],['watch2','避ける・吠える・固まる']]},
  {key:'place', label:'初めての公園や病院の待合室では？', type:'choice', cbarq:'新奇刺激への反応を、生活場面に置き換えています', options:[['challenge2','自分から歩いて探索する'],['challenge1','周りを見ながら少しずつ進む'],['safe1','飼い主の近くで確認する'],['safe2','動けない・帰りたがる']]},
  {key:'sound', label:'雷・工事音・物音がした時は？', type:'choice', cbarq:'音への敏感さの参考項目です', options:[['challenge1','一瞬見るがすぐ戻る'],['safe1','飼い主を見る・近くに来る'],['safe2','震える・隠れる・落ち着かない'],['active1','吠える・確認しに行く']]},
  {key:'foodNew', label:'初めてのフードを少し混ぜたら？', type:'choice', options:[['challenge2','すぐ食べる'],['challenge1','匂いを確認して食べる'],['safe1','少し警戒する'],['safe2','食べない・お腹が変わりやすい']]},
  {key:'activity', label:'何もない日の過ごし方は？', type:'choice', options:[['active2','よく動く・遊びに誘う'],['active1','散歩や遊びはしっかり楽しむ'],['calm1','普通〜少し控えめ'],['calm2','寝る時間が多い・動きが少ない']]},
  {key:'excite', label:'楽しいことが起きた直後は？', type:'choice', options:[['active2','なかなか落ち着かない'],['active1','少しすると落ち着く'],['calm1','比較的すぐ落ち着く'],['calm2','あまり反応しない・静か']]},
  {key:'bond', label:'家の中で、飼い主との距離感は？', type:'choice', cbarq:'飼い主への愛着・分離時反応の参考項目です', options:[['close2','いつも近くにいたい'],['close1','呼ぶと来る・よく目で追う'],['indie1','近くにいるが自分の時間も大事'],['indie2','かなりマイペース']]},
  {key:'alone', label:'留守番や家族が離れる時は？', type:'choice', cbarq:'分離時の不安傾向を家庭向けに確認します', options:[['close2','不安そう・鳴くことがある'],['close1','最初だけ気にする'],['indie1','だいたい落ち着いている'],['indie2','あまり気にしない']]},
  {key:'appetite', label:'いつものごはん時間は？', type:'choice', options:[['good','すぐ食べる'],['uneven','日によってムラがある'],['picky','おやつ・トッピングなら食べる'],['poor','あまり食べない・残す']]},
  {key:'treats', label:'おやつやごほうびを見ると？', type:'choice', options:[['normal','普通に喜ぶ'],['high','かなり反応する'],['family','家族からもよくもらう'],['training','ごほうびがあると集中しやすい']]},
  {key:'stomach', label:'フードを替えた時のお腹は？', type:'choice', options:[['stable','便は安定している'],['soft','たまにゆるくなる'],['sensitive','下痢・嘔吐が出やすい'],['unknown','よく分からない']]},
  {key:'stool', label:'最近の便で近いものは？', type:'choice', options:[['normal','形があり安定'],['soft','柔らかい日がある'],['diarrhea','下痢になりやすい'],['constipation','硬い・出にくい']]},
  {key:'vomit', label:'吐く・えずくことは？', type:'choice', options:[['rare','ほとんどない'],['sometimes','たまにある'],['often','月に何度もある'],['acute','最近急に増えた']]},
  {key:'waterUrine', label:'水を飲む量やおしっこの変化は？', type:'choice', options:[['normal','大きな変化なし'],['more','増えた気がする'],['muchmore','明らかに増えた'],['unknown','よく分からない']]},
  {key:'mouthState', label:'口・歯の様子は？', type:'choice', options:[['none','特になし'],['smell','口臭がある'],['chew','硬いものを避ける'],['pain','痛そう・出血・歯石が多い']]},
  {key:'currentFood', label:'今の主食は？', type:'choice', options:[['dry','ドライ中心'],['wet','ウェット/手作り多め'],['mixed','ドライ＋トッピング'],['therapeutic','療法食を使用中']]},
  {key:'treatAmount', label:'おやつの量は？', type:'choice', options:[['low','ほとんどあげない'],['moderate','少しあげる'],['high','主食に比べて多いと思う'],['unknown','家族分まで含めると不明']]},
  {key:'concerns', label:'今、気になることを選んでください', type:'multi', options:[['weight','体重管理'],['appetite','食べムラ'],['stomach','お腹・便'],['coat','皮膚・毛艶'],['joint','関節'],['mouth','口・歯'],['behavior','しつけ・行動'],['senior','シニア全般']]},
  {key:'checkup', label:'健診・治療で気になることは？', type:'multi', options:[['none','特になし'],['kidney','腎臓系'],['liver','肝臓系'],['lipid','中性脂肪/コレステロール'],['glucose','血糖'],['urine','尿検査'],['weightloss','体重減少'],['meds','服薬/療法食あり']]},
  {key:'labs', label:'健診数値メモ（任意）', type:'labs'},
  {key:'preference', label:'最後に、ごはん選びで重視したいことは？', type:'multi', options:[['small','小粒'],['japan','国産'],['grainfree','グレインフリー'],['cost','価格重視'],['ingredient','原材料重視'],['easy','続けやすさ重視']]}
]

let answers = {}
let step = 0

const WEIGHT_KEY = 'wannyan_weight_log'
function loadWeights(){
  try{ return JSON.parse(localStorage.getItem(WEIGHT_KEY) || '[]') }catch(e){ return [] }
}
function saveWeights(list){ localStorage.setItem(WEIGHT_KEY, JSON.stringify(list)) }
function addWeightEntry(date, weight){
  const list = loadWeights()
  list.push({date, weight: Number(weight)})
  list.sort((a,b)=> a.date.localeCompare(b.date))
  saveWeights(list)
}
function removeWeightEntry(idx){
  const list = loadWeights()
  list.splice(idx,1)
  saveWeights(list)
}

function rer(weight){ return 70 * Math.pow(Number(weight || 0), 0.75) }
function derMultiplier(a){
  if(a.age==='13+') return 1.1
  if(a.body==='obese') return 1.0
  if(a.neuter==='yes') return 1.4
  return 1.6
}
const labFields = [
  ['bun','BUN','mg/dL'], ['cre','Cre','mg/dL'], ['alt','ALT','U/L'], ['alp','ALP','U/L'],
  ['tg','TG','mg/dL'], ['tcho','T-Cho','mg/dL'], ['glu','GLU','mg/dL'], ['usg','尿比重',''], ['upc','UPC','']
]
function labNum(key){ return Number((answers.labs || {})[key] || 0) }

function trackEvent(name, params = {}){
  if(typeof window !== 'undefined' && typeof window.gtag === 'function'){
    window.gtag('event', name, params)
  }
}


const ARTICLES = [
  {
    "slug": "senior-dog-food-choice",
    "title": "10歳トイプードルが急にフードを残す。最初に見る順番",
    "lead": "「飽きた」だけで片づけず、口・吐き気・便・体重・健診結果の順に見ます。フードを替える前の確認リストです。",
    "sections": [
      [
        "年齢だけで替えると、外すことがあります",
        "7歳を過ぎると「そろそろシニア用ですか？」と聞かれることが増えます。ただ、同じ7歳でも、よく歩く子、太りやすくなった子、痩せてきた子では見る場所が違います。シニア用という名前より、今の体型と体重変化を先に見ます。"
      ],
      [
        "まず見るのはカロリーと脂質です",
        "袋の表で最初に確認したいのは、kcal/100g、粗脂肪、粗タンパク質、粒の大きさです。太りやすい子は低カロリー・低脂肪寄り、食が細くなった子は食べやすさや病気の確認を優先します。"
      ],
      [
        "健診で指摘がある子は、フード変更の前に一呼吸置く",
        "BUN、Cre、SDMA、ALT、ALP、TG、T-Cho、尿検査で気になる項目がある場合、ネットの情報だけで「腎臓に良さそう」「肝臓に良さそう」と選ぶのは危険です。療法食が必要な状態か、一般食で様子を見てよい状態かは、検査値と症状を合わせて判断します。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "senior-dog-feeding-calculator",
    "title": "チワワの体重が200g増えた。ごはんはどのくらい減らす？",
    "lead": "小型犬の200gは意外と大きい変化です。袋の給与量ではなく、体重記録とおやつ込みの総カロリーで調整します。",
    "sections": [
      [
        "袋の量が合わないことは普通にあります",
        "フード袋の給与量は出発点として便利です。ただ、避妊去勢、活動量、筋肉量、おやつの量で必要カロリーは変わります。袋通りにあげて太る子もいれば、足りない子もいます。"
      ],
      [
        "RERからざっくり計算する",
        "まず安静時エネルギー要求量（RER）を計算し、年齢や体型に合わせて1日の目安カロリーに調整します。正確な答えを一発で出すというより、体重記録で合わせ込むためのスタート地点です。"
      ],
      [
        "おやつは「別枠」にしない",
        "体重管理でよくある落とし穴は、おやつを計算に入れないことです。目安として、おやつは1日のカロリーの10%以内に収め、残りを主食で考えます。小型犬では数粒のおやつでも差が出ます。"
      ],
      [
        "急に痩せる時は計算で片づけない",
        "食欲が落ちた、急に痩せた、水をよく飲む、尿が増えた、嘔吐や下痢がある。こういう時はフード量の調整より受診が先です。シニア期の体重変化は病気のサインになることがあります。"
      ]
    ]
  },
  {
    "slug": "senior-dog-not-eating",
    "title": "柴犬が新しいフードを食べない時の切り替え方",
    "lead": "慎重な子は、味よりも匂い・食器・場所・混ぜる割合で止まることがあります。焦らず戻せる切り替え方をまとめます。",
    "sections": [
      [
        "急に食べないなら、まず体調を見ます",
        "昨日まで普通に食べていた子が急に食べない。元気がない、吐く、下痢をする、体重が落ちる。こういう時は、フードを探すより先に病院へ相談した方が安全です。"
      ],
      [
        "口と歯はかなり大事です",
        "シニア犬では、歯周病や口の痛みでドライフードを避けることがあります。粒を小さくする、ふやかす、香りを立てるだけで食べやすくなることもありますが、痛みがある場合は食事の工夫だけでは解決しません。"
      ],
      [
        "切り替えはゆっくりでいい",
        "新しいフードを急に増やすと、下痢や嘔吐につながることがあります。基本は7〜10日ほどかけて少しずつ混ぜます。お腹が弱い子は、もっとゆっくりでも構いません。"
      ],
      [
        "「食いつき重視」でも、成分は確認する",
        "食べてくれることは大事です。ただ、脂質が高いもの、おやつ扱いに近いもの、持病と相性が悪いものもあります。食いつきだけで選ばず、体重・便・健診結果と一緒に見ます。"
      ]
    ]
  },
  {
    "slug": "senior-dog-weight-control",
    "title": "健診で中性脂肪が高いと言われた犬のおやつ管理",
    "lead": "低脂肪フードを探す前に、まず家族全員のおやつ量・主食量・体型を揃えて見ます。",
    "sections": [
      [
        "太ってきた子は、おやつと脂質から見る",
        "活動量が落ちたのに、若い頃と同じ量を食べている。おやつが少しずつ増えている。脂質の高いフードに替えた。シニア期に太る時は、このあたりがよくあります。まずは1日の総カロリーを見ます。"
      ],
      [
        "痩せてきた子は、単に高カロリーへ替えない",
        "シニア犬の体重減少は、筋肉量の低下、歯や口の痛み、消化器、腎臓、内分泌、腫瘍など、いろいろな原因で起こります。高カロリーフードに替える前に、食欲、便、飲水量、尿量、健診結果を確認します。"
      ],
      [
        "体重は同じ条件で記録する",
        "抱っこして家庭用体重計で測る場合でも、同じ時間帯、同じ方法で続けると傾向が見えます。1回の数字より、2〜4週間の流れを見る方が役に立ちます。"
      ],
      [
        "目標は「急に変えない」こと",
        "減量も増量も、急ぎすぎると失敗しやすいです。食事量を少し調整し、便・食欲・体重を見ながら進めます。持病がある子は、必ず主治医と相談して決めます。"
      ]
    ]
  },
  {
    "slug": "prescription-diet-vs-regular-food",
    "title": "療法食を食べない時、勝手に一般食へ戻していい？",
    "lead": "腎臓・尿石・消化器などの療法食は治療の一部です。食べない時に相談で伝えることを整理します。",
    "sections": [
      [
        "療法食は治療の一部です",
        "腎臓、心臓、消化器、尿石、膵炎などで使う療法食は、特定の栄養素を調整して作られています。食べない、価格が高い、別のフードにしたいと思っても、自己判断で中止すると管理が崩れることがあります。"
      ],
      [
        "シニア用や低脂肪は、療法食の代わりではありません",
        "一般食にもシニア用、低脂肪、胃腸ケアなどの表示があります。ただし、療法食と同じ目的・基準で作られているわけではありません。名前が似ていても、使い方は別物です。"
      ],
      [
        "相談する時は、困っている理由を具体的に伝える",
        "「食べない」「便がゆるい」「値段が負担」「他の子のフードを食べてしまう」など、困っている理由をそのまま伝えると相談しやすくなります。代替案や混ぜ方、検査のタイミングを一緒に決められることがあります。"
      ],
      [
        "このサイトでは療法食の指示はしません",
        "わんにゃんごはんカルテは、療法食をやめる・替える判断は行いません。療法食中、服薬中、健診異常ありの場合は、主治医に相談する前提で情報を整理します。"
      ]
    ]
  },
  {
    "slug": "toy-poodle-senior-not-eating",
    "title": "トイプードルのシニア期、急な食べムラは犬種の傾向から見る",
    "lead": "小型犬は歯のトラブルや環境変化に敏感です。「わがまま」で片づける前に、トイプードルらしい原因から確認します。",
    "sections": [
      [
        "トイプードルは歯周病になりやすい犬種です",
        "小型犬は顎が小さく歯が密集しているため、歯石や歯周病が進みやすいと言われています。硬い粒を避ける、片側だけで噛む、口臭が強くなるといった様子があれば、好き嫌いではなく口の痛みが食べムラの原因になっていることがあります。"
      ],
      [
        "体が小さい分、変化のサインも小さく出ます",
        "トイプードルのような小型犬は体格が小さいため、1回の食欲不振や脱水の影響が大型犬より早く出やすい傾向があります。半日〜1日食べない状態が続く、元気がない、ぐったりしているといった様子があれば、様子見の期間は短めに考えます。"
      ],
      [
        "性格による「気分屋」と体調不良を分けて見る",
        "トイプードルは賢く神経質な一面を持つ子も多く、フードの匂いや食器、周囲の物音といった環境の変化だけで一時的に食べなくなることがあります。元気・便・飲水量・体重に変化がなければ環境要因の可能性もありますが、自己判断で決めつけず、気になる場合は様子をメモしておくと相談時に伝えやすくなります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "chihuahua-weight-gain",
    "title": "チワワが太ってきた。小型犬の体重管理はグラム単位で考える",
    "lead": "チワワのような超小型犬は、数百gの増減が体重比で大きく影響します。ごはん量を減らす前に見る点を整理します。",
    "sections": [
      [
        "小型犬は「少しの量」が体重に直結します",
        "チワワは元々の体重が軽いため、フードやおやつの数粒、量の誤差が体重比で見ると大きな影響になりやすい犬種です。計量カップの目分量ではなく、キッチンスケールで実際のグラム数を測って与えることをおすすめします。"
      ],
      [
        "肥満は関節・気管への負担が大きくなりやすい",
        "チワワは膝蓋骨脱臼や気管虚脱など、体重増加が症状を悪化させやすいと言われる持病を持つ子もいます。体重が増えてから対策を考えるより、増え始めの段階で食事量とおやつを見直す方が体への負担が少なく済みます。"
      ],
      [
        "おやつ・トッピング込みで1日の量を計算する",
        "主食のパッケージに書かれた給与量は、おやつやトッピングを含まない目安であることが一般的です。トレーニングのごほうびや家族からの少量のおやつが積み重なっている場合、それらも含めた1日の総カロリーで見直す必要があります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "dog-high-bun-food",
    "title": "健診でBUNが高いと言われた。フードを変える前に確認したいこと",
    "lead": "BUNは食事内容や体調で変動しやすい数値です。自己判断で療法食や高タンパク制限に切り替える前に、確認したい点を整理します。",
    "sections": [
      [
        "BUNは腎臓以外の要因でも変動します",
        "BUNは高タンパクな食事、脱水、消化管出血、運動量など、腎臓の機能以外の要因でも上下することがある数値です。1回の健診結果だけで「腎臓が悪い」と決めつけず、Cre・SDMAなど他の項目や、飲水量・尿量・食欲といった症状と合わせて見ることが必要です。"
      ],
      [
        "自己判断で低タンパクフードや療法食に替えない",
        "BUNが高いからといって、インターネットの情報だけで低タンパクフードや腎臓用の療法食に切り替えるのはおすすめできません。必要なタンパク質量は年齢や筋肉量によって異なり、過度な制限がかえって体調に影響することもあります。フードの変更は、自己判断で行わず、再検査の結果や症状と合わせて主治医に相談してください。"
      ],
      [
        "再検査のタイミングと記録の残し方",
        "健診で指摘を受けた場合、いつ・どのくらいの数値だったかを記録しておくと、次回の再検査や相談時に経過を伝えやすくなります。同時に、飲水量、尿の量や色、食欲、体重の変化もあわせてメモしておくと、原因を絞り込みやすくなります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  }
]

const TYPE_NAMES = {
  openchallengeactiveclose:'全力ハッピー隊長', openchallengeactiveindie:'ひとり探検アスリート', openchallengecalmclose:'にこにこ平和大使', openchallengecalmindie:'ゆるっと社交名人',
  opensafeactiveclose:'どきどき甘えんぼランナー', opensafeactiveindie:'慎重派の冒険家', opensafecalmclose:'やさしい空気読みさん', opensafecalmindie:'おっとり観察家',
  watchchallengeactiveclose:'飼い主専属アクティブさん', watchchallengeactiveindie:'マイワールド探検家', watchchallengecalmclose:'静かな相棒タイプ', watchchallengecalmindie:'職人気質のこだわりさん',
  watchsafeactiveclose:'一生懸命な甘えんぼさん', watchsafeactiveindie:'そろりそろり探検隊', watchsafecalmclose:'安心確認の寄り添いさん', watchsafecalmindie:'静かな安心職人'
}
const AXIS_COPY = {
  open:'人や犬、新しい場所に関心を向けやすい', watch:'外の刺激は少し距離を取って確認したい', challenge:'新しいことを試す力がある', safe:'安心できる手順があると動きやすい', active:'遊び・散歩・反応の熱量が高め', calm:'落ち着いた環境で安定しやすい', close:'飼い主とのつながりが安心材料', indie:'自分のペースや居場所を大切にする'
}
function scoreAxes(a){
  const sc={open:0,watch:0,challenge:0,safe:0,active:0,calm:0,close:0,indie:0}
  Object.values(a).forEach(v=>{ if(typeof v!=='string') return; ['open','watch','challenge','safe','active','calm','close','indie'].forEach(k=>{ if(v.startsWith(k)) sc[k]+=Number(v.slice(-1))||1 }) })
  return sc
}
function typeFor(a){ const sc=scoreAxes(a); const axes=[sc.open>=sc.watch?'open':'watch',sc.challenge>=sc.safe?'challenge':'safe',sc.active>=sc.calm?'active':'calm',sc.close>=sc.indie?'close':'indie']; return {name:TYPE_NAMES[axes.join('')]||'安心確認の寄り添いさん', axes} }
function profileFor(result){
  const axes = result.axes || ['watch','safe','calm','close']
  const lead = axes.map(x=>AXIS_COPY[x]).join('、') + 'タイプです。性格の良し悪しではなく、暮らし方・ごはんの変え方を考えるための整理です。'
  const likely = axes.map(x=>AXIS_COPY[x])
  const care = []
  care.push(axes.includes('safe')?'変更は一つずつ、短い成功体験を積む':'新しい体験は安全を確保しながら楽しませる')
  care.push(axes.includes('active')?'興奮する前に休憩と落ち着く合図を入れる':'静かな休憩場所といつもの流れを大切にする')
  care.push(axes.includes('close')?'飼い主の声かけ・ごほうびを使って安心させる':'無理に構いすぎず、自分で選べる距離を残す')
  const food = []
  food.push(axes.includes('safe')?'フード変更は7〜10日以上かけてゆっくり':'新しいフードも少量から反応を見る')
  food.push(axes.includes('active')?'おやつをごほうびに使う日は主食から差し引く':'活動量低下に合わせてカロリーを見直す')
  food.push('体重・便・食欲・健診結果をセットで見る')
  return {name:result.name, axes, lead, likely, care, food}
}
function displayTags(tags, breedGroup){
  const breedLabel = BREED_GROUPS[breedGroup]
  return breedLabel ? tags.filter(x=>x !== breedLabel) : tags
}
function subTags(a, redFlags=[], watch=[]){
  const tags=[]; const concerns=a.concerns||[]; const c=a.checkup||[]
  if(a.breedGroup && BREED_GROUPS[a.breedGroup]) tags.push(BREED_GROUPS[a.breedGroup])
  if(a.treats==='high'||a.treats==='family'||a.treats==='training') tags.push('ごほうび反応強め')
  if(a.appetite==='uneven'||a.appetite==='picky'||concerns.includes('appetite')) tags.push('食べムラあり')
  if(a.stomach==='soft'||a.stomach==='sensitive'||a.stool==='soft'||a.stool==='diarrhea'||concerns.includes('stomach')) tags.push('お腹そっと派')
  if(a.body==='chubby'||a.body==='obese'||concerns.includes('weight')) tags.push('体重管理')
  if(a.body==='thin'||a.appetite==='poor'||c.includes('weightloss')) tags.push('食細め注意')
  if(concerns.includes('mouth')||['smell','chew','pain'].includes(a.mouthState)) tags.push('口・歯チェック')
  if(concerns.includes('joint')) tags.push('関節配慮')
  if(concerns.includes('coat')) tags.push('皮膚・毛づや配慮')
  if(a.treatAmount==='high'||a.treatAmount==='unknown') tags.push('おやつ量確認')
  if(redFlags.length || watch.length || c.some(x=>x!=='none') || a.currentFood==='therapeutic') tags.push('健診相談あり')
  return [...new Set(tags)].slice(0,6)
}

function calcResult(a){
  const redFlags = []
  const watch = []
  const c = a.checkup || []
  if(c.includes('kidney') || labNum('cre') >= 1.4 || labNum('bun') >= 30) redFlags.push('腎臓系が気になる場合は、自己判断でタンパク質・リンを調整せず、主治医に相談してください。')
  if(c.includes('liver') || labNum('alt') >= 120 || labNum('alp') >= 350) redFlags.push('肝臓系が気になる場合は、サプリや高脂質フードを足す前に主治医へ確認してください。')
  if(c.includes('weightloss')) redFlags.push('シニア期の体重減少は食事だけで判断せず、検査・診察で原因確認が必要です。')
  if(c.includes('meds')) redFlags.push('服薬中・療法食中の場合は、フード変更前に必ず獣医師へ相談してください。')
  if(c.includes('urine') || (labNum('usg') > 0 && labNum('usg') < 1.025) || labNum('upc') >= 0.5) watch.push('尿検査に気になる点がある場合は、飲水量・尿量・腎臓系の確認とセットで考える必要があります。')
  if(c.includes('lipid') || labNum('tg') >= 150 || labNum('tcho') >= 300) watch.push('脂質系が気になる場合は、まず脂質量・おやつ・体型管理を優先して見直します。')
  if(c.includes('glucose') || labNum('glu') >= 130) watch.push('血糖が気になる場合は、食事変更だけで判断せず、再検査や尿糖の確認も含めて相談してください。')
  if(a.currentFood==='therapeutic') redFlags.push('現在療法食を使っている場合、一般食や別の療法食への変更は主治医確認が必要です。')
  if(a.vomit==='acute' || a.vomit==='often') redFlags.push('吐く回数が多い・急に増えた場合は、フード選びより先に受診相談を優先してください。')
  if(a.waterUrine==='muchmore') redFlags.push('飲水量や尿量が明らかに増えた場合は、腎臓・内分泌・尿検査を含めた確認が必要です。')
  if(a.mouthState==='pain') watch.push('口の痛み・出血・歯石が目立つ場合、食べムラの原因がフードではなく口腔内にあることがあります。')
  const typeResult = typeFor(a)
  const profile = profileFor(typeResult)
  const tags = subTags(a, redFlags, watch)
  const therapyFoods = therapeuticCandidates(a)
  const scored = FOODS.map(f=>{
    let s=0; const reasons=[]
    if(f.tags.includes('senior')) {s+=2; reasons.push('シニア期向け')}
    if(tags.includes('体重管理') && (f.kcal<355 || f.tags.includes('lowfat') || f.tags.includes('weight'))) {s+=5; reasons.push('カロリー/脂質を見直しやすい')}
    if(tags.includes('食べムラあり') && (f.tags.includes('palatable') || f.tags.includes('wet') || f.tags.includes('fresh'))) {s+=5; reasons.push('食いつき配慮')}
    if(tags.includes('お腹そっと派') && (f.tags.includes('stomach') || f.tags.includes('lowfat'))) {s+=4; reasons.push('お腹・便に配慮')}
    if(tags.includes('皮膚・毛づや配慮') && f.tags.includes('coat')) {s+=3; reasons.push('皮膚・毛艶ケアを意識')}
    if(tags.includes('食細め注意') && (f.tags.includes('palatable') || f.tags.includes('fresh') || f.tags.includes('wet'))) {s+=3; reasons.push('食べやすさを意識')}
    if((a.preference||[]).includes('small') && f.tags.includes('small')) {s+=2; reasons.push('小粒寄り')}
    if((a.preference||[]).includes('cost') && f.priceKg<1600) {s+=3; reasons.push('続けやすい価格帯')}
    if((a.preference||[]).includes('japan') && f.tags.includes('japan')) {s+=2; reasons.push('国産系')}
    return {...f, score:s, reasons: reasons.slice(0,3)}
  }).sort((a,b)=>b.score-a.score).slice(0,3)
  const kcal = rer(a.weight) * derMultiplier(a)
  return {type:typeResult.name, profile, tags, breedNote: BREED_NOTES[a.breedGroup] || '', redFlags, watch, foods:scored, therapyFoods, kcal, snack:kcal*0.1, hasWeight:Number(a.weight)>0}
}

function render(){
  document.querySelector('#app').innerHTML = `
    <header class="site-header"><div class="brand">わんにゃんごはんカルテ</div><nav class="nav-links"><a href="/products/">商品一覧</a><a href="/products/compare/">比較</a><a href="#articles">記事</a><a href="/type-guides/">タイプ別ガイド</a><a href="#tracker">体重記録</a><a href="/pdf-karute/">詳細ごはんカルテPDF</a></nav><a href="#diagnosis" class="mini-cta js-diagnosis-start" data-location="header">無料でチェック</a></header>
    <div style="background:#f4f0e6;color:#62665b;font-size:.78rem;text-align:center;padding:6px 12px;font-weight:700;letter-spacing:.02em">PR｜本サイトはアフィリエイト広告を利用しています</div>
    <main>
      <section class="hero"><div class="hero-copy"><p class="eyebrow">うちの子の性格・食べ方・健診結果を、ひとつのカルテに</p><h1>うちの子らしさから、ごはんと暮らしを整える。</h1><p class="lead">犬の行動評価で使われる考え方を参考に、社交性・慎重さ・活動性・飼い主との距離感を家庭向けに整理。研究用尺度そのものではなく、暮らしと食事相談のためのセルフチェックです。</p><div class="hero-actions"><a href="#diagnosis" class="primary js-diagnosis-start" data-location="hero">うちの子のタイプを見る</a><a href="/pdf-karute/" class="secondary">PDFカルテを見る</a></div><div class="trust"><span>約3分</span><span>登録不要</span><span>医療判断ではなく相談前の整理</span></div></div><aside class="hero-karute"><span class="karte-label">KARTE SAMPLE</span><strong>16</strong><p>うちの子タイプ診断</p><small>行動・食べ方・健診メモを一緒に整理</small></aside></section>
      <section class="cards" id="why"><article><span>01</span><h2>16タイプ診断</h2><p>性格・行動の傾向を、覚えやすい「うちの子タイプ」で表示します。</p></article><article><span>02</span><h2>ごはん量とおやつ</h2><p>体重から目安カロリーと、おやつの上限をざっくり計算します。</p></article><article><span>03</span><h2>根拠と健診メモ</h2><p>研究用尺度とは区別したセルフチェックとして、腎臓・肝臓・尿検査など相談項目も整理します。</p></article></section>
      <section class="diagnosis" id="diagnosis">${renderDiagnosis()}</section>
      <section class="tracker" id="tracker">${renderTracker()}</section>
      <section class="article-list" id="articles"><h2>シニア犬のごはん記事</h2><p class="helper">診察室でよく出る悩みを、できるだけ普通の言葉でまとめました。記事末に参考文献も載せています。</p><div class="article-cards">${ARTICLES.map(a=>`<a class="article-card js-article-click" data-article="${a.slug}" href="/articles/${a.slug}/"><span>記事</span><strong>${a.title}</strong><small>${a.lead}</small></a>`).join('')}</div><p><a class="secondary" href="/type-guides/">タイプ別ごはんガイドを見る</a></p></section>
      <section class="article-list" id="compare"><h2>シニア犬フード比較</h2><p class="helper">検索されやすい切り口で、候補フードのカロリー・脂質・注意点を比較します。</p><div class="article-cards"><a class="article-card" href="/products/compare/senior-dog-low-fat/"><span>比較</span><strong>低脂肪ドッグフード比較</strong><small>脂質や体重管理が気になるシニア犬向け。</small></a><a class="article-card" href="/products/compare/senior-dog-small-kibble/"><span>比較</span><strong>小粒ドッグフード比較</strong><small>口・歯・食べやすさが気になる小型シニア犬向け。</small></a><a class="article-card" href="/products/compare/senior-dog-weight-control/"><span>比較</span><strong>体重管理ドッグフード比較</strong><small>太りやすくなったシニア犬の食事整理に。</small></a></div></section>
    </main>
    <footer><p>本サイトはペットフード選びの参考情報を提供するもので、診断・治療・療法食の指示ではありません。持病、症状、療法食利用中の場合は獣医師に相談してください。<br><a href="/legal/tokushoho/">特定商取引法に基づく表記</a>　<a href="/legal/privacy/">プライバシーポリシー</a></p></footer>`
  bindEvents()
}


function renderArticle(article){
  return `<article class="article-full" id="article-${article.slug}"><p class="eyebrow">読みもの</p><h2>${article.title}</h2><p class="lead small">${article.lead}</p>${article.sections.map(([h,b])=>`<section><h3>${h}</h3><p>${b}</p></section>`).join('')}<div class="article-cta"><a class="primary" href="#diagnosis">シニア犬フード診断を試す</a><a class="secondary" href="#tracker">体重記録を使う</a></div></article>`
}

function renderDiagnosis(){
  if(step >= QUESTIONS.length){
    const r = calcResult(answers)
    const name = answers.dogName ? `${answers.dogName}ちゃん` : 'うちの子'
    const shownTags = displayTags(r.tags, answers.breedGroup)
    return `<div class="result karte"><p class="eyebrow">うちの子ごはん・暮らしカルテ</p><div class="type-card"><div><span class="type-code">16タイプ診断</span><h2>${name}は「${r.type}」</h2><p>${r.profile.lead}</p></div><div class="type-animal">${answers.breedGroup && BREED_GROUPS[answers.breedGroup] ? BREED_GROUPS[answers.breedGroup] : '暮らしタイプ'}</div></div><div class="trait-list">${shownTags.map(x=>`<span>${x}</span>`).join('')}</div>
      ${r.hasWeight ? `<div class="result-grid"><div class="metric"><strong>${Math.round(r.kcal)} kcal/日</strong><span>目安必要カロリー</span></div><div class="metric"><strong>${Math.round(r.snack)} kcal/日まで</strong><span>おやつ上限の目安</span></div></div>` : `<div class="note"><h3>カロリー計算</h3><p>体重を入力すると、目安カロリーとおやつ上限を表示できます。今回はタイプ判定と注意点のみ表示します。</p></div>`}
      <div class="share-panel"><button class="primary save-share" type="button">結果画像を保存</button><button class="secondary native-share" type="button">LINE/Xで共有</button><canvas id="shareCanvas" width="1200" height="630" aria-label="診断結果シェア画像"></canvas><p class="helper">画像には医療情報や健診数値は入れず、タイプ名だけを共有します。</p></div><div class="karte-section"><h3>この子にありそうなこと</h3><ul>${r.profile.likely.map(x=>`<li>${x}</li>`).join('')}${r.breedNote ? `<li>${r.breedNote}</li>` : ''}</ul></div>
      <div class="karte-section"><h3>接し方のコツ</h3><ul>${r.profile.care.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="karte-section"><h3>ごはんの見直し方</h3><ul>${r.profile.food.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      ${r.redFlags.length ? `<div class="alert"><h3>フード変更前に主治医へ確認</h3><ul>${r.redFlags.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}
      ${r.watch.length ? `<div class="note"><h3>健診メモ</h3><ul>${r.watch.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}
      <div class="note"><h3>この診断について</h3><p>C-BARQ（Canine Behavioral Assessment & Research Questionnaire）の考え方を参考に、家庭で答えやすい場面へ置き換えたセルフチェックです。C-BARQ公式尺度そのものではなく、医学的診断・行動診断でもありません。</p><a class="text-link" href="/about-diagnosis/">参考にしている考え方を見る</a></div>
      ${r.therapyFoods.length ? `<div class="alert therapy"><h3>療法食を相談するなら</h3><p>血液検査・尿検査・服薬状況がある場合に、PDFカルテ側で整理して主治医に確認しやすくする候補です。無料診断では購入推奨ではなく「相談候補」として表示します。</p><div class="foods therapy-foods">${r.therapyFoods.map(f=>`<article class="food"><h4>${f.name}</h4><p>${f.maker}</p><ul><li>${f.note}</li></ul></article>`).join('')}</div></div>`:''}
      <h3>タイプに合わせた候補フード</h3><p class="helper">商品提案はサブです。健診異常・服薬・療法食がある場合は購入前に主治医へ確認してください。</p><div class="foods">${r.foods.map(f=>`<article class="food"><h4>${f.name}</h4><p>${f.maker} / ${f.kcal}kcal / 脂質${f.fat}% / 約${f.priceKg.toLocaleString()}円/kg</p><ul>${(f.reasons.length?f.reasons:['条件に比較的合いやすい']).map(x=>`<li>${x}</li>`).join('')}</ul><div class="food-actions">${f.url !== '#' ? `<a class="primary buy-link" data-product="${f.name}" data-maker="${f.maker}" href="${f.url}" target="_blank" rel="noopener sponsored">通販サイトで見る</a>` : ''}${productDetailUrl(f.name) !== '#' ? `<a class="text-link product-link" data-product="${f.name}" data-maker="${f.maker}" href="${productDetailUrl(f.name)}">くわしく見る</a>` : ''}</div></article>`).join('')}</div>
      <div class="pdf-cta"><p class="eyebrow">有料PDFで追加されること</p><h3>健診表・今のフード・おやつ量を、主治医に相談しやすい1枚へ</h3><p>無料診断は「方向性」まで。PDFカルテでは、検査値・体重・便・食べ方をまとめ、家族や病院で話しやすいメモにします。</p><div class="pdf-mini-grid"><span>健診数値の転記</span><span>相談ポイント整理</span><span>買う前の注意点</span></div><p class="helper"><strong>おすすめ：</strong>健診で指摘がある、療法食中、食べムラや体重変化を家族で共有したい子。<br><strong>不要：</strong>今すぐ症状が強い子は、申込みより先に受診してください。</p><a class="primary pdf-interest" data-price="980" href="/pdf-karute/">980円で相談用カルテを作る</a><small>決済後に入力フォームへ進み、2〜3営業日以内にPDFをお届けします。</small></div>
      <button class="secondary reset">もう一度診断</button></div>`
  }
  const q = QUESTIONS[step]
  return `<div class="question"><p class="progress">${step+1} / ${QUESTIONS.length}</p><h2>${q.label}</h2>${q.cbarq ? `<p class="cbarq-hint">C-BARQを参考にした観察項目｜${q.cbarq}（公式尺度・診断ではありません）</p>` : ''}${renderInput(q)}<div class="nav"><button class="secondary back" ${step===0?'disabled':''}>戻る</button><button class="primary next">${step===QUESTIONS.length-1?'結果を見る':'次へ'}</button></div></div>`
}
function renderTracker(){
  const list = loadWeights()
  const latest = list[list.length-1]
  const prev = list[list.length-2]
  let trend = ''
  if(latest && prev){
    const diff = Math.round((latest.weight - prev.weight)*10)/10
    trend = diff > 0 ? `前回より+${diff}kg` : diff < 0 ? `前回より${diff}kg` : '前回から変化なし'
  }
  return `<p class="eyebrow">継続して見守る</p><h2>体重記録</h2><p class="helper">日付と体重を記録すると、増減の傾向を確認できます。データはこの端末内にのみ保存されます。</p>
    <form class="weight-form"><input type="date" name="w-date" value="${new Date().toISOString().slice(0,10)}" required><input type="number" name="w-value" step="0.1" min="0" placeholder="例：5.2" required><span>kg</span><button type="submit" class="primary">記録する</button></form>
    ${latest ? `<div class="metric"><strong>${latest.weight}kg</strong><span>${latest.date}時点${trend ? '・'+trend : ''}</span></div>` : ''}
    ${list.length ? `<ul class="weight-list">${list.slice().reverse().map((e,i)=>`<li><span>${e.date}</span><span>${e.weight}kg</span><button type="button" class="text-link del-weight" data-idx="${list.length-1-i}">削除</button></li>`).join('')}</ul>` : '<p class="helper">まだ記録がありません。</p>'}`
}
function renderInput(q){
  if(q.type==='text') return `<label class="number text-input"><input type="text" value="${answers[q.key]||''}" data-key="${q.key}" placeholder="${q.placeholder||''}"></label>`
  if(q.type==='number') return `<label class="number"><input type="number" min="0" step="0.1" value="${answers[q.key]||''}" data-key="${q.key}" placeholder="${q.placeholder}"><span>${q.suffix}</span></label>`
  if(q.type==='labs') return `<p class="helper">空欄でも進めます。健康診断用紙がある場合だけ入力してください。</p><div class="lab-grid">${labFields.map(([k,l,u])=>`<label><span>${l}</span><input type="number" step="0.001" data-lab="${k}" value="${(answers.labs||{})[k]||''}" placeholder="${u}"></label>`).join('')}</div>`
  const multi = q.type==='multi'
  return `<div class="options">${q.options.map(([v,l])=>`<label class="option"><input type="${multi?'checkbox':'radio'}" name="${q.key}" value="${v}" ${isChecked(q.key,v,multi)?'checked':''}>${l}</label>`).join('')}</div>`
}
function isChecked(k,v,multi){ return multi ? (answers[k]||[]).includes(v) : answers[k]===v }
function canProceed(q){
  if(q.type==='text' || q.type==='labs') return true
  if(q.type==='number') return q.key!=='weight' || Number(answers[q.key])>0
  if(q.type==='multi') return true
  return Boolean(answers[q.key])
}
function drawShareCard(){
  const canvas = document.querySelector('#shareCanvas')
  if(!canvas) return null
  const r = calcResult(answers)
  const name = answers.dogName ? `${answers.dogName}ちゃん` : 'うちの子'
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#faf7ef'; ctx.fillRect(0,0,1200,630)
  ctx.fillStyle = '#f1eadb'; ctx.beginPath(); ctx.arc(1010,120,210,0,Math.PI*2); ctx.fill()
  ctx.fillStyle = '#29543a'; ctx.fillRect(0,0,1200,18)
  ctx.fillStyle = '#263028'; ctx.font = 'bold 42px sans-serif'; ctx.fillText('わんにゃんごはんカルテ', 76, 92)
  ctx.fillStyle = '#6f8a55'; ctx.font = 'bold 28px sans-serif'; ctx.fillText('C-BARQ参考セルフチェック', 76, 138)
  ctx.fillStyle = '#17211a'; ctx.font = 'bold 62px sans-serif'; ctx.fillText(`${name}は`, 76, 242)
  ctx.fillStyle = '#29543a'; ctx.font = 'bold 74px sans-serif'; wrapCanvasText(ctx, `「${r.type}」`, 76, 330, 860, 86)
  ctx.fillStyle = '#3f463d'; ctx.font = '30px sans-serif'; wrapCanvasText(ctx, r.profile.axes.map(x=>AXIS_COPY[x]).join('、'), 76, 450, 780, 42)
  ctx.fillStyle = '#b8834b'; ctx.font = 'bold 28px sans-serif'; ctx.fillText('wannyan-gohan.com', 76, 566)
  ctx.fillStyle = '#29543a'; ctx.font = 'bold 120px sans-serif'; ctx.fillText('16', 930, 370)
  ctx.font = 'bold 30px sans-serif'; ctx.fillText('TYPE', 950, 418)
  return canvas
}
function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight){
  let line=''
  for(const ch of text){
    const test = line + ch
    if(ctx.measureText(test).width > maxWidth && line){ ctx.fillText(line, x, y); line = ch; y += lineHeight } else line = test
  }
  if(line) ctx.fillText(line, x, y)
}
function shareResult(){
  const r = calcResult(answers)
  const name = answers.dogName ? `${answers.dogName}ちゃん` : 'うちの子'
  const text = `${name}は「${r.type}」でした。C-BARQ参考セルフチェック｜わんにゃんごはんカルテ`
  const url = location.origin || 'https://www.wannyan-gohan.com'
  if(navigator.share){ navigator.share({title:'わんにゃんごはんカルテ診断結果', text, url}).catch(()=>{}) }
  else { window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank', 'noopener') }
  trackEvent('result_share_click', {result_type:r.type})
}
function saveShareImage(){
  const canvas = drawShareCard()
  if(!canvas) return
  const a = document.createElement('a')
  a.download = 'wannyan-gohan-type.png'
  a.href = canvas.toDataURL('image/png')
  a.click()
  trackEvent('result_share_image_save')
}

function bindEvents(){
  document.querySelectorAll('.js-diagnosis-start').forEach(el=>el.addEventListener('click', e=>{
    trackEvent('diagnosis_start', {location: e.currentTarget.dataset.location || 'unknown'})
  }))
  document.querySelectorAll('.js-article-click').forEach(el=>el.addEventListener('click', e=>{
    trackEvent('article_click', {article: e.currentTarget.dataset.article || 'unknown'})
  }))
  document.querySelectorAll('.product-link').forEach(el=>el.addEventListener('click', e=>{
    trackEvent('product_click', {product: e.currentTarget.dataset.product || 'unknown', maker: e.currentTarget.dataset.maker || 'unknown', linked: true, target: 'detail'})
  }))
  document.querySelectorAll('.buy-link').forEach(el=>el.addEventListener('click', e=>{
    trackEvent('product_click', {product: e.currentTarget.dataset.product || 'unknown', maker: e.currentTarget.dataset.maker || 'unknown', linked: true, target: 'affiliate'})
  }))
  document.querySelector('.pdf-interest')?.addEventListener('click', e=>{
    trackEvent('pdf_interest_click', {price: Number(e.currentTarget.dataset.price) || 980})
  })
  document.querySelector('.save-share')?.addEventListener('click', saveShareImage)
  document.querySelector('.native-share')?.addEventListener('click', shareResult)
  drawShareCard()
  document.querySelectorAll('input[type=radio]').forEach(el=>el.addEventListener('change', e=>{answers[e.target.name]=e.target.value}))
  document.querySelectorAll('input[type=checkbox]').forEach(el=>el.addEventListener('change', e=>{const k=e.target.name; answers[k]=answers[k]||[]; answers[k]=e.target.checked?[...new Set([...answers[k],e.target.value])]:answers[k].filter(x=>x!==e.target.value)}))
  document.querySelectorAll('input[data-key]').forEach(el=>el.addEventListener('input', e=>{answers[e.target.dataset.key]=e.target.value}))
  document.querySelectorAll('input[data-lab]').forEach(el=>el.addEventListener('input', e=>{answers.labs=answers.labs||{}; answers.labs[e.target.dataset.lab]=e.target.value}))
  document.querySelector('.next')?.addEventListener('click', ()=>{
    if(step === 0) trackEvent('diagnosis_start', {location: 'question_next'})
    const q = QUESTIONS[step]
    if(!canProceed(q)){ alert(q.key==='weight' ? '体重を入力してください。カロリーとおやつ上限の計算に使います。' : '近いものを選んでください。'); return }
    const finishing = step === QUESTIONS.length - 1
    step++
    if(finishing){
      const r = calcResult(answers)
      trackEvent('diagnosis_complete', {result_type: r.type, sub_tags: r.tags.join(','), has_checkup_flags: (answers.checkup || []).filter(x=>x !== 'none').length > 0})
    }
    render(); location.hash='diagnosis'
  })
  document.querySelector('.back')?.addEventListener('click', ()=>{if(step>0) step--; render()})
  document.querySelector('.reset')?.addEventListener('click', ()=>{trackEvent('diagnosis_reset'); answers={}; step=0; render()})
  document.querySelector('.weight-form')?.addEventListener('submit', e=>{
    e.preventDefault()
    const date = e.target['w-date'].value
    const weight = e.target['w-value'].value
    if(!date || !weight || Number(weight) <= 0) return
    addWeightEntry(date, weight)
    trackEvent('weight_record_save', {weight: Number(weight)})
    render()
    location.hash = 'tracker'
  })
  document.querySelectorAll('.del-weight').forEach(el=>el.addEventListener('click', e=>{
    removeWeightEntry(Number(e.target.dataset.idx))
    trackEvent('weight_record_delete')
    render()
    location.hash = 'tracker'
  }))
}
render()
