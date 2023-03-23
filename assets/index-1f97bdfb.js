import{c as T,S as j,a as O,u as G,b as K,r as E,d as M,e as W,j as F,R as x,f as l,H as Z,g as $,h as y,B as V,i as J,k as Y,l as X,m as v,n as D,o as S,p as q,P as Q,I as C}from"./vendor-9037961f.js";function ga(){import.meta.url,import("_").catch(()=>1);async function*n(){}}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const nn={selectedCountry:""},b=T({name:"app",initialState:nn,reducers:{setSelectedCountry:(n,i)=>{n.selectedCountry=i.payload}}}),{setSelectedCountry:ca}=b.actions,an=b.reducer;var N;(function(n){n.black="#000",n.white="#fff"})(N||(N={}));var e;(function(n){n.Ankara="ankara",n.Athens="athens",n.Baku="baku",n.Bangkok="bangkok",n.Barcelona="barcelona",n.Beijing="beijing",n.Berlin="berlin",n.Bonn="bonn",n.Boston="boston",n.Brussels="brussels",n.Bucharest="bucharest",n.Budapest="budapest",n.Busan="busan",n.Cairo="cairo",n.Caracas="caracas",n.Changchun="changchun",n.Changsha="changsha",n.Chengdu="chengdu",n.Chongqing="chongqing",n.Cochabamba="cochabamba",n.Cologne="cologne",n.Copenhagen="copenhagen",n.Daegu="daegu",n.Dalian="dalian",n.Delhi="delhi",n.Dongguan="dongguan",n.Dortmund="dortmund",n.Edinburgh="edinburgh",n.Eskisehir="eskisehir",n.Foshan="foshan",n.Frankfurt="frankfurt",n.Glasgow="glasgow",n.Gothenburg="gothenburg",n.Guadalajara="guadalajara",n.Guangzhou="guangzhou",n.Hamburg="hamburg",n.Hangzhou="hangzhou",n.Hanoi="hanoi",n.Harbin="harbin",n.Hefei="hefei",n.Hiroshima="hiroshima",n.Hochiminh="hochiminh",n.Hongkong="hongkong",n.Iashi="iashi",n.Istanbul="istanbul",n.Jakarta="jakarta",n.Jinan="jinan",n.Kansai="kansai",n.Kaohsiung="kaohsiung",n.Kharkiv="kharkiv",n.Klangvalley="klangvalley",n.Kunming="kunming",n.Lima="lima",n.Lisbon="lisbon",n.London="london",n.Luoyang="luoyang",n.Macao="macao",n.Madrid="madrid",n.Manchester="manchester",n.Milan="milan",n.Monterrey="monterrey",n.Montreal="montreal",n.Munich="munich",n.Nanjing="nanjing",n.Nanning="nanning",n.Naples="naples",n.Neworleans="neworleans",n.Newtaipei="newtaipei",n.Newyork="newyork",n.Ningbo="ningbo",n.Osaka="osaka",n.Oslo="oslo",n.Other="other",n.Ottawa="ottawa",n.Paris="paris",n.Qingdao="qingdao",n.Rheinruhr="rheinruhr",n.Rio="rio",n.Riyadh="riyadh",n.Sanfrancisco="sanfrancisco",n.Sanktpeterburg="sanktpeterburg",n.Santiago="santiago",n.Saopaulo="saopaulo",n.Seoul="seoul",n.Sevilla="sevilla",n.Shanghai="shanghai",n.Shaoxing="shaoxing",n.Shenyang="shenyang",n.Shenzhen="shenzhen",n.Singapore="singapore",n.Stockholm="stockholm",n.Suzhou="suzhou",n.Taichung="taichung",n.Taipei="taipei",n.Taiyuan="taiyuan",n.Taoyuan="taoyuan",n.Tashkent="tashkent",n.Tehran="tehran",n.Tianjin="tianjin",n.Tokyo="tokyo",n.Toronto="toronto",n.Tyneandwear="tyneandwear",n.Urumqi="urumqi",n.Vienna="vienna",n.Warsaw="warsaw",n.Washington="washington",n.Wuhan="wuhan",n.Wuxi="wuxi",n.Xiamen="xiamen",n.Xian="xian",n.Xuzhou="xuzhou",n.Yevpatoria="yevpatoria",n.Yokohama="yokohama",n.Zhengzhou="zhengzhou"})(e||(e={}));var a;(function(n){n.AT="AT",n.AZ="AZ",n.BE="BE",n.BO="BO",n.BR="BR",n.CA="CA",n.CL="CL",n.CN="CN",n.DE="DE",n.DK="DK",n.EG="EG",n.ES="ES",n.FR="FR",n.GBENG="GBENG",n.GBSCT="GBSCT",n.GR="GR",n.HK="HK",n.HU="HU",n.ID="ID",n.IN="IN",n.IR="IR",n.IT="IT",n.JP="JP",n.KR="KR",n.MO="MO",n.MX="MX",n.MY="MY",n.NO="NO",n.PE="PE",n.PL="PL",n.PT="PT",n.RO="RO",n.RU="RU",n.SA="SA",n.SE="SE",n.SG="SG",n.TH="TH",n.TR="TR",n.TW="TW",n.UA="UA",n.UN="UN",n.US="US",n.UZ="UZ",n.VE="VE",n.VN="VN"})(a||(a={}));const ma=[{id:e.Ankara,country:a.TR,name:{en:"Ankara",tr:"Ankara",zh:"安卡拉"}},{id:e.Athens,country:a.GR,name:{el:"Αθήνα",en:"Athens",zh:"雅典"}},{id:e.Baku,country:a.AZ,name:{en:"Baku",az:"Bakı","zh-Hans":"巴库","zh-Hant":"巴庫"}},{id:e.Bangkok,country:a.TH,name:{en:"Bangkok","zh-Hans":"曼谷","zh-Hant":"曼谷"}},{id:e.Barcelona,country:a.ES,name:{en:"Barcelona",es:"Barcelona","zh-Hans":"巴塞罗那","zh-HK":"巴塞隆拿","zh-TW":"巴塞隆納"}},{id:e.Beijing,country:a.CN,name:{en:"Beijing",zh:"北京"}},{id:e.Berlin,country:a.DE,name:{de:"Berlin",en:"Berlin",zh:"柏林"}},{id:e.Bonn,country:a.DE,name:{en:"Bonn",de:"Bonn",zh:"波恩"}},{id:e.Boston,country:a.US,name:{en:"Boston","zh-Hans":"波士顿","zh-Hant":"波士頓"}},{id:e.Brussels,country:a.BE,name:{en:"Brussels",fr:"Bruxelles","zh-Hans":"布鲁塞尔","zh-Hant":"布魯塞爾"}},{id:e.Bucharest,country:a.RO,name:{en:"Bucharest",ro:"București",zh:"布加勒斯特"}},{id:e.Budapest,country:a.HU,name:{en:"Budapest",hu:"Budapest","zh-Hans":"布达佩斯","zh-Hant":"布達佩斯"}},{id:e.Busan,country:a.KR,name:{en:"Busan",ko:"부산",zh:"釜山"}},{id:e.Cairo,country:a.EG,name:{en:"Cairo (Greater Cairo Area)",ar:"القاهرة (منطقة القاهرة الكبرى)","zh-Hans":"开罗（大开罗地区）","zh-Hant":"開羅（大開羅地區）"}},{id:e.Caracas,country:a.VE,name:{en:"Caracas",es:"Caracas",zh:"加拉加斯"}},{id:e.Changchun,country:a.CN,name:{en:"Changchun","zh-Hans":"长春","zh-Hant":"長春"}},{id:e.Changsha,country:a.CN,name:{en:"Changsha","zh-Hans":"长沙","zh-Hant":"長沙"}},{id:e.Chengdu,country:a.CN,name:{en:"Chengdu",zh:"成都"}},{id:e.Chongqing,country:a.CN,name:{en:"Chongqing","zh-Hans":"重庆","zh-Hant":"重慶"}},{id:e.Cochabamba,country:a.BO,name:{es:"Cochabamba",zh:"科恰班巴",en:"Cochabamba"}},{id:e.Cologne,country:a.DE,name:{en:"Cologne",de:"Köln",zh:"科隆"}},{id:e.Copenhagen,country:a.DK,name:{en:"Copenhagen",zh:"哥本哈根"}},{id:e.Daegu,country:a.KR,name:{en:"Daegu",ko:"대구",zh:"大邱"}},{id:e.Dalian,country:a.CN,name:{en:"Dalian","zh-Hans":"大连","zh-Hant":"大連"}},{id:e.Delhi,country:a.IN,name:{en:"Delhi",hi:"दिल्ली",zh:"德里"}},{id:e.Dongguan,country:a.CN,name:{en:"Dongguan","zh-Hans":"东莞","zh-Hant":"東莞"}},{id:e.Dortmund,country:a.DE,name:{en:"Dortmund",de:"Dortmund",zh:"多特蒙德"}},{id:e.Edinburgh,country:a.GBSCT,name:{en:"Edinburgh",ga:"Dùn Èideann","zh-Hans":"爱丁堡","zh-Hant":"愛丁堡"}},{id:e.Eskisehir,country:a.TR,name:{en:"Eskişehir",tr:"Eskişehir","zh-Hans":"埃斯基谢希尔","zh-Hant":"埃斯基謝希爾"}},{id:e.Foshan,country:a.CN,name:{en:"Foshan",zh:"佛山"}},{id:e.Frankfurt,country:a.DE,name:{de:"Frankfurt am Main",en:"Frankfurt am Main","zh-Hans":"美茵河畔法兰克福","zh-Hant":"美茵河畔法蘭克福"}},{id:e.Glasgow,country:a.GBSCT,name:{en:"Glasgow",ga:"Glaschu",zh:"格拉斯哥"}},{id:e.Gothenburg,country:a.SE,name:{en:"Gothenburg",es:"Göteborg",zh:"哥德堡"}},{id:e.Guadalajara,country:a.MX,name:{en:"Guadalajara",es:"Guadalajara","zh-Hans":"瓜达拉哈拉","zh-Hant":"瓜達拉哈拉"}},{id:e.Guangzhou,country:a.CN,name:{en:"Guangzhou","zh-Hans":"广州","zh-Hant":"廣州"}},{id:e.Hamburg,country:a.DE,name:{en:"Hamburg",de:"Hamburg","zh-Hans":"汉堡","zh-Hant":"漢堡"}},{id:e.Hangzhou,country:a.CN,name:{en:"Hangzhou",zh:"杭州"}},{id:e.Hanoi,country:a.VN,name:{en:"Hanoi",vi:"Hà Nội","zh-Hans":"河内","zh-Hant":"河內"}},{id:e.Harbin,country:a.CN,name:{en:"Harbin","zh-Hans":"哈尔滨","zh-Hant":"哈爾濱"}},{id:e.Hefei,country:a.CN,name:{zh:"合肥",en:"Hefei"}},{id:e.Hiroshima,country:a.JP,name:{en:"Hiroshima","zh-Hans":"广岛","zh-Hant":"廣島",ja:"広島"}},{id:e.Hochiminh,country:a.VN,name:{en:"Ho Chi Minh City",vi:"Thành phố Hồ Chí Minh",zh:"胡志明市"}},{id:e.Hongkong,country:a.HK,name:{en:"Hong Kong",zh:"香港"}},{id:e.Iashi,country:a.RO,name:{en:"Iași",ro:"Iași",zh:"雅西"}},{id:e.Istanbul,country:a.TR,name:{en:"Istanbul",tr:"İstanbul","zh-Hans":"伊斯坦布尔","zh-Hant":"伊斯坦堡"}},{id:e.Jakarta,country:a.ID,name:{en:"Jakarta",id:"Jakarta","zh-Hans":"雅加达","zh-Hant":"雅加達"}},{id:e.Jinan,country:a.CN,name:{en:"Jinan","zh-Hans":"济南","zh-Hant":"濟南"}},{id:e.Kansai,country:a.JP,name:{en:"Kansai Area",ja:"近畿地方","zh-Hans":"近畿地方（关西地方）","zh-Hant":"近畿地方（關西地方）"}},{id:e.Kaohsiung,country:a.TW,name:{en:"Kaohsiung",zh:"高雄"}},{id:e.Kharkiv,country:a.UA,name:{en:"Kharkiv","zh-Hans":"哈尔科夫","zh-Hant":"哈爾科夫"}},{id:e.Klangvalley,country:a.MY,name:{en:"Greater KL/Klang Valley",ms:"Kuala Lumpur Raya/Lembah Klang",zh:"大吉隆坡/巴生谷"}},{id:e.Kunming,country:a.CN,name:{en:"Kunming",zh:"昆明"}},{id:e.Lima,country:a.PE,name:{en:"Lima",es:"Lima","zh-Hans":"利马","zh-Hant":"利馬"}},{id:e.Lisbon,country:a.PT,name:{en:"Lisbon",pt:"Lisboa",zh:"里斯本"}},{id:e.London,country:a.GBENG,name:{en:"London","zh-Hans":"伦敦","zh-Hant":"倫敦"}},{id:e.Luoyang,country:a.CN,name:{en:"Luoyang","zh-Hans":"洛阳","zh-Hant":"洛陽"}},{id:e.Macao,country:a.MO,name:{en:"Macao",pt:"Macau","zh-Hans":"澳门","zh-Hant":"澳門"}},{id:e.Madrid,country:a.ES,name:{en:"Madrid","zh-Hans":"马德里","zh-Hant":"馬德里"}},{id:e.Manchester,country:a.GBENG,name:{en:"Manchester","zh-Hans":"曼彻斯特","zh-Hant":"曼徹斯特"}},{id:e.Milan,country:a.IT,name:{en:"Milan",it:"Milano","zh-Hans":"米兰","zh-Hant":"米蘭"}},{id:e.Monterrey,country:a.MX,name:{es:"Monterrey",zh:"蒙特雷",en:"Monterrey"}},{id:e.Montreal,country:a.CA,name:{en:"Montreal",fr:"Montréal","zh-Hans":"蒙特利尔","zh-HK":"滿地可","zh-TW":"蒙特婁"}},{id:e.Munich,country:a.DE,name:{de:"München",en:"Munich",zh:"慕尼黑"}},{id:e.Nanjing,country:a.CN,name:{en:"Nanjing",zh:"南京"}},{id:e.Nanning,country:a.CN,name:{en:"Nanning","zh-Hans":"南宁","zh-Hant":"南寧"}},{id:e.Naples,country:a.IT,name:{en:"Naples",it:"Napoli","zh-Hans":"那不勒斯","zh-HK":"拿坡利","zh-TW":"拿坡里"}},{id:e.Neworleans,country:a.US,name:{en:"New Orleans","zh-Hans":"新奥尔良","zh-Hant":"新奧爾良"}},{id:e.Newtaipei,country:a.TW,name:{en:"New Taipei",zh:"新北"}},{id:e.Newyork,country:a.US,name:{en:"New York","zh-Hans":"纽约","zh-Hant":"紐約"}},{id:e.Ningbo,country:a.CN,name:{en:"Ningbo","zh-Hans":"宁波","zh-Hant":"寧波"}},{id:e.Osaka,country:a.JP,name:{en:"Osaka",ja:"大阪",zh:"大阪"}},{id:e.Oslo,country:a.NO,name:{en:"Oslo","zh-Hans":"奥斯陆","zh-Hant":"奧斯陸"}},{id:e.Other,country:a.UN,name:{en:"Customise","zh-Hans":"自定义","zh-Hant":"自訂"}},{id:e.Ottawa,country:a.CA,name:{en:"Ottawa",fr:"Ottawa","zh-Hans":"渥太华","zh-Hant":"渥太華"}},{id:e.Paris,country:a.FR,name:{en:"Paris",zh:"巴黎"}},{id:e.Qingdao,country:a.CN,name:{en:"Qingdao","zh-Hans":"青岛","zh-Hant":"青島"}},{id:e.Rheinruhr,country:a.DE,name:{de:"Metropolregion Rhein-Ruhr",en:"Rhein-Ruhr Metropolitan Region","zh-Hans":"莱茵-鲁尔都会区","zh-Hant":"萊茵-魯爾都會區"}},{id:e.Rio,country:a.BR,name:{en:"Rio de Janeiro",pt:"Rio de Janeiro","zh-Hans":"里约热内卢","zh-Hant":"里約熱內盧"}},{id:e.Riyadh,country:a.SA,name:{en:"Riyadh",ar:"الرياض","zh-Hans":"利雅得","zh-Hant":"利雅德"}},{id:e.Sanfrancisco,country:a.US,name:{en:"San Francisco","zh-Hans":"旧金山","zh-HK":"三藩市","zh-TW":"舊金山"}},{id:e.Sanktpeterburg,country:a.RU,name:{en:"Sankt Peterburg",ru:"Санкт-Петербург","zh-Hans":"圣彼得堡","zh-Hant":"聖彼得堡"}},{id:e.Santiago,country:a.CL,name:{en:"Santiago",es:"Santiago","zh-Hans":"圣地亚哥","zh-Hant":"聖地亞哥 "}},{id:e.Saopaulo,country:a.BR,name:{en:"Sao Paulo",pt:"São Paulo","zh-Hans":"圣保罗","zh-Hant":"聖保羅"}},{id:e.Seoul,country:a.KR,name:{en:"Seoul (Metropolitan Area)",ko:"서울(수도권)","zh-Hans":"首尔（首都圈）","zh-Hant":"首爾（首都圈）"}},{id:e.Sevilla,country:a.ES,name:{es:"Sevilla",en:"Seville"}},{id:e.Shanghai,country:a.CN,name:{en:"Shanghai",zh:"上海"}},{id:e.Shaoxing,country:a.CN,name:{en:"Shaoxing","zh-Hans":"绍兴","zh-Hant":"紹興"}},{id:e.Shenyang,country:a.CN,name:{en:"Shenyang","zh-Hans":"沈阳","zh-Hant":"瀋陽"}},{id:e.Shenzhen,country:a.CN,name:{en:"Shenzhen",zh:"深圳"}},{id:e.Singapore,country:a.SG,name:{en:"Singapore",zh:"新加坡"}},{id:e.Stockholm,country:a.SE,name:{en:"Stockholm","zh-Hans":"斯德哥尔摩","zh-Hant":"斯德哥爾摩"}},{id:e.Suzhou,country:a.CN,name:{en:"Suzhou","zh-Hans":"苏州","zh-Hant":"蘇州"}},{id:e.Taichung,country:a.TW,name:{en:"Taichung",zh:"台中"}},{id:e.Taipei,country:a.TW,name:{en:"Taipei",zh:"台北"}},{id:e.Taiyuan,country:a.CN,name:{en:"Taiyuan","zh-Hans":"太原"}},{id:e.Taoyuan,country:a.TW,name:{en:"Taoyuan","zh-TW":"桃園","zh-CN":"桃园","zh-HK":"桃園"}},{id:e.Tashkent,country:a.UZ,name:{en:"Tashkent",zh:"塔什干"}},{id:e.Tehran,country:a.IR,name:{en:"Tehran",fa:"تهران‎","zh-Hans":"德黑兰","zh-Hant":"德黑蘭"}},{id:e.Tianjin,country:a.CN,name:{en:"Tianjin",zh:"天津"}},{id:e.Tokyo,country:a.JP,name:{en:"Tokyo (Greater Tokyo Area)",ja:"東京（首都圏）","zh-Hans":"东京（首都圈）","zh-Hant":"東京（首都圈）"}},{id:e.Toronto,country:a.CA,name:{en:"Toronto (Greater Toronto and Hamilton Area)",fr:"Toronto (Région du Grand Toronto et de Hamilton)","zh-Hans":"多伦多（大多伦多及汉密尔顿地区）","zh-HK":"多倫多（大多倫多暨咸美頓地區）","zh-TW":"多倫多（大多倫多暨哈密爾頓地區）"}},{id:e.Tyneandwear,country:a.GBENG,name:{en:"Tyne and Wear","zh-Hans":"泰恩-威尔","zh-HK":"泰威","zh-TW":"泰恩-威爾"}},{id:e.Urumqi,country:a.CN,name:{en:"Urumqi","zh-Hans":"乌鲁木齐","zh-Hant":"烏魯木齊"}},{id:e.Vienna,country:a.AT,name:{en:"Vienna",de:"Wien","zh-Hans":"维也纳","zh-Hant":"維也納"}},{id:e.Warsaw,country:a.PL,name:{en:"Warsaw",pl:"Warszawa","zh-Hans":"华沙","zh-Hant":"華沙"}},{id:e.Washington,country:a.US,name:{en:"Washington DC","zh-Hans":"华盛顿特区","zh-Hant":"華盛頓特區"}},{id:e.Wuhan,country:a.CN,name:{en:"Wuhan","zh-Hans":"武汉","zh-Hant":"武漢"}},{id:e.Wuxi,country:a.CN,name:{en:"Wuxi","zh-Hans":"无锡","zh-Hant":"無錫"}},{id:e.Xiamen,country:a.CN,name:{en:"Xiamen","zh-Hans":"厦门","zh-Hant":"廈門"}},{id:e.Xian,country:a.CN,name:{en:"Xi'an",zh:"西安"}},{id:e.Xuzhou,country:a.CN,name:{en:"Xuzhou","zh-Hans":"徐州","zh-Hant":"徐州"}},{id:e.Yevpatoria,country:a.UA,name:{en:"Yevpatoria","zh-Hans":"叶夫帕托里亚","zh-Hant":"葉夫帕托里亞"}},{id:e.Yokohama,country:a.JP,name:{en:"Yokohama",ja:"横浜","zh-Hans":"横滨","zh-Hant":"橫濱"}},{id:e.Zhengzhou,country:a.CN,name:{en:"Zhengzhou","zh-Hans":"郑州","zh-Hant":"鄭州"}}],I=[{id:a.AT,name:{en:"Austria",de:"Österreich","zh-Hans":"奥地利","zh-Hant":"奧地利"},language:"de",flagEmoji:"🇦🇹",flagSvg:"1F1E6-1F1F9.svg"},{id:a.AZ,name:{en:"Azerbaijan",az:"Azərbaycan","zh-Hans":"阿塞拜疆","zh-HK":"阿塞拜疆","zh-TW":"亞塞拜然"},language:"az",flagEmoji:"🇦🇿",flagSvg:"1F1E6-1F1FF.svg"},{id:a.BE,name:{en:"Belgium",fr:"Belgique","zh-Hans":"比利时","zh-Hant":"比利時"},language:"fr",flagEmoji:"🇧🇪",flagSvg:"1F1E7-1F1EA.svg"},{id:a.BO,name:{en:"Bolivia","zh-Hans":"玻利维亚","zh-Hant":"玻利維亞",es:"Bolivia"},language:"es",flagEmoji:"🇧🇴",flagSvg:"1F1E7-1F1F4.svg"},{id:a.BR,name:{en:"Brazil",pt:"Brasil",zh:"巴西"},language:"pt",flagEmoji:"🇧🇷",flagSvg:"1F1E7-1F1F7.svg"},{id:a.CA,name:{en:"Canada",fr:"Canada",zh:"加拿大"},language:"en",flagEmoji:"🇨🇦",flagSvg:"1F1E8-1F1E6.svg"},{id:a.CL,name:{en:"Chile",es:"Chile",zh:"智利"},language:"es",flagEmoji:"🇨🇱",flagSvg:"1F1E8-1F1F1.svg"},{id:a.CN,name:{en:"China","zh-Hans":"中国","zh-Hant":"中國"},language:"zh-Hans",flagEmoji:"🇨🇳",flagSvg:"1F1E8-1F1F3.svg"},{id:a.DE,name:{en:"Germany",de:"Deutsche","zh-Hans":"德国","zh-Hant":"德國"},language:"de",flagEmoji:"🇩🇪",flagSvg:"1F1E9-1F1EA.svg"},{id:a.DK,name:{en:"Denmark",da:"Danmark","zh-Hans":"丹麦","zh-Hant":"丹麥"},language:"da",flagEmoji:"🇩🇰",flagSvg:"1F1E9-1F1F0.svg"},{id:a.EG,name:{en:"Egypt",ar:"مِصر",zh:"埃及"},language:"ar",flagEmoji:"🇪🇬",flagSvg:"1F1EA-1F1EC.svg"},{id:a.ES,name:{en:"Spain",es:"España",zh:"西班牙"},language:"es",flagEmoji:"🇪🇸",flagSvg:"1F1EA-1F1F8.svg"},{id:a.FR,name:{en:"France",fr:"France","zh-Hans":"法国","zh-Hant":"法國"},language:"fr",flagEmoji:"🇫🇷",flagSvg:"1F1EB-1F1F7.svg"},{id:a.GBENG,name:{en:"England","zh-Hans":"英格兰","zh-Hant":"英格蘭"},language:"en",flagEmoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",flagSvg:"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F.svg"},{id:a.GBSCT,name:{en:"Scotland",ga:"Alba","zh-Hans":"苏格兰","zh-Hant":"蘇格蘭"},language:"en",flagEmoji:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",flagSvg:"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F.svg"},{id:a.GR,name:{en:"Greece",el:"Ελλάδα","zh-Hans":"希腊","zh-Hant":"希臘"},language:"el",flagEmoji:"🇬🇷",flagSvg:"1F1EC-1F1F7.svg"},{id:a.HK,name:{en:"Hong Kong",zh:"香港"},language:"zh-HK",flagEmoji:"🇭🇰",flagSvg:"1F1ED-1F1F0.svg"},{id:a.HU,name:{en:"Hungary",hu:"Magyarország",zh:"匈牙利"},language:"hu",flagEmoji:"🇭🇺",flagSvg:"1F1ED-1F1FA.svg"},{id:a.ID,name:{en:"Indonesia",id:"Indonesia","zh-Hans":"印度尼西亚","zh-Hant":"印度尼西亞"},language:"id",flagEmoji:"🇮🇩",flagSvg:"1F1EE-1F1E9.svg"},{id:a.IN,name:{en:"India",hi:"भारत",zh:"印度"},language:"hi",flagEmoji:"🇮🇳",flagSvg:"1F1EE-1F1F3.svg"},{id:a.IR,name:{en:"Iran",fa:"ایران",zh:"伊朗"},language:"fa",flagEmoji:"🇮🇷",flagSvg:"1F1EE-1F1F7.svg"},{id:a.IT,name:{en:"Italy",it:"Italia","zh-Hans":"意大利","zh-HK":"意大利","zh-TW":"義大利"},language:"it",flagEmoji:"🇮🇹",flagSvg:"1F1EE-1F1F9.svg"},{id:a.JP,name:{en:"Japan",ja:"日本",zh:"日本"},language:"ja",flagEmoji:"🇯🇵",flagSvg:"1F1EF-1F1F5.svg"},{id:a.KR,name:{en:"South Korea",ko:"대한민국","zh-Hans":"韩国","zh-Hant":"南韓"},language:"ko",flagEmoji:"🇰🇷",flagSvg:"1F1F0-1F1F7.svg"},{id:a.MO,name:{en:"Macao",pt:"Macau","zh-Hans":"澳门","zh-Hant":"澳門"},language:"zh-HK",flagEmoji:"🇲🇴",flagSvg:"1F1F2-1F1F4.svg"},{id:a.MX,name:{en:"Mexico",es:"México",zh:"墨西哥"},language:"es",flagEmoji:"🇲🇽",flagSvg:"1F1F2-1F1FD.svg"},{id:a.MY,name:{en:"Malaysia",ms:"Malaysia","zh-Hans":"马来西亚","zh-Hant":"馬來西亞"},language:"ms",flagEmoji:"🇲🇾",flagSvg:"1F1F2-1F1FE.svg"},{id:a.NO,name:{en:"Norway",no:"Norge",zh:"挪威"},language:"no",flagEmoji:"🇳🇴",flagSvg:"1F1F3-1F1F4.svg"},{id:a.PE,name:{en:"Peru",es:"Perú","zh-Hans":"秘鲁","zh-Hant":"秘魯"},language:"es",flagEmoji:"🇵🇪",flagSvg:"1F1F5-1F1EA.svg"},{id:a.PL,name:{en:"Poland",pl:"Polska","zh-Hans":"波兰","zh-Hant":"波蘭"},language:"pl",flagEmoji:"🇵🇱",flagSvg:"1F1F5-1F1F1.svg"},{id:a.PT,name:{en:"Portugal",pt:"Portugal",zh:"葡萄牙"},language:"pt",flagEmoji:"🇵🇹",flagSvg:"1F1F5-1F1F9.svg"},{id:a.RO,name:{en:"Romania",ro:"România","zh-Hans":"罗马尼亚","zh-Hant":"羅馬尼亞"},language:"ro",flagEmoji:"🇷🇴",flagSvg:"1F1F7-1F1F4.svg"},{id:a.RU,name:{en:"Russia",ru:"Россия","zh-Hans":"俄罗斯","zh-Hant":"俄羅斯"},language:"ru",flagEmoji:"🇷🇺",flagSvg:"1F1F7-1F1FA.svg"},{id:a.SA,name:{en:"Saudi Arabia",ar:"المملكة العربية السعودية","zh-Hans":"沙特阿拉伯","zh-HK":"沙地阿拉伯","zh-TW":"沙烏地阿拉伯"},language:"ar",flagEmoji:"🇸🇦",flagSvg:"1F1F8-1F1E6.svg"},{id:a.SE,name:{en:"Sweden",sv:"Sverige",zh:"瑞典"},language:"sv",flagEmoji:"🇸🇪",flagSvg:"1F1F8-1F1EA.svg"},{id:a.SG,name:{en:"Singapore",ms:"Singapura",zh:"新加坡"},language:"en",flagEmoji:"🇸🇬",flagSvg:"1F1F8-1F1EC.svg"},{id:a.TH,name:{en:"Thailand",th:"ราชอาณาจักรไทย","zh-Hans":"泰国","zh-Hant":"泰國"},language:"th",flagEmoji:"🇹🇭",flagSvg:"1F1F9-1F1ED.svg"},{id:a.TR,name:{en:"Turkey",tr:"Türkiye",zh:"土耳其"},language:"tr",flagEmoji:"🇹🇷",flagSvg:"1F1F9-1F1F7.svg"},{id:a.TW,name:{en:"Taiwan","zh-Hans":"台湾","zh-Hant":"台灣"},language:"zh-TW",flagEmoji:"🇹🇼",flagSvg:"1F1F9-1F1FC.svg"},{id:a.UA,name:{en:"Ukraine","zh-Hans":"乌克兰","zh-Hant":"烏克蘭"},language:"en",flagEmoji:"🇺🇦",flagSvg:"1F1FA-1F1E6.svg"},{id:a.UN,name:{en:"Customise","zh-Hans":"自定义","zh-Hant":"自訂"},flagEmoji:"🇺🇳",flagSvg:"1F1FA-1F1F3.svg",language:void 0},{id:a.US,name:{en:"United States","zh-Hans":"美国","zh-Hant":"美國"},language:"en",flagEmoji:"🇺🇸",flagSvg:"1F1FA-1F1F8.svg"},{id:a.UZ,name:{en:"Uzbekistan",uz:"O'zbekiston","zh-Hans":"乌兹别克斯坦","zh-Hant":"烏茲別克斯坦"},language:"uz",flagEmoji:"🇺🇿",flagSvg:"1F1FA-1F1FF.svg"},{id:a.VE,name:{en:"Venezuela",zh:"委内瑞拉"},flagEmoji:"🇻🇪",flagSvg:"1F1FB-1F1EA.svg",language:void 0},{id:a.VN,name:{en:"Vietnam",vi:"Việt Nam",zh:"越南"},language:"vi",flagEmoji:"🇻🇳",flagSvg:"1F1FB-1F1F3.svg"}],Ea="**Do not edit lines below, they are meant for bots only!!!**",da=(n,i)=>{if(i!==null){const t=document.createElement("details");return t.setAttribute("repo","rmg-palette"),t.setAttribute("type",n),t.textContent=JSON.stringify(i,null,4),t.outerHTML}else return""};var H=(n=>(n.COUNTRY_CODE_UNDEFINED="COUNTRY_CODE_UNDEFINED",n.CITY_CODE_UNDEFINED="CITY_CODE_UNDEFINED",n.LINE_CODE_UNDEFINED="LINE_CODE_UNDEFINED",n.LINE_CODE_DUPLICATED="LINE_CODE_DUPLICATED",n))(H||{}),c=(n=>(n.EN_UNDEFINED="EN_UNDEFINED",n.ZH_UNDEFINED="ZH_UNDEFINED",n.ZH_HANS_UNDEFINED="ZH_HANS_UNDEFINED",n.ZH_HANT_UNDEFINED="ZH_HANT_UNDEFINED",n.ZH_HK_UNDEFINED="ZH_HK_UNDEFINED",n.ZH_TW_UNDEFINED="ZH_TW_UNDEFINED",n.ZH_VARIANTS_REDEFINED="ZH_VARIANTS_REDEFINED",n.LANGUAGE_DUPLICATED="LANGUAGE_DUPLICATED",n.OFFICIAL_LANGUAGE_UNDEFINED="OFFICIAL_LANGUAGE_UNDEFINED",n))(c||{});const za={COUNTRY_CODE_UNDEFINED:{en:"Country/region code is missing","zh-Hans":"缺少国家/地区代码","zh-Hant":"缺少國家/地區代碼"},CITY_CODE_UNDEFINED:{en:"City code is missing","zh-Hans":"缺少城市代码","zh-Hant":"缺少城市代碼"},LINE_CODE_UNDEFINED:{en:"At least one line code is missing","zh-Hans":"至少1条线路的代码缺失","zh-Hant":"至少1條路綫的代碼缺失"},LINE_CODE_DUPLICATED:{en:"Duplicated line code found","zh-Hans":"包含重复的线路代码","zh-Hant":"包含重複的路綫代碼"},EN_UNDEFINED:{en:"English name is missing","zh-Hans":"缺少英文名称","zh-Hant":"缺少英文名稱"},ZH_UNDEFINED:{en:"Chinese name is missing","zh-Hans":"缺少中文名称","zh-Hant":"缺少中文名稱"},ZH_HANS_UNDEFINED:{en:"Simplified Chinese name is missing","zh-Hans":"缺少简体中文名称","zh-Hant":"缺少簡體中文名稱"},ZH_HANT_UNDEFINED:{en:"Traditional Chinese name is missing","zh-Hans":"缺少繁体中文名称","zh-Hant":"缺少繁體中文名稱"},ZH_HK_UNDEFINED:{en:"Traditional Chinese (Hong Kong variant) name is missing","zh-Hans":"缺少繁体中文（香港变体）名称","zh-Hant":"缺少繁體中文（香港變體）名稱"},ZH_TW_UNDEFINED:{en:"Traditional Chinese (Taiwan variant) name is missing","zh-Hans":"缺少繁体中文（台湾变体）名称","zh-Hant":"缺少繁體中文（台灣變體）名稱"},ZH_VARIANTS_REDEFINED:{en:"Chinese variants are redefined","zh-Hans":"包含重复的中文变体","zh-Hant":"包含重複的中文變體"},LANGUAGE_DUPLICATED:{en:"Duplicated language found","zh-Hans":"包含重复的语言","zh-Hant":"包含重複的語言"},OFFICIAL_LANGUAGE_UNDEFINED:{en:"Name in official language is missing","zh-Hans":"缺少官方语言名称","zh-Hant":"缺少官方語言名稱"}};var _=(n=>(n.APP_LOAD="APP_LOAD",n.ADD_CITY="ADD_CITY",n.EDIT_CITY="EDIT_CITY",n.RESET_TICKET="RESET_TICKET",n))(_||{});const f=(n,i)=>{const t=[];n.some(h=>h[0]==="en"&&h[1])||t.push(c.EN_UNDEFINED);const r=n.some(h=>h[0]==="zh-Hans"&&h[1]),o=n.some(h=>h[0]==="zh-Hant"&&h[1]),s=n.some(h=>h[0]==="zh-CN"&&h[1]),u=n.some(h=>h[0]==="zh-HK"&&h[1]),g=n.some(h=>h[0]==="zh-TW"&&h[1]);return n.some(h=>h[0]==="zh"&&h[1])?(r||o||s||u||g)&&t.push(c.ZH_VARIANTS_REDEFINED):!r&&!o&&!s&&!u&&!g?t.push(c.ZH_UNDEFINED):(r?s&&t.push(c.ZH_VARIANTS_REDEFINED):s||t.push(c.ZH_HANS_UNDEFINED),o?(u||g)&&t.push(c.ZH_VARIANTS_REDEFINED):!u&&!g?t.push(c.ZH_HANT_UNDEFINED):u?g||t.push(c.ZH_TW_UNDEFINED):t.push(c.ZH_HK_UNDEFINED)),new Set(n.map(h=>h[0])).size!==n.length&&t.push(c.LANGUAGE_DUPLICATED),i&&n.every(h=>h[0]!==i)&&t.push(c.OFFICIAL_LANGUAGE_UNDEFINED),t},p=j.map(n=>[n,""]),R={id:"",nameEntity:p,colour:"#aaaaaa",fg:N.white,pantone:void 0},A=()=>({country:void 0,newCountry:"",newCountryLang:void 0,countryName:p,city:"",cityName:p,lines:{[crypto.randomUUID()]:R}}),U=T({name:"ticket",initialState:A(),reducers:{setCountry:(n,i)=>{n.country=i.payload},setNewCountry:(n,i)=>{n.newCountry=i.payload},setNewCountryLang:(n,i)=>{n.newCountryLang=i.payload},updateCountryName:(n,i)=>{const{lang:t,name:r}=i.payload,o=n.countryName.findIndex(s=>s[0]===t);o>=0?n.countryName[o]=[t,r]:n.countryName.push([t,r])},switchCountryNameLang:(n,i)=>{const{prevLang:t,nextLang:r}=i.payload;n.countryName=n.countryName.map(o=>o[0]===t?[r,o[1]]:o)},removeCountryName:(n,i)=>{n.countryName=n.countryName.filter(t=>t[0]!==i.payload)},setCity:(n,i)=>{n.city=i.payload},updateCityName:(n,i)=>{const{lang:t,name:r}=i.payload,o=n.cityName.findIndex(s=>s[0]===t);o>=0?n.cityName[o]=[t,r]:n.cityName.push([t,r])},switchCityNameLang:(n,i)=>{const{prevLang:t,nextLang:r}=i.payload;n.cityName=n.cityName.map(o=>o[0]===t?[r,o[1]]:o)},removeCityName:(n,i)=>{n.cityName=n.cityName.filter(t=>t[0]!==i.payload)},updateLineId:(n,i)=>{n.lines[i.payload.entryId].id=i.payload.lineId},updateLineBgColour:(n,i)=>{const{entryId:t,bgColour:r}=i.payload;n.lines[t].colour=r,n.lines[t].pantone=void 0},updateLinePantone:(n,i)=>{const{entryId:t,pantone:r,hex:o}=i.payload;n.lines[t].colour=o,n.lines[t].pantone=r},updateLineFgColour:(n,i)=>{n.lines[i.payload.entryId].fg=i.payload.fgColour},updateLineName:(n,i)=>{const{entryId:t,lang:r,name:o}=i.payload,s=n.lines[t].nameEntity.findIndex(u=>u[0]===r);s>=0?n.lines[t].nameEntity[s]=[r,o]:n.lines[t].nameEntity.push([r,o])},switchLineNameLang:(n,i)=>{const{entryId:t,prevLang:r,nextLang:o}=i.payload;n.lines[t].nameEntity=n.lines[t].nameEntity.map(s=>s[0]===r?[o,s[1]]:s)},removeLineName:(n,i)=>{const{entryId:t,lang:r}=i.payload;n.lines[t].nameEntity=n.lines[t].nameEntity.filter(o=>o[0]!==r)},addLine:n=>{n.lines[crypto.randomUUID()]=R},copyLine:(n,i)=>{n.lines[crypto.randomUUID()]=JSON.parse(JSON.stringify(n.lines[i.payload]))},removeLine:(n,i)=>{delete n.lines[i.payload]},resetTicket:()=>A(),populateTicket:(n,i)=>{const{city:t,palettes:r}=i.payload;n.country=t.country,n.city=t.id,n.cityName=Object.entries(t.name).map(([o,s])=>[o,s]),n.lines=r.reduce((o,s)=>{const{id:u,colour:g,fg:h,pantone:m}=s,d=Object.entries(s.name).map(([z,B])=>[z,B]);return{...o,[crypto.randomUUID()]:{id:u,nameEntity:d,colour:g,fg:h!=null?h:N.white,pantone:m}}},{})}}}),Ha={getCountryEntry:n=>n.country!=="new"?null:{id:n.newCountry,name:Object.fromEntries(n.countryName),language:n.newCountryLang},getCityEntry:n=>{var i;return{id:n.city,country:n.country==="new"?n.newCountry:(i=n.country)!=null?i:"",name:Object.fromEntries(n.cityName)}},getPalettes:n=>Object.values(n.lines).map(i=>{const{nameEntity:t,...r}=i;return{...r,name:Object.fromEntries(t)}}),getCountryErrors:n=>{const i=[],{country:t,newCountry:r,newCountryLang:o,countryName:s}=n;return(!t||t==="new"&&!r)&&i.push(H.COUNTRY_CODE_UNDEFINED),t==="new"&&i.push(...f(s,o)),i},getCityErrors:n=>{var g;const i=[],{country:t,newCountryLang:r,city:o,cityName:s}=n;o||i.push(H.CITY_CODE_UNDEFINED);const u=t==="new"?r:(g=I.find(h=>h.id===t))==null?void 0:g.language;return i.push(...f(s,u)),i},getLineErrors:n=>{var u;const i={Overall:[]},{country:t,newCountryLang:r,lines:o}=n;Object.values(o).some(g=>g.id==="")&&i.Overall.push(H.LINE_CODE_UNDEFINED),new Set(Object.values(o).map(g=>g.id)).size!==Object.keys(o).length&&i.Overall.push(H.LINE_CODE_DUPLICATED);const s=t==="new"?r:(u=I.find(g=>g.id===t))==null?void 0:u.language;return Object.values(o).forEach(g=>{i["Line "+g.id]=f(g.nameEntity,s)}),i}},{setCountry:Na,setNewCountry:fa,setNewCountryLang:Fa,updateCountryName:pa,switchCountryNameLang:ya,removeCountryName:va,setCity:Da,updateCityName:Sa,switchCityNameLang:Ia,removeCityName:Aa,updateLineId:La,updateLineBgColour:ka,updateLinePantone:Ta,updateLineFgColour:ba,updateLineName:_a,switchLineNameLang:Ra,removeLineName:Ua,addLine:wa,copyLine:Pa,removeLine:Ba,resetTicket:ja,populateTicket:Oa}=U.actions,en=U.reducer,w=O({reducer:{app:an,ticket:en}}),Ga=()=>G(),Ka=K;window.xyStore=w;const tn={},on="操作",sn="黑",rn="城市",hn="复制",un="编辑",gn="理由",ln="语言",cn="线路",mn="名称",En="下一步",dn="打开",zn="潘通",Hn="上一步",Nn="删除",fn="重置",Fn="白",pn={"1-click open issue":"一键开启Issue",Action:on,"Add a city":"添加城市","Add a country/region...":"添加国家/地区...","Add a line":"添加线路","Add a name in another language":"添加另一语言的名称","Background colour":"背景色",Black:sn,"Briefly describe your changes and provide justification":"简洁地描述您的改动并提供理由","Checking Pantone service availability...":"正在检查潘通服务可用性...",City:rn,"City code":"城市代码","Colour mode":"颜色模式",Copy:hn,"Country / Region":"国家/地区","Country/region code":"国家/地区代码",Edit:un,"Edit city":"编辑城市","Enter a valid URL":"输入有效的URL","Foreground colour":"前景色","Go back":"返回","If the button below doesn't work for you, please follow the instructions below:":"如果您无法使用下面的按钮，请按下方的指引开启 Issue：",Justification:gn,Language:ln,"Line code":"线路代码",Lines:cn,Name:mn,Next:En,"Offical language":"官方语言",Open:dn,Pantone:zn,"Pantone code":"潘通代码","Pantone service is not available":"潘通服务不可用","Pantone service is ready":"潘通服务已准备就绪","Paste following text to the issue body":"将下面的文字粘贴到 Issue 正文","Please provide suitable source and justification.":"请您提供适当的来源和理由。","Please select...":"请选择...",Previous:Hn,"Reference link":"参考链接",Remove:Nn,"Remove this name":"删除此名称",Reset:fn,"Submit anyway":"继续提交","Submit palettes":"提交调色板",White:Fn,"Your inputs contain the following errors. Please consider fixing it before submitting.":"您的输入存在以下问题，请考虑在提交前修正他們。"},yn="動作",vn="黑",Dn="城市",Sn="複製",In="編輯",An="理由",Ln="語言",kn="路綫",Tn="名稱",bn="下一步",_n="開啟",Rn="Pantone",Un="上一步",wn="移除",Pn="重設",Bn="白",jn={"1-click open issue":"一鍵開啟Issue",Action:yn,"Add a city":"新增城市","Add a country/region...":"新增國家/地區...","Add a line":"新增路綫","Add a name in another language":"新增另一語言的名稱","Background colour":"背景色",Black:vn,"Briefly describe your changes and provide justification":"簡短地描述你的變更並提供理由","Checking Pantone service availability...":"正在檢查 Pantone 服務可用性...",City:Dn,"City code":"城市代碼","Colour mode":"顏色模式",Copy:Sn,"Country / Region":"國家/地區","Country/region code":"國家/地區代碼",Edit:In,"Edit city":"編輯城市","Enter a valid URL":"輸入有效的URL","Foreground colour":"前景色","Go back":"返回","If the button below doesn't work for you, please follow the instructions below:":"若你無法使用下面的按鈕，請按下方的指引開啟 Issue：",Justification:An,Language:Ln,"Line code":"路綫代碼",Lines:kn,Name:Tn,Next:bn,Open:_n,"Offical language":"官方語言",Pantone:Rn,"Pantone code":"Pantone 代碼","Pantone service is not available":"Pantone 服務不可用","Pantone service is ready":"Pantone 服務已準備妥當","Paste following text to the issue body":"將下面的文字於 Issue 正文內貼上","Please provide suitable source and justification.":"請你提供適當的來源及理由。","Please select...":"請選擇...",Previous:Un,"Reference link":"参考連結",Remove:wn,"Remove this name":"移除此名稱",Reset:Pn,"Submit anyway":"繼續提交","Submit palettes":"提交調色盤",White:Bn,"Your inputs contain the following errors. Please consider fixing it before submitting.":"你的輸入存在以下問題，請考慮於提交前修正他們。"},On="조작",Gn="블랙",Kn="도시",Mn="복사",Wn="편집",xn="이유",Zn="언어",$n=" 노선",Vn="명칭",Jn="다음",Yn="열기",Xn="팬톤",qn="한 걸음",Qn="삭제",Cn="리셋",na="화이트",aa={"1-click open issue":"원터치로 Issue 열기",Action:On,"Add a city":"도시 추가","Add a country/region...":"국가/ 지역 추가...","Add a line":"노선 추가","Add a name in another language":"다른 언어 명칭 추가하기","Background colour":"배경색",Black:Gn,"Briefly describe your changes and provide justification":"변경 사항을 간결하게 설명하고 이유를 제공합니다","Checking Pantone service availability...":"펜톤 서비스 사용 가능 여부 확인 중...",City:Kn,"City code":"도시 코드","Colour mode":"컬러 모드",Copy:Mn,"Country / Region":"국가/지역","Country/region code":"국가/지역 코드",Edit:Wn,"Edit city":"도시 편집","Enter a valid URL":"유효한 URL을 입력하세요","Foreground colour":"전경색","Go back":"반품","If the button below doesn't work for you, please follow the instructions below:":"아래 버튼을 사용할 수 없는 경우 아래 지침에 따라 문제를 여십시오.",Justification:xn,Language:Zn,"Line code":" 노선 코드",Lines:$n,Name:Vn,Next:Jn,"Offical language":"공용언어",Open:Yn,Pantone:Xn,"Pantone code":"판톤 코드","Pantone service is not available":"펜톤 서비스를 사용할 수 없습니다","Pantone service is ready":"펜톤 서비스 준비 완료","Paste following text to the issue body":"다음 텍스트를 Issue 본문에 붙여넣기","Please provide suitable source and justification.":"적절한 출처와 이유를 알려주세요.","Please select...":"선택해주세요..",Previous:qn,"Reference link":"참조 링크",Remove:Qn,"Remove this name":"이 명칭 삭제",Reset:Cn,"Submit anyway":"계속 제출","Submit palettes":"제출 팔레트",White:na,"Your inputs contain the following errors. Please consider fixing it before submitting.":"당신의 입력에 다음과 같은 문제가 있으니 제출하기 전에 수정하는 것을 고려해 주세요."},ea=new E.I18nBuilder().withAppName("Palette").withLng(E.getLanguage()).withDefaultResource(M).withResource("en",tn).withResource("zh-Hans",pn).withResource("zh-Hant",jn).withResource("ko",aa).build(),ia="modulepreload",ta=function(n){return"/rmg-palette/"+n},L={},P=function(i,t,r){if(!t||t.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=ta(s),s in L)return;L[s]=!0;const u=s.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const z=o[d];if(z.href===s&&(!u||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${g}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":ia,u||(m.as="script",m.crossOrigin=""),m.href=s,document.head.appendChild(m),u)return new Promise((d,z)=>{m.addEventListener("load",d),m.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>i())};function oa(){const{t:n}=W(),i=E.getEnv(),t=E.getAppVersion();return F(x,{children:[l(Z,{as:"h4",size:"md",children:n("Palette")}),l($,{environment:i,version:t})]})}const sa=y.lazy(()=>P(()=>import("./palette-view-a56b03ec.js"),["assets/palette-view-a56b03ec.js","assets/vendor-9037961f.js","assets/index.esm-36f0f096.js"])),ra=y.lazy(()=>P(()=>import("./ticket-view-cc594850.js"),["assets/ticket-view-cc594850.js","assets/vendor-9037961f.js","assets/index.esm-36f0f096.js"]));function ha(){return l(V,{basename:"/rmg-palette/",children:l(J,{children:F(Y,{children:[l(oa,{}),F(X,{children:[l(v,{path:"/new",element:l(D,{suspenseFallback:l(S,{isIndeterminate:!0}),children:l(ra,{})})}),l(v,{path:"/",element:l(D,{suspenseFallback:l(S,{isIndeterminate:!0}),children:l(sa,{})})})]})]})})})}let k;const ua=()=>{k=q(document.getElementById("root")),k.render(l(y.StrictMode,{children:l(Q,{store:w,children:l(C,{i18n:ea,children:l(ha,{})})})}))};E.ready().then(()=>{ua(),E.injectCss(),E.event(_.APP_LOAD,{isStandaloneWindow:E.isStandaloneWindow()})});export{da as A,Ha as B,a as C,ja as D,_ as E,Ea as G,za as I,N as M,P as _,ga as __vite_legacy_guard,Ga as a,ma as b,I as c,Na as d,fa as e,Fa as f,pa as g,ya as h,Da as i,Sa as j,Ia as k,Aa as l,La as m,ka as n,ba as o,Oa as p,Ta as q,va as r,ca as s,Pa as t,Ka as u,Ba as v,wa as w,_a as x,Ra as y,Ua as z};
