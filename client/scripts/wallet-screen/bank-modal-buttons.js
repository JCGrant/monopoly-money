Template.BankModalButtons.helpers({
  currentUserOwnsMultiplePlayers: function() {
    var game = Games.findOne(this.gameId);
    var playersControlled = getPlayersControlled(game);
    return playersControlled.length > 1;
  },
});

Template.BankModalButtons.events({
  'click #ChooseOwnedPlayer': function(event) {
  },
  'click #PayOtherPlayer': function(event) {
  }
});
