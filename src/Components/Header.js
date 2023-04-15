import React  from 'react'
import "./Header.css"


function Header({onTextChange}) {
 
    

    return (
        <div className="header">
            <div className="AppName"><img src="/logo.png" className="logo" alt="logo"/>News<span className='sp'>Hub</span>  </div>
            <div className="search">
                <img src="/searchicon.svg" className="icon" alt="search-icon"/>
                <input className="searchinput"placeholder="Search News" onChange={onTextChange}/>
             
            </div>
         
        </div>
    )
}

export default Header
