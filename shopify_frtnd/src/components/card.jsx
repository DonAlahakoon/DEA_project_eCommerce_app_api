import { useState } from "react";

import HeaderComponent from "./sub/header.jsx";
import BodyComponent from "./sub/body.jsx";
import StarController from "./sub/star.jsx";
import ImageController from "./sub/img.jsx";

/**
 * Card Component which uses to create a basic card
 * Owner: Demesh Fernando
 * Last updated Date: 22 July 2024
 * @component
 * @param {object} props
 * @returns The card component with the provided attributes
 * @example
 * // Example usage:
 * const <Card
 *  name="Header of the card"
 *  desc="Any card body if available"
 *  src="If any image available url of the image"
 *  alt="Describe the image if the image is not available to display"
 *  price="Price need to be displayed"
 *  star="Star rating need to be displayed from 0 to 5" />;
 * return the card with the following added properties.
 */
export default function Card(props) {
  return (
    <div className="card">
      {props.src == "" ? null : (
        <div className="img">
          <ImageController
            src={props.src}
            alt={props.alt == "" ? "Image file" : props.alt}
          />
        </div>
      )}

      <div className="body">
        {props.name == "" ? null : (
          <div className="header">
            <HeaderComponent header={props.name} />
          </div>
        )}

        {props.desc == "" ? null : (
          <div className="description">
            <BodyComponent description={props.desc} />
          </div>
        )}

        {props.price == "" ? null : (
          <div className="price">
            <strong>
              $<span className="main-price">{props.price}</span>
            </strong>
          </div>
        )}

        {props.star == "-1" || props.star == null ? null : (
          <StarController star={props.star} />
        )}

        <button className="button-add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}
