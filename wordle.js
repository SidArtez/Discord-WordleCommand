const { Wordle } = require('discord-gamecord');
const { SlashCommandBuilder } = require('@discordjs/builders'); 

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wordle')
    .setDescription(`Play a game of wordle!`),
    async execute(interaction) {
        const Game = new Wordle({

            message: interaction,
            isSlashGame: false, 
            embed: {
                title: `wordle`,
                color: `#2F3136`
            },
            customWord: null,
            timeoutTime: 60000,
            winMessage: 'You won! The word was **{word}**',
            loseMessage: 'You lost! The word was **{word}**',
            playerOnlyMessage: 'Only {player} can use these buttons'
        });

        Game.startGame();
        Game.on('gameOver', results => {
            return;
        })
    }
}