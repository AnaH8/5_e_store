"use client";

import { useProducts } from "@/context/ProductContext";

export default function CartPage() {
  const { cart } = useProducts()
  //challenge: calculate the total cost of all the products
  //hint: reduce method

  return (
    <section className="card-section">
      <h2>Your cart</h2>
      <div className="cart-container">
        {/* go over all the keys in the cart and create an array containing the item and its index
        to then create a div for each product in our cart */}
        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item]
          const itemQuantity = itemData?.quantity

          const imgName =
            itemData.name === "Medieval Dragon Month Planner"
              ? "planner"
              : itemData.name
                  .replaceAll(" Sticker.png", "")
                  .replaceAll(" ", "_")
          const imgUrl = "low_res/" + imgName + ".jpeg"
          return (
            <div key={itemIndex} className="cart-item">
              <img src={imgUrl} alt={imgUrl + "-img"} />
              <div className="cart-item-info">
                <h3>{itemData.name}</h3>
                <p>{itemData.description.slice(0, 100)}{itemData.description.length > 100 ? '...' : ''}</p>
                <h4>${itemData.prices[0].unit_amount / 100}</h4>
                <div className="quantity-container">
                  <p><strong>Quantity</strong></p>
                  <input value={itemQuantity} placeholder="2" onChange={()=>{}}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="checkout-container">
        <button>&larr; Continue shopping</button>
        <button>Checkout &rarr;</button>
      </div>
    </section>
  );
}
