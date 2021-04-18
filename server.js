const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const moment = require('moment');
const zalgo = require('zalgolize');  
const math = require('math-expression-evaluator');   
const figlet = require('figlet');   
const fs = require('fs');  
const ms = require('ms');  
const client = new Discord.Client();
const prefix = '-'
client.login(process.env.BOT_TOKEN);




client.on('ready', function(){
    var ms = 10000 ;
  console.log(`Logged in as ${client.user.tag}!`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

const activity = [
    "Arab Empire",
    "discord.gg/aer",

];

client.on("ready", function (){
    console.log(`${client.user.username} Is now active`);
    let i = 0;


    setInterval(()=>{
        const index = Math.floor(i);
    client.user.setActivity(activity[index],{type:"PLAYING"});
    i = i + 1;
    if(i === activity.length) i = i - activity.length;

    },4000)
})

client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "hide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});

client.on('message',async Epic => {
  var prefix = "-" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});

client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "show") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Channel Showed Successfully ! :white_check_mark:')
 }
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


if(cmd === `${prefix}8ball`){


if(!args[1]) return message.reply("Please ask a full question!");
let replies = ["Yes", "No.", "I don't know.", "Ask again later plez."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed ()
  .setAuthor(message.author.tag)
  .setColor("#ffffff")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);
}
});


client.on('message', badboy => {
  if(badboy.content.toLowerCase().startsWith(prefix + "role")) {
    const user = badboy.mentions.users.first();
    
    if(!badboy.member.hasPermission("MANAGE_ROLES")) return 
        if(!badboy.guild.member(client.user).hasPermission("MANAGE_ROLES")) return badboy.channel(`:x: **I'm missing the permission \`MANAGE ROLES\``);
        var args = badboy.content.split(" ").slice(2).join(" ")

if(!args[0]) return badboy.channel.send(new Discord.MessageEmbed()
.setColor(badboy.member.displayHexColor)
.setDescription(`**Plase Mention The User**`)
.setAuthor(badboy.author.username)

)
if(!args[1]) return badboy.channel.send(new Discord.MessageEmbed()
.setColor(badboy.member.displayHexColor)
.setDescription(`**Specify a role**`)
.setAuthor(badboy.author.username)

)
   var role = badboy.content.toLowerCase().split(" ").slice(2).join(" ").toLowerCase();
 
    var roled = badboy.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
 
    if (!roled) return badboy.channel.send(`❌ **Role not found.**`);

      if(badboy.mentions.members.first().roles.cache.some(role => role.id === roled.id)) {
 
           badboy.mentions.members.first().roles.remove(roled);
            badboy.channel.send(`✅** Removed \`${roled.name}\` Role From ${user.username}**`);
      }

     if(!badboy.mentions.members.first().roles.cache.some(role => role.id === roled.id)) {
 
      badboy.mentions.members.first().roles.add(roled);
      badboy.channel.send(`✅** Added \`${roled.name}\` Role to ${user.username}**`);

     }
  }
})
let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "antihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        


client.on('message', prof =>
{
    if(prof.content.startsWith(prefix + 'ussser'))
    {
        var professor = new Discord.MessageEmbed()
        .setAuthor(client.user.username)
        .setThumbnail(client.user.avatarURL())
        .setColor('#ff0000')
        .setTitle('Your Info User')
        .addField('> ▶️ | Your Name', `<@${prof.author.id}>`)
        .addField('> 🆔 | Your ID', `${prof.author.id}`)
        .addField('> 🌐 | Create User',prof.author.createdAt.toLocaleString())
        .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
        .setTimestamp()
        prof.channel.send(professor);
    }
})

