import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Pricing from "./pages/pricing";
import User from "./pages/user";
import Web from "./pages/web";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact  element={<Home />} />
        <Route path='/pricing' exact element={<Pricing />} />
        <Route path='/user-research' exact element={<User/>} />
        <Route path='/web-development' exact element={<Web/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
