import React from "react";

const Pharmacy = () => {
  return (
    <div div className="flex flex-col p-3 border border-primary/20 rounded-lg">
      <h1 className="font-bold  text-xl " style={{alignContent:'start'}}>Pharmacy</h1>
      <div className="flex flex-col gap-2.5 text-center items-center">
        <img src="/images/reports.svg" className="w-48" />

        <h1 className="text-xl">$ 980</h1>
        <p>Average Spending</p>
        <div>
          <span className="font-bold">+2-%</span> vs last month
        </div>
        <p>
          You can choose from over 1600 admin dashboard templates on Bootstrap
          Gallery.
        </p>
      </div>
    </div>
  );
};

export default Pharmacy;
