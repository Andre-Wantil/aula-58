import arrowDown from "../../assets/header-arrow.svg"
import mixerIcon from "../../assets/mixer.svg"
import "./style.css"

export default function Header(props) {
    return (
        <header>
            <button type="button">
                <img src={arrowDown} alt="Return" />
            </button>
            <span>{props.title}</span>
            <button type="button">
                <img src={mixerIcon} alt="Mixer" />
            </button>
        </header>
    )
}