import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import MetaDetailPage from "./components/MetaProject/MetaDetailPage";
import SwiggyDetailPage from "./components/SwiggyProject/SwiggyDetailPage";
import ChatgptDetailPage from "./components/ChatGptProject/ChatgptDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="/projects/meta" element={<MetaDetailPage />} />
        <Route path="/projects/swiggy" element={<SwiggyDetailPage />} />
        <Route path="/projects/chatgpt" element={<ChatgptDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
