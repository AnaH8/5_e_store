"use client";

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";

export default function Cart() {
  const { cart } = useProducts();

  //go over every key in cart (basically, every price_id we have in the cart),
  //see how many of that entity we have,
  //in the end, return the sum
  const numProducts = Object.keys(cart).reduce((acc, curr, currIndex) => {
    const numProduct = cart[curr].quantity;
    const sum = acc + parseInt(numProduct);
    return sum;
  }, 0);

  return (
    <div>
      <Link className="unstyled-button" href={"/cart"}>
        <i className="fa-solid fa-bag-shopping"></i>
        {numProducts > 0 && (
          <div className="cart-num">
            <p>{numProducts}</p>
          </div>
        )}
      </Link>
    </div>
  );
}
