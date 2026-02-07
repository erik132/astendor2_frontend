import { useState } from 'react'
import LandingPage from "./views/LandingPage.jsx";
import WorldSelectionPage from "./views/WorldSelectionPage.jsx";
import AdminPage from "./views/AdminPage.jsx";
import GamePage from "./views/GamePage.jsx";

function App() {
    const [currentPage, setCurrentPage] = useState('LandingPage')

    const onPageSwap = (newPage) =>{
        setCurrentPage(newPage);
    };

    switch (currentPage){
        case 'WorldSelectionPage':
            return <WorldSelectionPage onPageSwap={onPageSwap} />;
        case 'AdminPage':
            return <AdminPage onPageSwap={onPageSwap} />;
        case 'GamePage':
            return <GamePage onPageSwap={onPageSwap} />;
        default:
            return <LandingPage onPageSwap={onPageSwap} />;
    }
}

export default App
