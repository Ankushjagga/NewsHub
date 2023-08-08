import React  from 'react'
import "./Header.css"
// import { Link } from 'react-router-dom'
function Header({onTextChange}) {
 
    

    return (
        <div className="header">
            <div className="AppName"><img src="/logo.png" className="logo" alt="logo"/>News<span className='sp'>Hub</span>  </div>
            {/* <ul className='niche'>
           <Link to="/tesla">   <li> Tesla</li></Link>  
           <Link to="/bollywood">   <li> Bollywood</li></Link>  
           <Link to="/bitcoin">   <li> Bitcoin</li></Link>  
           <Link to="/cricket">   <li> cricket</li></Link>  
            </ul> */}
            <div className="search">
                <img src="/searchicon.svg" className="icon" alt="search-icon"/>
                <input className="searchinput"placeholder="Search News" onChange={onTextChange}/>
             
            </div>
         
        </div>
    )
}

export default Header
