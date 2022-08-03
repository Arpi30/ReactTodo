import {DivTodo} from "../styledComponents/StyledComponent";
import { Link } from "react-router-dom";



export function Navbar() {
    return(
        <div>
            {/*
            <nav>
                <ul>

                    <li>
                        <Link to="/archive">Archive</Link>
                    </li>
                </ul>
            </nav>

            <BrowserRouter>
                <Routes>
                    <Route path="archive" element={<Archive />} />
                </Routes>
            </BrowserRouter> */}

            <nav>
                <ul>
                    <li>
                        <Link to= 'home' ><DivTodo>TODO</DivTodo></Link>
                    </li>
                    <li>
                        <Link to= 'archive' >ARCHIVE</Link>
                    </li>
                </ul>
            </nav>








        </div>
    )
}

export default Navbar