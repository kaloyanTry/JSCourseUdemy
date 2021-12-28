"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Chalange 1:
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(`The goalkeeper is ${gk}`);
// console.log(`The field players are: ${fieldPlayers}`);

// const allPlayers = [...players1, ...players2];
// console.log(`All the players of the both teams are: ${allPlayers}`);

// const players1Final = [...players1, "Tiago", "Coutinho", "Peristic"];
// console.log(`The final players of team one are: ${players1Final}`);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored.`);
// };
// printGoals(...game.scored);

// team1 < team2 && console.log("Team1 is more likely to win");
// team1 > team2 && console.log("Team2 is more likely to win");

// Chalange 2:
// const scorers = game.scored;
// scorers.forEach((scorer, i) => {
//   console.log(`Goal ${i + 1}: ${scorer}`);
// });

// const odds = Object.values(game.odds);
// const oddAvg = odds.reduce((a, b) => a + b, 0) / odds.length;
// console.log(`Avarage odd is: ${oddAvg}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const printTeam = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${printTeam}: ${odd}`);
// }

// const scorersAll = {};
// for (const player of game.scored) {
//   scorersAll[player] ? scorersAll[player]++ : (scorersAll[player] = 1);
// }
// console.log(scorersAll);

// Chalange 3:
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} half] ${min} minute: ${event}`);
}
