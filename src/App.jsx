import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Package, Truck, XCircle, DollarSign, Bell } from 'lucide-react';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import OrderList from './pages/OrderList/OrderList';
import Reviews from './pages/Reviews/Reviews';
import { messaging } from './firebaseConfig'; // Correct the import
import { getToken } from "firebase/messaging"; // Import getToken from Firebase Messaging


// Placeholder components for other routes
const OrderDetails = () => <div>Order Details Page</div>;
const Inbox = () => <div>Inbox Page</div>;
const Settings = () => <div>Settings Page</div>;

function App() {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          // Get the device token
          const token = await getToken(messaging, {
            vapidKey: 'BNvTVJUjpYWReSJr8Euqz6Byjl7fUb2nUN-vVv9nrQzBD8cax1rRBjL7fCdLyTVthysAUTKrewMKqO8FB42-70U', // Replace with your actual key
          });
          if (token) {
            console.log('FCM Token:', token);
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        } else {
          console.log('Notification permission denied.');
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    };

    requestNotificationPermission();
  }, []); // Runs only once when the app is mounted

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 