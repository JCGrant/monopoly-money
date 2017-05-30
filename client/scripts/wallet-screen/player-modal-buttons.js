Template.PlayerModalButtons.helpers({
  playersControlledByCurrentUser: function() {
      var game = Games.findOne(this.gameId);
      return getPlayersControlled(game);
  },
  currentUserOwnsMultiplePlayers: function() {
    var game = Games.findOne(this.gameId);
    var playersControlled = getPlayersControlled(game);
    return playersControlled.length > 1;
  },
  playerOwnedbyCurrentUser: function() {
    var game = Games.findOne(this.gameId);
    // Have to map players -> names because names are the unique id of
    // players in a game.
    var playersControlledIds = getPlayersControlled(game).map(function(p) {
      return p.name
    });
    // return true if this player is controlled by current user
    return playersControlledIds.indexOf(this.name) > -1;
  },
});

Template.PlayerModalButtons.events({
  'click #ChooseOwnedPlayer': function(event) {
  },
  'click #PayOtherPlayer': function(event) {
  }
});
