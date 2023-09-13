import Layout from './Components/Common/Layout';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
