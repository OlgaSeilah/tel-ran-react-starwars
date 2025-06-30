const Header = () => {


    return (
        <header className="rounded-top-4">
            <nav>
                <ul className="nav fixed-top mt-1 ms-5">
                    <li className="nav-item btn btn-danger mx-1">Home</li>
                    <li className="nav-item btn btn-danger mx-1">About me</li>
                    <li className="nav-item btn btn-danger mx-1">Star Wars</li>
                    <li className="nav-item btn btn-danger mx-1">Contact</li>
                </ul>
            </nav>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    )
}

export default Header;