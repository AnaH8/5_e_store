"use client";

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter()
  const { cart, handleIncrementProduct } = useProducts()
  //challenge: calculate the total cost of all the products
  //hint: reduce method

  async function createCheckout() {
    try{
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL
      const lineItems = Object.keys(cart).map((item, itemIndex)=>{       //lineItems is an array of objects, each object contains the price_id and quantity of that product
        return {
          price: item,
          quantity: cart[item].quantity
        }
      })    

      const response = await fetch(baseURL+ '/api/checkout', {
        method: 'POST',
        headers: {
          'Content-type': 'appllication/json'
        },
        body: JSON.stringify({lineItems})
      })

      const data = await response.json()
      if (response.ok) {
        console.log(data)
        router.push(data.url)
      }
      
    } catch(err){
      console.log('Error creating checkout ', err.message)
    }
  }

  return (
    <section className="card-section">
      <h2>Your cart</h2>
      {Object.keys(cart).length === 0 && <p>You have no items in your cart!</p>}
      <div className="cart-container">
        {/* go over all the keys in the cart and create an array containing the item and its index
        to then create a div for each product in our cart */}
        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item]
          const itemQuantity = itemData?.quantity

          const imgName =
            itemData.name === "The Woof Notebook"
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
                  <input type="number" value={itemQuantity} placeholder="2" onChange={(e)=>{
                    const newValue = e.target.value
                    handleIncrementProduct(itemData.default_price, newValue, itemData, true)
                  }}/>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      <div className="checkout-container">
        <Link href='/'>
        <button>&larr; Continue shopping</button>
        </Link>
        <button onClick={createCheckout}>Checkout &rarr;</button>
      </div>
    </section>
  );
}
