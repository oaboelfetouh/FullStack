import { useOutletContext } from "react-router-dom";
import CardCollection from '../Components/Collection';
import { ChoiceBox } from '../Components/ChoiceBox';
import { Card } from '../Components/Card';
export default function Home(props) {

  const userType = useOutletContext();

  const cardData = [
    {
      imgSrc: "../../assets/bycicle.jpeg",
      itemName: "Pizza",
      price: "20",
      sellerName: "Ahmed",
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        imgSrc: "../../assets/bycicle.jpeg",
        itemName: "Pizza",
        price: "20",
        sellerName: "Ahmed",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        imgSrc: "../../assets/bycicle.jpeg",
        itemName: "Pizza",
        price: "20",
        sellerName: "Ahmed",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        imgSrc: "../../assets/bycicle.jpeg",
        itemName: "Pizza",
        price: "20",
        sellerName: "Ahmed",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        imgSrc: "../../assets/bycicle.jpeg",
        itemName: "MargritaPizza",
        price: "20",
        sellerName: "Ahmed",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
    // Add more card data as needed
  ];

  return (
    <>
      <div className="main-container">{userType} Home</div>
      <ChoiceBox />
      <CardCollection cardData={cardData}/>
    </>
  );
}