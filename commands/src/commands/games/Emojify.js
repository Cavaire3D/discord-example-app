//Please, leave this command alone, just gives me some credit. 
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { Emojify } = require('discord-gamecord');
module.exports = {
  cmd: [`emojify`],
  slashcommand : 
    new SlashCommandBuilder()
      .setName(`emojify`)
      .setDescription(`Play a game of emojify`)
      .addStringOption(options => options.setName('text').setDescription('The text you want to emojify').setRequired(true)),
  run: async (client, interaction, options, cmd) => {
    if(!true) return interaction.reply({ content : `${"This game has been disabled in the bot's config. If you think this is an error, please contact the server owner."}`, ephemeral: true})
    const text = options.getString('text', true)
    interaction.reply(await Emojify(text));
  },
};