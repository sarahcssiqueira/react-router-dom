import React from 'react';
import { Link } from 'react-router-dom';

export default function setLinks () {
    return (
        <nav>
            <Link to="/">
                <li>
                    Component0
                </li>
            </Link>

            <Link to="/component1">
                <li>
                    Component1
                </li>
            </Link>

            <Link to="/component2">
                <li>
                    Component2
                </li>
            </Link>

            <Link to="/component3">
                <li>
                    Component3
                </li>
            </Link>

            <Link to="/component4">
                <li>
                    Component4
                </li>
            </Link>
            
            <Link to="/component5">
                <li>
                    Component5
                </li>
            </Link>
    </nav>
    )
}