/*
  client.on('message', roodx=>
  {
  var roodxroom = roodx.guild.channels.cache.find(r=> r.id === "759351724786843648");
  
   
  
     
  
  if(roodx.content.startsWith(prefix+ "vote"))
  {
  if(roodx.author.bot)return;
  if(!roodxroom)return roodx.reply("**انا لا اجد روم التصويت**")
  if(!roodx.guild)return roodx.reply("**مقدر ارسل في الخاص فقط في السيرفرات**")
  if(!roodx.guild.me.hasPermission('SEND_MESSAGES'))return roodx.reply("**ماعندي صلاحية اكتب في الروم **");
      if(!roodx.member.hasPermission('MANAGE_CHANNELS')) return roodx.reply("**`MANAGE_CHANNELS`ما اقدر انفذ امرك لان ماعندك**")
    let roodxtt = r => r.author.id === roodx.author.id;
    let roodxmes1;
  
  
    roodx.channel.send("**اكتب عنوان التصويت**").then(rodx=>{
      rodx.channel.awaitMessages(roodxtt,{
        max:1,
        time:50000
      }).then(ot=>{
        roodxmes1 = ot.first().content;
        let roodxmes2;
        rodx.channel.send("**اكتب التصويت الاول**").then(rodx=>{
          rodx.channel.awaitMessages(roodxtt,{
            max:1,
            time:50000
          }).then(ot=>{
            roodxmes2 = ot.first().content;
            let roodxmes3;
            rodx.channel.send("**اكتب التصويت الثاني**").then(rodx=>{
              rodx.channel.awaitMessages(roodxtt,{
                max:1,
                time:50000
              }).then(ot=>{
                roodxmes3 = ot.first().content;
                roodx.channel.send('**تم نشر التصويت**').then(rodx=>
                  {
  
                  
                var embed = new Discord.MessageEmbed()
  .setAuthor(roodx.author.username, roodx.author.displayAvatarURL())
  .setTitle(`**VOTES**`)
  .setDescription(`${roodxmes1}`)
  .addField('**VOTE 1 :one: **',
  `${roodxmes2}`)
  .addField('**VOTE 2 :two: **',
  `${roodxmes3}`)
  .setTimestamp()
  
                roodxroom.send(embed).then(r =>
                  {
                    r.react('??')
                    r.react('??')
                  })
              })
              })
            })
          })
        })
      })
    })
  
      }
    })
*/


client.on('message',message => {
    if(message.content.startsWith(prefix + 'user')){
if(!message.guild)return;
const args = message.content.split(" ")[1];
let mID = message.guild.members.cache.get(args);
    let member;
    let user;
    if(args && !message.mentions.members.first() && !mID)return message.channel.send({embed:{description:`:rolling_eyes: - **${message.author.username}**, I can't find ${args} in the server.`,color:'#ff0000'}});
    if(message.mentions.members.first()||mID){
        member = message.mentions.members.first()||mID;
        user = member.user;
    }else{member = message.member;
    user = message.author;}
    let em = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setThumbnail(user.displayAvatarURL({dynamic:true}))
    .addField(`<:aerServer:825692934534987778> | Joined Discord :`,`\n\`\`${moment(user.createdAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(user.createdAt).fromNow()}**`,true)
    .addField(`<:aerServer:825692934534987778> | Joined Server :`,`\`\`${moment(member.joinedAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(member.joinedAt).fromNow()}**`,true)
    .setFooter(user.tag,user.displayAvatarURL({dynamic:true}))
    if(member.nickname){em.setAuthor(member.nickname,member.user.displayAvatarURL({dynamic:true}))}
    message.channel.send(em);
}
})

client.on('message',function(message) {
	let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`** ${args}**`);
}
});


client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//Professional Codes
 })
  }  
 });



client.on('message', message => { 

//OT bad boy 

if(message.content.startsWith(prefix + "server")){ 

    if (message.author.bot || !message.guild) return message.reply("this command for server only") 

 

//OT bad boy 

var EMBED = new Discord.MessageEmbed() 

.setTitle("server info") 

.addField("server name", `${message.guild.name}`) 

.addField("server id", `${message.guild.id}`) 

.addField("server owner", `${message.guild.owner}`) 

.addField("members", `${message.guild.memberCount}`) 

.addField("Server roles", `${message.guild.roles.cache.size}`) 
 .addField("channel", `${message.guild.channels.cache.filter(r => r.type === "text").size} Text
      ${message.guild.channels.cache.filter(r => r.type === "voice").size} Voice`)

.addField("server region", `${message.guild.region}`) 

.addField("Verification Level", `${message.guild.verificationLevel}`) 

.addField("created in", `${message.guild.createdAt.toLocaleString()}`) 

.addField("Boost", `${message.guild.premiumSubscriptionCount}`) 

 
.setThumbnail(`${message.guild.iconURL({dynamic : true})}`)

.setAuthor(`${message.guild.name}`)
.setFooter(`request by ${message.author.username}`)
.setColor("BLUE") 
message.channel.send(EMBED) 

} 

}) 




