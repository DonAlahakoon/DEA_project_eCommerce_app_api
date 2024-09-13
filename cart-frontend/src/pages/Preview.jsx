import React from "react";
import PreviewCard from "../components/PreviewCard";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";

const Preview = (props) => {
  const { id } = useParams();
  const farmproductsId = Number(id);

  const productitem = data.productitem;

  const filteredItems = productitem.filter(
    (s) => s.retail_price_cents !== null && s.story_html !== null
  );

  const qtyUpdate = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  const items = qtyUpdate.filter((item) => item.id === farmproductsId);
  const farmproducts = items[0];

  return (
    <div className="">
      <PreviewCard farmproducts={farmproducts} />
    </div>
  );
};

export default Preview;
