import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import { Root } from "./root.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";

createRoot(document.getElementById('root')!).render(
    <App/>
)
