import { Container, NavbarBrand, NavLink } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { SiteLinks } from "../Links/SiteLinks";

const SiteNavbar = () => {
    return (  
        <>
            <Navbar bg="dark" variant="dark" className="bg-gradient-to-r from-purple-600 to-purple-400">
                <div className="ml-20">
                    <Container>
                        <Nav>
                            <NavbarBrand href={ SiteLinks.homepage } >MarketResearchLite</NavbarBrand>
                            <NavLink href="" className="ml-20 min-w-fit">Get Started</NavLink>
                            <NavLink href="" className="ml-5 min-w-fit">Dashboard</NavLink>
                            <NavLink href="" className="ml-5 min-w-fit">Data</NavLink>
                        </Nav>
                    </Container>
                </div>
            </Navbar>
        </>
    );
}

export default SiteNavbar;