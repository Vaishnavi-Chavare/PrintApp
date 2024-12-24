const OrderTable = ({ orders }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'new-order':
        return 'bg-red-100 text-red-600';
      case 'on-delivery':
        return 'bg-purple-100 text-purple-600';
      case 'delivered':
        return 'bg-green-100 text-green-600';
      case 'delivered-today':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 rounded-t-lg grid grid-cols-6 gap-4 font-medium">
        <div>Order ID</div>
        <div>Date</div>
        <div>Location</div>
        <div>Customer Name</div>
        <div>Amount</div>
        <div>Status Order</div>
      </div>

      {/* Body */}
      <div className="bg-white rounded-b-lg">
        {orders.map((order) => (
          <div key={order.id} className="grid grid-cols-6 gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50">
            <div>{order.id}</div>
            <div>{order.date}</div>
            <div>{order.location}</div>
            <div>{order.customerName}</div>
            <div>{order.amount}</div>
            <div>
              <span className={`px-2 py-1 rounded text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status === 'new-order'
                  ? 'New Order'
                  : order.status === 'on-delivery'
                  ? 'On Delivery'
                  : order.status === 'delivered'
                  ? 'Delivered'
                  : order.status === 'delivered-today'
                  ? 'Delivered Today'
                  : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTable;
