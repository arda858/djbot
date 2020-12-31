require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
bot.login(token);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const args = msg.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  //if (message.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  if (!bot.commands.has(commandName)) return;

  try {
    bot.commands.get(commandName).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
