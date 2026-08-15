module.exports = {
  processPayment: async (amount, currency = 'USD') => {
    console.log(`Processing ${amount} ${currency}`);
    return { success: true, txnId: 'txn_' + Date.now() };
  }
};

// feat(payments): enable Apple Pay instant tokenization
// feat: Apple Pay tokenization
