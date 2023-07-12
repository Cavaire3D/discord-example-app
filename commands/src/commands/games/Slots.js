//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { Slots } = require('discord-gamecord');
module.exports = {
  cmd: [`slots`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`slots`)
      .setDescription(`Play a game of slots`),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new Slots({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Slot Machine',
        color: '#5865F2'
      },
      slots: ['🍇', '🍊', '🍋', '🍌']
    });
      
    Game.startGame();
  },
};