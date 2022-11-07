import { Link } from 'react-router-dom'
//import Footer from '../../Components/Footer/Footer.jsx'
//import Header from '../../Components/Header/Header.jsx'
import Layout from '../../Components/Layout.jsx'
import { Helmet } from 'react-helmet';
export default function Home(){
    return(
        <>
        <Helmet><title>Inicio / MyFursona | A place for Furs</title></Helmet>
            <Layout>
                <div id="body_wrapper">
                    <div id="body_header">
                        <div className="col_left"><h2 id="t_welcome">MyFursona is a social networking website for the furry fandom. A place to talk, meet new people and share your talent!</h2></div><hr/>
                            <div className="col_right">
                            <div id="prof">
                            <h2>~Guest</h2>
                            <div id="prof_inner">
                            <p>Want to join over <strong>API:USERS_COUNTER</strong> people in one of the most diverse furry social communities?<br/><Link to="/login">Register now!</Link></p>
                            </div>
                            </div>
                        </div>
                            
                        <br className="clr"/>
                    </div>
                    <hr/>
                
                    <div id="body_inner">
                    <div className="col_left">
                        <div id="news">
                        <div className="boxtop"><div></div></div>
                        <div className="boxcontent">
                            <h2 className="secthead">Renoved version!</h2>
                            <p>Now we're using react! we are so happy for this first new announcement uwu - <strong>Go furpile!</strong></p>
                            <div className="comments">
                                <a href="/web/20080719163958/http://myfursona.com/update/64#comments"><strong>14</strong> comments</a>
                            </div>
                            <div className="postmeta">Posted by <Link to="user/KovuTheHusky">@KovuTheHusky</Link><br/>on Jul 7, 2008 9:35pm</div>
                            <br className="clr"/>
                        </div>
                        <div className="boxbottom"><div></div></div>
                        </div>
                        <div id="recentnews">
                        <strong><a href="/web/20080719163958/http://myfursona.com/updates">News archive &raquo;</a></strong><br/>
                                <a href="/web/20080719163958/http://myfursona.com/update/63">Upcoming updates!</a> by <a href="user/KovuTheHusky">@KovuTheHusky</a><br/>
                                <a href="/web/20080719163958/http://myfursona.com/update/62">MyFurmeet was fun, nom nom nom.</a> by <a href="user/KovuTheHusky">@KovuTheHusky</a><br/>
                            </div>
                        <hr/>

                            <div className="information">
                            Join us on IRC now!<br/>
                            <a href="irc://irc.furnet.org/myfursona">irc.furnet.org #myfursona</a>
                            </div>
                        <hr/>
                    </div>
                    
                    <div className="col_right">
                        <div id="latest" className="s3">
                            <h2 className="tim" id="t_latestblogs">Latest Blogs</h2>
                            <ul id="latestblogs">
                                <li><strong><Link to="/journal/4183">Time to Brawl! Looking for a Challenge?</Link></strong> by <Link to="/user/Cecil-Sayataki">~Cecil-Sayataki</Link></li>
                                <li><strong><Link to="/journal/4182">:D</Link></strong> by <Link to="/user/Nivek">~Nivek</Link></li>
                                <li><strong><Link to="/journal/4181">FA haiku</Link></strong> by <Link to="/user/IantheGecko">~IantheGecko</Link></li>
                                <li><strong><Link to="/journal/4180">FA</Link></strong> by <Link to="/user/Jerthar">~Jerthar</Link></li>
                                <li><strong><Link to="/journal/4179">YAY.</Link></strong> by <Link to="/user/Stahi">~Stahi</Link></li>
                                <li><strong><Link to="/journal/4178">FurAffinity WAI?</Link></strong> by <Link to="/user/Taro">~Taro</Link></li>
                                <li><strong><Link to="/journal/4177">Holy Crap Update!</Link></strong> by <Link to="/user/morg">~morg</Link></li>
                                <li><strong><Link to="/journal/4176">OMG an UPDATE!?</Link></strong> by <Link to="/user/Sarn+Darkholm">~Sarn Darkholm</Link></li>
                            </ul>
                            
                            <h2 className="tim" id="t_latestthreads">Latest Threads</h2>
                            <ul id="latestthreads">
                                    <li><strong><Link to="viewtopic.php?f=7&amp;t=535">Da-Fox's 1st fursuit head!</Link></strong> by <Link to="memberlist.php?mode=viewprofile&amp;u=285">da-fox</Link></li>
                                    <li><strong><Link to="viewtopic.php?f=5&amp;t=534">Time for Some Campaignin�</Link></strong> by <Link to="memberlist.php?mode=viewprofile&amp;u=438">DrakkenRavenclaw</Link></li>
                                    <li><strong><Link to="viewtopic.php?f=5&amp;t=533">Whats wrong with me?</Link></strong> by <Link to="memberlist.php?mode=viewprofile&amp;u=438">DrakkenRavenclaw</Link></li>
                                    <li><strong><Link to="viewtopic.php?f=29&amp;t=532">Commissions; Full-Bodied Works Starting at $10</Link></strong> by <Link to="memberlist.php?mode=viewprofile&amp;u=269">Orthan</Link></li>
                                    <li><strong><Link to="viewtopic.php?f=23&amp;t=531">Furries With Spare Time</Link></strong> by <Link to="memberlist.php?mode=viewprofile&amp;u=361">Pyro</Link></li>
                            </ul>
                            
                            <h2 className="tim" id="t_newmembers">Newest Members</h2>
                            <ul id="newestmembers">
                                <li>
                                    <Link to="/user/Fox+Amoore">~Fox Amoore</Link>
                                    <Link to="/user/Vikt0m">~Vikt0m</Link>
                                    <Link to="/user/devils">~devils</Link>
                                    <Link to="/user/Kano">~Kano</Link>
                                    <Link to="/user/x">~x</Link>
                                    <Link to="/user/Midekai">~Midekai</Link>
                                    <Link to="/user/iruser">~iruser</Link>
                                    <Link to="/user/kingculex">~kingculex</Link>
                                    <Link to="/user/suicidebycyanide">~suicidebycyanide</Link>
                                    <Link to="/user/hafflepuff">~hafflepuff</Link>
                                    <Link to="/user/Cheetar+%27%27Spots%27%27+Cheetah">~Cheetar ''Spots'' Cheetah</Link>
                                    <Link to="/user/Tremaine">~Tremaine</Link>
                                </li>
                            </ul>
                            
                            <h2 className="tim" id="t_latestimages">Latest Images</h2>
                            <div className="gallery">
                                <ul>
                                    <li><Link to="/submission/5096"><img src="https://via.placeholder.com/600x500" alt="Devil Dawg"/><span>Devil Dawg</span></Link></li>
                                    <li><Link to="/submission/5095"><img src="https://via.placeholder.com/400" alt="Guild Wars Sarn"/><span>Guild Wars Sarn</span></Link></li>
                                    <li><Link to="/submission/5094"><img src="https://via.placeholder.com/700x300" alt="Who- Oh, it's Just Jake"/><span>Who- Oh, it's Just Jake</span></Link></li>
                                    <li><Link to="/submission/5093"><img src="https://via.placeholder.com/600x500" alt="My 3 fursonas"/><span>My "3" Fursonas</span></Link></li>
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}