import React from "react";
import { Link } from "react-router";
import useCart from "../Hooks/useCart";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const { cart, removeCart, updateCart, totalPrice } = useCart();

  console.log(totalPrice().toFixed(2));

  const formatPrice = (num) => new Intl.NumberFormat("en-IN").format(num);

  const calculatedPrice = (item) => {
    const discountAmount = item.price * 0.05;
    const discountPrice = item.price - discountAmount;
    return discountPrice * item.quantity;
  };

  const subtotal = cart.reduce(
    (total, items) => total + calculatedPrice(items),
    0
  );

  const shipping = 99;
  const tax = subtotal * 0.1;
  const savings = cart.reduce((total, item) => {
    const originalPrice = item.price * item.quantity;
    const discountPrice = calculatedPrice(item);
    return total + (originalPrice - discountPrice);
  }, 0);

  const total = subtotal + shipping + tax;

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 mt-[40px]">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
        
        <div className=" mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className=" w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {cart.length === 0 ? (
              <p className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                No Products Found in Cart
              </p>
            ) : (
              cart.map((items, index) => {
                return (
                  <>
                    <div className=" space-y-6 my-4 " key={uuidv4()}>
                      <div className=" rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div className=" space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1">
                            <img
                              className="h-40 w-80 dark:hidden mx-auto"
                              src={items.productimage}
                            />
                          </a>
                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>

                          <div className=" flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                onClick={() =>
                                  updateCart(items.id, items.quantity - 1)
                                }
                              >
                                <svg
                                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <p className="px-2">{items.quantity}</p>
                              <button
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                onClick={() =>
                                  updateCart(items.id, items.quantity + 1)
                                }
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900 dark:text-white">
                                ₹{items.price}
                              </p>
                            </div>
                          </div>
                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a
                              href="#"
                              className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                            >
                              {items.producttitle}
                            </a>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => removeCart(items.id)}
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            )}
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ₹{formatPrice(subtotal.toFixed(2))}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -₹{formatPrice(savings.toFixed(2))}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ₹{formatPrice(shipping.toFixed(2))}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ₹{formatPrice(tax.toFixed(2))}
                    </dd>
                  </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    ₹{formatPrice(total.toFixed(2))}
                  </dd>
                </dl>
              </div>

              <Link
                to="/payment"
                className="flex w-full items-center justify-center rounded-lg bg-[#BDA000] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#BDA000] underline hover:no-underline"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
