Template.WaitingRoom.events({
  'submit form': function(event) {
    event.preventDefault();

    var newPlayer = {
      name: event.target.name.value,
      balance: this.initialCash,
      gameId: this._id,
      userIds: [Meteor.userId()],
    };
    var gamePlayers = this.players;
    gamePlayers.push(newPlayer);
    Games.update(this._id, {$set: {players: gamePlayers}});

    event.target.name.value = '';
  },
});
