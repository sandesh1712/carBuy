import "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const element = document.getElementById("root");
const rootElement =  createRoot(element);
rootElement.render(<App/>);

