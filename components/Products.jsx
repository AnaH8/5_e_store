"use client";

import { useState } from "react";
import Portal from "./Portal";
import { useProducts } from "@/context/ProductContext";

export default function Products(props) {
  const { planner, stickers } = props;

  const [portalImage, setPortalImage] = useState(null);

  const { handleIncrementProduct, cart } = useProducts();
  console.log(cart);

  if (!stickers.length || !planner) {
    return null;
  }

  return (
    <>
      {/* if portalImage exists, show Portal (conditional rendering)*/}
      {portalImage && (
        <Portal
          handleClosePortal={() => {
            setPortalImage(null);
          }}
        >
          <div className="portal-content">
            <img
              className="image-display"
              src={`med_res/${portalImage}.jpeg`}
              alt={`${portalImage}-high-res`}
            />
          </div>
        </Portal>
      )}
      <div className="section-container">
        <div className="section-header">
          <h2>Shop Our Selection</h2>
          <p>From organisation or accesorization</p>
        </div>
        <div className="planner-container">
          <div>
            <button
              onClick={() => {
                setPortalImage("planner");
              }}
              className="img-button"
            >
              <img src="low_res/planner.jpeg" alt="high-res-planner" />
            </button>
          </div>
          <div className="planner-info">
            <p className="text-large planner-header">
              The Wolf Notebook
            </p>
            <h3>
              <span>$</span>14.99
            </h3>
            <p>
            This planner will allow you to schedule in all the walks that your dog wants. 
            Maybe some snacks too. Or maybe you want to use for non-dog-related things, 
            like a grocery list... that consists of dog food and toys. - Sincerely, your dog 
            </p>
            <ul>
              <li>
                <strong>100 pages</strong> ready to be filled in with your dog's wants and needs.. or your own 
              </li>
              <li>
                <strong>Hardback covers:</strong> so if your dog decides to chew it, it'll have a hard snack  
              </li>
            </ul>
            <div className="purchase-btns">
              <button
                onClick={() => {
                  const plannerPriceId = planner.default_price;
                  handleIncrementProduct(plannerPriceId, 1, planner);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <h2>Or Collect Your Favourite stickers</h2>
          <p>Choose from our custom designed stickers</p>
        </div>

        <div className="sticker-container">
          {stickers.map((sticker, stickerIndex) => {
            const stickerName = sticker.name;
            const stickerImgUrl = sticker.name
              .replaceAll(" Sticker.png", "")
              .replaceAll(" ", "_");
            return (
              <div key={stickerIndex} className="sticker-card">
                <button
                  onClick={() => {
                    setPortalImage(stickerImgUrl);
                  }}
                  className="img-button"
                >
                  <img
                    src={`low_res/${stickerImgUrl}.jpeg`}
                    alt={`${stickerImgUrl}-low-res`}
                  />
                </button>
                <div className="sticker-info">
                  <p className="text-medium">{stickerName}</p>
                  <p>{sticker.description}</p>
                  <h4>
                    <span>$</span>
                    {sticker.prices[0].unit_amount / 100}
                  </h4>
                  <button
                    onClick={() => {
                      const stickerPriceId = sticker.default_price;
                      handleIncrementProduct(stickerPriceId, 1, sticker);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
