//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is KING UDULA🔥
My Creator is Udula Bro😎` //Costomize Alive Message (*🍁̶͟͞  බොට් සක්‍රීය දැයි බැලිමට* ```.alive``` *ලෙස ටයිප් කරන්න.🍃⃝⃗🕵️‍♀️*

*🍁̶͟͞  බොට්ගේ විධාන ලැයිස්තුව ලබා ගැනිමට* ```.menu``` *ලෙස ටයිප් කරන්න.🍃⃝⃗🕵️‍♀️*

 . ___________________
▕╮╭┻┻╮╭┻┻╮╭▕╮╲
▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏
▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏
▕╰━━━┓┈┈┈╭╮▕╭╮▏
▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏
▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏


*⚖️⃢⛓️හ̶⃯⃗යි̶⃗͢ජැ̶⃯⃗ක ⃯⃖ලො̶⃗͢වේ⃞̶⃯⃕ ක̶⃯⃖පි̶⃖͢තා̶⃯⃖න̶්⃯⃖⛓️⃢⚖️*
මෙන්න අපේ OFFICIAL GROUP LINK එක.🎃
https://chat.whatsapp.com/E1AJ7K11M3v0XcxgvFgSRS
*JOIN NOW*

```🧜‍♀️සුබ දවසක් වේවා !!🧜‍♀️```

```Udula Bot භාවිත කළ ඔබට ස්තූතියි.```
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 `` )

global.owner = ['+94705031527'] //Owner number in aive msg
global.premium = ['+94705031527'] //Owner Number info
global.ownernomer = '+94705031527' //Owner Number <<<

global.ownername = '😎UDULA BRO' //Owner Name
global.botname = ' ☬𝙺𝙸𝙽𝙶༒𝚄𝙳𝚄𝙻𝙰࿐' //Bot Name

global.button = '🤭Whatsapp📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://wa.me/+94705031527' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬𝙺𝙸𝙽𝙶༒𝚄𝙳𝚄𝙻𝙰࿐' //Bot Pacage Name
global.author = '😎𝚄𝙳𝚄𝙻𝙰 𝙱𝚁𝙾❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Kumuthu.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/udulabro' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'මේ ටික ඇඩ්මින්ලට විතරයි හොදේ!😉',
    botAdmin: 'බොට්ට ඇඩ්මින් වෙන්න ඕනා😥',
    owner: 'මේක මාව හදපු කෙනාට විතරයි..!😉',
    group: 'මේවා Groups වලදී විතරයි පාවිච්චි කරන්නේ!',
    private: 'මේක රහසිගත Chat වලට විතරයි!',
    bot: 'මේක බොට්ට විතරයි😝',
    wait: '👉👈ඉදපන් චුට්ටක්,උබට හදිස්සි නෑනේ...',
    error: 'එරර් එකක්🤔!',
    endLimit: 'ඩේලි ලිමිට් එක expire වෙලා, ලිමිට් එක පැය 12කට පස්සේ auto reset වෙනවා',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
