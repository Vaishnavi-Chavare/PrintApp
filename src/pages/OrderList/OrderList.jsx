import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import StatusFilter from './components/StatusFilter';
import OrderTable from './components/OrderTable';
import Pagination from './components/Pagination';
import { useOrders } from './hooks/useOrders';

const OrderList = () => {
  const [currentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const currentStatus = searchParams.get('status') || 'all'; // Get the current status

  const { orders } = useOrders(); // Hook to fetch orders

  // Filter orders based on status
  const filteredOrders = orders.filter((order) => {
    if (currentStatus === 'all') return true;
    if (currentStatus === 'new' && order.status === 'new-order') return true;
    if (currentStatus === 'delivery' && order.status === 'on-delivery') return true;
    if (currentStatus === 'delivered' && order.status === 'delivered') return true;
    if (currentStatus === 'delivered-today' && order.status === 'delivered-today') return true;
    return false;
  });

  const rowsPerPage = 20;
  const totalRows = filteredOrders.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const statusTitles = {
    all: 'All Orders',
    new: 'New Orders',
    delivery: 'Orders in Delivery',
    delivered: 'Delivered Orders',
    'delivered-today': 'Delivered Today Orders',
  };

  // Effect to handle query parameter change
  useEffect(() => {
    // Logic here to re-fetch or filter based on the query params.
    console.log('Status changed:', currentStatus);
  }, [currentStatus]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          {statusTitles[currentStatus]}
        </h1>
        <p className="text-gray-500">This is your order list data</p>
      </div>

      <StatusFilter />

      <OrderTable orders={filteredOrders} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsShown={Math.min(rowsPerPage, totalRows)}
        totalRows={totalRows}
        currentStatus={currentStatus}
      />
    </div>
  );
};

export default OrderList;
