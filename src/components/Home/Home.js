import { NavLink } from "react-router-dom";  
// import styled from "styled-components";

const headerStyle = {
    position: "relative",
    height: "40vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
};

const h1Style = {
    position: "relative",
    color: "rgb(53, 52, 52)", 
    fontSize: "9rem",
    lineHeight: "0.9",
    textAlign: "center",
    top: "-30px",
    zIndex: "0"
};



export default function Home() {
    return (
        <div>
            <header style={headerStyle} className="banner">
                <h1 style={h1Style}>Welcome to Victoria</h1>
            </header>
            <main className="home-main">
                <h3 className="home-h3"><span>Your</span> journey starts here</h3>
                <div className="line"></div>
                    <NavLink to="/Profile" activeClassName="current" exact>
                        <li>Create a Profile</li>
                    </NavLink>
            </main>
        </div>
        
    );
}