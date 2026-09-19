import './style.css'

const FOODS = [
  {name:'ニュートロ シュプレモ シニア犬用', maker:'Nutro', kcal:350, protein:26, fat:13, priceKg:1900, tags:['senior','coat','balanced','small'], url:'#'},
  {name:'ヒルズ サイエンス・ダイエット シニア 小型犬用', maker:'Hill’s', kcal:365, protein:19, fat:14, priceKg:1300, tags:['senior','small','cost','balanced'], url:'#'},
  {name:'ロイヤルカナン ミニ エイジング12+', maker:'Royal Canin', kcal:383, protein:24, fat:14, priceKg:1700, tags:['senior','small','palatable'], url:'#'},
  {name:'アカナ シニアドッグ', maker:'ACANA', kcal:332, protein:33, fat:14, priceKg:2300, tags:['senior','protein','weight'], url:'#'},
  {name:'ピュリナ ワン 7歳以上 ほぐし粒入り', maker:'Purina', kcal:360, protein:27, fat:13, priceKg:900, tags:['senior','cost','palatable'], url:'#'},
  {name:'このこのごはん', maker:'オモヤ', kcal:343, protein:20.9, fat:8.2, priceKg:3800, tags:['small','lowfat','japan','coat'], url:'#'},
  {name:'モグワン ドッグフード', maker:'レティシアン', kcal:361, protein:27, fat:10, priceKg:2600, tags:['balanced','palatable','coat'], url:'#'},
  {name:'犬猫生活 ドッグフード シニア', maker:'犬猫生活', kcal:347, protein:24, fat:10, priceKg:3200, tags:['senior','japan','lowfat'], url:'#'},
  {name:'セレクトバランス エイジングケア チキン', maker:'Select Balance', kcal:350, protein:20, fat:10, priceKg:1500, tags:['senior','lowfat','cost','small'], url:'#'},
  {name:'プロマネージ 7歳からの室内犬用', maker:'PROMANAGE', kcal:355, protein:24, fat:12, priceKg:1000, tags:['senior','cost','small'], url:'#'},
  {name:'アイムス 7歳以上 健康サポート', maker:'IAMS', kcal:365, protein:24, fat:11, priceKg:850, tags:['senior','cost'], url:'#'},
  {name:'ユーカヌバ シニア 小型犬用', maker:'Eukanuba', kcal:376, protein:27, fat:15, priceKg:1500, tags:['senior','small','palatable'], url:'#'},
  {name:'ナウフレッシュ スモールブリード シニア', maker:'NOW FRESH', kcal:341, protein:24, fat:12, priceKg:3100, tags:['senior','small','grainfree','weight'], url:'#'},
  {name:'オリジン シニア', maker:'ORIJEN', kcal:371, protein:38, fat:15, priceKg:3200, tags:['senior','protein','ingredient'], url:'#'},
  {name:'ソルビダ グレインフリー チキン 室内飼育7歳以上', maker:'SOLVIDA', kcal:350, protein:23, fat:10, priceKg:2600, tags:['senior','grainfree','lowfat','coat'], url:'#'},
  {name:'アーテミス アガリクス I/S 小粒', maker:'Artemis', kcal:358, protein:24, fat:14, priceKg:2100, tags:['small','stomach','palatable'], url:'#'},
  {name:'ナチュロル', maker:'楽しい製薬', kcal:400, protein:23, fat:10, priceKg:3600, tags:['japan','palatable','ingredient'], url:'#'},
  {name:'馬肉自然づくり', maker:'健康いぬ生活', kcal:399, protein:27, fat:11, priceKg:3300, tags:['japan','palatable','ingredient'], url:'#'},
  {name:'Yum Yum Yum! シニア&ライト チキン', maker:'GREEN DOG', kcal:320, protein:20, fat:8.5, priceKg:4200, tags:['senior','japan','lowfat','weight','small'], url:'#'},
  {name:'ミシュワン シニア犬用', maker:'ミシュワン', kcal:332, protein:21.5, fat:9.5, priceKg:3800, tags:['senior','japan','small','lowfat'], url:'#'},
  {name:'Dr.ケアワン', maker:'アニマルライフ研究所', kcal:347, protein:22.5, fat:7.5, priceKg:3900, tags:['japan','lowfat','coat','small'], url:'#'},
  {name:'ペトコトフーズ チキン', maker:'PETOKOTO', kcal:150, protein:13, fat:5.4, priceKg:5200, tags:['fresh','palatable','stomach'], url:'#'},
  {name:'ブッチ ブラック・レーベル', maker:'Butch', kcal:116, protein:10.5, fat:8, priceKg:2600, tags:['wet','palatable','senior'], url:'#'},
  {name:'カナガン ドッグフード チキン', maker:'レティシアン', kcal:376, protein:29, fat:15, priceKg:2600, tags:['grainfree','palatable','protein'], url:'#'},
  {name:'ネルソンズ ドッグフード', maker:'レティシアン', kcal:365, protein:28, fat:12, priceKg:2200, tags:['medium','ingredient','palatable'], url:'#'},
  {name:'POCHI ザ・ドッグフード エイジングケア', maker:'POCHI', kcal:315, protein:30, fat:10, priceKg:2400, tags:['senior','weight','lowfat','protein'], url:'#'},
  {name:'ペロリコ ドッグフード ライト', maker:'レティシアン', kcal:326, protein:22.5, fat:8, priceKg:2600, tags:['weight','lowfat','senior'], url:'#'},
  {name:'ロイヤルカナン ミニ ライトウェイトケア', maker:'Royal Canin', kcal:319, protein:30, fat:11, priceKg:1700, tags:['weight','small','lowfat'], url:'#'},
  {name:'ヒルズ サイエンス・ダイエット 減量サポート 小型犬用', maker:'Hill’s', kcal:313, protein:24, fat:9, priceKg:1500, tags:['weight','small','lowfat','cost'], url:'#'},
  {name:'VetSolution 犬用 胃腸サポート', maker:'Monge', kcal:383, protein:24, fat:15, priceKg:2400, tags:['stomach','senior'], url:'#'}
]

