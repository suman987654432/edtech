import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import HowItWorks from './pages/HowItWorks';
import Mentors from './pages/Mentors';
import SuccessStories from './pages/SuccessStories';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { ApplicationProvider } from './context/ApplicationContext';
import Form from './components/Form';

const App = () => {
  return (
    <ThemeProvider>
      <ApplicationProvider>
        <BrowserRouter>
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
            </Route>
          </Routes>
        </BrowserRouter>
      </ApplicationProvider>
    </ThemeProvider>
  )
}

export default App