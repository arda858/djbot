module.exports = {
  name: 'gel',
  description: 'gel',
  execute(msg, args) {
if (msg.member.voice.channel) {
		const connection =  msg.member.voice.channel.join();
    msg.channel.send('geldim');
	}  },
};
