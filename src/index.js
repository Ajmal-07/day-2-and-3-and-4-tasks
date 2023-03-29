import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
import Appbar from './components/appbar';
import { Prod } from './components/product';
import OutlinedButtons from './components/button';
import Back from './components/back';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
      <Appbar></Appbar>
      <div className='bala' style={{
        height :950
      }}>
        <div className='bgDiv'>
          <Back></Back>
          <div className='top'>
            <Prod></Prod>
            <br></br><br></br>
            <OutlinedButtons></OutlinedButtons>
          </div>
        </div>
      </div>

      
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