client.on('message', message => {  
    if (message.author.bot) return;
    if(message.content.startsWith(prefix + 'clear') || message.content.startsWith(prefix + 'مسح')) {   
 if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'mute') || message.content.startsWith(prefix + 'اسكت')) { 
   let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(`**:rolling_eyes: - I can't find this member**`)
    if(tomute.hasPermission("ADMINISTRATOR"))return   message.channel.send(`**:rolling_eyes: -  You can't mute ${tomute}**`);
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply(``);
  
    await(tomute.addRole(muterole.id));
    message.channel.send(`:white_check_mark: <@${tomute.id}>  muted from the text! :zipper_mouth: ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`:white_check_mark: <@${tomute.id}> **Done End Time** `);
    }, ms(mutetime));
  
  

  }
    if(message.content.startsWith(prefix + 'unmute') || message.content.startsWith(prefix + 'تكلم')) {  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**I Don't Have `ADMINISTRATOR` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send(`**:rolling_eyes: - I can't find this member**`)

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.send(`**${toMute}  not muted.**`)

  await toMute.removeRole(role)
  message.channel.sendMessage(`**✅ ${toMute} unmuted!**`);

  return;

  }

});


client.on("message", message => {
  var prefix = "-";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

    if(message.content.startsWith(prefix + 'kick') || message.content.startsWith(prefix + 'طرد')) {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply("**You Don't Have KICK_MEMBERS Permission**")
        .then(msg => msg.delete(900000));
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have KICK_Members Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.channel.send("**:rolling_eyes: - I can't find this member**");
    if (!reason) reason = "Null";
    if (!message.guild.member(user).bannable)
      return message.reply("**I Don't Have ``KickPermission``  **");

    message.guild.member(user).kick(7, user);

    message.channel.send(
      `**:white_check_mark: ${user} has been kicked ! :airplane:**`
    );
    user.send(
      `**:airplane: You are has been kicked in ${message.guild.name} reason: ${reason}**`
    );
    message.delete();
  }
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'ban') || message.content.startsWith(prefix + 'باند')) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

client.on('message', message => {
            var prefix = "-";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Embed Message By :', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});
   
   client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });

   
   client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'moveall') || message.content.startsWith(prefix + 'سحب الكل')) {     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });
   


   
