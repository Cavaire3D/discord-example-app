//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder} = require('discord.js')
const { Hangman } = require('discord-gamecord');
module.exports = {
  cmd: [`hangman`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`hangman`)
      .setDescription(`Play a game of hangman`),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new Hangman({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Hangman',
        color: '#5865F2'
      },
      hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
      customWord: undefined,
      timeoutTime: 60000,
      theme: 'nature',
      winMessage: 'You won! The word was **{word}**.',
      loseMessage: 'You lost! The word was **{word}**.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};