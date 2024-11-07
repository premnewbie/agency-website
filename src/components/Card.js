import React from "react";

export default function Card({heading}) {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-5">
      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <h3 className="font-bold text-2xl text-center">{heading}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          debitis! Commodi soluta odio reiciendis minus, recusandae excepturi
          facilis itaque iste dolor impedit tempore. Earum sunt assumenda sint,
          illum quisquam eos.
        </p>
      </div>
    </div>
  );
}
