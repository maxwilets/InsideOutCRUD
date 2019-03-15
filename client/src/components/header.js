import React, {Component} from "react";
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div>
                <header  id="header">
                    <h1 style={{ whiteSpace: "pre" }}>
                        {/* <Link to="/"><img src={pic24} className="baby-icon" alt="navbar"></img></Link> */}
                        <Link to="/fooddonation" >  VIEW EMPLOYEES </Link>|
                        <Link to="/donate" > ADD EMPLOYEES </Link>|
                        <Link to="https://github.com/maxwilets/InsideOutCRUD" > INFO</Link>
                    </h1>
                   
                </header>
            </div>
        );
    }
}

export default Header;