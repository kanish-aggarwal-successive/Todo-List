import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className="Header">
            <h2 className="Heading">You have {props.count} Todos</h2>
        </div>
    );
}

export default Header;