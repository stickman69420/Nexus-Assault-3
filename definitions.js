const mapc = 21
const tilenames = ["grass","grass2","grass3","wet grass","tiles","tiles cracked","tiles cracked2","tiles wall","tiles wall cracked2","tiles wall cracked","tile","tile cracked","tile cracked2","tile wall","tile wall cracked","tile wall cracked2","water","redSpawn","blueSpawn","hedge","table","chair","computer","computer2","rgbcomputer","rgbcomputer2","monitor","monitor2","tile dark","tile dark cracked","tile dark cracked2","tiles dark","tiles dark cracked","tiles dark cracked2","sink","price tag","vertroad","horroad","downcarspawn","upcarspawn","rightcarspawn","leftcarspawn","yellow hedge","dirt","rer","orng","yeller","greer","renn","can","lue","lu","ourple","genta","ink","redpurple dmnds","dornge wisps","noise1","noise2","noise3","noise4","noise5"]
const unitnames = ["Light walker","Heavy walker","Drone","Roller","Chinook"]
const cols = ["red","blue"]
const skins = ["","/NA2","/NA","/SWORD","/pmem"]
const skin = [Number(localStorage.getItem("p1Skin") ?? 0),Number(localStorage.getItem("p2Skin") ?? 0)]
const skunlock = [JSON.parse(localStorage.getItem("p1Skins") ?? "[0]"),JSON.parse(localStorage.getItem("p2Skins") ?? "[0]")]

let des = Number(localStorage.getItem("des") ?? 0)

if (!skunlock[0].includes(3) && des >= 10) {
	skunlock[0].push(3)
	localStorage.setItem("p1Skins",JSON.stringify(skunlock[0]))
}
if (!skunlock[1].includes(3) && des >= 20) {
	skunlock[1].push(3)
	localStorage.setItem("p2Skins",JSON.stringify(skunlock[1]))
}
//const achievements = JSON.parse(localStorage.getItem("achievements"))

function weightedRand(r) {
	let i = 0
	const rs = Object.values(r).reduce((a,b) => {i+=b;a.push(i);return a},[])
	const unw = Math.random()
	let ind = 0
	for (const j of rs) {
		if (unw > j) ind++
		else break
	}
	return Object.keys(r)[ind]
}
//weightedRand({"0":0.25,"1":0.5,"2":0.125,"3":0.125})