import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const PageNotFound: React.FC = () => {
  return (
    <Wrapper>
      <div className="flex h-[300px] flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold">Page Not Found</h1>
        <p className="text-md mt-2 text-center font-medium text-gray-600">
          Oops! The page you're looking for isn't available.
        </p>
        <Link to="/">
          <button className="mt-4 flex bg-black px-8 py-3 font-medium text-white transition-all hover:opacity-75">
            Go To Home
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default PageNotFound;
