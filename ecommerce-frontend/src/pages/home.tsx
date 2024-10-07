import { Link } from "react-router-dom";
import Image from "../assets/cover.jpg";
import ProductCard from "../components/product-card";
const Home = () => {
  const submitHandler = () => {}
  return (
    <>
      <div className="home">
        <img src={Image} alt="Source Image" width={"100%"} height={"200px"} />
        <section></section>
        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>
        <main>
          <ProductCard
            productId="dsds"
            photo="https://imgs.search.brave.com/4lV5TSvsv5QOLgolMi1u5Ada8zv8BuJNPyobK-sBxEE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14dDVl/bjBxOGtmL2ltYWdl/cy9zdGVuY2lsLzUw/MHg2NTkvcHJvZHVj/dHMvMTE0MTYvMjcz/NzEvTUJQLTEzLU0x/N1ItU1BBQ0VfR1JB/WV9fMzc5NjAuMTY1/OTYyNTU1MS5qcGc_/Yz0y"
            stock={20}
            name="MackBook"
            price={400}
            handler={submitHandler}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
