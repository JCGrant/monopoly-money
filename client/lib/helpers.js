getPlayersControlled = function(game) {
  var playersControlled = [];
  for (var i = 0; i < game.players.length; i++) {
    var p = game.players[i];
    // If p is owned by the current user, add it to playersControlled
    if (p.userIds.indexOf(Meteor.userId()) > -1) {
      playersControlled.push(p);
    }
  }
  return playersControlled;
};
