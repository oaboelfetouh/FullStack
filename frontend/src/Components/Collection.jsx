import { Card } from "../Components/Card";
import "./Collection.css"
const CardCollection = ({ cardData }) => {
  return (
    <div className="card-collection">
      {cardData.map((card, index) => (
        <div className="card-container" key={index}>
          <Card
            imgSrc={card.imgSrc}
            itemName={card.itemName}
            price={card.price}
            sellerName={card.sellerName}
            Description={card.Description}
          />
        </div>
      ))}
    </div>
  );
};

export default CardCollection;