import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="sticky top-0 z-10">
      <nav>
        <div className="z-10 h-[75px] border-b-[1px] border-gray-200 bg-gray-100 px-8">
          <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between">
            <div>
              <Link to="/">
                <h2 className="text-xl font-semibold tracking-[1px]">eComm</h2>
              </Link>
            </div>

            <div className="max-sm:hidden">
              <ul className="text-md flex gap-8 font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {isMobile && (
              <div className="sm:hidden">
                <ul className="text-md fixed right-0 top-[75px] z-10 flex h-[calc(100%-75px)] w-full flex-col border-[1px] border-gray-200 bg-white font-medium">
                  <li className="border-b-[1px] border-gray-300 p-4">Home</li>
                  <li className="border-b-[1px] border-gray-300 p-4">About</li>
                  <li className="border-b-[1px] border-gray-300 p-4">
                    Contact
                  </li>
                </ul>
              </div>
            )}

            <div className="flex gap-6">
              <Link to="/wishlist">
                <button>
                  <Heart size={22} strokeWidth={1.5} />
                </button>
              </Link>
              <Link to="/cart">
                <button>
                  <ShoppingCart size={22} strokeWidth={1.5} />
                </button>
              </Link>
              <button
                className="sm:hidden"
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? (
                  <X size={22} strokeWidth={1.5} />
                ) : (
                  <Menu size={22} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
