const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy Data (e.g., orders)
let orders = [
  { id: 1, status: 'Pending' },
  { id: 2, status: 'Pending' },
  { id: 3, status: 'Pending' },
];

// Accept Order
app.post('/accept', (req, res) => {
  const { id } = req.body;
  const order = orders.find((order) => order.id === id);
  if (order) {
    order.status = 'Accepted';
    res.status(200).json({ message: 'Order accepted', orders });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// Cancel Order
app.post('/cancel', (req, res) => {
  const { id } = req.body;
  const order = orders.find((order) => order.id === id);
  if (order) {
    order.status = 'Cancelled';
    res.status(200).json({ message: 'Order cancelled', orders });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
