import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="798616902030-m6sk2n5idqoah8m0dn8eft1od98l7ia3.apps.googleusercontent.com">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);



serviceWorkerRegistration.register();
// Handle the 'beforeinstallprompt' event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Show your custom install button or UI
  showInstallPromotion(); // Define this function to show the install UI
});

const btnAdd = document.getElementById('install-btn'); // Add an install button in your UI
btnAdd.addEventListener('click', () => {
  // Hide the install promotion UI
  hideInstallPromotion(); // Define this function to hide the install UI
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
});

// Functions to show and hide your custom install UI
function showInstallPromotion() {
  // Implement UI changes to prompt the user to install the app
}

function hideInstallPromotion() {
  // Implement UI changes to hide the install prompt
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