client.on("message", async normal => {
  if (normal.content.startsWith(prefix + "move")) {
    let user = normal.guild.member(normal.mentions.users.first());
   let channel = normal.member.voice.channelID;
   let channel2 = user.voice.channelID;
    if (!normal.channel.guild || normal.author.bot) return;
    if (!normal.guild.member(normal.author).hasPermission("MOVE_MEMBERS"))
      return normal.channel.send("**You Don't Have MOVE_MEMBERS Permission **");
    if (!normal.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return normal.channel.send("**I Don't Have MOVE_MEMBERS Permission **");
    if (!normal.member.voice.channel)
      return normal.channel.send("Your Have To Be In A Voice Channel");
    if (!user) return normal.channel.send(`**Mention Someone...**`);
    if (!normal.guild.member(user).voice.channel)
      return normal.channel.send(`**${user.user.username} Is Not In A Voice Channel** `);
if (channel === channel2) return normal.channel.send(`**${user} Is Already In Your Channel**`)
    await user.voice.setChannel(`${channel}`)
    normal.channel.send(`**✅ | Done User Moved Successfully**`)
  }
});


const { getAverageColor } = require('fast-average-color-node')
client.on('message', async message =>{
    
    if(message.content.toLowerCase().startsWith(prefix + 'avatar')){
      		if (message.author.bot || !message.guild)
			return;
      const argst = message.content.slice(prefix.lenght).trim().split(/ +/)
        let args = message.content.substring(prefix.length).split(" ");
        
        const user = message.guild.members.cache.get(args[1])
        const userm = message.mentions.users.first()
        if (!user && !args[1]) {
const color = await getAverageColor(message.author.displayAvatarURL({ format: 'png' }))
           const uavatar = message.author.displayAvatarURL({
          format: "png",
          size: 4096,
          dynamic: true
        })
           const embed3 = new Discord.MessageEmbed()
               .setAuthor(message.author.tag,uavatar)
               .setTitle(`Avatar Link`)
               .setURL(uavatar)
               .setColor(color.hex)
               .setFooter("Requested by " + message.author.tag,message.author.displayAvatarURL({
          format: "png",
          size: 4096,
          dynamic: true
        }))
               .setImage(uavatar)
           message.channel.send(embed3)
       } 
      


       if (args[1].toLowerCase() === 'server' || args[1] === `${message.guild.id}`) {
         
        const scolor = await getAverageColor(message.guild.iconURL({ format: 'png' }))
        const savatar = message.guild.iconURL({
          format: "png",
          size: 4096,
          dynamic: true
        })
        const embed2 = new Discord.MessageEmbed()
            .setAuthor(message.guild.name,savatar)
            .setTitle(`Avatar Link`)
            .setURL(savatar)
            .setColor(scolor.hex)
            .setFooter("Requested by " + message.author.tag,message.author.displayAvatarURL({
          format: "png",
          size: 4096,
          dynamic: true
        }))
            .setImage(savatar)
        message.channel.send(embed2)
       
       }
       
               
              
                   if (user) {
                     const icolor = await getAverageColor(user.user.displayAvatarURL({ format: 'png' }))
                     
                   const avatar = user.user.avatarURL({
          format: "png",
          size: 4096,
          dynamic: true
        });
       
       
                   const embed = new Discord.MessageEmbed()
                       .setAuthor(user.user.tag,avatar)
                       .setTitle(`Avatar Link`)
                       .setURL(avatar)
                       .setColor(icolor.hex)
                       .setImage(avatar)
                       .setFooter("Requested by " + message.author.tag,message.author.displayAvatarURL({ size: 4096, dynamic: true }))
                   message.channel.send(embed)
               }
               
                              if (userm) {
                                const mcolor = await getAverageColor(userm.displayAvatarURL({ format: 'png' }))

                   const mavatar = userm.displayAvatarURL({
          format: "png",
          size: 4096,
          dynamic: true
        });
       
       
                   const embedm = new Discord.MessageEmbed()
                       .setAuthor(userm.tag,mavatar)
                       .setTitle(`Avatar Link`)
                       .setURL(mavatar)
                       .setColor(mcolor.hex)
                       .setImage(mavatar)
                       .setFooter("Requested by " + message.author.tag,message.author.displayAvatarURL({
          format: "png",
          size: 4096,
          dynamic: true
        }))
                   message.channel.send(embedm)
       }
    }
  })

client.on("message", message => {
  if(message.content === prefix + "help" || message.content === prefix + "HELp" || message.content === prefix + "Help" || message.content === prefix + "HElp" || message.content === prefix + "HelP"){
       if(!message.channel.guild) return;
  var die = new Discord.MessageEmbed()
      .setColor("#ff0000")// حط اللون الي تبيه .
     .setFooter('Requested By ' + message.author.tag, message.author.avatarURL())
    .setDescription(`** <@${client.user.id}> Help Menu :
my prefix is: ${prefix}
[server link](https://discord.gg/aer)
General Commands
ping,tag,user,server

Admin Commands
show,hide,nick,moveall,role
lock,unlock,mute,unmute,clear
ban,kick,embed,fake,move**`)
  .setThumbnail(message.author.avatarURL())
  message.author.send(die)
   return message.channel.send(`**Help Menu Has Been Sent In Dm .**`).then(m => m.delete({timeout: 10000}))
  }
  });

  client.on('message', message => {
    if (message.content.startsWith(prefix + 'bans')) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد الأشخاص المبندين هو `))
  .catch(console.error);
}
});

  let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
  client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")){
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'On',
 }
  message.channel.send(`**__lock bot joins kick 🔒__**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  
  
  client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`**__unlock bot not kick 🔓⚠️__**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  })
  
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  }); })

client.on("message", async message => {
   
  if (message.guild.id != 800417946127564811) return;
  if (message.channel.id != 813399609002557490) return;
  if(message.author.id === client.user.id) return;
      message.react("818750642960334878")

  }
  
) 


client.on("message", async Musab => {
if(Musab.channel.type === "dm" || Musab.author.type === "fake") return
    let args = Musab.content.split(" ")
          let arge = Musab.content.split(" ").slice(2).join(" ");
    let command = args[0]
  if(command === `${prefix}fake`){
    
      let Musab = Musab.mentions.users.first();
    if (Musab.mentions.users.size < 1) return Musab.reply('please mention some one')
    let yazi = args[1]
    if (!yazi) return Musab.reply('please mention some one')
        
    Musab.delete()
    Musab.channel.createWebhook(Musab.username, Musab.avatarURL)
    .then(webhook => webhook.edit(Musab.username, Musab.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(arge)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
  }
  })



client.on("message", async message => {
if(message.content.startsWith(`-lock`)) {
if (!message.guild.member(client.user).permissions.has("MANAGE_CHANNELS")) return message.channel.send(new Discord.MessageEmbed().setDescription("I can't do this please check my permissions 🙄"))
    message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
      let embedd = new Discord.MessageEmbed()
      .setDescription("**The channel has been locked. | 🔒**")
return message.channel.send(embedd)
     });
}
})

client.on("message", async message => {
if(message.content.startsWith(`-unlock`)) {

 if (!message.guild.member(client.user).permissions.has("MANAGE_CHANNELS")) return message.channel.send(new Discord.MessageEmbed().setDescription("I can't do this please check my permissions 🙄"))
    if (!message.channel.guild) {
          let dm = new Discord.MessageEmbed()
          .setDescription("this command is only for servers.")
          return message.channel.send(dm) }
message.channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
       let embedd = new Discord.MessageEmbed()
      .setDescription("**The channel has been unlocked. | 🔓**")
       return message.channel.send(embedd)
  });
}})


client.on("message", tin => {
if(tin.content.startsWith(prefix + 'setnick') || tin.content.startsWith(prefix + 'nick')){
if(tin.author.bot || tin.channel.type == "dm" || !tin.member.hasPermission("MANAGE_NICKNAMES") || !tin.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = tin.mentions.members.first();
var args = tin.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return tin.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
tin.guild.member(user.user).setNickname(`${nick}`);
tin.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
}
});


const adminprefix = "aer";//تعديل مهمممم حط البريفكس حق الاونريه

const developers = ["616709497817268281", "556865684844576788"];
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "pl") || message.content === adminprefix + "setgame" || message.content === adminprefix + "setplaying") {
    client.user.setGame(argresult);
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content === adminprefix + "leave") {
    message.guild.leave();
  } else if (message.content.startsWith(adminprefix + "wt") || message.content === adminprefix + "setwatching") {
    client.user.setActivity(argresult, { type: "WATCHING" });
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content.startsWith(adminprefix + "ls") || message.content === adminprefix + "setlestening") {
    client.user.setActivity(argresult, { type: "LISTENING" });
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content.startsWith(adminprefix + "sg") || message.content === adminprefix + "setstreming") {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅**`);
  }
  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.send(`Changing The Name To ..**${argresult}** `);
  } else if (message.content.startsWith(adminprefix + "setavatar" || message.content === adminprefix + "seticon")) {
    client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  }
});

