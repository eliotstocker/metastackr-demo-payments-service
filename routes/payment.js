module.exports = {
  processPayment: async (amount, currency = 'USD') => {
    console.log(`Processing ${amount} ${currency}`);
    return { success: true, txnId: 'txn_' + Date.now() };
  }
};
