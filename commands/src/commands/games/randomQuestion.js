//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder} = require('discord.js')
const { Trivia } = require('discord-gamecord');
//module.exports.cmdName = ["2048"]
module.exports = {
   cmd: [`trivia`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`trivia`)
      .setDescription(`Play a game of Trivia`)
      .addStringOption( option => 
        option.setName('difficulty')
        .setDescription('Easy, medium, or hard')
        .setRequired(true)
        .addChoices({ name: 'Easy', value: 'easy' },
        { name: 'Medium', value: 'medium' },
        { name: 'Hard', value: 'hard' })),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    //const Dif = interaction.options.getString('Difficulty');

    const Game = new Trivia({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Trivia',
        color: '#5865F2'
      },
      timeoutTime: 60000,
      difficulty:difficulty,

      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    
    Game.startGame();
  },
};