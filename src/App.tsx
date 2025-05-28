import { useState } from 'react'
import Home from "./pages/Home.tsx";

export default function App() {
    const [test, setTest] = useState('');

    return (
        <div>
            <Home/>
        </div>
    );
}
