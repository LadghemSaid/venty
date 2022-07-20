import i18next from "i18next";
import React from "react";

export default function Availbility({ name }) {
  return (
    <>
      <h2 className="text-3xl font-semibold">{name}</h2>
      <p>
        <span className="text-gray-500">
          <>{i18next.t("products.disponibility")}:</>
        </span>
        <span className="font-semibold ml-2">
          {i18next.t("products.in-stock").toLowerCase()}
        </span>
      </p>
    </>
  );
}
