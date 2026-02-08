

function PageSwapButton({onPageSwap, targetPage, displayName}) {
    return <button className="button is-light is-outlined" onClick={() => onPageSwap(targetPage)}>{displayName}</button>
}

export default PageSwapButton;