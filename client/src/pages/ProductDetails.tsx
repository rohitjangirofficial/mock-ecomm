import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { Heart, ShoppingCart } from "lucide-react";
import ImageCarousel from "../components/Product/ImageCarousel";
import Spinner from "../components/Spinner";
import API from "../api";
import { ProductType } from "../types";
import ProductNotFound from "../components/Product/ProductNotFound";
import { addToCart } from "../services/cart";
import { getWishlist, handleWishlist } from "../services/wishlist";
import toast from "react-hot-toast";
import priceFormatter from "../services/priceFormatter";

const ProductDetails: React.FC = () => {
  const { slug } = useParams();

  const wishlist = getWishlist();

  const [product, setProduct] = useState<null | ProductType>(null);

  const [isWishlisted, setIsWishlisted] = useState(() =>
    wishlist.find((item: ProductType) => item.slug === slug) ? true : false,
  );

  const [isProductLoading, setIsProductLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get(`products/${slug}`);
      setProduct(data);
      setIsProductLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsProductLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
    toast.success("Product added to cart", {
      icon: "🛒",
    });
  };

  const _handleWishlist = (product: ProductType) => {
    const status = handleWishlist(product);
    if (status === 1) {
      setIsWishlisted(true);
      toast.success("Product added to wishlist", {
        icon: "❤️",
      });
    } else {
      setIsWishlisted(false);
      toast.success("Product removed from wishlist", {
        icon: "❤️",
      });
    }
  };

  return (
    <Wrapper>
      <section
        className={`grid grid-cols-1 gap-y-4 md:my-8 md:${!product ? "grid-cols-1" : "grid-cols-2"}`}
      >
        {isProductLoading ? (
          <div className="flex h-[100px] items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            {!product ? (
              <ProductNotFound />
            ) : (
              <>
                <section>
                  <ImageCarousel images={product?.images} />
                </section>
                <section className="p-0 md:px-10">
                  <div className="">
                    <h2 className="text-2xl font-semibold md:text-3xl">
                      {product?.title}
                    </h2>
                    <p className="mt-2 text-[18px] font-semibold text-gray-700">
                      {product?.category}
                    </p>
                    <div className="mt-2 flex items-center">
                      <p className="text-md mr-2 font-semibold">
                        {priceFormatter(product?.discountedPrice)}
                      </p>
                      <p className="text-md font-medium line-through">
                        {priceFormatter(product?.originalPrice)}
                      </p>
                      <p className="ml-auto inline-block rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                        {product?.discountPercent}% off
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      incl. of taxes (Also includes all applicable duties)
                    </p>
                    <div className="mt-4 flex gap-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex w-full items-center justify-center gap-4 bg-black py-3 font-medium text-white transition-all hover:opacity-75"
                      >
                        Add To Cart <ShoppingCart size={20} strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => _handleWishlist(product)}
                        className="flex w-full items-center justify-center gap-4 border-[1px] border-black bg-white py-3 font-medium text-black transition-all hover:opacity-75"
                      >
                        Wishlist{" "}
                        <Heart
                          size={20}
                          strokeWidth={1.5}
                          fill={isWishlisted ? "#e84118" : "none"}
                        />
                      </button>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-md mb-2 font-medium">
                        Product Details
                      </h4>
                      <p className="text-sm font-normal">
                        {product?.description}
                      </p>
                      <ul className="ml-4 mt-2 list-disc text-sm font-normal">
                        {product?.additionalInfo.map((info) => (
                          <li className="text-sm" key={info}>
                            {info}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </>
            )}
          </>
        )}
      </section>
    </Wrapper>
  );
};

export default ProductDetails;
