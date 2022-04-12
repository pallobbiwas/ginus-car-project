import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Cheekout from "./Pages/Cheekout/Cheekout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Ragister from "./Pages/Login/Ragister/Ragister";
import RequierAuth from "./Pages/Login/RequierAuth/RequierAuth";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/ragister" element={<Ragister />}></Route>
        <Route path="/cheekout" element={
          <RequierAuth>
            <Cheekout />
          </RequierAuth>
        }></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
