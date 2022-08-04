import React from "react";
import {DivTodo} from "../styledComponents/StyledComponent";
import { Link, Outlet } from "react-router-dom";



export function Navbar() {
    return(
        <div>

            <nav>
                <DivTodo>TODO</DivTodo>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to= 'archive' >Archive</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />






        </div>
    )
}

export default Navbar