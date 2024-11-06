import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import { ProductType } from "../types";
import { Heart } from "lucide-react";
import { getWishlist, handleWishlist } from "../services/wishlist";
import toast from "react-hot-toast";
import priceFormatter from "../services/priceFormatter";

const Wishlist: React.FC = () => {
  const wishlistItems = getWishlist();

  const [wishlist, setWishlist] = useState<ProductType[]>(wishlistItems);

  const _handleWishlist = (product: ProductType) => {
    handleWishlist(product);
    toast.success("Product removed from wishlist", {
      icon: "❤️",
    });
    const updatedWishlist = getWishlist();
    setWishlist(updatedWishlist);
  };

  return (
    <Wrapper>
      <section className="md:my-7">
        <h2 className="mb-8 flex items-center gap-2 text-left text-2xl font-semibold sm:text-3xl">
          Wishlist
          <Heart strokeWidth={2.5} color="#e84118" fill="#e84118" />
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {wishlist.length > 0 ? (
            wishlist?.map((product: ProductType) => {
              return (
                <div className="flex items-center justify-between gap-8 bg-gray-100 px-8 py-4">
                  <div>
                    <img
                      className="h-[150px] object-contain"
                      src={product.images[0]}
                      alt={product.title}
                      style={{
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <h3 className="font-semibold">{product.title}</h3>
                    <h4 className="font-bold">
                      {priceFormatter(product.discountedPrice)}
                    </h4>
                    <div className="flex items-center gap-3 border-t-[1px] border-gray-300 pt-3">
                      <button
                        onClick={() => _handleWishlist(product)}
                        className="bg-black px-4 py-2 text-sm font-medium text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p className="text-xl font-semibold">No products in wishlist</p>
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default Wishlist;
