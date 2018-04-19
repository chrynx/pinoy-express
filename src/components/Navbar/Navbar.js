import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.css';

const navbar = (props) => (
    <nav className={classes.Navbar}>
        <ul>
            <div>
                <div className={classes.Brand}>
                    <NavLink>BRAND</NavLink>
                </div>
            </div>
            <div>
                <div className={classes.Burger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={classes.Links}>
                    <NavLink>Menu</NavLink>
                    <NavLink>Orders</NavLink>
                </div>
            </div>
        </ul>
    </nav>
);

export default navbar;