import React from   "react";
import { createRoot }  from "react-dom/client";
import App from       "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const rootelement=document.getElementById("root");
const root=createRoot(rootelement);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);