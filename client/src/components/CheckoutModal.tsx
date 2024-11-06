import { X } from "lucide-react";
import React, { useState } from "react";
import { ProductType } from "../types";
import priceFormatter from "../services/priceFormatter";

const CheckoutModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  cart: ProductType[];
}> = ({ isOpen, onClose, onSubmit, cart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-6">
      <div className="w-full max-w-md bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Checkout</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 font-medium"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 font-medium"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 p-2 font-medium"
              required
            />
          </div>

          <div className="mb-4">
            <p className="block text-sm font-semibold">
              Order Total: Rs.{" "}
              {priceFormatter(
                cart.reduce((total: number, item: ProductType) => {
                  return total + item.discountedPrice * Number(item.quantity);
                }, 0),
              )}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-black p-2 font-medium text-white transition-all hover:opacity-75"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
