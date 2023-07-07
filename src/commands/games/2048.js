//Please, leave this command alone, just gives me some credit. 
//import { games, commandDisabledMessage } from "../../../config.json";
import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { TwoZeroFourEight } from 'discord-gamecord';
export const cmdName = ["2048"]
export const cmd = [`2048`];
export const slashcommand = new SlashCommandBuilder()
  .setName(`2048`)
  .setDescription(`Play a game of 2048`);
export async function run(client, interaction, options, cmd) {
  if (!(false)) return interaction.reply({ content: `This game has been disabled in the bot's config. If you think this is an error, please contact the server owner.`, ephemeral: true });

  const Game = new TwoZeroFourEight({
    message: interaction,
    isSlashGame: true,
    embed: {
      title: '2048',
      color: '#5865F2'
    },
    emojis: {
      up: '⬆️',
      down: '⬇️',
      left: '⬅️',
      right: '➡️',
    },
    timeoutTime: 60000,
    buttonStyle: 'PRIMARY',
    playerOnlyMessage: 'Only {player} can use these buttons.'
  });

  Game.startGame();
}