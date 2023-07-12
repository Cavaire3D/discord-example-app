//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { Minesweeper } = require('discord-gamecord');
module.exports = {
  cmd: [`minesweeper`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`minesweeper`)
      .setDescription(`Play a game of minesweeper`),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new Minesweeper({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Minesweeper',
        color: '#5865F2',
        description: 'Click on the buttons to reveal the blocks except mines.'
      },
      emojis: { flag: '🚩', mine: '💣' },
      mines: 5,
      timeoutTime: 60000,
      winMessage: 'You won the Game! You successfully avoided all the mines.',
      loseMessage: 'You lost the Game! Beaware of the mines next time.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};