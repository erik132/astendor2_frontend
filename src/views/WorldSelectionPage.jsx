import PageSwapButton from "../components/PageSwapButton.jsx";


function WorldSelectionPage({onPageSwap}){
    return (<div className="App">
        <h1>World Selection age</h1>
        <PageSwapButton targetPage="LandingPage" onPageSwap={onPageSwap} displayName="Logout" />
        <PageSwapButton targetPage="GamePage" onPageSwap={onPageSwap} displayName="Join World" />
    </div>)
}

export default WorldSelectionPage;