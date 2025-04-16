# Fundog

A full stack E-Commerce store with secure payments using Stripe

## What is Fundog

Fundog is an online store where you can buy dog related stationary, such as planners and funny stickers 

## Built with

- NextJS
- Stripe
- [FantaCSS](https://github.com/jamezmca/fantacss)

## How it looks

![Hero](./public/fundog_hero.JPG)
![Products](./public/fundog_planner.JPG)
![Products](./public/fundog_stickers.JPG)
![Footer](./public/fundog_footer.JPG)
![Modal](./public/fundog_mobile_modal.JPG)
![Items to cart](./public/fundog_cart.JPG)
![Cart](./public/fundog_cart2.JPG)
![Payment](./public/fundog_payment.JPG)

## What does the project have

- responsive design
- error and 404 pages
- modal overlay to show a high res image of the product
- integrated Stripe API (fetch products & create checkout session)
- global state to enable CRUD functionalities 
- logic to calculate the number of items in our cart from the global state




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
