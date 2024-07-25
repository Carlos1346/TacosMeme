import "./bootstrap";
import { createRoot } from "react-dom/client"; // Importar createRoot desde "react-dom"
import Main from "./routes/Main.jsx";
import '../css/app.css';
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("app")).render( 
    
            <BrowserRouter>
                <Main />
            </BrowserRouter>
       
);