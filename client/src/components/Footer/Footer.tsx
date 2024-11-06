import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-black px-8 py-16">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-20 gap-y-10">
          <div>
            <h3 className="text-xl text-white">Support</h3>
            <div className="text-md mt-5 flex flex-col gap-3 text-white">
              <p>11, Vicky Society, Bandra</p>
              <p>dummy@gmail.com</p>
              <p>+9199999999999</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white">Account</h3>
            <div className="text-md mt-5 flex flex-col gap-3 text-white">
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Help</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white">Quick Link</h3>
            <div className="text-md mt-5 flex flex-col gap-3 text-white">
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-100/10 bg-black p-4 text-center text-sm font-medium tracking-[1px] text-white/30">
        © 2024 eComm, Inc. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
