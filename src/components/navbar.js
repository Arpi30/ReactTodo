import React from "react";
import {DivTodo} from "../styledComponents/StyledComponent";
import { Link, Outlet } from "react-router-dom";



export function Navbar() {
    return(
        <div>

            <nav>
                
                <ul>
                    <li>
                        <Link to="/"><DivTodo>TODO</DivTodo></Link>
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