import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { getToken } from "firebase/messaging";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import OrderList from "./pages/OrderList/OrderList";
import Reviews from "./pages/Reviews/Reviews";
import Accept from "./pages/OrderDetails/Accept";
import OrderCreated from "./pages/OrderDetails/OrderCreated";
import Pay from "./pages/OrderDetails/Pay";
import OnDelivery from "./pages/OrderDetails/OnDelivery";
import OrderDelivered from "./pages/OrderDetails/OrderDelivered";
import Chat from "./pages/Inbox/Chat";
import Mail from "./pages/Inbox/Mail";
import Sent from "./pages/Inbox/Sent";
import ProfileForm from "./pages/Setting/ProfileForm";
import Password from "./pages/Setting/Password";
import Notifications from "./pages/Setting/Notifications";
import LogoPage from "./pages/StartingPages/LogoPage";
import WelcomePage from "./pages/StartingPages/WelcomePage";
import OTPverification from "./pages/StartingPages/OTPverification";
import GetOTP from "./pages/StartingPages/GetOTP";
import VerificationCode from "./pages/StartingPages/VerificationCode";
import Verifying from "./pages/StartingPages/Verifying";
import Success from "./pages/StartingPages/Success";
import CreateProfile1 from "./pages/StartingPages/CreateProfile1";
import Tour1 from "./pages/StartingPages/Tour1";
import Tour2 from "./pages/StartingPages/Tour2";
import Tour3 from "./pages/StartingPages/Tour3";
import Tour4 from "./pages/StartingPages/Tour4";
import { messaging } from "./firebaseConfig";
import "leaflet/dist/leaflet.css";

const VerifyingWithRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/success");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <Verifying />;
};

function App() {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");
          const token = await getToken(messaging, {
            vapidKey: "BNvTVJUjpYWReSJr8Euqz6Byjl7fUb2nUN-vVv9nrQzBD8cax1rRBjL7fCdLyTVthysAUTKrewMKqO8FB42-70U",
          });
          if (token) {
            console.log("FCM Token:", token);
          } else {
            console.log("No registration token available.");
          }
        } else {
          console.log("Notification permission denied.");
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    };
    requestNotificationPermission();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Starting Pages */}
        <Route path="/" element={<LogoPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/otp" element={<OTPverification />} />
        <Route path="/get-otp" element={<GetOTP />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/verifying" element={<VerifyingWithRedirect />} />
        <Route path="/success" element={<Success />} />
        <Route path="/createProfile1" element={<CreateProfile1 />} />
        <Route path="/tour1" element={<Tour1 />} />
        <Route path="/tour2" element={<Tour2 />} />
        <Route path="/tour3" element={<Tour3 />} />
        <Route path="/tour4" element={<Tour4 />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/order-list" element={<Layout><OrderList /></Layout>} />
        <Route path="/reviews" element={<Layout><Reviews /></Layout>} />

        {/* Order Details */}
        <Route path="/order-details" element={<Layout><Accept /></Layout>} />
        <Route path="/order-details/created" element={<Layout><OrderCreated /></Layout>} />
        <Route path="/order-details/payment-success" element={<Layout><Pay /></Layout>} />
        <Route path="/order-details/on-delivery" element={<Layout><OnDelivery /></Layout>} />
        <Route path="/order-details/delivered" element={<Layout><OrderDelivered /></Layout>} />

        {/* Inbox */}
        <Route path="/inbox/mail" element={<Layout><Mail /></Layout>} />
        <Route path="/inbox/chat" element={<Layout><Chat /></Layout>} />
        <Route path="/sent" element={<Layout><Sent /></Layout>} />

        {/* Settings */}
        <Route path="/settings" element={<Layout><ProfileForm /></Layout>} />
        <Route path="/settings/password" element={<Layout><Password /></Layout>} />
        <Route path="/settings/notifications" element={<Layout><Notifications /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