const QUESTIONS = [
  {key:'age', label:'年齢', type:'choice', options:[['7-9','7〜9歳'],['10-12','10〜12歳'],['13+','13歳以上'],['under7','7歳未満']]},
  {key:'weight', label:'体重', type:'number', suffix:'kg', placeholder:'例：5.2'},
  {key:'body', label:'体型', type:'choice', options:[['thin','やせ気味'],['normal','ちょうどよい'],['chubby','ふっくら'],['obese','ぽっちゃり']]},
  {key:'neuter', label:'避妊・去勢', type:'choice', options:[['yes','済み'],['no','未'],['unknown','わからない']]},
  {key:'activity', label:'活動量', type:'choice', options:[['low','少ない'],['normal','普通'],['high','多い']]},
  {key:'appetite', label:'食いつき', type:'choice', options:[['good','よく食べる'],['uneven','ムラがある'],['poor','あまり食べない']]},
  {key:'concerns', label:'気になる悩み', type:'multi', options:[['weight','体重管理'],['appetite','食いつき'],['stomach','お腹・便'],['coat','皮膚・毛艶'],['joint','関節'],['mouth','口・歯'],['senior','シニア全般']]},
  {key:'checkup', label:'健康診断で気になる項目', type:'multi', options:[['none','特になし'],['kidney','腎臓系'],['liver','肝臓系'],['lipid','中性脂肪/コレステロール'],['glucose','血糖'],['urine','尿検査'],['weightloss','体重減少'],['meds','服薬/療法食あり']]},
  {key:'labs', label:'健診数値メモ（わかる範囲で任意）', type:'labs'},
  {key:'preference', label:'こだわり', type:'multi', options:[['small','小粒'],['japan','国産'],['grainfree','グレインフリー'],['cost','価格重視'],['ingredient','原材料重視'],['easy','続けやすさ重視']]}
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

  let type = 'シニア総合ケアタイプ'
  const concerns = a.concerns || []
  if(redFlags.length) type = 'まずは相談推奨タイプ'
  else if(a.body==='obese' || a.body==='chubby' || concerns.includes('weight') || c.includes('lipid') || labNum('tg') >= 150) type = '体重管理タイプ'
  else if(concerns.includes('appetite') || a.appetite!=='good') type = '食いつき重視タイプ'
  else if(concerns.includes('stomach')) type = 'お腹ケアタイプ'
  else if(concerns.includes('coat')) type = '皮膚・被毛ケアタイプ'
  else if(concerns.includes('joint')) type = '関節ケアタイプ'

  const scored = FOODS.map(f=>{
    let s=0; const reasons=[]
    if(f.tags.includes('senior')) {s+=3; reasons.push('シニア期向け')}
    if(type==='体重管理タイプ' && (f.kcal<355 || f.tags.includes('lowfat') || f.tags.includes('weight'))) {s+=4; reasons.push('カロリー/脂質を見直しやすい')}
    if(type==='食いつき重視タイプ' && (f.tags.includes('palatable') || f.tags.includes('wet') || f.tags.includes('fresh'))) {s+=4; reasons.push('食いつき配慮')}
    if(type==='お腹ケアタイプ' && f.tags.includes('stomach')) {s+=4; reasons.push('お腹・便に配慮')}
    if(type==='皮膚・被毛ケアタイプ' && f.tags.includes('coat')) {s+=3; reasons.push('皮膚・毛艶ケアを意識')}
    if((a.preference||[]).includes('small') && f.tags.includes('small')) {s+=2; reasons.push('小粒寄り')}
    if((a.preference||[]).includes('cost') && f.priceKg<1600) {s+=3; reasons.push('続けやすい価格帯')}
    if((a.preference||[]).includes('japan') && f.tags.includes('japan')) {s+=2; reasons.push('国産系')}
    if((a.preference||[]).includes('grainfree') && f.tags.includes('grainfree')) {s+=2; reasons.push('グレインフリー系')}
    return {...f, score:s, reasons: reasons.slice(0,3)}
  }).sort((a,b)=>b.score-a.score).slice(0,3)

  const kcal = rer(a.weight) * derMultiplier(a)
  const snack = kcal * 0.1
  return {type, redFlags, watch, foods:scored, kcal, snack}
}

