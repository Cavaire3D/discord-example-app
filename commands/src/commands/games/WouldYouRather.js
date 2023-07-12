//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../../Gamecord-Example-Bot/config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { WouldYouRather } = require('discord-gamecord');
module.exports = {
  cmd: [`wouldyourather`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`wouldyourather`)
      .setDescription(`Play a game of wouldyourather`),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})

    const Game = new WouldYouRather({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Would You Rather',
        color: '#5865F2',
      },
      buttons: {
        option1: 'Option 1',
        option2: 'Option 2',
      },
      timeoutTime: 60000,
      errMessage: 'Unable to fetch question data! Please try again.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
  },
};