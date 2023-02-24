// Coding Challenge 1
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

// 1. Create one player array for each team
const players1 = game.players[0];
const players2 = game.players[1];
console.log('team1', players1);
console.log('team2', players2);

// 2. The first player in any player array is the goalkeeper and the others are field players:
const [gk1, ...fieldPlayers1] = players1;
console.log('gk1:', gk1);
console.log('fieldPlayers1:', fieldPlayers1);

//  3. Create an array 'allPlayers' containing all players of both teams:
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players:
const subtitutes = ['Tiago', 'Coutinho', 'Perisic'];
const playersFinal = [...players1, ...subtitutes];
console.log(playersFinal);

// 5. Based on the game.odds object, create one variable for each odd:
// const teamFirst = game.odds.team1;
// const draw = game.odds.x;
// const teamSecond = game.odds.team2;
// console.log(teamFirst, draw, teamSecond);
//// shorthand for the same action:
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total
function printGoals(...players) {
  return `${players} 
  \n${players.length} goals were scored.`;
}

printGoals(...game.scored);
console.log(printGoals(...game.scored));

// 7. The team with the lower odd is more likely to win.
team1 < team2 && console.log('Team1 is more likely to win');

team1 > team2 && console.log('Team2 is more likely to win');

//////////Coding Challenge 2:

//1. Loop over the game.scored array and print each player name to the console
const scores = game.scored.forEach((name, i) =>
  console.log(`Goal ${i + 1}: ${name}`)
);

//2. Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds);
console.log(odds);
const oddsAvrg = odds.reduce((a, b) => a + b, 0) / odds.length;
console.log(`Avarage odd is: ${oddsAvrg.toFixed(1)}`);

// 3. Print the 3 odds to the console, but in a nice formatted way
for (const [team, odd] of Object.entries(game.odds)) {
  const selectTeam = team === 'x' ? 'draw' : `vicotry ${game[team]}`;
  console.log(`Odd of ${selectTeam}: ${odd}`);
}

const scorers = {};
for (const pl of game.scored) {
  scorers[pl] ? scorers[pl]++ : (scorers[pl] = 1);
}

console.log(scorers);

// Chalange 3:
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

////1. Create an array 'events' of the different game events that happened

const events = [...new Set(gameEvents)];
console.log(events);

////2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

/// 3. Compute and log the following string to the console: "An event happend every 9 minutes:
console.log(`An event happened every ${90 / gameEvents.size} minutes`);

//// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minute}: ${event}`);
}
