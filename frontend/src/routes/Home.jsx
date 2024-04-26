
import { Card } from "../Components/Card";
export default function Home(props) {


    return (
        <>
            <div className="main-container">{props.userType} Home</div>
            <Card 
            imgSrc = "../../assets/bycicle.jpeg"
            itemName="Pizza"
            price="20"
            sellerName="Ahmed"
            Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
        </>
    );
}
