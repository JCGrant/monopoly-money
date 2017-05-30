Template.PlayerModal.helpers({
  transactions: function() {
    var allTransactions = Games.findOne(this.gameId).transactions;
    var transactions = []
    for (var i = 0; i < allTransactions.length; i++) {
      var t = allTransactions[i]
      if (t.to === this.name) {
        t.playerGain = true;
        transactions.push(t);
      }
      if (t.from === this.name) {
        transactions.push(t);
      }
    }
    return transactions;
  },
});
