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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Challenge #1
const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peristic'];
// console.log(players1Final);

const {
    odds: {
        team1,
        x: draw,
        team2
    }
} = game;
// console.log(team1, draw, team2);

function printGoals(scored) {
    // console.log(...scored);
    // console.log(`${scored.length} score from these players`);
}
printGoals(game.scored);

// team1 < team2 && console.log(`team1 is more likely to win`);
// team1 > team2 && console.log(`team2 is more likely to win`);

for (const [num, name] of game.scored.entries()) {
    // console.log(`Goal ${num + 1}: ${name}`);
}

let avg = 0;
const odds = Object.values(game.odds);
for (const values of odds) {
    avg += values;
    avg /= odds.length;
    // console.log(avg)
}

for (const [team, num] of Object.entries(game.odds)) {
    const teamPrint = team === 'x' ? 'draw' : `Victory ${game[team]}`
        // console.log(`Odd of ${teamPrint}: ${num}`)
}

let scorers = {};
for (let name of Object.values(game.scored)) {
    scorers[name]++ || (scorers[name] = 1);
}
// console.log(scorers)

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = new Set();
// for (const [key, value] of gameEvents) {
//     events.add(value);
// }
// console.log([...events])
const events = [...new Set(gameEvents.values())]
// console.log(events)

// console.log(gameEvents.delete(64));

// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`)

for (const [time, event] of gameEvents) {
    const half = (time<45)?'FIRST':'SECOND';
    // console.log(`[${half} HALF]${time}: ${event}`)
}