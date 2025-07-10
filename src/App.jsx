import { Routes, Route, useLocation } from 'react-router-dom';
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
import Signup from './components/Signup'; // ✅ Already imported

function App() {
  const location = useLocation();
  const isSignup = location.pathname === '/signup';

  return (
    <>
      {!isSignup && <Navbar />}

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
      </Routes>
    </>
  );
}

export default App;
