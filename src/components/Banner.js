import '../styles/Banner.css'
import logo from "../assets/logo.png";

const title = "La maison de la jungle";
const Banner = () => (
    <div className="lmj-banner" /*style={{textTransform: "uppercase"}}*/>
        <img src={logo} alt="La maison de la jungle" className="lmj-logo"/>
        <h1>{title}</h1>
    </div>
);

export default Banner;