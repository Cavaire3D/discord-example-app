//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { TicTacToe } = require('discord-gamecord');
module.exports = {
  cmd: [`tictactoe`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`tictactoe`)
      .setDescription(`Play a game of tictactoe`)
      .addUserOption(options => options.setName("opponent").setDescription("The user you want to play this game against.").setRequired(true)),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new TicTacToe({
      message: interaction,
      isSlashGame: true,
      opponent: options.getUser('opponent'),
      embed: {
        title: 'Tic Tac Toe',
        color: '#5865F2',
        statusTitle: 'Status',
        overTitle: 'Game Over'
      },
      emojis: {
        xButton: '❌',
        oButton: '🔵',
        blankButton: '➖'
      },
      mentionUser: true,
      timeoutTime: 60000,
      xButtonStyle: 'DANGER',
      oButtonStyle: 'PRIMARY',
      turnMessage: '{emoji} | Its turn of player **{player}**.',
      winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
      
    Game.startGame();
  },
};