function render(){
  document.querySelector('#app').innerHTML = `
    <header class="site-header"><div class="brand">わんにゃんごはんカルテ</div><nav class="nav-links"><a href="#tracker">体重記録</a></nav><a href="#diagnosis" class="mini-cta">無料でチェック</a></header>
    <main>
      <section class="hero"><p class="eyebrow">健診結果もふまえる / シニア犬向け</p><h1>シニア犬フード診断</h1><p class="lead">7歳からのごはん選びを、年齢・体型・悩み・健康診断の気になる項目から整理。ごはん量、おやつ上限、候補フードまでまとめます。</p><div class="hero-actions"><a href="#diagnosis" class="primary">診断をはじめる</a><a href="#why" class="secondary">何がわかる？</a></div><div class="trust"><span>約1分</span><span>登録不要</span><span>医療判断ではなく食事整理</span></div></section>
      <section class="cards" id="why"><article><h2>ごはん量</h2><p>体重からRER/DERを計算し、1日の目安カロリーを表示。</p></article><article><h2>おやつ上限</h2><p>あげすぎ防止のため、1日カロリーの10%目安を表示。</p></article><article><h2>健診メモ</h2><p>BUN/Cre/ALT/脂質/尿検査など、食事変更前の相談ラインを整理。</p></article></section>
      <section class="diagnosis" id="diagnosis">${renderDiagnosis()}</section>
      <section class="tracker" id="tracker">${renderTracker()}</section>
      <section class="article-list"><h2>公開時に置く記事</h2><ol><li>シニア犬に合うドッグフードの選び方</li><li>シニア犬の給餌量計算</li><li>シニア犬がごはんを食べない時の見直しポイント</li><li>シニア犬の体重管理とフード選び</li><li>療法食と一般食の違い</li></ol></section>
    </main>
    <footer><p>本サイトはペットフード選びの参考情報を提供するもので、診断・治療・療法食の指示ではありません。持病、症状、療法食利用中の場合は獣医師に相談してください。</p></footer>`
  bindEvents()
}

