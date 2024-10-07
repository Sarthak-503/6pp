import { useState } from "react";
import ProductCard from "../components/product-card";


const Search = () => {
  // const searchQuery = useSearchParams()[0];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);



  const addToCartHandler = () => {}

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
            <option value="">Sample 1</option>
            <option value="">Sample 2</option>
     
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

       
          <div className="search-product-list">
          <ProductCard
            productId="dsds"
            photo="https://imgs.search.brave.com/4lV5TSvsv5QOLgolMi1u5Ada8zv8BuJNPyobK-sBxEE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14dDVl/bjBxOGtmL2ltYWdl/cy9zdGVuY2lsLzUw/MHg2NTkvcHJvZHVj/dHMvMTE0MTYvMjcz/NzEvTUJQLTEzLU0x/N1ItU1BBQ0VfR1JB/WV9fMzc5NjAuMTY1/OTYyNTU1MS5qcGc_/Yz0y"
            stock={20}
            name="MackBook"
            price={400}
            handler={addToCartHandler}
          />
          </div>

          <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              {page} of {4}
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
      </main>
    </div>
  );
};

export default Search;