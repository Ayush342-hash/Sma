import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Layout from './Layout';
import Home from './home';
import Login from './login';
import Register from './register';
import Details from './details';
import Navbar from './components/navbar';
import App from './app';
import reportWebVitals from './reportWebVitals';

function Apps() {
  return (
    <Navbar />,
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />
          <Route path="details" element={<Details />} />
          <Route path="App" element={<App />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);

reportWebVitals();
