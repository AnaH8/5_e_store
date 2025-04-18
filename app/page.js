import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

//fetch data on the server side
export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  const response = await fetch(baseURL+ '/api/products')
  const products = await response.json()
  return products
}

export default async function Home() {

  const products = await getProducts()
  
  let stickers = []
  let planner = null

  for( let product of products) {
    if (product.name === "The Woof Notebook") {
      planner = product
      continue
    }
    stickers.push(product)
  }


  return (
    <>
      <ImageBanner/>
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
