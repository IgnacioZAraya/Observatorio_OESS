import React from 'react';
import Header from './pages/header/components';
import FrontPage from './pages/frontpage/components';
import ReportPage from './pages/report/components';
import Footer from './pages/footer/components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FrontPage></FrontPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
