import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types";
import priceFormatter from "../../services/priceFormatter";

const ProductCard: React.FC<{
  product: ProductType;
}> = ({ product }) => {
  return (
    <Link to={`/product/${product.slug}`} key={product.slug}>
      <div className="flex flex-col gap-4 transition-all hover:scale-105">
        <div className="flex aspect-square items-center justify-center bg-gray-100 p-6">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-[150px] w-[150px] object-contain mix-blend-multiply"
          />
        </div>
        <div>
          <h2 className="text-md font-medium text-gray-700">
            {product.title.slice(0, 35)}...
          </h2>
          <p className="mt-1 font-semibold text-black">
            {priceFormatter(product.discountedPrice)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