/*
client.on('message', message => {
if (message.content.startsWith(prefix + "sug")) {
if (!message.channel.guild) return;
var roomid = "759351724786843648";// Suggestion room id
var room = client.channels.cache.get(roomid);
  if (!room) return undefined;
let sug = message.content.split(" ").slice(1).join(" ");
var embed = new Discord.MessageEmbed()
 .setColor("GREEN")
 .setAuthor(message.author.username, message.author.displayAvatarURL())
 .addField(`✅ **New Suggestion**`,`\`\`\`apache
${sug}\`\`\``)
 .setFooter(`${message.author.username}`)
 .setThumbnail(message.author.displayAvatarURL())
 .setTimestamp();
  message.react("✅")
  room.send(embed).then(c => {
  c.react('✅').then(() =>
  c.react('❌'))
  })
 }
});
*/  

client.on('message', wolf => {
  if(wolf.content === adminprefix + "help" || wolf.content === adminprefix + "HELP" || wolf.content === adminprefix + "Help" || wolf.content === adminprefix + "HElp" || wolf.content === adminprefix + "HELp"){////هنا  الامر
let embed = new Discord.RichEmbed()
.setColor("#ff0000")////لون الامبد
         .setDescription(`
> ${adminprefix}pl,setplaying,setgame
> ${adminprefix}wt,setwatching
> ${adminprefix}ls,setlestening
> ${adminprefix}sg,setstreming

> ${adminprefix}setname
> ${adminprefix}setavatar,seticon`)////هنا الاوامر
.setFooter("Made By Musab")
wolf.channel.send({embed:embed});
}
});


//دفتر المخالفات
client.on('message' , tin=>{  

    if(tin.author.bot)return;
    if(tin.channel.id !== '821066429750837299') return;
    if(tin)
    {
     tin.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
    }
});



