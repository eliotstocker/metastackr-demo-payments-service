const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'payments-healthy' }));
app.listen(8082, () => console.log('💳 Payments Service listening on :8082'));
