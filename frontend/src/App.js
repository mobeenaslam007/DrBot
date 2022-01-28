import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import SymptomsScreen from "./Screens/SymptomsScreen";

import "./App.css";

function App() {
  return (
    <div
      style={{
        flex: 1,
        // backgroundImage:
        //   "url(https://products.ls.graphics/mesh-gradients/images/61.-Lavender.jpg)",
        backgroundImage:
          "url(https://i.postimg.cc/B6HSTyh0/1-IRs-Mu32-DQYRma-Vux-QTKEjg.png)",
        backgroundSize: "cover",
        height: "100%",
        position: "absolute",
        left: 0,
        width: "100%",
        overflow: "auto",
      }}
    >
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/disease" element={<SymptomsScreen />} />
        </Routes>
      </Router>

     
        <Footer />
      
    </div>
  );
}

export default App;
