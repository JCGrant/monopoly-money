Template.ExistingGameModal.events({
  'click .btn-primary': function(event) {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    Router.go('Game', {_id: this._id});
  },
});
