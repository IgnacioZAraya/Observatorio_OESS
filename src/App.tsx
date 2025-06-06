import React from "react";
import Header from "./pages/header/components";
import FrontPage from "./pages/frontpage/components";
import Footer from "./pages/footer/components";

import "./assets/Fonts/HendersonSans/Henderson-Sans-Basic-Light.ttf";
import "./assets/Fonts/HendersonSans/Henderson-Sans-Basic-Bold.ttf";
import "./assets/Fonts/HendersonSans/Henderson-Sans-Basic-SemiBd.ttf";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <FrontPage />

      <Footer />
    </div>
  );
}

export default App;
