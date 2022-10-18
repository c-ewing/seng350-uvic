import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";  

export default function Home() {
    return (
        <div>
            <header className="banner">
                <h1>Welcome to Victoria</h1>
            </header>
            <main>
                <h3><span>Your</span> journey starts here</h3>
                <div className="line"></div>
                    <NavLink to="/Profile" activeClassName="current" exact>
                        <li>Create a Profile</li>
                    </NavLink>
            </main>
        </div>
        
    );
}