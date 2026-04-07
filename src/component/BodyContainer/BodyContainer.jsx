import ProductCard from "../ProductCards/ProductCards";
import data from "../../data/sportsData.json";
import "./BodyContainer.css";

function BodyContainer() {
  return (
    <div className="container">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default BodyContainer;