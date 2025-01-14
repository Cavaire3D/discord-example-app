//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder} = require('discord.js')
const { Connect4 } = require('discord-gamecord');
module.exports = {
  cmd: [`connect4`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`connect4`)
      .setDescription(`Play a game of connect4`)
      .addUserOption(options => options.setName("opponent").setDescription("The user you want to play this game against.").setRequired(true)),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new Connect4({
      message: interaction,
      isSlashGame: true,
      opponent: options.getUser('opponent'),
      embed: {
        title: 'Connect4 Game',
        statusTitle: 'Status',
        color: '#5865F2'
      },
      emojis: {
        board: '⚪',
        player1: '🔴',
        player2: '🟡'
      },
      mentionUser: true,
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      turnMessage: '{emoji} | Its turn of player **{player}**.',
      winMessage: '{emoji} | **{player}** won the Connect4 Game.',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
      
    Game.startGame();
  },
};