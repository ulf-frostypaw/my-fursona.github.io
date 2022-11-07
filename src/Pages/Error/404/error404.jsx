import {Link} from 'react-router-dom'
import Layout from '../../../Components/Layout.jsx'
import { Helmet } from 'react-helmet';
export default function error404(){
	return(
		<>
			<Helmet><title>404 - Page Not Found / MyFursona | A place for Furs</title></Helmet>
		<Layout>
			<div id="body_wrapper">
				<div id="body_inner">
					<p className="acenter"><big><strong>An error occurred while connecting to the database.</strong></big><br/>If this problem persists then please email <Link to="#">bugs&#64;myfursona.com</Link> immediately.</p>
					<p className="acenter"><img src="" alt="Error!"/></p>
				</div>
			</div>
		</Layout>
		</>
	);
}