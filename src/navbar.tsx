const Navbar = () => {
    return(

        <nav className="navbar">
            <h1>the react blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style = {{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: '8px'
                }}> create new blog</a>
            </div>
        </nav>
    );
}
export default Navbar