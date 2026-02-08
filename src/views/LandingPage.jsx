import PageSwapButton from "../components/PageSwapButton.jsx";


function LandingPage({onPageSwap}){
    return (<div className="App">
        <h1>Landing Page</h1>
        <PageSwapButton targetPage="WorldSelectionPage" onPageSwap={onPageSwap} displayName="Login"/>
    </div>);
}

export default LandingPage;