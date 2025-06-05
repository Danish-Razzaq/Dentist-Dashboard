import { ChartColumnIncreasing } from "lucide-react";
import React from "react";

const Card = ({ cardDetails, index }) => {
  console.log("card data", cardDetails);
  return (
    <>
      <div
        className="border border-primary/20 p-3 flex flex-col  items-center gap-3 "
        key={index}
      >
        <span className="border-2 border-primary/70  rounded-full p-2">
          {/* {<cardDetails.card />} */}
          icon
        </span>
        <h2 className="font-bold text-xl">{cardDetails?.title}</h2>
        <span className="py-0.5 px-1 bg-primary text-white rounded">
          {cardDetails?.visitsInfo}
        </span>
        <div className="h-20 bg-primary/10 w-full text-center pt-7 font-extralight text-xl">
        Here show the graph....

        </div>

        <ul className="w-full mt-3">
          {cardDetails?.appointmenthistory?.map((appoitment, index) => (
            <li className=" flex justify-between w-full p-2 items-center border-2 border-gray-500 border-collapse">
              <div>{appoitment?.date}</div>
              <div>{appoitment?.recordedData}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const cardDetails = [
  {
    icon: ChartColumnIncreasing,
    title: "BP Levels",
    visitsInfo: "Recent five visits",
    appointmenthistory: [
      {
        date: "4/01/2025",
        recordedData: 120,
      },
      {
        date: "24/04/2024",
        recordedData: 140,
      },
      {
        date: "4/12/2026",
        recordedData: 140,
      },
    ],
  },
  {
    icon: ChartColumnIncreasing,
    title: "Sugar Levels",
    visitsInfo: "Recent five visits",
    appointmenthistory: [
      {
        date: "4/01/2025",
        recordedData: 120,
      },
      {
        date: "24/04/2024",
        recordedData: 140,
      },
      {
        date: "4/12/2026",
        recordedData: 140,
      },
    ],
  },
  {
    icon: ChartColumnIncreasing,
    title: "Heart Rate",
    visitsInfo: "Recent five visits",
    appointmenthistory: [
      {
        date: "4/01/2025",
        recordedData: 110,
      },
      {
        date: "24/04/2024",
        recordedData: 140,
      },
      {
        date: "4/12/2026",
        recordedData: 100,
      },
    ],
  },
  {
    icon: ChartColumnIncreasing,
    title: "Clolesterol",
    visitsInfo: "Recent five visits",
    appointmenthistory: [
      {
        date: "4/01/2025",
        recordedData: 180,
      },
      {
        date: "24/04/2024",
        recordedData: 140,
      },
      {
        date: "4/12/2026",
        recordedData: 140,
      },
    ],
  },
];

const CheckupCards = () => {
  return (
    <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1 gap-3 mt-4">
      {cardDetails?.map((entity, index) => (
        <Card cardDetails={entity} index={index} />
      ))}
    </div>
  );
};

export default CheckupCards;
