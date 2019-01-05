console.log('hola chic@s, ¿quien se quiere divertir?');
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', (message) => {
const user = message.author;
const named = message.mentions;
	if(message.content == "L,hola") {
		message.channel.sendMessage('Hola');
	}
	if(message.content == "L,como estas?") {
		message.channel.sendMessage('Bien y tu?');
	}
	if(message.content == "L,cual es tu version?") {
		message.channel.sendMessage('Mi version es la 0.1.0 pero le puedes llamar V.sugar');
	}
	if(message.content == "L,quien eres?") {
		message.channel.sendMessage('Yo soy Lorika, un bot el cual podra hacer muchas cosas desde enviarte divertidas fotos, poner feliz a tu ganzo con fotos de la r34, tener un propio sistema de moneda para el rolplay y poner musica');
	}
	if(message.content == "L,comandos") {
		message.channel.sendMessage('mis comandos son clave L,  hola   como estas?   cual es tu version?   quien eres?    comandos   te amo   porcentaje    quien te creo?');
	}
	if(message.content == "L,te amo") {
		message.channel.sendMessage('yo tambien te amo');
	}
	if(message.content == "L,porcentaje") {
		message.channel.sendMessage('mi porcentaje de estar "completa" es de un...            [H.........]10%');
	}
	if(message.content == "L,quien te creo?") {
		message.channel.sendMessage('me creo wolfstrop, a el le debo la vida y el es el dueño de mi corazon');
	}
	if(message.content == "L,invitacion") {
		message.channel.sendMessage('aqui esta la invitacion para que me lleves a otros discords:   https://discordapp.com/oauth2/authorize?&client_id=503745464592629760&permissions=8&scope=bot');
	}
	if(message.content == "L,bienvenida") {
		message.channel.sendMessage('gracias ' + user);
	}
});
client.login('NTAzNzQ1NDY0NTkyNjI5NzYw.DrqxEg.EPCcjmYh54fAWBX0hcviKNwaaaY');