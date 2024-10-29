require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐑𝐞𝐯𝐚𝐧𝐂𝐫𝐚𝐬𝐡"
global.dana = "12829292"
global.qris = "https://deposit.pictures/p/8f3f4ab89de24d3faef51146d7439b3a"


// GLOBAL SETTING
global.owner = "12829292"
global.namabot = "𝐑𝐞𝐯𝐚𝐧𝐂𝐫𝐚𝐬𝐡"
global.nomorbot = "48459060477"
global.namaCreator = "𝐑𝐞𝐯𝐚𝐧𝐂𝐫𝐚𝐬𝐡"
global.linkyt = "https://youtube.com/@revancrash"
global.autoJoin = false
global.antilink = false
global.versisc = '5.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://8030.us.kg/file/14VKdVW6MSA1.jpg'
global.isLink = 'https://whatsapp.com/channel/0029ValbDPt6WaKwXIRaHM0P'
global.packname = "Bugs"
global.author = "𝐑𝐞𝐯𝐚𝐧𝐂𝐫𝐚𝐬𝐡"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})