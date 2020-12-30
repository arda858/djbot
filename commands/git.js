module.exports = {
  name: 'git',
  description: 'git',
  execute(msg, args) {
if (msg.member.voice.channel) {
msg.channel.send('bb');
    const connection = msg.member.voice.channel.leave();
	}  },
};
