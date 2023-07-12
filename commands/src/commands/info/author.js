//Please, leave this command alone, just gives me some credit.
//const config = require("../../../config.json");
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
module.exports = {
  cmd: ["author"],
  slashcommand : 
    new SlashCommandBuilder()
      .setName("author")
      .setDescription(`Get some info about the author of the bots code`),
  run: async (client, interaction, options, cmd) => {
    const embed = new EmbedBuilder()
      .setTitle(`The author of this code`)
      .setDescription(`Bot -  Cavaire ... Gamecord - BonoJansen_#3176`)
      .setThumbnail("https://cdn.discordapp.com/avatars/624934684597551116/1f8f278896d7147939b2befb3196370c.png")
      .setColor("#8d3e95")
      .setTimestamp();
        
    return interaction.reply({ embeds : [ embed ]});
  },
};