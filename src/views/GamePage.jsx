import PageSwapButton from "../components/PageSwapButton.jsx";
import MapGrid from "../components/MapGrid.jsx";

function GamePage({onPageSwap}){
    return (<div className="App">
        <section className="hero is-fullheight">
            <div className="header-buttons">
            <PageSwapButton targetPage="WorldSelectionPage" onPageSwap={onPageSwap} displayName="Back to worlds list"/>
            <PageSwapButton targetPage="LandingPage" onPageSwap={onPageSwap} displayName="Logout"/>
            </div>
            <div className="hero-body is-flex is-justify-content-center is-align-items-center">
                <div className="map-container">
                    <img
                        src="/maps/montreal.jpg"
                        alt="Map Background"
                        className="map-background"
                    />
                    <MapGrid rows={8} cols={8}/>
                </div>
            </div>
        </section>
    </div>);
}

export default GamePage;