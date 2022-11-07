import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from './Pages/Home/Index.jsx'
import Users from './Pages/Users/Users.jsx'
import Submission from './Pages/Submission/Submission.jsx'
import {Main as User} from './Pages/Profile/Main/Main.jsx'
import Error404 from './Pages/Error/404/error404.jsx'
export default function Main(props){
	return(
		<BrowserRouter>
		    	<Routes>
			        <Route index element={<Home />} />
			        <Route exact path="/users" element={<Users />} />
			        <Route exact path="/submission/:sub_id" element={<Submission />} />
			        <Route exact path="/user/:username" element={<User />} />
			        <Route path="*" element={<Error404 />} />
			    </Routes>
	    </BrowserRouter>
	);
}