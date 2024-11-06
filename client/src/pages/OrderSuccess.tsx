import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { useSearchParams } from "react-router-dom";
import API from "../api";
import Spinner from "../components/Spinner";

const OrderSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();

  const reference_id = searchParams.get("reference_id");
  const token = searchParams.get("token");

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const validateToken = async () => {
    try {
      const { data } = await API.get(
        `/products/validate-order-token?token=${token}`,
      );
      if (data.valid) {
        setIsValid(true);
      }
    } catch (error) {
      setIsValid(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <Wrapper>
      <section className="flex flex-col items-center md:my-7">
        {isLoading ? (
          <>
            <Spinner />
          </>
        ) : isValid ? (
          <div>
            <h2 className="mb-4 gap-2 text-center text-2xl font-semibold sm:text-3xl">
              Order Success
            </h2>
            <p className="text-md mb-4 text-center font-medium">
              Refrence: {reference_id}
            </p>
            <p className="text-md border-t-[1px] border-t-gray-300 pt-4 text-center font-medium">
              Thank you for shopping with us
            </p>
          </div>
        ) : (
          <div>
            <h2 className="mb-4 gap-2 text-center text-2xl font-semibold sm:text-3xl">
              Order Failed
            </h2>
            <p className="text-md border-t-[1px] border-t-gray-300 pt-4 text-center font-medium">
              An error occurred while verifying your token.
            </p>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default OrderSuccess;
