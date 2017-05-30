Router.route('/', {
  name: 'Home',
});

Router.route('/game/:_id', function() {
  this.render('WalletScreen', {
    data: this.game,
  });
}, {
  name: 'Game',
  onBeforeAction: function() {
    this.game = Games.findOne(this.params._id);

    // We require 'game &&' to remove annoying console errors on
    // automatic browser reload durng development
    if (this.game && (this.game.players.length < this.game.numPlayers)) {
      this.render('WaitingRoom', {
        data: this.game,
      });
    } else {
      this.next();
    }
  },
});

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.render('Login');
  } else {
    this.next();
  }
});

Router.configure({
  layoutTemplate: 'ApplicationLayout',
});
