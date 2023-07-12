//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { GuessThePokemon } = require('discord-gamecord');
module.exports = {
  cmd: [`guessthepokemon`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`guessthepokemon`)
      .setDescription(`Play a game of guessthepokemon`),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new GuessThePokemon({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Who\'s The Pokemon',
        color: '#5865F2'
      },
      timeoutTime: 60000,
      winMessage: 'You guessed it right! It was a {pokemon}.',
      loseMessage: 'Better luck next time! It was a {pokemon}.',
      errMessage: 'Unable to fetch pokemon data! Please try again.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    
    Game.startGame();
  },
};