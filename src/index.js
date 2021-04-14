import path from 'path';
import _debug from 'debug';
import { CommandoClient } from 'discord.js-commando';
import 'discord.js';

const debug = _debug('discord-bot:bot');

const client = new CommandoClient({
  commandPrefix: process.env.DISCORD_BOT_PREFIX || '!',
  owner: '',
});

client.on('ready', () => {
  debug('Bot Started!');

  client
    .registry
    .registerGroups([
      ['basic', 'Example bot command group'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'));
});

process.on('SIGINT', () => {
  client.destroy();
  process.exit();
});

client.login(process.env.DISCORD_BOT_TOKEN);
