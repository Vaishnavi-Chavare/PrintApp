import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockOrders } from '../data/mockOrders';

export const useOrders = () => {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get('status') || 'all'; // Default to 'all' if no status filter is set

  const filteredOrders = useMemo(() => {
    if (statusFilter === 'all') return mockOrders; // If 'all', return all orders

    // Mapping the statusFilter to the actual status in mockOrders
    const statusMap = {
      new: 'new-order',
      delivery: 'on-delivery',
      delivered: 'delivered',
      'delivered-today': 'delivered-today',
    };

    const targetStatus = statusMap[statusFilter];
    
    if (!targetStatus) return mockOrders; // If the statusFilter is invalid, return all orders
    
    return mockOrders.filter(order => order.status === targetStatus); // Filter based on targetStatus
  }, [statusFilter]); // Re-run the filter when statusFilter changes

  return {
    orders: filteredOrders,
    currentStatus: statusFilter, // Return the current status for display
  };
};