function renderDiagnosis(){
  if(step >= QUESTIONS.length){
    const r = calcResult(answers)
    return `<div class="result karte"><p class="eyebrow">うちの子ごはんカルテ</p><h2>${r.type}</h2><p>${resultLead(r.type)}</p>
      <div class="result-grid"><div class="metric"><strong>${Math.round(r.kcal || 0)} kcal/日</strong><span>目安必要カロリー</span></div><div class="metric"><strong>${Math.round(r.snack || 0)} kcal/日まで</strong><span>おやつ上限の目安</span></div></div>
      <div class="karte-section"><h3>食事の優先順位</h3><ol>${priorities(r.type).map(x=>`<li>${x}</li>`).join('')}</ol></div>
      ${r.redFlags.length ? `<div class="alert"><h3>フード変更前に確認</h3><ul>${r.redFlags.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}
      ${r.watch.length ? `<div class="note"><h3>健診メモ</h3><ul>${r.watch.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}
      <h3>候補フード</h3><div class="foods">${r.foods.map(f=>`<article class="food"><h4>${f.name}</h4><p>${f.maker} / ${f.kcal}kcal / 脂質${f.fat}% / 約${f.priceKg.toLocaleString()}円/kg</p><ul>${(f.reasons.length?f.reasons:['条件に比較的合いやすい']).map(x=>`<li>${x}</li>`).join('')}</ul><a class="text-link" href="${f.url}">商品リンク設定待ち</a></article>`).join('')}</div>
      <div class="pdf-cta"><h3>詳細ごはんカルテPDF</h3><p>現在のフード量・おやつ量・健診結果メモ・主治医に相談するポイントを1枚に整理します。</p><button class="primary" type="button">初回モニター 980円で作成希望</button><small>※今は需要確認用。決済はまだ発生しません。</small></div>
      <button class="secondary reset">もう一度診断</button></div>`
  }
  const q = QUESTIONS[step]
  return `<div class="question"><p class="progress">${step+1} / ${QUESTIONS.length}</p><h2>${q.label}</h2>${renderInput(q)}<div class="nav"><button class="secondary back" ${step===0?'disabled':''}>戻る</button><button class="primary next">${step===QUESTIONS.length-1?'結果を見る':'次へ'}</button></div></div>`
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
  if(q.type==='number') return `<label class="number"><input type="number" min="0" step="0.1" value="${answers[q.key]||''}" data-key="${q.key}" placeholder="${q.placeholder}"><span>${q.suffix}</span></label>`
  if(q.type==='labs') return `<p class="helper">空欄でも進めます。健康診断用紙がある場合だけ入力してください。</p><div class="lab-grid">${labFields.map(([k,l,u])=>`<label><span>${l}</span><input type="number" step="0.001" data-lab="${k}" value="${(answers.labs||{})[k]||''}" placeholder="${u}"></label>`).join('')}</div>`
  const multi = q.type==='multi'
  return `<div class="options">${q.options.map(([v,l])=>`<label class="option"><input type="${multi?'checkbox':'radio'}" name="${q.key}" value="${v}" ${isChecked(q.key,v,multi)?'checked':''}>${l}</label>`).join('')}</div>`
}
function isChecked(k,v,multi){ return multi ? (answers[k]||[]).includes(v) : answers[k]===v }
function priorities(type){
  return {
    'まずは相談推奨タイプ':['療法食・服薬・検査値の確認を優先','フード変更は主治医確認後に行う','おやつ・サプリ追加は一旦慎重にする'],
    '体重管理タイプ':['kcal/100gと脂質を確認','おやつを1日カロリーの10%以内にする','2〜4週単位で体重変化を見る'],
    '食いつき重視タイプ':['粒サイズ・香り・食感を優先','急な変更ではなく7〜10日かけて切り替える','食欲低下が続く場合は受診'],
    'お腹ケアタイプ':['急な切替を避ける','便の状態を記録する','高脂質・おやつ過多を避ける'],
    '皮膚・被毛ケアタイプ':['主原料と脂肪酸を確認','最低4〜8週は継続して様子を見る','強い痒みや脱毛は受診'],
    '関節ケアタイプ':['体重管理を最優先','関節ケア成分は補助として見る','滑りにくい環境も一緒に整える'],
    'シニア総合ケアタイプ':['シニア対応・粒サイズ・続けやすさを確認','半年〜1年ごとに体重と健診で見直す','おやつ量を決めておく']
  }[type]
}
function resultLead(type){
  return {
    'まずは相談推奨タイプ':'健診結果や服薬状況によっては、フード変更より先に主治医への確認が安全です。食事相談前の整理として使ってください。',
    '体重管理タイプ':'体型・活動量・健診項目から、カロリーと脂質の見直しが優先になりそうです。',
    '食いつき重視タイプ':'食欲ムラがあるため、粒サイズ・香り・切替方法を含めて選ぶのがよさそうです。',
    'お腹ケアタイプ':'便の状態を見ながら、急な切替を避けて消化に配慮した選び方が向きます。',
    '皮膚・被毛ケアタイプ':'毛艶や皮膚が気になる場合は、脂肪酸や主原料、継続しやすさを確認しましょう。',
    '関節ケアタイプ':'体重管理と関節ケア成分の両方を見ながら、無理なく続けられる候補を選びます。',
    'シニア総合ケアタイプ':'大きな偏りは少なめです。年齢に合わせてカロリー・粒サイズ・継続性を確認しましょう。'
  }[type]
}
function bindEvents(){
  document.querySelectorAll('input[type=radio]').forEach(el=>el.addEventListener('change', e=>{answers[e.target.name]=e.target.value}))
  document.querySelectorAll('input[type=checkbox]').forEach(el=>el.addEventListener('change', e=>{const k=e.target.name; answers[k]=answers[k]||[]; answers[k]=e.target.checked?[...new Set([...answers[k],e.target.value])]:answers[k].filter(x=>x!==e.target.value)}))
  document.querySelector('input[type=number][data-key]')?.addEventListener('input', e=>{answers[e.target.dataset.key]=e.target.value})
  document.querySelectorAll('input[data-lab]').forEach(el=>el.addEventListener('input', e=>{answers.labs=answers.labs||{}; answers.labs[e.target.dataset.lab]=e.target.value}))
  document.querySelector('.next')?.addEventListener('click', ()=>{step++; render(); location.hash='diagnosis'})
  document.querySelector('.back')?.addEventListener('click', ()=>{if(step>0) step--; render()})
  document.querySelector('.reset')?.addEventListener('click', ()=>{answers={}; step=0; render()})
  document.querySelector('.weight-form')?.addEventListener('submit', e=>{
    e.preventDefault()
    const date = e.target['w-date'].value
    const weight = e.target['w-value'].value
    if(!date || !weight || Number(weight) <= 0) return
    addWeightEntry(date, weight)
    render()
    location.hash = 'tracker'
  })
  document.querySelectorAll('.del-weight').forEach(el=>el.addEventListener('click', e=>{
    removeWeightEntry(Number(e.target.dataset.idx))
    render()
    location.hash = 'tracker'
  }))
}
render()
