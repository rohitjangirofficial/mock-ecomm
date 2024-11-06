import React from "react";
import { Award, CircleDollarSign, Truck } from "lucide-react";

const Highlights: React.FC = () => {
  return (
    <div className="grid min-h-[150px] grid-rows-3 gap-5 border-[1px] border-[#c0392b] bg-[#c0392b]/5 p-8 sm:grid-cols-2 sm:grid-rows-none md:grid-cols-3">
      <div className="flex w-full items-center justify-start gap-6">
        <div className="rounded-full bg-[#c0392b]/30 p-4">
          <Truck className="text-[#c0392b]" size={50} strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="text-xl font-semibold">Free Delivery</h4>
          <p className="text-sm font-medium text-gray-600">
            For orders above $100.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-6">
        <div className="rounded-full bg-[#c0392b]/30 p-4">
          <CircleDollarSign
            className="text-[#c0392b]"
            size={50}
            strokeWidth={1.5}
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold">100% Refund</h4>
          <p className="text-sm font-medium text-gray-600">
            Money-back after 7 days
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-6">
        <div className="rounded-full bg-[#c0392b]/30 p-4">
          <Award className="text-[#c0392b]" size={50} strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="text-xl font-semibold">Premium Quality</h4>
          <p className="text-sm font-medium text-gray-600">
            Certified top quality items
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
