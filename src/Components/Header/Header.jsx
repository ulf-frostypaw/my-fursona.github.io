import { Link }  from 'react-router-dom'
export default function Header(){
	return(
		<div id="header_wrapper">
            <div id="branding_wrapper"><h1><Link to="/" title="MyFursona.com">MyFursona.com</Link></h1></div>
            <div id="navigation_wrapper">
                <ul id="navigation">
                    <li><Link to="/" id="b_home"><img src="./assets/img/nav/home_off.gif" alt="Home"/></Link></li>
                    <li><Link to="/users" id="b_users"><img src="./assets/img/nav/users_off.gif" alt="Users"/></Link></li>
                    <li><Link to="/journals" id="b_blogs"><img src="./assets/img/nav/blogs_off.gif" alt="Blogs"/></Link></li>
                    <li><Link to="/images" id="b_gallery"><img src="./assets/img/nav/gallery_off.gif" alt="Gallery"/></Link></li>
                </ul>
            </div>
            <hr/>
                <div id="search_wrapper" className="aright">
	                <form id="searchform" name="search" method="post" action="/search">
	                    <input type="text" name="terms" id="terms" defaultValue="Search..." />
	                    <input type="submit" name="search" id="search" defaultValue="Search" />
	                </form>
                </div>
                <div id="membermeta_wrapper">Hello there, <span className="currentusername"><a href="/login">~Guest!</a></span><small>(<a href="/web/20080719163958/http://myfursona.com/login">Login or Register</a>)</small>  </div>
        </div>
	);
}