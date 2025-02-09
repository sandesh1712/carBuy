import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./components/Auth";

export default function App() {
  return (
    <BrowserRouter>
     <Auth/>
    </BrowserRouter>
  );
}
