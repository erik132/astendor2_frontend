import PageSwapButton from "../components/PageSwapButton.jsx";

function GamePage({onPageSwap}){
    return (<div>
        <h1>Game Page</h1>
        <PageSwapButton targetPage="WorldSelectionPage" onPageSwap={onPageSwap} displayName="Back to worlds list"/>
        <PageSwapButton targetPage="LandingPage" onPageSwap={onPageSwap} displayName="Logout" />
    </div>)
}

export default GamePage;