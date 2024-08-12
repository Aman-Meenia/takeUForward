import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BannerContextProvider from "./store/Banner.jsx";
import UserContextProvider from "./store/User.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BannerContextProvider>
      <UserContextProvider>
        <Toaster />
        <App />
      </UserContextProvider>
    </BannerContextProvider>
  </BrowserRouter>,
);
