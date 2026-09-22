import './style.css'

const FOODS = [
  {name:'ニュートロ シュプレモ シニア犬用', maker:'Nutro', kcal:350, protein:26, fat:13, priceKg:1900, tags:['senior','coat','balanced','small'], mainProtein:'チキン', fiber:4.0, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41c22.08fe12c0.57b41c23.755a6e9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnyanzaq%2F4562358781827%2F&link_type=hybrid_url&ut=eyJwYW...c2V9'},
  {name:'ヒルズ サイエンス・ダイエット シニア 小型犬用', maker:'Hill’s', kcal:365, protein:19, fat:14, priceKg:1300, tags:['senior','small','cost','balanced'], mainProtein:'チキン', fiber:2.3, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41d3d.0196a071.57b41d3e.22d83eeb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsweet-pet%2F118579662%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ロイヤルカナン ミニ エイジング12+', maker:'Royal Canin', kcal:383, protein:24, fat:14, priceKg:1700, tags:['senior','small','palatable'], mainProtein:'チキン', fiber:2.5, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41e37.7d60f1c7.57b41e38.dcb0788f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1096dog%2Fw-120005-00-00%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'アカナ シニアドッグ', maker:'ACANA', kcal:332, protein:33, fat:14, priceKg:2300, tags:['senior','protein','weight'], mainProtein:'チキン', fiber:6, url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3I7X0Y+5FPU+5YJRM'},
  {name:'ピュリナ ワン 7歳以上 ほぐし粒入り', maker:'Purina', kcal:360, protein:27, fat:13, priceKg:900, tags:['senior','cost','palatable'], mainProtein:'チキン', fiber:4.5, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41f4a.7a14458b.57b41f4b.35feaa3c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbadasai%2F4902201206563%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'このこのごはん', maker:'オモヤ', kcal:343, protein:20.9, fat:8.2, priceKg:3800, tags:['small','lowfat','japan','coat'], mainProtein:'チキン', url:'https://hb.afl.rakuten.co.jp/ichiba/57b796b2.783134fe.57b796b9.ae291207/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonokototomoni%2Fkonoko-01%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'モグワン ドッグフード', maker:'レティシアン', kcal:361, protein:27, fat:10, priceKg:2600, tags:['balanced','palatable','coat'], mainProtein:'チキン', fiber:4.75, url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2SMA0I+3J8+1HKDAR&a8ejpredirect=https%3A%2F%2Fwww.mogwandogfood.co.jp%2F7700%2F'},
  {name:'犬猫生活 ドッグフード シニア', maker:'犬猫生活', kcal:347, protein:24, fat:10, priceKg:3200, tags:['senior','japan','lowfat'], mainProtein:'チキン', fiber:3, url:'https://hb.afl.rakuten.co.jp/ichiba/57b797c2.9582bd06.57b797c3.18668413/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Finuneko-seikatsu%2Fdog_sr_chi_sma%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'セレクトバランス エイジングケア チキン', maker:'Select Balance', kcal:350, protein:20, fat:10, priceKg:1500, tags:['senior','lowfat','cost','small'], mainProtein:'チキン', fiber:5.5, kibbleSize:'小粒', url:'https://hb.afl.rakuten.co.jp/ichiba/57b41f84.bf4f5b64.57b41f85.19f72c13/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvetschoice%2F4541851006200%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'プロマネージ 7歳からの室内犬用', maker:'PROMANAGE', kcal:355, protein:24, fat:12, priceKg:1000, tags:['senior','cost','small'], mainProtein:'チキン', fiber:5.0, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41c22.08fe12c0.57b41c23.755a6e9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnyanzaq%2F81211%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'アイムス 7歳以上 健康サポート', maker:'IAMS', kcal:365, protein:24, fat:11, priceKg:850, tags:['senior','cost'], mainProtein:'チキン', fiber:4.0, url:'https://hb.afl.rakuten.co.jp/ichiba/57b5a5f6.8d9dfb7c.57b5a5f7.4393bfe4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fthinkrich%2Fsk09926%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ユーカヌバ シニア 小型犬用', maker:'Eukanuba', kcal:376, protein:27, fat:15, priceKg:1500, tags:['senior','small','palatable'], mainProtein:'チキン', fiber:2.7, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41e37.7d60f1c7.57b41e38.dcb0788f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1096dog%2Fw-162060-00-00%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ナウフレッシュ スモールブリード シニア', maker:'NOW FRESH', kcal:341, protein:24, fat:12, priceKg:3100, tags:['senior','small','grainfree','weight'], mainProtein:'ターキー', fiber:5.5, url:'https://hb.afl.rakuten.co.jp/ichiba/57b79ceb.e7a018b7.57b79cec.f9af103e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdogparadise%2F4573160559030%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'オリジン シニア', maker:'ORIJEN', kcal:371, protein:38, fat:15, priceKg:3200, tags:['senior','protein','ingredient'], mainProtein:'チキン', fiber:6, url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3I7X0Y+5FPU+5YRHE'},
  {name:'ソルビダ グレインフリー チキン 室内飼育7歳以上', maker:'SOLVIDA', kcal:350, protein:23, fat:10, priceKg:2600, tags:['senior','grainfree','lowfat','coat'], mainProtein:'チキン', fiber:6, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41f84.bf4f5b64.57b41f85.19f72c13/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvetschoice%2F4562312014527%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'アーテミス アガリクス I/S 小粒', maker:'Artemis', kcal:358, protein:24, fat:14, priceKg:2100, tags:['small','stomach','palatable'], mainProtein:'チキン', fiber:4.0, kibbleSize:'小粒', url:'https://hb.afl.rakuten.co.jp/ichiba/57b79ceb.e7a018b7.57b79cec.f9af103e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdogparadise%2F8133690054908%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ナチュロル', maker:'楽しい製薬', kcal:400, protein:23, fat:10, priceKg:3600, tags:['japan','palatable','ingredient'], url:'https://reason-why.jp/naturol/se/'},
  {name:'馬肉自然づくり', maker:'健康いぬ生活', kcal:399, protein:27, fat:11, priceKg:3300, tags:['japan','palatable','ingredient'], mainProtein:'馬肉', fiber:5.2, url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2PN3ZM+3E6W+TR13N&a8ejpredirect=http%3A%2F%2Fkenko-dog.com%2Flp%2Fbanikushizendukuri-teiki%2F'},
  {name:'Yum Yum Yum! シニア&ライト チキン', maker:'GREEN DOG', kcal:320, protein:20, fat:8.5, priceKg:4200, tags:['senior','japan','lowfat','weight','small'], mainProtein:'チキン', url:'https://hb.afl.rakuten.co.jp/ichiba/57bd8fda.8dbe604e.57bd8fdb.677d0384/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpetoukokupremium%2F6554%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ミシュワン シニア犬用', maker:'ミシュワン', kcal:332, protein:21.5, fat:9.5, priceKg:3800, tags:['senior','japan','small','lowfat'], mainProtein:'チキン', kibbleSize:'小粒', url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3257OY+4PA6+C2O5E'},
  {name:'Dr.ケアワン', maker:'アニマルライフ研究所', kcal:347, protein:22.5, fat:7.5, priceKg:3900, tags:['japan','lowfat','coat','small'], mainProtein:'チキン', fiber:2.5, url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+3C9KZ6+3RW8+BX3J6'},
  {name:'ペトコトフーズ チキン', maker:'PETOKOTO', kcal:150, protein:13, fat:5.4, priceKg:5200, tags:['fresh','palatable','stomach'], mainProtein:'チキン', url:'https://hb.afl.rakuten.co.jp/ichiba/57b799d3.42c5d4fb.57b799d4.8e599777/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpetokotofoods%2F5345%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ブッチ ブラック・レーベル', maker:'Butch', kcal:116, protein:10.5, fat:8, priceKg:2600, tags:['wet','palatable','senior'], mainProtein:'ビーフ', fiber:1.0, url:'https://butch-japan.co.jp/products/blacklabel800'},
  {name:'カナガン ドッグフード チキン', maker:'レティシアン', kcal:376, protein:29, fat:15, priceKg:2600, tags:['grainfree','palatable','protein'], mainProtein:'チキン', fiber:5.25, kibbleSize:'小粒', url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2Q8JLE+3J8+NSP1V&a8ejpredirect=https%3A%2F%2Fwww.canagandogfood.co.jp%2F3503%2F'},
  {name:'ネルソンズ ドッグフード', maker:'レティシアン', kcal:365, protein:28, fat:12, priceKg:2200, tags:['medium','ingredient','palatable'], mainProtein:'チキン', fiber:4, url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+2P1ODU+3J8+15NP77&a8ejpredirect=http%3A%2F%2Fwww.nelsonsdogfood.jp%2F7500%2F'},
  {name:'POCHI ザ・ドッグフード エイジングケア', maker:'POCHI', kcal:315, protein:30, fat:10, priceKg:2400, tags:['senior','weight','lowfat','protein'], fiber:9, url:'https://hb.afl.rakuten.co.jp/ichiba/57b79b5b.a0865e7c.57b79b5c.9f959709/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpochi-tokyo%2Fpod0101080-1000g%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ペロリコ ドッグフード ライト', maker:'レティシアン', kcal:326, protein:22.5, fat:8, priceKg:2600, tags:['weight','lowfat','senior'], mainProtein:'チキン', fiber:8, url:'https://px.a8.net/svt/ejp?a8mat=4BCFNK+34IY42+3J8+4GQLWI&a8ejpredirect=https%3A%2F%2Fwww.perolicodogfood.com%2Flight%2FPDL20000'},
  {name:'ロイヤルカナン ミニ ライトウェイトケア', maker:'Royal Canin', kcal:319, protein:30, fat:11, priceKg:1700, tags:['weight','small','lowfat'], mainProtein:'チキン', url:'https://hb.afl.rakuten.co.jp/ichiba/57b5a3b9.ecf57661.57b5a3ba.8d1f18b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdog-penet%2Ff11225%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ヒルズ サイエンス・ダイエット 減量サポート 小型犬用', maker:'Hill’s', kcal:313, protein:24, fat:9, priceKg:1500, tags:['weight','small','lowfat','cost'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b41d3d.0196a071.57b41d3e.22d83eeb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsweet-pet%2Fset0096s%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'VetSolution 犬用 胃腸サポート', maker:'Monge', kcal:383, protein:24, fat:15, priceKg:2400, tags:['stomach','senior'], url:'https://hb.afl.rakuten.co.jp/ichiba/57b84b87.2ec97563.57b84b88.333718c7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvetslabo%2Fdr000114%2F&link_type=picttext&ut=eyJwYW...NlfQ%3D%3D'},
  {name:'ロイヤルカナン サイズヘルス ニュートリション ミニ パピー', maker:'Royal Canin', kcal:408, protein:28.5, fat:18, priceKg:1785, tags:['puppy','small'], mainProtein:'チキン', fiber:2.4, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41c22.08fe12c0.57b41c23.755a6e9f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnyanzaq%2F3182550793001%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9'},
  {name:'ヒルズ サイエンス・ダイエット パピー 小粒', maker:'Hill’s', kcal:377, protein:25, fat:15.3, priceKg:1273, tags:['puppy','small'], mainProtein:'チキン', kibbleSize:'小粒', url:'https://hb.afl.rakuten.co.jp/ichiba/57b41d3d.0196a071.57b41d3e.22d83eeb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsweet-pet%2F118630123%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D'},
  {name:'ロイヤルカナン ミディアム アダルト', maker:'Royal Canin', kcal:385, protein:23, fat:12, priceKg:1075, tags:['adult','medium'], mainProtein:'チキン', fiber:2.4, url:'https://hb.afl.rakuten.co.jp/ichiba/57b41e37.7d60f1c7.57b41e38.dcb0788f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1096dog%2Fw-1000475-00-00%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D'},
  {name:'ロイヤルカナン ミニ ステアライズド', maker:'Royal Canin', kcal:345, protein:28, fat:11, priceKg:1746, tags:['neutered','small'], mainProtein:'チキン', fiber:7.6, url:'https://hb.afl.rakuten.co.jp/ichiba/57b5a3b9.ecf57661.57b5a3ba.8d1f18b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdog-penet%2Ff11240%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D'}
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
function productDetailHref(name, answers, r){
  const base = productDetailUrl(name)
  if(base === '#') return base
  const axes = (r && r.profile && r.profile.axes) || []
  const tags = (r && r.tags) || []
  const params = []
  if(answers && answers.body) params.push('bcs=' + encodeURIComponent(answers.body))
  params.push('activity=' + encodeURIComponent(axes.includes('active') ? 'active' : 'calm'))
  let concern = null
  if(tags.includes('体重管理')) concern = 'weight'
  else if(tags.includes('食べムラあり')) concern = 'picky'
  else if(tags.includes('皮膚・毛づや配慮')) concern = 'coat'
  else if(tags.includes('お腹そっと派')) concern = 'stomach'
  if(concern) params.push('concern=' + encodeURIComponent(concern))
  return base + (params.length ? '?' + params.join('&') : '')
}

const THERAPY_MAKERS = '主な取り扱いメーカー例：ロイヤルカナン／ヒルズ／ドクターズケア／ピュリナ（いずれも動物病院での処方・購入が基本です）'
const THERAPEUTIC_FOODS = [
  {name:'腎臓サポート系療法食', maker:THERAPY_MAKERS, tags:['kidney','therapeutic'], note:'BUN/Cre/尿検査などを見て、主治医の指示で使う候補です。自己判断で始めず、診察のうえ動物病院で処方・購入してください。'},
  {name:'消化器サポート・低脂肪系療法食', maker:THERAPY_MAKERS, tags:['stomach','lipid','therapeutic'], note:'下痢・嘔吐・膵炎リスク・脂質異常などで検討されることがあります。診断と処方方針の確認のうえ、動物病院で処方・購入してください。'},
  {name:'肝臓サポート系療法食', maker:THERAPY_MAKERS, tags:['liver','therapeutic'], note:'肝酵素上昇の理由によって適否が変わります。検査結果と症状を合わせて主治医に確認し、動物病院で処方・購入してください。'},
  {name:'糖コントロール系療法食', maker:THERAPY_MAKERS, tags:['glucose','therapeutic'], note:'血糖・尿糖・体重変化を合わせて判断します。投薬中は特に自己判断で変更せず、動物病院で処方・購入してください。'},
  {name:'尿ケア・下部尿路系療法食', maker:THERAPY_MAKERS, tags:['urine','therapeutic'], note:'尿石の種類や尿pHによって合う食事が違います。尿検査結果なしで選ばず、動物病院で処方・購入してください。'}
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
  {key:'age', label:'年齢はどのくらいですか？', type:'choice', options:[['under1','1歳未満（子犬期）'],['1-6','1〜6歳（成犬）'],['7-9','7〜9歳（中高齢）'],['10-12','10〜12歳（シニア）'],['13+','13歳以上（ハイシニア）']]},
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
  {key:'training', label:'「待て」「おいで」などを教えるときの覚え方は？', type:'choice', options:[['trainhigh','すぐ覚えて繰り返せる'],['trainmed','ごほうびがあれば頑張る'],['trainlow','気分がのらないとやらない'],['trainstubborn','根気強く繰り返す必要がある']]},
  {key:'persistence', label:'欲しいもの（おもちゃ・おやつ）が手に入らない時は？', type:'choice', options:[['persisthigh','あきらめず何度も挑戦する'],['persistmed','しばらく粘るが最後はあきらめる'],['persistlow','わりとすぐあきらめる'],['persistnone','最初から興味を失う']]},
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

const HISTORY_KEY = 'wannyan_diagnosis_history'
function loadHistory(){
  try{ return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]') }catch(e){ return [] }
}
function saveHistory(list){ localStorage.setItem(HISTORY_KEY, JSON.stringify(list)) }
function addHistoryEntry(a, r){
  const list = loadHistory()
  list.push({date: new Date().toISOString().slice(0,10), dogName: a.dogName || null, type: r.type, weight: a.weight || null, body: a.body || null, tags: r.tags || []})
  saveHistory(list.slice(-20))
}
function clearHistory(){ saveHistory([]) }

function rer(weight){ return 70 * Math.pow(Number(weight || 0), 0.75) }
function derMultiplier(a){
  if(a.age==='under1') return 2.0
  if(a.age==='13+') return 1.1
  if(a.body==='obese') return 1.0
  if(a.neuter==='yes') return 1.4
  return 1.6
}
const labFields = [
  ['bun','BUN','mg/dL'], ['cre','Cre','mg/dL'], ['sdma','SDMA','μg/dL'], ['alt','ALT','U/L'], ['alp','ALP','U/L'],
  ['tg','TG','mg/dL'], ['tcho','T-Cho','mg/dL'], ['glu','GLU','mg/dL'], ['alb','ALB','g/dL'], ['tp','TP','g/dL'],
  ['ca','Ca','mg/dL'], ['na','Na','mmol/L'], ['k','K','mmol/L'], ['rbc','RBC',''], ['hct','HCT','%'], ['wbc','WBC',''], ['plt','PLT',''],
  ['usg','尿比重',''], ['upc','UPC','']
]
function labNum(key){ return Number((answers.labs || {})[key] || 0) }

function trackEvent(name, params = {}){
  if(typeof window !== 'undefined' && typeof window.gtag === 'function'){
    window.gtag('event', name, params)
  }
}


const ARTICLES = [
  {
    "slug": "dog-leftover-food-checklist",
    "title": "犬が急にフードを残す。最初に見る順番チェックリスト",
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
    "slug": "small-dog-feeding-gram-calculator",
    "title": "小型犬の体重が少し増えた。ごはんは何グラム減らす？",
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
    "slug": "cautious-dog-food-transition",
    "title": "慎重な性格の犬が新しいフードを食べない時の切り替え方",
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
  },
  {
    "slug": "shiba-inu-not-eating",
    "title": "柴犬がごはんを食べない。マイペースな性格と体調不良の見分け方",
    "lead": "柴犬は警戒心が強く、気に入らないと徹底して食べない子がいます。「性格」で片づける前に確認したい点を整理します。",
    "sections": [
      [
        "柴犬は「気に入らないと食べない」性格の子がいます",
        "柴犬は独立心が強く、フードの好みがはっきりしている子が多い犬種と言われています。急にフードを変えた、置き場所や食器を変えたといったきっかけで、はっきりと拒否することがあります。"
      ],
      [
        "体調不良のサインは見逃さない",
        "元気がない、吐く、下痢をする、口を痛がる素振りがある、体重が落ちているといった様子があれば、性格の問題ではなく体調不良を疑い、フードを変える前に受診を優先します。"
      ],
      [
        "気温や運動量でも食欲は変わります",
        "柴犬は暑さに弱い傾向があると言われ、夏場に食欲が落ちる子がいます。逆に運動量が減ると必要なカロリーも減り、食べる量が自然に減ることもあります。季節や生活の変化も含めて様子を見ます。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "pomeranian-tear-stain-food",
    "title": "ポメラニアンの涙やけ、フードだけが原因とは限りません",
    "lead": "涙やけは体質や涙道、アレルギーなど複数の要因が関わります。フード変更だけで判断せず、原因を整理してから見直します。",
    "sections": [
      [
        "涙やけの原因はひとつではありません",
        "遺伝的な涙道の狭さ、目頭付近の被毛による刺激、アレルギー体質、涙管の詰まりなど、涙やけにはさまざまな要因が関わると言われています。フードだけが原因とは限りません。"
      ],
      [
        "食事が関係することもあります",
        "添加物や特定の原材料に反応しやすい体質の子では、フードの見直しで変化が見られることがあります。ただし、これは体質による個体差が大きく、すべての子に同じ効果があるわけではありません。"
      ],
      [
        "続く・悪化する場合は受診を優先します",
        "涙の量が急に増えた、目やにの色が変わった、目を痛がる、充血しているといった様子があれば、フードより先に眼科的な診察を優先してください。涙道の詰まりなど、治療が必要なケースもあります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "senior-dog-triglyceride-treats",
    "title": "シニア犬の中性脂肪が高い。おやつを見直す前に確認したいこと",
    "lead": "健診で中性脂肪(TG)が高いと言われた時、おやつの量だけでなく内容も見直しの対象になります。自己判断で療法食に切り替える前に整理します。",
    "sections": [
      [
        "中性脂肪はおやつの内容にも影響されます",
        "高脂質なジャーキーやチーズ系のおやつ、人の食べ物のおすそ分けは、中性脂肪の数値に影響することがあります。まずは1日に与えているおやつの種類と量を書き出してみることから始めます。"
      ],
      [
        "低脂肪フードに変えれば安心、とは限らない",
        "中性脂肪が高い背景には、肥満、糖尿病、甲状腺機能低下症、膵炎など、食事以外の原因が隠れていることもあります。フードやおやつを変えるだけで改善するとは限りません。"
      ],
      [
        "自己判断で療法食に切り替えない",
        "インターネットの情報だけで低脂質の療法食に切り替えるのはおすすめできません。療法食は特定の栄養バランスで設計されており、自己判断で開始・中止すると管理が崩れることがあります。フードの変更は、自己判断で行わず、再検査の結果と合わせて主治医に相談してください。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "french-bulldog-skin-food",
    "title": "フレンチブルドッグの皮膚トラブル、フードだけが原因とは限りません",
    "lead": "フレンチブルドッグは皮膚が敏感な子が多い犬種です。アレルギーや環境、寄生虫など複数の要因を整理してから、フードを見直します。",
    "sections": [
      [
        "フレンチブルドッグは皮膚トラブルが出やすい犬種です",
        "短頭種特有の被毛の薄さや皮膚のたるみ、体質的にアレルギーが出やすい傾向があると言われています。かゆみ、赤み、脱毛、べたつきなど、皮膚の様子は日頃からチェックしておきたいポイントです。"
      ],
      [
        "皮膚トラブルの原因はフードだけではありません",
        "食物アレルギー以外にも、ノミ・ダニなどの寄生虫、ハウスダストや花粉などの環境アレルギー、シャンプーが合わないこと、細菌・真菌感染など、皮膚トラブルの原因はさまざまです。フードを変えただけで改善しない場合、他の原因も考える必要があります。"
      ],
      [
        "フードを見直す時に確認したいこと",
        "特定の原材料に反応している可能性がある場合、原材料をシンプルにしたフードや、獣医師と相談した除去食を試すことがあります。ただし自己判断で色々なフードを次々試すと、原因の特定がかえって難しくなることがあります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "dog-high-cre-food",
    "title": "健診でCre（クレアチニン）が高いと言われた。フードを変える前に確認したいこと",
    "lead": "Creは腎臓の機能を見る指標のひとつです。自己判断で食事内容を変更せず、確認しておきたい点を整理します。",
    "sections": [
      [
        "Creは腎臓の機能を反映する数値です",
        "クレアチニン(Cre)は筋肉で作られる老廃物で、腎臓のろ過機能が落ちると数値が上がりやすいとされています。ただし、脱水や筋肉量、年齢によっても変動するため、1回の数値だけで判断しない方がよい場合もあります。"
      ],
      [
        "自己判断で食事内容を変更せず主治医に相談してください",
        "Creが高いと分かると、慌ててタンパク質を制限したフードや腎臓ケア用のフードに切り替えたくなりますが、必要な栄養バランスは個体差が大きく、自己判断での変更はおすすめできません。再検査の結果や症状と合わせて、主治医に相談しながら決めます。"
      ],
      [
        "他の項目や症状もあわせて確認する",
        "BUN、SDMA、尿検査（尿比重・UPCなど）、飲水量、尿量、食欲、体重の変化を記録しておくと、原因の絞り込みや今後の方針の相談がしやすくなります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "dog-high-alt-food",
    "title": "健診でALTが高いと言われた。フードを変える前に確認したいこと",
    "lead": "ALTは肝臓の状態を見る指標のひとつです。自己判断で食事内容を変更せず、確認しておきたい点を整理します。",
    "sections": [
      [
        "ALTは肝臓の細胞が壊れると上がりやすい数値です",
        "ALT(GPT)は肝臓の細胞に多く含まれる酵素で、肝細胞がダメージを受けると血液中に漏れ出し、数値が上がりやすいとされています。原因は薬剤、感染症、脂肪肝、腫瘍など多岐にわたります。"
      ],
      [
        "自己判断で食事内容を変更せず主治医に相談してください",
        "「肝臓に良さそう」という情報だけでサプリメントや特定のフードに切り替えるのはおすすめできません。原因によって必要な対応が異なるため、再検査や追加検査の結果と合わせて、主治医に相談しながら決めます。"
      ],
      [
        "経過を記録しておく",
        "いつ、どのくらいの数値だったか、食欲・元気・便・体重の変化などを記録しておくと、次回の再検査や相談時に経過を伝えやすくなります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "dog-high-alp-food",
    "title": "健診でALPが高いと言われた。フードを変える前に確認したいこと",
    "lead": "ALPは肝臓や骨などに関わる指標で、シニア犬では変動しやすい数値のひとつです。自己判断で食事内容を変更せず、確認しておきたい点を整理します。",
    "sections": [
      [
        "ALPは複数の臓器に由来する数値です",
        "ALP(アルカリフォスファターゼ)は肝臓、骨、副腎など複数の組織に由来する酵素で、犬種や年齢、成長期、ホルモンの影響でも変動しやすいとされています。シニア犬では副腎皮質機能亢進症(クッシング症候群)などが背景にあることもあります。"
      ],
      [
        "自己判断で食事内容を変更せず主治医に相談してください",
        "ALPが高いというだけで、肝臓ケア用のフードやサプリメントに自己判断で切り替えるのはおすすめできません。原因の特定には追加の検査が必要になることも多く、主治医と相談しながら方針を決めます。"
      ],
      [
        "気になる症状もあわせて伝える",
        "飲水量や食欲の変化、お腹まわりのハリ、脱毛、皮膚の変化などがあれば、健診結果と一緒に伝えると原因の絞り込みに役立ちます。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "dog-urinalysis-food",
    "title": "健診の尿検査で指摘を受けた。フードを変える前に確認したいこと",
    "lead": "尿検査の結果はフードだけでなく体調や水分摂取量にも左右されます。数値だけで判断せず、確認しておきたい点を整理します。",
    "sections": [
      [
        "尿検査で見る項目はいろいろあります",
        "尿比重、pH、尿タンパク(UPC)、尿糖、潜血、結晶など、尿検査にはいくつかの項目があります。指摘された項目によって、考えられる原因や必要な対応は変わります。"
      ],
      [
        "結晶や指摘内容によって、食事の意味合いが変わります",
        "ストルバイトやシュウ酸カルシウムなど尿石の種類によって、避けたい食事内容や推奨される療法食が異なります。自己判断で市販の「尿路ケア」フードに切り替える前に、結晶の種類や診断結果を確認してください。"
      ],
      [
        "飲水量や排尿の様子もあわせて確認する",
        "尿の色、回数、量、飲水量の変化、排尿時の様子(痛がる、時間がかかるなど)も、原因を考える上で重要な情報です。健診結果と合わせて記録しておくと相談しやすくなります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "dachshund-back-care-food",
    "title": "ミニチュアダックスフンドの体重管理、椎間板への負担を考える",
    "lead": "胴長短足の体型は、椎間板への負担がかかりやすいと言われる体型です。体重管理でできることと、食事だけでは防ぎきれない点を整理します。",
    "sections": [
      [
        "ミニチュアダックスフンドは椎間板ヘルニアのリスクが比較的高いと言われる犬種です",
        "胴が長く足が短い体型は、背骨(特に胸腰椎)にかかる負担が他の犬種より大きくなりやすいと言われています。椎間板の変性が若いうちから進みやすい傾向があるとも言われ、椎間板ヘルニア(IVDD)は本犬種でよく話題になる持病のひとつです。"
      ],
      [
        "体重が増えると、背骨にかかる負担も増えます",
        "体重が増えるほど、背骨や椎間板が支える荷重は大きくなります。適正体重を保つことは、椎間板への負担を減らす手段のひとつと考えられていますが、体重管理だけで椎間板ヘルニアを防げるわけではありません。体型以外にも、遺伝的な要因や日々の動き方など、複数の要因が関わっています。"
      ],
      [
        "段差やソファへの上り下りは、日常でできる工夫のひとつです",
        "高いソファやベッドへの飛び乗り・飛び降り、急な階段の上り下りは、背骨への負担が大きい動作だと言われています。スロープや踏み台を置く、抱っこで昇降を手伝うといった工夫は、日常生活の中で負担を減らす方法のひとつです。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "golden-retriever-senior-joint-food",
    "title": "ゴールデンレトリーバーのシニア期、関節と体重管理",
    "lead": "大型犬は関節への負担が大きく、シニア期に入るタイミングも小型犬より早いと言われています。体重管理と関節ケアの基本を整理します。",
    "sections": [
      [
        "ゴールデンレトリーバーは股関節・肘関節の疾患が比較的多いと言われる犬種です",
        "大型犬は体格が大きい分、関節にかかる負担も大きく、股関節形成不全や肘関節形成不全など、関節に関わる持病が比較的多いと言われる犬種のひとつです。歩き方がぎこちない、片足をかばうといった様子は、加齢だけでなく関節の状態を反映していることがあります。"
      ],
      [
        "大型犬は小型犬よりも早く「シニア期」に入ると言われています",
        "一般的に、大型犬は小型犬に比べて寿命が短く、体の変化が現れ始める時期も早いと言われています。ゴールデンレトリーバーのような大型犬では、6〜7歳頃から関節や体力の変化を意識し始めるご家庭も多くあります。"
      ],
      [
        "体型はボディコンディションスコア(BCS)で確認します",
        "体重の数字だけでなく、上から見たくびれ、横から見たお腹のライン、肋骨に触れた時の感触などを合わせて確認するボディコンディションスコア(BCS)で体型を見ることが勧められています。体重が増えるほど関節への負荷も大きくなるため、定期的な体型チェックが欠かせません。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "maltese-picky-eating-food",
    "title": "マルチーズが小食・偏食気味なときに見直したいこと",
    "lead": "マルチーズは体が小さく、もともと食の細い子が多いと言われる犬種です。偏食と体調不良を分けて見るための視点を整理します。",
    "sections": [
      [
        "マルチーズのような超小型犬は、もともと食が細い子が多い犬種です",
        "体が小さい分、1日に必要なカロリー自体も少なく、見た目の食事量が少なくても栄養的には足りていることがあります。大型犬と同じ感覚で「もっと食べさせなければ」と考えると、かえって無理をさせてしまうこともあります。"
      ],
      [
        "小型犬は歯が密集しやすく、口のトラブルが起こりやすいと言われています",
        "マルチーズのような小型犬は顎が小さい一方で歯の本数は他の犬種と変わらないため、歯が密集して歯石や歯周病が進みやすいと言われています。硬い粒を避ける、片側だけで噛むといった様子があれば、好みの問題ではなく口の痛みが食欲に影響している可能性があります。"
      ],
      [
        "食べる量が少ない分、1食あたりの栄養密度が重要になります",
        "食べる量そのものが少ない犬では、同じ量でもより多くの栄養を摂れるフードかどうか、いわゆる栄養密度の視点が重要になります。カロリーだけでなく、消化のしやすさや原材料のバランスも含めて確認したいところです。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "labrador-obesity-food",
    "title": "ラブラドールが太りやすいと言われる理由と食事管理",
    "lead": "「よく食べる子」で片づけられがちですが、ラブラドールは肥満のリスクが比較的高いと言われる犬種です。体重管理の考え方を整理します。",
    "sections": [
      [
        "ラブラドールは食への関心が強く、太りやすいと言われる犬種です",
        "ラブラドールは他の犬種に比べて食欲が旺盛で、満腹感を得にくい傾向があると一般的に言われることがあります。与えられた分をあっという間に食べきり、まだ欲しそうな様子を見せる子も多く、結果として食べ過ぎにつながりやすい犬種のひとつとされています。"
      ],
      [
        "おやつ・ご褒美の積み重ねに注意が必要です",
        "賢く訓練性が高いため、しつけやトレーニングのご褒美としておやつを使う場面が多い犬種でもあります。1回あたりは少量でも、散歩中や日常のやり取りで積み重なると、主食のカロリーに上乗せされる形で体重に影響してきます。"
      ],
      [
        "家族全員でルールを揃えることが大切です",
        "人懐っこく愛嬌があるため、家族それぞれが少しずつおやつをあげてしまい、本犬にとっては大きな量になっていることがあります。誰が・いつ・どれくらい与えているかを家族で共有し、1日の上限を決めておくことが体重管理の第一歩になります。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "pug-weight-breathing-food",
    "title": "パグの体重管理が呼吸のしやすさにもつながる理由",
    "lead": "パグは短頭種特有の呼吸のしにくさと、暑さへの弱さを持つ犬種だと言われています。体重管理がなぜ呼吸のしやすさにつながるのかを整理します。",
    "sections": [
      [
        "パグは短頭種特有の呼吸のしにくさがあると言われています",
        "鼻づまりのような呼吸音、暑い時やちょっとした運動の後の息切れは、パグのような短頭種でよく見られる特徴だと言われています。鼻の穴が狭い、気道が短く曲がっているといった骨格的な特徴が、呼吸のしにくさにつながっているとされています。"
      ],
      [
        "体重が増えると、呼吸への負担はさらに大きくなります",
        "首まわりや胸まわりに脂肪がつくと、ただでさえ狭い気道がさらに圧迫されやすくなり、呼吸がしにくくなると言われています。体重管理は見た目の体型だけでなく、呼吸のしやすさに直結する要素として考える必要があります。"
      ],
      [
        "暑さに弱い犬種のため、運動の選択肢が限られやすいです",
        "短頭種は体温調節がもともと苦手で、暑さに弱い犬種だと言われています。呼吸で熱を逃がす効率が他の犬種より低いため、暑い時期の運動量がどうしても制限されがちです。運動でカロリーを消費しにくい分、食事量の管理がより重要な意味を持ってきます。"
      ],
      [
        "このサイトでは「相談前の整理」をします",
        "わんにゃんごはんカルテでは、年齢、体型、悩み、健診項目から、ごはん量・おやつ上限・見直しポイントをまとめます。治療方針を決める場所ではなく、主治医に相談しやすくするための下書きです。"
      ]
    ]
  },
  {
    "slug": "toy-poodle-young-picky-eating",
    "title": "3歳トイプードルの食べムラ、シニア期とは違う原因を考える",
    "lead": "若いトイプードルの食べムラは、シニア期の子とは背景が異なります。年齢に合った視点で原因を整理します。",
    "sections": [
      [
        "シニア期の食べムラとは、疑う順番が変わります",
        "シニア期の食べムラでは歯周病や関節の持病といった加齢性の変化がまず疑われますが、3歳前後の若い子ではその可能性は相対的に低く、先に生活面や関わり方を見ることが多くなります。"
      ],
      [
        "おやつの「食いつきの良さ」が主食への関心を下げていることがあります",
        "嗜好性の高いおやつを日常的に与えていると、比べて主食のドライフードへの関心が下がり、粒のごはんを後回しにする学習が起きている可能性があります。"
      ],
      [
        "「食べないと良いものが出てくる」を覚えてしまうことがあります",
        "食べムラのたびにトッピングを足す対応を続けると、犬にとっては「残せば良いものが出てくる」という経験の繰り返しになり、偏食が強化されていくことがあります。"
      ],
      [
        "運動量とごはんの量が噛み合っていないこともあります",
        "与えているごはんの量が実際の活動量に対して多めだと、単純にお腹が空いていないために食べムラのように見えることがあります。"
      ]
    ]
  },
  {
    "slug": "dog-weight-gain-after-neuter",
    "title": "避妊・去勢後に太ってきた犬のごはん量の見直し方",
    "lead": "避妊・去勢後は代謝が落ちやすいと言われています。手術前と同じ量のままになっていないか、見直し方を整理します。",
    "sections": [
      [
        "手術後は代謝が落ちやすいと一般的に言われています",
        "避妊・去勢手術によるホルモンバランスの変化で、手術前と比べて基礎代謝が下がりやすくなることは、一般的に言われている傾向です。目安として2〜3割ほど必要カロリーが減るという考え方が広く紹介されています。"
      ],
      [
        "「手術前と同じ量」のままになっていないでしょうか",
        "体格が大きく変わらないため、ごはんの量も無意識に同じまま続けてしまいがちです。体重の変化は数週間〜数か月かけて表れるため、気づいた時にはある程度増えていることも珍しくありません。"
      ],
      [
        "食欲そのものが増えることもあります",
        "代謝が落ちる一方でホルモンの変化により食欲や食べ物への関心が増す子もいると言われており、このズレが体重増加をより起こりやすくしている面があります。"
      ],
      [
        "見直すときの考え方",
        "見直しの基準は手術前の体重ではなく、現在の体型や目標体重です。ごはんの量を正確に量り、数週間ごとに体重を記録しながら段階的に調整していく方法が現実的です。"
      ]
    ]
  },
  {
    "slug": "puppy-not-eating-enough",
    "title": "子犬なのに食が細い。心配する前に確認したいこと",
    "lead": "子犬の食欲はもともと波があります。心配せずに様子を見てよいケースと、確認したいサインを整理します。",
    "sections": [
      [
        "子犬の食欲はもともと波があるものです",
        "体がどんどん変化していく成長期のため、日によって食べる量にばらつきが出ること自体は珍しくなく、1〜2回の食べムラだけで異常と判断する必要はありません。"
      ],
      [
        "歯の生え変わり時期は食べにくさが出ることがあります",
        "乳歯から永久歯への生え変わり時期は歯茎がむずがゆかったり痛みを感じたりすることがあり、硬い粒のフードを避ける様子が見られることがあります。"
      ],
      [
        "胃の容量が小さい分、回数を増やす発想も必要です",
        "1日の目安量は変えずに回数を3〜4回に分けてみると、トータルでは必要な量を食べられていた、ということもあります。"
      ],
      [
        "「個性としての小食」と「心配なサイン」を分けて見ます",
        "体重が成長曲線に沿って増え、元気に遊んでいる場合は個性の範囲内のことが多いですが、ぐったりしている、体重が横ばいや減少している場合は早めに主治医へ相談したいサインです。"
      ]
    ]
  },
  {
    "slug": "dog-low-albumin-food",
    "title": "健診でアルブミン(ALB)が低いと言われたときに確認したいこと",
    "lead": "アルブミンは複数の要因で低下する数値です。自己判断で食事内容を変える前に、確認したい点を整理します。",
    "sections": [
      [
        "アルブミンは複数の原因で低下する数値です",
        "タンパク質の摂取・吸収不足のほか、肝臓での合成低下、腎臓からのタンパク漏出、消化管の病気による喪失など、いくつもの可能性が考えられ、数値だけで原因を一つに絞り込むことはできません。"
      ],
      [
        "自己判断で高タンパクフードに切り替えない",
        "原因が肝臓や腎臓、消化管にある場合はタンパク質の量や質の調整の仕方が異なり、自己判断での変更がかえって体への負担になる可能性もあります。"
      ],
      [
        "原因を絞り込むための追加検査が必要です",
        "グロブリンや肝機能の項目、尿検査でのタンパク漏出の有無など、追加の検査を通じて原因となっている臓器や病態を絞り込む必要があります。"
      ]
    ]
  },
  {
    "slug": "dog-low-activity-portion-mismatch",
    "title": "BCSは高めなのに、ごはんの量は普通。それでも太る理由",
    "lead": "量は変えていないのに体型だけ増えてきた、というケースの背景を整理します。活動量・おやつ・代謝の3つの視点から見直します。",
    "sections": [
      [
        "「量が普通」と「消費カロリーに見合っている」は別の話です",
        "ごはんの量を変えていないという事実と、それが今の消費カロリーに合っているかどうかは別の話です。以前は適量だった量が、今の生活スタイルには多すぎることがあります。"
      ],
      [
        "活動量の低下は、ごはんの量の見直しを伴わないことが多いです",
        "散歩や遊びの時間が減るといった生活の変化は、ごはんの量を減らすきっかけとして意識されにくく、判断は「体重が増えてから」になりがちです。"
      ],
      [
        "おやつやトッピングは「ごはん」としてカウントされていないことがあります",
        "「ごはん」は主食のフードだけを指していることが多く、おやつやトッピングは別枠として意識されにくい傾向がありますが、少量でも積み重なれば影響します。"
      ],
      [
        "代謝そのものが、年齢や体調で変わっていきます",
        "同じ量を食べていても、年齢や避妊・去勢の影響で基礎代謝は少しずつ下がっていく傾向があり、「量は普通」という感覚と実際の必要量にズレが生じます。"
      ]
    ]
  }
]

const TYPE_NAMES = {
  openchallengeactiveclose:'好奇心旺盛なアクティブ相棒タイプ', openchallengeactiveindie:'自分で切り開くチャレンジャータイプ', openchallengecalmclose:'人が好きな穏やかパートナータイプ', openchallengecalmindie:'ゆるやか社交のマイペースタイプ',
  opensafeactiveclose:'慎重だけど遊びたい甘えんぼタイプ', opensafeactiveindie:'確認してから進む探検家タイプ', opensafecalmclose:'安心を確かめる寄り添いタイプ', opensafecalmindie:'静かに見守る観察家タイプ',
  watchchallengeactiveclose:'飼い主と動きたい集中ランナータイプ', watchchallengeactiveindie:'自分の世界を持つ探検家タイプ', watchchallengecalmclose:'信頼相手に寄り添う静かな相棒タイプ', watchchallengecalmindie:'こだわりを大切にする職人タイプ',
  watchsafeactiveclose:'慎重に確認する甘えんぼアクティブタイプ', watchsafeactiveindie:'そっと確かめる自立探検家タイプ', watchsafecalmclose:'安心重視の寄り添いタイプ', watchsafecalmindie:'自分のペースを守る安心職人タイプ'
}
const AXIS_COPY = {
  open:'人や犬、新しい場所に関心を向けやすい', watch:'外の刺激は少し距離を取って確認したい', challenge:'新しいことを試す力がある', safe:'安心できる手順があると動きやすい', active:'遊び・散歩・反応の熱量が高め', calm:'落ち着いた環境で安定しやすい', close:'飼い主とのつながりが安心材料', indie:'自分のペースや居場所を大切にする'
}
function scoreAxes(a){
  const sc={open:0,watch:0,challenge:0,safe:0,active:0,calm:0,close:0,indie:0}
  Object.entries(a).forEach(([key,v])=>{ if(key==='dogs' || typeof v!=='string') return; ['open','watch','challenge','safe','active','calm','close','indie'].forEach(k=>{ if(v.startsWith(k)) sc[k]+=Number(v.slice(-1))||1 }) })
  return sc
}
function dogAffinity(a){
  if(a.dogs==='open2') return {label:'犬にも積極的に関わりたいタイプ', note:'他の犬との接触・ドッグランなどでは刺激が強く出やすいぶん、興奮のコントロールを意識すると安心です。'}
  if(a.dogs==='open1') return {label:'犬にも友好的なタイプ', note:'人への社交性と近い形で、他の犬とも落ち着いて関われることが多いでしょう。'}
  if(a.dogs==='watch1') return {label:'犬には様子見から入るタイプ', note:'人には社交的でも、犬同士の距離の詰め方は苦手なことがあります。無理に挨拶させず、距離を選べる状況を作ると安心です。'}
  if(a.dogs==='watch2') return {label:'犬が苦手・警戒しやすいタイプ', note:'人への態度だけで「社交的だから大丈夫」と判断せず、他の犬との接触は本犬のペースを優先してください。'}
  return null
}
function typeFor(a){ const sc=scoreAxes(a); const axes=[sc.open>=sc.watch?'open':'watch',sc.challenge>=sc.safe?'challenge':'safe',sc.active>=sc.calm?'active':'calm',sc.close>=sc.indie?'close':'indie']; return {name:TYPE_NAMES[axes.join('')]||'安心重視の寄り添いタイプ', axes} }
const APPROACH_WHY = {
  openchallenge:'人や新しい環境にも物怖じせず飛び込んでいけるタイプで、警戒よりも好奇心が先に立ちます。初対面の相手にもすぐ心を開きやすいぶん、飛び出しや誤飲などへの注意は飼い主側で意識して補う必要があります。',
  opensafe:'人や犬には積極的に関心を向ける一方で、初めての物事には少し時間をかけて確かめたい面もあります。「人は平気だけど新しいモノは慎重」という組み合わせが、この子らしさの土台になっています。',
  watchchallenge:'人や刺激的なものには慎重に距離を取る一方で、一度「これは大丈夫」と判断した新しいことには積極的に挑戦できる行動力があります。警戒心と好奇心が同居しているタイプです。',
  watchsafe:'初対面の人や新しい環境どちらに対しても、まず様子を見てから動く慎重なタイプです。急かされるより、自分のペースで確認できる時間があるほど本来の落ち着きを発揮しやすくなります。'
}
const ENERGY_WHY = {
  activeclose:'活動量が高く、それを飼い主と一緒に発散したいタイプです。ひとり遊びより、飼い主と関わる中でエネルギーを使うことで満足感を得やすい傾向があります。',
  activeindie:'活動量は高いものの、自分の興味やペースを優先して動くタイプです。飼い主と一緒よりも、自分で探索したり遊んだりすることでエネルギーを発散しやすい面があります。',
  calmclose:'普段は落ち着いていますが、飼い主のそばにいることを安心材料にしているタイプです。激しい運動より、そばで過ごす穏やかな時間の質が満足度に直結しやすいでしょう。',
  calmindie:'活動量も控えめで、自分の時間やペースを大切にするタイプです。構われすぎるとかえって落ち着かなくなることがあり、そっとしておける環境が力を発揮する土台になります。'
}
function typeWhyNarrative(axes){
  const approach = APPROACH_WHY[axes[0]+axes[1]] || ''
  const energy = ENERGY_WHY[axes[2]+axes[3]] || ''
  return `${approach}${energy}`
}
function profileFor(result){
  const axes = result.axes || ['watch','safe','calm','close']
  const lead = typeWhyNarrative(axes)
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

function lifeStage(a){
  if(a.age==='under1') return '子犬期'
  if(a.age==='1-6') return '成犬期'
  if(a.age==='7-9') return '中高齢期'
  if(a.age==='10-12') return 'シニア期'
  return 'ハイシニア期'
}
function buildIntegratedInsights(a, r){
  const axes = r.profile.axes || []
  const cards=[]
  const active=axes.includes('active'), safe=axes.includes('safe'), close=axes.includes('close'), indie=axes.includes('indie')
  if((a.appetite==='uneven'||a.appetite==='picky') && active && !['chubby','obese'].includes(a.body) && !['high','unknown'].includes(a.treatAmount)){
    cards.push({title:'食事以外への関心が強く出やすい可能性', body:'食べムラがあっても、活動性が高く体型が大きく崩れていない場合、単純な「食欲がない」ではなく、遊び・散歩・周囲の刺激を優先して食事への集中が続きにくいことがあります。食器の場所、食事前の興奮、食後の楽しい予定まで含めて見ると原因を絞りやすくなります。', action:'まずは食事場所を静かにし、10〜15分で下げる、運動直後を避けるなど「集中しやすい条件」を固定して観察します。'})
  }
  if((a.appetite==='uneven'||a.appetite==='picky') && ['chubby','obese'].includes(a.body) && ['high','unknown'].includes(a.treatAmount)){
    cards.push({title:'主食の優先順位が下がっている可能性', body:'食べムラがあり、体型が丸めで、おやつ量も多い/不明な場合、食欲そのものよりも「主食よりおいしいものを待つ」流れができている可能性があります。家族から少しずつもらう量は、主食の数十g分に相当することがあります。', action:'家族全員でおやつを1日分だけ小皿に分け、そこからしか出さない形にすると、主食量との関係が見えやすくなります。'})
  }
  if(safe && (a.foodNew==='safe1'||a.foodNew==='safe2'||a.stomach==='sensitive'||a.stomach==='soft')){
    cards.push({title:'フード変更は味より「変化への負担」が壁になりやすい', body:'新しいものに慎重で、お腹も変わりやすい子では、フードの良し悪し以前に、匂い・粒・混ぜる割合・食器・時間が変わること自体が負担になります。急に良い商品へ替えるより、慣れた手順の中で小さく変える方が成功しやすいタイプです。', action:'7〜10日より長めに、最初は数粒だけ混ぜるところから始めます。便が崩れた日は増やさず、元の割合に戻します。'})
  }
  if(close && a.alone==='close2'){
    cards.push({title:'安心できる人の存在が食事にも影響しやすい', body:'飼い主との距離が安心材料になりやすい子では、留守番や家族の動き、食事中の声かけの有無で食べ方が変わることがあります。「甘え」ではなく、安心できる条件が整うと行動が安定しやすいと考えると対策しやすくなります。', action:'食事中に過度に注目しすぎず、同じ場所・同じ声かけ・同じ時間で落ち着ける流れを作ります。'})
  }
  if(indie && a.bond==='indie2'){
    cards.push({title:'自分で選べる余白があると安定しやすい', body:'マイペースさが強い子は、構われすぎることや急な変更で食事・休息のリズムが崩れることがあります。しつけで押し切るより、選べる場所や休める時間を残す方が、結果的に暮らしが安定しやすいタイプです。', action:'食事場所、休む場所、家族が触るタイミングを固定し、「自分から来る」余白を残します。'})
  }
  if((a.waterUrine==='more'||a.waterUrine==='muchmore') || (a.checkup||[]).some(x=>['kidney','urine','glucose'].includes(x))){
    cards.push({title:'水・尿・健診値は食事だけで判断しない領域', body:'飲水や尿、腎臓・尿・血糖の項目は、フードの種類だけでは判断できません。体重変化、食欲、尿検査、服薬状況と合わせて見る必要があり、ネット診断で「この商品が合う」と断定しない方が安全です。', action:'フード購入より先に、主治医へ「今の食事量・おやつ・飲水尿の変化・健診値」をセットで相談します。'})
  }
  if(axes.includes('open') && (a.dogs==='watch1'||a.dogs==='watch2')){
    cards.push({title:'人には社交的でも、犬同士の距離感は別に見た方がよさそうです', body:'知らない人には積極的に近づける一方で、他の犬には様子を見る・避けるという反応が出ています。これは「社交的か人見知りか」という一軸では説明できず、人への社交性と犬への社交性は別の傾向として持っている可能性があります。ドッグランや多頭飼いの場では、人へのフレンドリーさをそのまま当てはめて無理に挨拶させると、ストレスサインを見逃しやすくなります。', action:'他の犬と会う場面では、まず距離を取って様子を見せてから本犬のペースで近づかせ、しっぽ・耳・体の緊張など人への反応とは別のサインを確認します。'})
  }
  if(a.persistence==='persisthigh' && (a.treats==='high'||a.treats==='family')){
    cards.push({title:'おやつを要求する粘り強さが、あげすぎにつながりやすい組み合わせです', body:'欲しいものを簡単にはあきらめないタイプで、かつおやつへの反応も強いため、鳴く・見つめる・ついてくるといった要求行動が長く続きやすい傾向があります。家族の誰かが根負けして少量ずつ与えると、その積み重ねが主食のカロリーバランスを崩す原因になりやすいタイプです。', action:'「要求してもすぐには反応しない」を家族全員のルールにし、あげる場合もタイミングと量をあらかじめ決めておくと管理しやすくなります。'})
  }
  if((a.training==='trainlow'||a.training==='trainstubborn') && (a.foodNew==='safe1'||a.foodNew==='safe2')){
    cards.push({title:'新しいことへの慣れにくさが、しつけとフード両方に出ているタイプです', body:'しつけの飲み込みがゆっくりで、初めてのフードにも警戒が出やすいのは、どちらも「新しい刺激に慣れるまで時間がかかる」という同じ傾向から来ている可能性があります。一度嫌だと感じると長く食べなくなることがあるため、無理に矯正・切り替えを急ぐより、小さな成功体験を積む進め方が合いやすいタイプです。', action:'フードもしつけも、一度に変える量を減らし、うまくいったら十分に褒めるサイクルを繰り返すと定着しやすくなります。'})
  }
  if(cards.length<3){
    cards.push({title:`${lifeStage(a)}として今見たいポイント`, body:`${lifeStage(a)}では、性格タイプだけでなく、体重の増減・活動量・便・食欲の変化をセットで見ることが大切です。同じフードでも、年齢と生活リズムで適量や優先条件は変わります。`, action:'月1回の体重記録と、便・食欲・おやつ量のメモを残すと、次の見直しが数字で判断しやすくなります。'})
  }
  return cards.slice(0,5)
}
function foodSelectionConditions(a, r){
  const out=[]
  if(r.tags.includes('体重管理')) out.push(['体型管理','kcal/100g、脂質、1日給与量、おやつ込みの総カロリーを優先して確認します。'])
  if(r.tags.includes('食べムラあり')) out.push(['食べやすさ','粒サイズ、香り、食感、ふやかしやすさを見ます。食いつきだけで高脂質に寄せすぎないことも大切です。'])
  if(r.tags.includes('お腹そっと派')) out.push(['消化・便','脂質、食物繊維、切り替え速度、便の変化を見ます。急な変更は避けます。'])
  if(r.tags.includes('口・歯チェック')) out.push(['口・歯','粒の硬さ・大きさ、ふやかしやすさを見ます。痛みがある場合は食事工夫より受診が優先です。'])
  if((a.preference||[]).includes('cost')) out.push(['続けやすさ','kg単価だけでなく、給与量から1日コストを見ます。'])
  if(!out.length) out.push(['総合バランス','年齢、体型、活動量、便、食べ方の変化を見ながら、続けやすい主食を選びます。'])
  return out.slice(0,5)
}
function vetConsultItems(a, r){
  const items=[]
  if(r.hasWeight) items.push(`現在の体重とBCSは適正か。目安${Math.round(r.kcal)}kcal/日から始めてよいか。`)
  if(a.currentFood==='therapeutic'||(a.checkup||[]).includes('meds')) items.push('療法食・服薬中でも、現在の給与量や間食の扱いを変えてよいか。')
  if(r.redFlags.length||r.watch.length) items.push('健診値の変化が食事・おやつ・体重変化と関連する可能性があるか。追加検査や再検査が必要か。')
  if(a.appetite==='poor'||a.appetite==='picky'||a.vomit==='often'||a.vomit==='acute') items.push('食べムラや嘔吐が、口・消化器・痛み・内科疾患と関係していないか。')
  if(['smell','chew','pain'].includes(a.mouthState)) items.push('口臭・噛みにくさ・痛みが食事量に影響していないか。歯科処置や検査が必要か。')
  return items.slice(0,5)
}
function relatedArticlesFor(a, r){
  const picks=[]
  const add=slug=>{ const article=ARTICLES.find(x=>x.slug===slug); if(article && !picks.includes(article)) picks.push(article) }
  if(r.tags.includes('食べムラあり')) { add('cautious-dog-food-transition'); add('toy-poodle-senior-not-eating'); add('shiba-inu-not-eating') }
  if(r.tags.includes('体重管理')) { add('small-dog-feeding-gram-calculator'); add('chihuahua-weight-gain'); add('senior-dog-triglyceride-treats') }
  if((a.checkup||[]).includes('kidney') || labNum('bun') || labNum('cre')) { add('dog-high-bun-food'); add('dog-high-cre-food') }
  if((a.checkup||[]).includes('liver') || labNum('alt') || labNum('alp')) { add('dog-high-alt-food'); add('dog-high-alp-food') }
  if((a.checkup||[]).includes('urine')) add('dog-urinalysis-food')
  if(!picks.length) { add('dog-leftover-food-checklist'); add('prescription-diet-vs-regular-food') }
  return picks.slice(0,4)
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
  const dogAff = dogAffinity(a)
  if(dogAff) tags.push(dogAff.label)
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
  const isPuppy = a.age==='under1'
  const foodPool = isPuppy ? FOODS.filter(f=>f.tags.includes('puppy')) : FOODS.filter(f=>!f.tags.includes('puppy'))
  const scored = foodPool.map(f=>{
    let s=0; const reasons=[]
    if(isPuppy){
      reasons.push('子犬期の総合栄養食')
      if((a.preference||[]).includes('small') && f.tags.includes('small')) {s+=2; reasons.push('小粒寄り')}
      if((a.preference||[]).includes('cost') && f.priceKg<1600) {s+=3; reasons.push('続けやすい価格帯')}
      return {...f, score:s, reasons: reasons.slice(0,3)}
    }
    const isSenior = ['7-9','10-12','13+'].includes(a.age)
    const isYoungAdult = a.age==='1-6'
    if(isSenior && f.tags.includes('senior')) {s+=2; reasons.push('シニア期向け')}
    if(isYoungAdult && f.tags.includes('adult')) {s+=2; reasons.push('成犬期向け')}
    if(a.neuter==='yes' && f.tags.includes('neutered')) {s+=3; reasons.push('避妊・去勢後の体重管理を意識')}
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
  const base = {type:typeResult.name, profile, tags, breedNote: BREED_NOTES[a.breedGroup] || '', redFlags, watch, foods:scored, therapyFoods, kcal, snack:kcal*0.1, hasWeight:Number(a.weight)>0, isPuppy}
  base.insights = buildIntegratedInsights(a, base)
  base.conditions = foodSelectionConditions(a, base)
  base.vetConsult = vetConsultItems(a, base)
  base.related = relatedArticlesFor(a, base)
  return base
}

function render(){
  document.querySelector('#app').innerHTML = `
    <header class="site-header"><div class="brand">わんにゃんごはんカルテ</div><nav class="nav-links"><a href="/products/">商品一覧</a><a href="/products/compare/">比較</a><a href="#articles">記事</a><a href="/type-guides/">タイプ別ガイド</a><a href="#tracker">体重記録</a><a href="/pdf-karute/">詳細ごはんカルテPDF</a></nav><a href="#diagnosis" class="mini-cta js-diagnosis-start" data-location="header">無料でチェック</a></header>
    <div style="background:#f4f0e6;color:#62665b;font-size:.78rem;text-align:center;padding:6px 12px;font-weight:700;letter-spacing:.02em">PR｜本サイトはアフィリエイト広告を利用しています</div>
    <main>
      <section class="hero"><div class="hero-copy"><p class="eyebrow">うちの子の性格・食べ方・健診結果を、ひとつのカルテに</p><h1>性格だけでも、フードだけでもわからない。暮らし・食事・体型・健診まで、まるごと知る。</h1><p class="lead">犬の行動評価で使われる考え方を参考に、社交性・慎重さ・活動性・飼い主との距離感を家庭向けに整理。単独の回答ではなく組み合わせで解釈し、健診で気になる項目があれば主治医への相談ポイントまでつなげます。研究用尺度そのものではなく、暮らしと食事相談のためのセルフチェックです。</p><div class="hero-actions"><a href="#diagnosis" class="primary js-diagnosis-start" data-location="hero">うちの子のタイプを見る</a><a href="/pdf-karute/" class="secondary">PDFカルテを見る</a></div><div class="trust"><span>約3分</span><span>登録不要</span><span>医療判断ではなく相談前の整理</span></div></div><aside class="hero-karute"><span class="karte-label">KARTE SAMPLE</span><strong>16</strong><p>うちの子タイプ診断</p><small>行動・食べ方・健診メモを一緒に整理</small></aside></section>
      <section class="cards" id="why"><article><span>01</span><h2>16タイプ診断</h2><p>性格・行動の傾向を、覚えやすい「うちの子タイプ」で表示します。</p></article><article><span>02</span><h2>ごはん量とおやつ</h2><p>体重から目安カロリーと、おやつの上限をざっくり計算します。</p></article><article><span>03</span><h2>根拠と健診メモ</h2><p>研究用尺度とは区別したセルフチェックとして、腎臓・肝臓・尿検査など相談項目も整理します。</p></article></section>
      <section class="diagnosis" id="diagnosis">${renderDiagnosis()}</section>
      <section class="tracker" id="tracker">${renderTracker()}</section>
      <section class="article-list" id="articles"><h2>シニア犬のごはん記事</h2><p class="helper">診察室でよく出る悩みを、できるだけ普通の言葉でまとめました。記事末に参考文献も載せています。</p><div class="article-cards">${ARTICLES.map(a=>`<a class="article-card js-article-click" data-article="${a.slug}" href="/articles/${a.slug}/"><span>記事</span><strong>${a.title}</strong><small>${a.lead}</small></a>`).join('')}</div><p><a class="secondary" href="/type-guides/">タイプ別ごはんガイドを見る</a></p></section>
      <section class="article-list" id="compare"><h2>条件から見るフード比較</h2><p class="helper">年齢・体型・活動量・食べ方・健診メモによって、見るべき成分やコストは変わります。まずは診断結果で重視条件を整理し、比較ページではkcal・脂質・粒サイズ・価格・1日コストを見比べます。</p><div class="article-cards"><a class="article-card" href="/products/compare/senior-dog-low-fat/"><span>比較</span><strong>低脂肪ドッグフード比較</strong><small>脂質や体重管理が気になる子向け。</small></a><a class="article-card" href="/products/compare/senior-dog-small-kibble/"><span>比較</span><strong>小粒ドッグフード比較</strong><small>口・歯・食べやすさが気になる小型犬向け。</small></a><a class="article-card" href="/products/compare/senior-dog-weight-control/"><span>比較</span><strong>体重管理ドッグフード比較</strong><small>太りやすくなった子の食事整理に。</small></a></div></section>
    </main>
    <footer><p>本サイトはペットフード選びの参考情報を提供するもので、診断・治療・療法食の指示ではありません。持病、症状、療法食利用中の場合は獣医師に相談してください。<br><a href="/legal/tokushoho/">特定商取引法に基づく表記</a>　<a href="/legal/privacy/">プライバシーポリシー</a></p></footer>`
  bindEvents()
}


function renderArticle(article){
  return `<article class="article-full" id="article-${article.slug}"><p class="eyebrow">読みもの</p><h2>${article.title}</h2><p class="lead small">${article.lead}</p>${article.sections.map(([h,b])=>`<section><h3>${h}</h3><p>${b}</p></section>`).join('')}<div class="article-cta"><a class="primary" href="#diagnosis">うちの子タイプ診断を試す</a><a class="secondary" href="#tracker">体重記録を使う</a></div></article>`
}

function formatDateJp(iso){ return (iso || '').replace(/-/g,'/') }
function renderHistorySection(list){
  if(list.length < 2){
    if(list.length === 1) return `<p class="helper history-hint">次回の記録と比較できるようになります。</p>`
    return ''
  }
  const current = list[list.length-1]
  const previous = list[list.length-2]
  const prevW = Number(previous.weight)
  const curW = Number(current.weight)
  const hasWeights = prevW > 0 && curW > 0
  let compareNote = `前回（${formatDateJp(previous.date)}）は「${previous.type}」${hasWeights ? '・'+prevW+'kg' : ''}でした。今回は「${current.type}」${hasWeights ? '・'+curW+'kg' : ''}です。`
  if(hasWeights){
    const diffRatio = (curW - prevW) / prevW
    if(diffRatio >= 0.05) compareNote += ' 体重が増えています。健診結果と合わせて確認いただくと安心です。'
    else if(diffRatio <= -0.05) compareNote += ' 体重が減っています。健診結果と合わせて確認いただくと安心です。'
  }
  const recent = list.slice(-5).reverse()
  return `<div class="karte-section history-section"><h3>これまでの記録</h3><p>${compareNote}</p><ul class="history-list">${recent.map(h=>`<li><span>${formatDateJp(h.date)}</span><span>${h.type}</span><span>${h.weight ? h.weight+'kg' : '—'}</span></li>`).join('')}</ul><button type="button" class="text-link clear-history">履歴を削除</button></div>`
}
function renderDiagnosis(){
  if(step >= QUESTIONS.length){
    const r = calcResult(answers)
    const name = answers.dogName ? `${answers.dogName}ちゃん` : 'うちの子'
    const shownTags = displayTags(r.tags, answers.breedGroup)
    const historyAll = loadHistory()
    const matchedHistory = answers.dogName ? historyAll.filter(h=>h.dogName===answers.dogName) : historyAll
    return `<div class="result karte"><p class="eyebrow">うちの子ごはん・暮らしカルテ</p><div class="type-card"><div><span class="type-code">16タイプ診断</span><h2>${name}は「${r.type}」</h2><p>${r.profile.lead}</p></div><div class="type-animal">${answers.breedGroup && BREED_GROUPS[answers.breedGroup] ? BREED_GROUPS[answers.breedGroup] : '暮らしタイプ'}</div></div><div class="trait-list">${shownTags.map(x=>`<span>${x}</span>`).join('')}</div>
      ${r.hasWeight ? `<div class="result-grid"><div class="metric"><strong>${Math.round(r.kcal)} kcal/日</strong><span>目安必要カロリー</span></div><div class="metric"><strong>${Math.round(r.snack)} kcal/日まで</strong><span>おやつ上限の目安</span></div></div>${r.isPuppy ? `<p class="helper">子犬期は成長段階によって必要カロリーが大きく変わるため、上の数字はあくまで簡易的な目安です。フードのパッケージ記載の給与量や、かかりつけの獣医師の指示を優先してください。</p>` : ''}` : `<div class="note"><h3>カロリー計算</h3><p>体重を入力すると、目安カロリーとおやつ上限を表示できます。今回はタイプ判定と注意点のみ表示します。</p></div>`}
      <div class="share-panel"><button class="primary save-share" type="button">結果画像を保存</button><button class="secondary native-share" type="button">LINE/Xで共有</button><canvas id="shareCanvas" width="1200" height="630" aria-label="診断結果シェア画像"></canvas><p class="helper">画像には医療情報や健診数値は入れず、タイプ名だけを共有します。</p></div>
      <div class="karte-section deep-summary"><h3>${name}の全体像</h3><p>${r.profile.lead}${r.breedNote ? ' '+r.breedNote : ''} ここでは回答を並べ直すのではなく、性格・活動量・食べ方・体型・健診メモの組み合わせから、暮らしで見たいポイントを整理します。</p></div>
      ${renderHistorySection(matchedHistory)}
      <div class="karte-section"><h3>解釈カード</h3><div class="insight-grid">${r.insights.map(x=>`<article class="insight-card"><h4>${x.title}</h4><p>${x.body}</p><strong>実生活では：</strong><p>${x.action}</p></article>`).join('')}</div></div>
      <div class="karte-section"><h3>接し方のコツ</h3><ul>${r.profile.care.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      ${r.redFlags.length ? `<div class="alert"><h3>フード変更前に主治医へ確認</h3><ul>${r.redFlags.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}
      ${r.watch.length ? `<div class="note"><h3>健診メモ</h3><ul>${r.watch.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}
      <div class="note"><h3>この診断について</h3><p>C-BARQ（Canine Behavioral Assessment & Research Questionnaire）の考え方を参考に、家庭で答えやすい場面へ置き換えたセルフチェックです。C-BARQ公式尺度そのものではなく、医学的診断・行動診断でもありません。</p><a class="text-link" href="/about-diagnosis/">参考にしている考え方を見る</a>
        <details style="margin-top:12px"><summary style="cursor:pointer;font-weight:800;color:var(--green)">この評価の根拠を見る</summary><p class="helper" style="margin-top:8px">目安カロリー・おやつ上限は、RER/DER計算など獣医栄養学で一般的に使われる考え方を参考にしています。個別の栄養設計の根拠として使うものではなく、一般的な目安です。</p><ul class="helper" style="padding-left:20px;margin:6px 0"><li>C-BARQ（Canine Behavioral Assessment & Research Questionnaire）</li><li>WSAVA（世界小動物獣医師会）Global Nutrition Guidelines</li><li>AAHA（米国動物病院協会）の栄養評価ガイドライン</li><li>NRC（全米研究評議会）犬猫の栄養要求量</li><li>FEDIAF（欧州ペットフード工業連合会）栄養ガイドライン</li><li>AAFCO（米国飼料検査官協会）の栄養基準</li></ul></details>
      </div>
      ${r.therapyFoods.length ? `<div class="alert therapy"><h3>療法食を相談するなら</h3><p>血液検査・尿検査・服薬状況がある場合に、PDFカルテ側で整理して主治医に確認しやすくする候補です。無料診断では購入推奨ではなく「相談候補」として表示します。</p><div class="foods therapy-foods">${r.therapyFoods.map(f=>`<article class="food"><h4>${f.name}</h4><p>${f.maker}</p><ul><li>${f.note}</li></ul></article>`).join('')}</div></div>`:''}
      <div class="karte-section"><h3>フードを選ぶ前に見る条件</h3><p class="helper">いきなり商品名で選ばず、まず${name}の場合に重視する条件を決めます。</p><div class="condition-grid">${r.conditions.map(([h,b])=>`<article><h4>${h}</h4><p>${b}</p></article>`).join('')}</div></div>
      ${r.foods.length ? `<h3>${r.isPuppy ? '子犬期向けの候補フード' : '目的別の候補フード'}</h3><p class="helper">${r.isPuppy ? '子犬用として作られた総合栄養食のみを表示しています。成長のスピードには個体差があるため、給与量はパッケージ記載の目安を優先し、気になる場合は獣医師に相談してください。' : 'ランキングではなく、上の条件に合う選択肢として表示します。健診異常・服薬・療法食がある場合は購入前に主治医へ確認してください。'}</p><div class="foods">${r.foods.map(f=>`<article class="food"><h4>${f.name}</h4><p>${f.maker} / ${f.kcal}kcal / 脂質${f.fat}% / 約${f.priceKg.toLocaleString()}円/kg${f.mainProtein ? ` / 主原料:${f.mainProtein}` : ''}</p><ul>${(f.reasons.length?f.reasons:['条件に比較的合いやすい']).map(x=>`<li>${x}</li>`).join('')}<li>目安給与量：約${r.hasWeight ? Math.round(r.kcal / f.kcal * 100) : '—'}g/日・1日コスト約${r.hasWeight ? Math.round((r.kcal / f.kcal * 100) * f.priceKg / 1000) : '—'}円</li></ul><div class="food-actions">${f.url !== '#' ? `<a class="primary buy-link" data-product="${f.name}" data-maker="${f.maker}" href="${f.url}" target="_blank" rel="noopener sponsored">通販サイトで見る</a>` : ''}${productDetailUrl(f.name) !== '#' ? `<a class="text-link product-link" data-product="${f.name}" data-maker="${f.maker}" href="${productDetailHref(f.name, answers, r)}">くわしく見る</a>` : ''}</div></article>`).join('')}</div>` : `<div class="note"><h3>候補フードについて</h3><p>現在のフード候補は、いずれも成犬・シニア犬向けに作られた商品です。子犬期は成長のためにタンパク質・脂質・カルシウムなどの必要量が成犬とは大きく異なるため、このカタログからはおすすめを表示しません。総合栄養食と明記された「子犬用」「オールステージ対応」フードを選ぶか、かかりつけの獣医師にご相談ください。</p></div>`}
      <div class="karte-section"><h3>動物病院で相談したいこと</h3><ul>${r.vetConsult.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="karte-section"><h3>この結果から深掘りする記事</h3><div class="article-cards mini">${r.related.map(a=>`<a class="article-card" href="/articles/${a.slug}/"><span>関連記事</span><strong>${a.title}</strong><small>${a.lead}</small></a>`).join('')}</div></div>
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
      addHistoryEntry(answers, r)
      trackEvent('diagnosis_history_save')
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
  document.querySelector('.clear-history')?.addEventListener('click', ()=>{
    clearHistory()
    trackEvent('diagnosis_history_clear')
    render()
    location.hash = 'diagnosis'
  })
}
render()
