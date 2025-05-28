import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import { Root, MyAppNav } from "./root.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Root/> }>
            <Route path="home" element={ <Home/> }/>
            <Route path="projects" element={ <Projects/> }/>
            <Route path="contact" element={ <Contact/> }/>
        </Route>
    </Routes>
  </BrowserRouter>,
)
