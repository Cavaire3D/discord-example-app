//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { RockPaperScissors } = require('discord-gamecord');
module.exports = {
  cmd: [`rockpaperscissors`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`rockpaperscissors`)
      .setDescription(`Play a game of rockpaperscissors`)
      .addUserOption(options => options.setName("opponent").setDescription("The user you want to play this game against.").setRequired(true)),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new RockPaperScissors({
      message: interaction,
      isSlashGame: true,
      opponent: options.getUser('opponent'),
      embed: {
        title: 'Rock Paper Scissors',
        color: '#5865F2',
        description: 'Press a button below to make a choice.'
      },
      buttons: {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors'
      },
      emojis: {
        rock: '🌑',
        paper: '📰',
        scissors: '✂️'
      },
      mentionUser: true,
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      pickMessage: 'You chose {emoji}.',
      winMessage: '**{player}** won the Game! Congratulations!',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });
      
    Game.startGame();
  },
};