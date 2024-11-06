import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/Product/ProductCard";
import HeroBanners from "../components/HeroBanners";
import Highlights from "../components/Highlights";
import Spinner from "../components/Spinner";
import API from "../api";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  const [isProductsLoading, setIsProductsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
      setIsProductsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsProductsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Wrapper>
      {/* Hero Banner Section */}
      <section>
        <HeroBanners />
      </section>

      {/* Products Section 1 */}
      <section>
        <h2 className="mb-8 text-left text-2xl font-semibold sm:text-3xl">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {isProductsLoading ? (
            <Spinner />
          ) : (
            products
              .slice(0, 8)
              .map((product) => <ProductCard product={product} />)
          )}
        </div>
      </section>

      {/* Highlights */}
      <section>
        <Highlights />
      </section>
    </Wrapper>
  );
};

export default Home;
