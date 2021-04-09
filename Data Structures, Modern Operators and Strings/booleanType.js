'use strict';
//  use any data and return any data


//  OR operator

//    return number 3 because is first true value here
console.log(3 || 'test');
console.log('' || 3);
const num = null;
const newNum = num || 44;

//  here back last value
console.log(null || undefined);

//  here back first true value EMPTY OBJECT
console.log(null || '' || undefined || {} || 'alex');


//  AND operator


//    here back last operator if is both true
console.log(3 && 'Ted');

//    here back first value because in AND operator ALL VALUES MUST BE TRUE
console.log(false && 55);


//  TEST
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

/*
1. Create one player array for each team (variables 'players1' and
'players2') */
const [players1, players2] = game.players;
console.log(players1);


/* 2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players */
const [gk, ...fieldPlayers] = players1;
console.log(gk);


/*3. Create an array 'allPlayers' containing all players of both teams (22
players) */
const allPlayers = [...players1, ...players2];
console.log(allPlayers);


/*4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic' */
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);


/*5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2') */
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

let goal = 1;
for (const goals of game.scored) {
    console.log(`${goal++} Goal scored ${goals}`);
}

const totalKeys = Object.keys(game.odds);


const total = team1 + team2 + draw;
console.log(total / totalKeys.length);