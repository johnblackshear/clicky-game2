import React from "react";
import "./Header.css";

const Header = props =>(
    <div className='header'>
        <div className="score">
            score: {props.score} Highscore:{props.highscore}
        </div>
    </div>
);

export default Header;