//المطلوبين دولياً
client.on('message' , tin=>{  

    if(tin.author.bot)return;
    if(tin.channel.id !== '') return;
    if(tin)
    {
     tin.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
    }
});



//الأوامر الرئاسية
client.on('message' , tin=>{  

    if(tin.author.bot)return;
    if(tin.channel.id !== '') return;
    if(tin)
    {
     tin.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
    }
});



//ملفات المساجين
client.on('message' , tin=>{  

    if(tin.author.bot)return;
    if(tin.channel.id !== '759031387340406785') return;
    if(tin)
    {
     tin.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
    }
});

//المبندين
client.on('message' , tin=>{  

    if(tin.author.bot)return;
    if(tin.channel.id !== '808033966941536297') return;
    if(tin)
    {
     tin.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
    }
});


//آخر تحديثات السيرفر
client.on('message' , tin=>{  

    if(tin.author.bot)return;
    if(tin.channel.id !== '820739632207233034') return;
    if(tin)
    {
     tin.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
    }
});


//sug code
client.on("message", async message => {
   
  if (message.guild.id != 659437130405117962) return;
  if (message.channel.id != 820753797064163328) return;
  if(message.author.id === client.user.id) return;
     message.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
      message.react("665053039643852800")
      message.react("665053051555676171")
  }
  
) 


//اقتراحات هيئة الترفية
client.on("message", async message => {
   
  if (message.guild.id != 659437130405117962) return;
  if (message.channel.id != 821042882558689350) return;
  if(message.author.id === client.user.id) return;
     message.channel.send('https://media.discordapp.net/attachments/759351724786843648/829721550127104090/616709497817268281.jpg?width=562&height=29')
      message.react("665053039643852800")
      message.react("665053051555676171")
  }
  
) 



client.on('message', rai => {
    if (rai.content.startsWith(prefix + "boost")) {
      if (rai.author.bot || !rai.guild) return rai.channel.send("This Command For Server Only")

      let lvl = rai.guild.premiumTier === 0 ? "No Boost Level" : `${rai.guild.premiumTier}`;
      let bst = rai.guild.premiumSubscriptionCount;

      let embed = new Discord.MessageEmbed()
      .setTitle(`Server Boost :  ${rai.guild.name} `)
      .addField(`Server Boost Count : `, [` \`\`\`${bst}\`\`\` `], true)
      .addField(`Server Boost Level :`, [` \`\`\`${lvl}\`\`\` `], true)
      .setThumbnail(rai.guild.iconURL({dynamic:true}))
      .setColor("#ff0000")
      .setFooter(`Requested By : ${rai.author.tag}`,`${rai.author.avatarURL({dynamic:true})}`)
      rai.channel.send(embed)
      
    }
  });


//Only musab
client.on('message', async mehdi => {
  
  var argresult = mehdi.content.split(` `).slice
  var developers = "620669913228509234"


  if(mehdi.author.bot) return
  var argresult = mehdi.content.split(` `).slice(1).join(' '); 
      if (!developers.includes(mehdi.author.id)) return;
  if(mehdi.content.startsWith('$$setavatar')){
    client.user.setAvatar(argresult).then
      mehdi.channel.send(`تم تغير الصورة إلى ..**${argresult}** `)
  }
})

/*
client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === "820753797064163328"
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setColor("#ff0000")
.setThumbnail(message.author.avatarURL())
.setDescription(`> **${args}**`)
.setFooter(`اقتراح من | ${message.author.id}`)
.setTimestamp()
message.channel.send(embed).then(msg => {
  msg.react('665053039643852800').then( r => {
    msg.react('665053051555676171')
  })
})
}
});
*/


/*
//اقتراحات وزارة الترفية
client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === "821042882558689350"
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setColor("#ad1457")
.setThumbnail(message.author.avatarURL())
.setDescription(`> **${args}**`)
.setFooter(`اقتراح من | ${message.author.id}`)
.setTimestamp()
message.channel.send(embed).then(msg => {
  msg.react('665053039643852800').then( r => {
    msg.react('665053051555676171')
  })
})
}
});
*/

//رياكشن داعمين السيرفر
client.on("message", async message => {
   
  if (message.guild.id != 659437130405117962) return;
  if (message.channel.id != 758913774387462164) return;
  if(message.author.id === client.user.id) return;
      message.react("785409186866659348")

  }
  
) 

