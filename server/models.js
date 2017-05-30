Games.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
});

Meteor.publish('gamesData', function() {
  return Games.find();
});
