Template.BankModal.helpers({
  transactions: function() {
    var allTransactions = Games.findOne(this._id).transactions;
    var transactions = []
    for (var i = 0; i < allTransactions.length; i++) {
      var t = allTransactions[i]
      if (t.to === 'Bank') {
        t.playerGain = true;
        transactions.push(t);
      }
      if (t.from === 'Bank') {
        transactions.push(t);
      }
    }
    return transactions;
  },
});
