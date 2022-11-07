import {Link} from 'react-router-dom'
export default function Footer(){
	return(
		<div className="footer_wrapper">
            <span className="copyright">&copy; 2022 - MyFursona</span>
            <span className="contact"><Link to="/about">About Us</Link> - <Link to="/tos">Terms of Service</Link> - <Link to="#">Report Bug</Link> - <Link to="/function/random">Random!</Link></span>
        </div>
	);
}