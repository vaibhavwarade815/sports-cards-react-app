import "./Home.css";
import data from "../../data/sportsData.json";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Sports Shop</h1>
      <p>Buy All Sports Products Here</p>

      <div className="cards">
        {data.map((item) => {
          const imgUrl = new URL(`../../assets/${item.image}`, import.meta.url).href;

          return (
            <div className="card" key={item.id}>
              <img src={imgUrl} alt={item.name} />

              <h2>{item.name}</h2>
              <p className="price">₹ {item.price}</p>

              <p className="desc">Best quality {item.name} product</p>

              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;