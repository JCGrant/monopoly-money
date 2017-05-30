Template.CreateGame.events({
  'submit form': function(event) {
    event.preventDefault();

    var gameId = Games.insert({
      title: event.target.title.value,
      numPlayers: parseInt(event.target.numPlayers.value, 10),
      initialCash: parseInt(event.target.initialCash.value, 10),
      pastGoCash: parseInt(event.target.pastGoCash.value, 10),
      players: [],
      transactions: [],
      createdAt: new Date(),
    });

    Router.go('Game', {_id: gameId});
  },
});
