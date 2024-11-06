import { ProductType } from "../types";

const getWishlist = () => {
  const wishlistData = localStorage.getItem("wishlist");
  const wishlist = wishlistData ? JSON.parse(wishlistData) : [];
  return wishlist;
};

const handleWishlist = (product: ProductType) => {
  let status: number;
  const wishlist = getWishlist();

  const existingProductIndex = wishlist.findIndex(
    (item: ProductType) => item.slug === product.slug,
  );

  if (existingProductIndex == -1) {
    wishlist.push(product);
    status = 1;
  } else {
    wishlist.splice(existingProductIndex, 1);
    status = 0;
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  return status;
};

export { handleWishlist, getWishlist };
