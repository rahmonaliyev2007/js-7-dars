import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Personal from "./pages/Personal";
import Activity from "./pages/Activity";
import Shareholder from "./pages/Shareholder";
import Investors from "./pages/Investors";
import Nest from "./pages/Nest";
import Contact from "./pages/Contact";
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <>
      
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nest" element={<Nest/>}>
            <Route path="personal" element={<Personal/>}/>
            <Route path="activity" element={<Activity/>} />
            <Route path="shareholder" element={<Shareholder/>} />
            <Route path="investors" element={<Investors/>} />
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Routes>
        <Analytics />
      </div>
      </>
  );
}

export default App;