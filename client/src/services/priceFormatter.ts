const priceFormatter = (amount: number): string => {
  return amount.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });
};

export default priceFormatter;
