import "../ProductCards/ProductCards";
import Button from "../Button/Button";

function ProductCard({ name, price, image }) {
  const imgUrl = new URL(`../../assets/${image}`, import.meta.url).href;

  return (
    <div className="card">
      <img src={imgUrl} alt={name} />

      <h3>{name}</h3>
      <p>Price: ₹{price}</p>

      <Button text="Buy Now" />
    </div>
  );
}

export default ProductCard;