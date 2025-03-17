import { Link } from "react-router-dom"
import LogoImage from "../../../../../assets/ksu.logo.png"
import { ENTREPRISE_HOME_PAGE } from "../../../../constants/index"

export default function Logo() {
    return(
        <Link to={ENTREPRISE_HOME_PAGE}>
            <img
                src={LogoImage}
                width={200}
            />
        </Link>
    )
}