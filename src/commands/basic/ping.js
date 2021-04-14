import Commando from 'discord.js-commando';
import _debug from 'debug';

const debug = _debug('discord-bot:command:ping');

export default class PingCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      group: 'basic',
      memberName: 'ping',
      description: 'Pings and Pongs!',
      examples: ['ping'],
    });
    debug(`Registered ${this.name}`);
  }

  async run(message) {
    debug(`Running ${this.name}`);
    message.reply(`Pong **(${Date.now() - message.createdTimestamp}ms)**`);
  }
}