/*
 client.on('message',  message => {
 if(message.content.startsWith('pic')) {
 let role = message.guild.roles.cache.find(role => role.name === "Giveaways");
 message.member.roles.add(role);
  message.channel.send(`**تم اعطائك رول صور بنجاح <@!${message.author.id}>**`)
} 
 }) 
*/
client.on("message", async message => {
if(message.content.startsWith(prefix + "تفعيل")){
let member = message.mentions.members
.first();
if (!message.member.roles.cache.some(role => role.id === "758665289188507679")) { 
return message.channel.send('لست من الاداره لـ استخدام الامر')
}
let role = message.guild.roles.cache.find(r => r.id === "758681714200543253");
let role2 = message.guild.roles.cache.find(r2 => r2.id === "758681717405515786");member.roles.remove(member.roles.cache
).catch(error => {
message.reply(`<@${member.id}> ,لم استطع من سحب بعض الرتب`)
return
});
setTimeout (() => {
member.roles.add(role)
member.roles.add(role2)
.then(memberAdded => {
message.channel.send('تم ``تفعيل`` العضو بنجاح ، ✅')
})
.catch(error => {
console.log(error);
});
}, 200);
}
})



client.on("message", async message => {
if(message.content.startsWith(prefix + "سجن")){
let member = message.mentions.members
.first();
if (!message.member.roles.cache.some(role => role.id === "758665289188507679")) { 
return message.channel.send('لست من الاداره لـ استخدام الامر')
}
let role = message.guild.roles.cache.find(r => r.id === "758687377874092103");
member.roles.remove(member.roles.cache
).catch(error => {
message.reply(`<@${member.id}> ,لم استطع من سحب بعض الرتب`)
});
setTimeout (() => {
member.roles.add(role)
.then(memberAdded => {
message.channel.send('تم ``سجن`` العضو بنجاح ، ✅')
})
.catch(error => {
console.log(error);
});
}, 200);
}
})


client.on("message", async message => {
if(message.content.startsWith(prefix + "ارجاع")){
let member = message.mentions.members
.first();
if (!message.member.roles.cache.some(role2 => role2.id === "758665289188507679")) { 
return message.channel.send('لست من الاداره لـ استخدام الامر')
}
let role = message.guild.roles.cache.find(r => r.id === "747363924227260427");
member.roles.remove(member.roles.cache
).catch(error => {
message.reply(`<@${member.id}> ,لم استطع من سحب بعض الرتب`)
return
});
setTimeout (() => {
member.roles.add(role)
.then(memberAdded => {
message.channel.send('تم ``ارجاعه لغير مفعل`` العضو بنجاح ، ✅')
})
.catch(error => {
console.log(error);
});
}, 200);
}
})

/*
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "vote")){
    if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only") 
let args = badboy.content.split(" ").slice(1).join(" ");
if(!args) return badboy.reply("type your vote")
    var embed = new Discord.MessageEmbed()
.setDescription(`${args}`)
.setColor("BLUE")
badboy.channel.send(embed).then(badboy => {
 badboy.react("👍")
badboy.react("👎")
 })
  }
})
*/


client.on('message', naarCodes=> {
    if(naarCodes.content.startsWith(prefix + 'poll')) {
    if (!naarCodes.member.hasPermission('MANAGE_NICKNAMES')) return naarCodes.channel.send('You Dont Have Permission')
      let args = naarCodes.content.split(' ').slice('1').join(" ")
        if (!args) return naarCodes.channel.send('Please type A Message To Poll On It');
        const naarembed = new Discord.MessageEmbed()
            .setDescription(`**Arab Empire :** \n \`${args}\``)
            .setColor('BLACK')
            .setThumbnail(naarCodes.guild.iconURL())
        naarCodes.delete();
        naarCodes.channel.send(naarembed).then(angelo => {
            angelo.react('822408255753158656');
            angelo.react('822408414960418876');
        });
    }
})

