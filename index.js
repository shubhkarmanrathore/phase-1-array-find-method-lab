function superbowlWin(record) {
  const winningRecord = record.find(record => record.result === "W");
  return winningRecord ? winningRecord.year : undefined;
}

// function superbowlWin(record) {
//   const winningRecord = record.find(function(record) {
//     return record.result === "W";
//   });
  
//   if (winningRecord) {
//     return winningRecord.year;
//   } else {
//     return undefined;
//   }
// }

// function superbowlWin(record) {
//   let winningYear;
  
//   record.forEach(function(game) {
//     if (game.result === "W") {
//       winningYear = game.year;
//     }
//   });
  
//   return winningYear;
// }
