import React from "react"
import { FaThLarge, FaThList } from "react-icons/fa";


import './Filter.css'
const Filter = () => {
    return (
        <nav className="filter">
            <ul>
                <li className="title">Explore Assets</li>
                {/* <li className="title"><img src={logo}></img></li> */}
                <>
                    {/* <li ><FaSistrix /></li> */}
                    {/* <li ><Link to="/explore" className={exploreMatch ? "active" : ""}>Explore</Link></li> */}
                    {/* <li ><Link to="/create" className={createMatch ? "active" : ""}>Create</Link></li> */}
                    {/* <li ><Link to="/events" className={eventsMatch ? "active" : ""}>Events</Link></li> */}
                    {/* <li ><Link to="/login" className={loginMatch ? "active" : ""}>Log In</Link></li> */}
                    {/* <li ><Link to="/signup" className={signupMatch ? "active" : ""}>Sign Up</Link></li> */}
                    <li>
                        <select className="auth-form">
                            <option value="option1">Filter</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </li>
                    <li><FaThLarge /></li>
                    <li><FaThList /></li>
                </>
            </ul>
        </nav>
    )
};

export default Filter;
