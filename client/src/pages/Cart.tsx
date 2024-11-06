import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import {
  decrementQuantity,
  getCart,
  incrementQuantity,
} from "../services/cart";
import { ProductType } from "../types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import priceFormatter from "../services/priceFormatter";
import API from "../api";
import CheckoutModal from "../components/CheckoutModal";

const Cart: React.FC = () => {
  const cartItems = getCart();

  const [cart, setCart] = useState<ProductType[]>(cartItems);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleQtyIncrement = (slug: string) => {
    incrementQuantity(slug);
    const updatedCart = getCart();
    setCart(updatedCart);
  };

  const handleQtyDecrement = (slug: string) => {
    decrementQuantity(slug);
    const updatedCart = getCart();
    setCart(updatedCart);
  };

  const handleCheckout = async () => {
    const {
      data: { order },
    } = await API.post("/products/checkout", {
      amount: cart.reduce((total: number, item: ProductType) => {
        return total + item.discountedPrice * Number(item.quantity);
      }, 0),
    });

    const options = {
      key: import.meta.env.VITE_API_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Mock eComm",
      description: "Mock Transaction",
      order_id: order.id,
      callback_url: `${import.meta.env.VITE_API_BASE_URL}/products/payment-verification`,
      theme: {
        color: "#F37254",
      },
    };

    const razor = new Razorpay(options);
    razor.open();
  };

  return (
    <Wrapper>
      <section className="md:my-7">
        <h2 className="mb-8 flex items-center gap-2 text-left text-2xl font-semibold sm:text-3xl">
          Cart
          <ShoppingCart strokeWidth={2.5} />
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cart.length > 0 ? (
            cart?.map((product: ProductType) => {
              return (
                <div
                  key={product.slug}
                  className="flex items-center justify-between gap-8 bg-gray-100 px-8 py-4"
                >
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
                      {priceFormatter(
                        Number(product.discountedPrice) *
                          Number(product?.quantity),
                      )}
                    </h4>
                    <div className="flex items-center gap-3 border-t-[1px] border-gray-300 pt-3">
                      <button
                        onClick={() => handleQtyIncrement(product.slug)}
                        className="rounded-full bg-black p-1 text-white shadow-md"
                      >
                        <Plus size={22} />
                      </button>
                      <span className="font-semibold">{product?.quantity}</span>
                      <button
                        onClick={() => handleQtyDecrement(product.slug)}
                        className="rounded-full bg-black p-1 text-white shadow-md"
                      >
                        <Minus size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p className="text-xl font-semibold">No products in cart</p>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => openModal()}
            className="text-md mt-8 bg-black px-4 py-2 font-medium text-white"
          >
            Checkout
          </button>
        </div>
      </section>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleCheckout}
        cart={cart}
      />
    </Wrapper>
  );
};

export default Cart;
