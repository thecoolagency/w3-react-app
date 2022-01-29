import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
import './styles/base.css';
import App from './App';

const appId = process.env.REACT_APP_MORALIS_APP_ID;
const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);

