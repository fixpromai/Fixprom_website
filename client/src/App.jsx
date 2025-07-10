import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PlatformSection from './components/PlatformSection';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FeatureSection from './components/FeatureSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import HowItWorks from './components/HowItWorks';
import Signup from './components/Signup';
import DashboardWrapper from './components/Dashboard';
import ExtensionRedirect from './pages/ExtensionRedirect';


function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("fixpromUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 👇 Hide navbar on these routes
  const hideNavbarRoutes = ['/signup', '/dashboard'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar user={user} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <PlatformSection />
              <FeatureSection />
              <HowItWorks />
              <Testimonials />
              <CallToAction />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardWrapper user={user} />} />
        <Route path="/extension-redirect" element={<ExtensionRedirect />} />
      </Routes>
    </>
  );
}

export default App;
