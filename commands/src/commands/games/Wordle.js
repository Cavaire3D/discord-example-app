//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder} = require('discord.js')
const { Wordle } = require('discord-gamecord');
module.exports = {
  cmd: [`wordle`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`wordle`)
      .setDescription(`Play a game of wordle`),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new Wordle({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Wordle',
        color: '#5865F2',
      },
      customWord: null,
      timeoutTime: 60000,
      winMessage: 'You won! The word was **{word}**.',
      loseMessage: 'You lost! The word was **{word}**.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
};