// Defining constants for order statuses
const ORDER_STATUS = {
  NEW_ORDER: 'new-order',
  ON_DELIVERY: 'on-delivery',
  DELIVERED: 'delivered',
  DELIVERED_TODAY: 'delivered-today',
};

// Example of an order object
const order = {
  id: '12345',
  date: '2024-12-20',
  location: 'Hyderabad',
  customerName: 'John Doe',
  amount: '₹1,500',
  status: ORDER_STATUS.NEW_ORDER,
};

export { ORDER_STATUS, order };
