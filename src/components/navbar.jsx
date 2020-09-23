import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand mb-0 h1">
                Cart
                <span className="badge badge-pill badge-secondary ml-2">
                    {totalCounters}
                </span>
            </div>
        </nav>
    );
};

export default NavBar;
