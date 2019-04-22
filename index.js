const gameObj = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slam_dunks: 1
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slam_dunks: 7
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slam_dunks: 15
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slam_dunks: 5
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slam_dunks: 1
      }
    }
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slam_dunks: 2
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slam_dunks: 10
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slam_dunks: 5
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slam_dunks: 0
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slam_dunks: 12
      }
    }
  }
};

function homeTeamName() {
  return gameObj.home.teamName;
}

function playerAttribute(player, attribute) {
  let teams = Object.entries(gameObj)
  let home = teams[0][1].players;
  let away = teams[1][1].players;
  return (!home[player] ? away[player][attribute] : home[player][attribute])
}

function numPointsScored(player) {
  return playerAttribute(player, "points")
}

function shoeSize(player) {
  return playerAttribute(player, "shoe")
}

function teamColors(team) {
  let teams = Object.entries(gameObj)
  let homeTeam = teams[0][1].teamName;
  let awayTeam = teams[1][1].teamName;


  if (homeTeam == team) {
    return teams[0][1].colors
  } else {
    return teams[1][1].colors
  }
}

function teamName() {
  let teams = Object.entries(gameObj)
  let teamNames = []
  teamNames.push(teams[0][1].teamName);
  teamNames.push(teams[1][1].teamName);
  return teamNames;
}
// Don't judge us!/////////////////////////////////////////////////////

function playerNumbers(team) {
  let teams = Object.entries(gameObj)
  let homeTeam = teams[0][1].teamName;
  let awayTeam = teams[1][1].teamName;
  let playerNums = []
  if (homeTeam == team) {
    for (let key in teams[0][1].players) {
      playerNums.push(teams[0][1].players[key].number);
    }
  } else {
    for (let key in teams[1][1].players) {
      playerNums.push(teams[1][1].players[key].number);
    }
  }
  return playerNums
}



function playerStats(player) {
  let teams = Object.entries(gameObj)
  let home = teams[0][1].players;
  let away = teams[1][1].players;
return (!home[player] ? away[player] : home[player])

}
// Don't judge us!/////////////////////////////////////////////////////
function bigShoeRebounds() {
  let teams = Object.entries(gameObj)
  let homeTeam = teams[0][1].players;
  let awayTeam = teams[1][1].players;
  let homeShoeSize = []
  let awayShoeSize = []
  for (let key in homeTeam) {
      homeShoeSize.push(teams[0][1].players[key].shoe);
    }
  for (let key in homeTeam) {
        awayShoeSize.push(teams[1][1].players[key].shoe);
      }
  // } else {
  //   for (let key in teams[1][1].players) {
  //     playerShoeSize.push(teams[1][1].players[key].shoe);
  //   }
  // }
  return awayShoeSize
}
console.log(bigShoeRebounds());
