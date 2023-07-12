//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { FindEmoji } = require('discord-gamecord');
module.exports = {
  cmd: [`findemoji`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`findemoji`)
      .setDescription(`Play a game of findemoji`),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    
    const Game = new FindEmoji({
      message: interaction,
      isSlashGame: true,
      embed: {
          title: 'Find Emoji',
          color: '#5865F2',
          description: 'Remember the emojis from the board below.',
          findDescription: 'Find the {emoji} emoji before the time runs out.'
      },
      timeoutTime: 60000,
      hideEmojiTime: 5000,
      buttonStyle: 'PRIMARY',
      emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
      winMessage: 'You won! You selected the correct emoji. {emoji}',
      loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
      timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
        
    Game.startGame();
  },
};