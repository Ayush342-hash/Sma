import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Layout from './Layout';
import Login from './login';
import Register from './register';
import Details from './details';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="Login" index element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();