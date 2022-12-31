import { Container, NavbarBrand, NavLink } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function BoilerPlateNavbar() {
    return (  
        <>
            <Navbar className="bg-gradient-to-r from-purple-600 to-purple-400 text-white">
                <Container>
                    <Nav>
                        <NavbarBrand href="" className="text-inherit hover:text-inherit">MarketResearchLite</NavbarBrand>
                        <NavLink href="" className="text-inherit hover:text-inherit">Get Started</NavLink>
                        <NavLink href="" className="text-inherit hover:text-inherit">Dashboard</NavLink>
                        <NavLink href="" className="text-inherit hover:text-inherit">Data</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function BoilerPlateNavbar() {
//   return (
//     <Container>
//       <Navbar expand="lg" variant="light" bg="light">
//         <Container>
//           <Navbar.Brand href="#">Navbar</Navbar.Brand>
//         </Container>
//       </Navbar>
//     </Container>
//   );
// }

export default BoilerPlateNavbar;