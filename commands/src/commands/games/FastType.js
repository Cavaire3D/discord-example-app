//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { FastType } = require('discord-gamecord');
module.exports = {
  cmd: [`fasttype`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`fasttype`)
      //.setDescription(`Play a game of ${__filename.toLowerCase().split('games\\')[1].slice(0,[1].length-4)}`),
      .setDescription('Play a game of Typing'),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})

    const Game = new FastType({
      message: interaction,
      isSlashGame: true,
      embed: {
          title: 'Fast Type',
          color: '#5865F2',
          description: 'You have {time} seconds to type the sentence below.'
      },
      timeoutTime: 60000,
      sentence: 'Some really cool sentence to fast type.',
      winMessage: 'You won! You finished the type race in {time} seconds with wpm of {wpm}.',
      loseMessage: 'You lost! You didn\'t type the correct sentence in time.',
    });

    Game.startGame();
  },
};