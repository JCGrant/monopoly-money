Template.AllTransactionsModal.helpers({
  transactions: function() {
    return this._id && Games.findOne(this._id).transactions;
  }
});
