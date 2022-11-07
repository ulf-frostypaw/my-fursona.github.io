import React from 'react';
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

const Layout =({children}) =>{
    return(
        <>
            <div id="page_wrapper">
                <main>
                    <Header/>
                        {children}
                    <Footer/>
                </main>
            </div>
        </>
    )
}

export default Layout;