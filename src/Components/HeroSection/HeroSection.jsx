import { Card } from "react-bootstrap";
import "../../Images/business-strategy.jpg"

const HeroSection = () => {
    return (
        <Card className="bg-dark text-white w-[1500px] grid justify-items-end">
            <Card.Img src={require("../../Images/business-strategy.jpg")} alt="Card Image" className="w-[900px]"/>
            <Card.ImgOverlay>
                <Card.Title>Welcome!</Card.Title>
                <Card.Text>This is where the text goes</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default HeroSection;