import Layout from '../../Components/Layout.jsx'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
export default function Users(){
	return(
		<>
    <Helmet><title>Users / MyFursona | A place for Furs</title></Helmet>
      <Layout>
        <div id="body_wrapper">
            <div id="body_header">
             <div class="col_left"><h2 class="secthead">Users</h2></div>
             <div class="col_right">
              <p class="navigation"><del>New Users</del> <Link to="/users?filter=all">Alphabetic</Link></p>
              <p class="navigation"><del class="prev">« Prev</del>  <del>1</del> <Link to="/users?view=2">2</Link> <Link to="/users?view=3">3</Link> <Link class="next" to="/users?view=2">Next »</Link></p>
             </div>
             <br class="clr" />
            </div><hr />
            <div id="body_inner">
               <ul class="users">
                <li>
                  <div><img src="https://thisfursonadoesnotexist.com/v2/jpgs-2x/seed65871.jpg" alt="~Kallinx" class="av" /></div>
                  <strong><Link to="/user/Kallinx" class="title">~Kallinx</Link></strong>
                  <br />
                  <strong>Red-Tailed Hawk</strong>
                  <br />Male 20<br />
                        <span class="uplinks">
                          <Link to="/user/Kallinx">+0 <span class="tip-content">View Profile</span></Link>
                          <Link to="/user/Kallinx/blogs">[] <span class="tip-content"> View Blogs</span></Link>
                          <Link to="/user/Kallinx/images">[-]<span class="tip-content"> View Gallery</span></Link> 
                          <Link to="/user/Kallinx/friend/add">[+]<span class="tip-content"> Add as Friend</span></Link>
                        </span>
                  </li>
               </ul>
            </div>
        </div>
      </Layout>
		</>
	);
}