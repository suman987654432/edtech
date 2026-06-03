import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import HowItWorks from './pages/HowItWorks';
import Mentors from './pages/Mentors';
import SuccessStories from './pages/SuccessStories';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ApplicationProvider } from './context/ApplicationContext';
import Form from './components/Form';
import AuthModal from './components/AuthModal';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ApplicationProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AuthModal />
            <Form />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="programs" element={<Programs />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="mentors" element={<Mentors />} />
              <Route path="success-stories" element={<SuccessStories />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </ApplicationProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App