client.on("message", async message => {
if(message.content.startsWith(prefix + "الثقافة")){
let member = message.mentions.members
.first();
if (!message.member.roles.cache.some(role => role.id === "758665289188507679")) { 
return message.channel.send('لست من الاداره لـ استخدام الامر')
}
let role = message.guild.roles.cache.find(r => r.id === "758679210973331528");
let role2 = message.guild.roles.cache.find(r2 => r2.id === "758679213296713729");
let role3 = message.guild.roles.cache.find(r3 => r3.id === "758679214210678825");
let role4 = message.guild.roles.cache.find(r4 => r4.id === "758681717405515786");
member.roles.remove(member.roles.cache
).catch(error => {
message.reply(`<@${member.id}> ,لم استطع من سحب بعض الرتب`)
return
});
setTimeout (() => {
member.roles.add(role)
member.roles.add(role2)
member.roles.add(role3)
member.roles.add(role4)
.then(memberAdded => {
message.channel.send('تم ``توظيفة في وزارة الثقافة والإعلام`` العضو بنجاح ، ✅')
})
.catch(error => {
console.log(error);
});
}, 200);
}
})






client.on('message', message => {
  if (message.author.bot) return
  if (!message.guild) return
  if (message.content.startsWith(prefix + "channel")) {
    var text = message.content.split(" ").slice(1).join(" ").trim()
    var channel = message.mentions.channels.first() || message.guild.channels.cache.get(`${text}`) || message.channel
    console.log(channel)
    var text_embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .addField('**Channel name**', channel.name)
      .addField('**Channel type**', channel.type)
      .addField('**Channel description**', channel.topic)
      .addField('**Channel id**', channel.id)
      .addField("Channel couldown",`${channel.rateLimitPerUser}s`)
      .addField("NSFW status", channel.nsfw)
      .addField("Channel created at", channel.createdAt)
      .addField("Category id", channel.parentID)
      .setFooter(`Request By: ${message.author.username}`, message.author.displayAvatarURL())
    var voice_embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .addField('**Channel name**', channel.name)
      .addField('**Channel type**', channel.type)
      .addField('**Channel id**', channel.id)
      .addField('**Channel users limite**', channel.userLimit)
      .addField('**Channel bitrate**', channel.bitrate)
      .addField("Channel created at", channel.createdAt)
      .addField("Category id", channel.parentID)
      .setFooter(`Request By: ${message.author.username}`, message.author.displayAvatarURL())
    if (channel.type == "text") {
      message.channel.send(text_embed)
    }
    if (channel.type == "voice") {
      message.channel.send(voice_embed)
    }

  };
})


client.on("message", message=>{
  if(!message.guild)return;
  if(message.content.startsWith(prefix + "role-info")){
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let role = message.mentions.roles.first()||message.guild.roles.cache.get(args[1])||message.guild.roles.cache.find(r=> r.name === args.slice(1).join(' '));
  if(!role)return message.channel.send(`I cant find this role`);
var rm;
if(role.members.size > 15){ rm = role.members.map(e => `<@${e.id}>`).slice(0,15).join(", ") + ` and more ${role.members.size - 15}...`}
if(role.members.size < 15||role.members.size === 15){ rm = role.members.map(e => `<@${e.id}>`).join(", ")}
if(role.members.size < 0){rm = "No one have this role"}
var embed = new Discord.MessageEmbed()
.setTitle(`"${role.name}" Role Informations`)
.setColor(role.color)
.setDescription(`> Role : <@&${role.id}>
> Role Name: **${role.name}**
> Role ID: **${role.id}**
> How many members have this role: **${role.members.size || 0}**
> Members That Have This Role:**${rm}**`)
.setFooter(`Requested by :${message.author.username}`,message.author.displayAvatarURL({dynamic:true}))
message.channel.send(embed)
  }
})


client.on("message", async message => {
  if (message.content.startsWith(prefix + "fetch")) {
    let user = message.content.split(" ").slice(1).join("").trim()
    client.users.fetch(`${user}`).catch(err => console.error(err)).then(user => {
      if (!user) return message.reply("لم اجد الشخص")
      let embed = new Discord.MessageEmbed()
        .setTitle(user.tag)
        .addField("Bot", user.bot)
        .addField("Id", user.id)
        .addField("createdAt", `\`${moment(user.createdTimestamp).format('YYYY/M/D hh:mm:ss a ')}\` ** \n ** **${moment(user.createdTimestamp).fromNow()}**`)
        .setImage(user.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }))
      message.channel.send(embed)
      console.log(user)
    })


  }
})


/*
 client.on('message',async message => {
  if(!message.guild) return;
  if(message.member.hasPermission('ADMINISTRATOR')){
  if(message.channel.id !== "759351724786843648")return;
    let m = message.mentions.members.first();
  if(m){
   m.roles.add(`773083826435129344`)
  }else{return}
  }else{return}
 })

*/


