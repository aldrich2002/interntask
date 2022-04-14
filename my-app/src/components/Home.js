import React from "react";
import { Link } from "react-router-dom";
const  Home=()=>{
    return(
    <div className="container">
  
    <div class="dropdown">
      <ul>
        A
        <li><Link to='/Word' state={{w:'Aa-Ai'} } >Aa-Ai</Link></li>
        <li><Link to='/Word' state={{w:'Al-Az'} } >Al-Az</Link></li>
        {/* <Link>Ai-az</Link>
        B
        <Link>Ba-Bz</Link>
        C  
        <Link>Ca-co</Link>
        <Link>Co-Co</Link>
        <Link>Co-Cz</Link> */}
      </ul>
    </div>
  </div>
    )

}
export default Home;