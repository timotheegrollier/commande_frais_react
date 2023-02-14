import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
                <nav className="position-relative">
                    <div id="bouton_retour">
                        <a href="/">
                            <svg width="30px" height="30px">
                                <path d="M 9,0 L 13,0 L 4,15 L 13,30 L 13,30 L 9,30 L 0,15" fill="#fff"></path>
                                <path d="M 16,0 L 20,0 L 11,15 L 20,30 L 20,30 L 16,30 L 7,15" fill="#fff"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
        );
    }
}

export default Nav;