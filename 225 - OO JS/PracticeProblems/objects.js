var invoices = {
  unpaid: [],
  paid: [],

  add: function(clientName, amountOwing) {
    var invoice = {
      name: clientName,
      amount: amountOwing,
    }

    this.unpaid.push(invoice)
  },

  totalDue: function() {
    return this.unpaid.reduce(function (total, invoice) {
      return total + invoice.amount
    }, 0)
  },

  totalPaid: function() {
    return this.paid.reduce(function (total, invoice) {
      return total + invoice.amount
    }, 0)
  },

  payInvoice: function(clientName) {
    var clientInvoices = this.unpaid.filter((invoice) => invoice.name === clientName);

    this.paid.push(clientInvoices);

    this.unpaid = this.unpaid.filter((invoice) => invoice.name !== clientName);
  }
}


console.log(invoices);
invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital",300);
console.log(invoices.totalDue())
invoices.payInvoice("Due North Development")
console.log(invoices.totalDue())
console.log(invoices.paid)
console.log(invoices.unpaid)