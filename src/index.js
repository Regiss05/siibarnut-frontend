import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/globalStyle.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {BrowserRouter} from "react-router-dom";
import {AuthProviderWrapper} from "./context/auth";
ReactDOM.render(
    <AuthProviderWrapper>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </AuthProviderWrapper>,
  document.getElementById('root')
);
