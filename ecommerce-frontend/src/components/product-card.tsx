import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { CartItem } from "../types/types";
// import { transformImage } from "../utils/features";

type ProductsProps = {
  productId: string;
  photo:string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  // stock,
  handler,
}: ProductsProps) => {
    // const server = "SDdsdf";
  return (
    <div className="product-card">
      {/* <img src={transformImage(photos?.[0]?.url, 400)} alt={name} /> */}
      <img src={photo} alt="" />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>handler()
          }
        >
          <FaPlus />
        </button>
        <Link to={`/product/${productId}`}>
          <FaExpandAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;