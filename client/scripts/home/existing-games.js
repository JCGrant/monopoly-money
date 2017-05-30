Template.ExistingGames.helpers({
  games: function() {
    return Games.find({}, {sort: {createdAt: -1}});
  },
});
