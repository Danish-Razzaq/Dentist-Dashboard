import React from "react";
import GenericTable from "../../components/common/Table";

const PatientVisits = () => {
  const columns = [
    { key: "id", label: "#" },
    { key: "patientName", label: "Patient Name", type: "avatar" },
    { key: "age", label: "Age" },
    { key: "time", label: "TIme" },
    { key: "diagnosis", label: "Diagnosis" },
    { key: "type", label: "Type", type: "status" },
    { key: "actions", label: "Actions", type: "actions" },
  ];

  const sampleData = [
    {
      id: "005",
      patientName: "Roseann Kane",
      age: 58,
      time: "30/03/1989",
      diagnosis: "Implant",
      type: "General",
    },
    {
      id: "004",
      patientName: "Nicole Sellers",
      age: 29,
      time: "28/09/1996",
      diagnosis: "Dentures",
      type: "Consulting",
    },
    {
      id: "002",
      patientName: "Adam Bradley",
      age: 36,
      time: "24/09/2002",
      diagnosis: "Periodontics",
      type: "Consulting",
    },
    {
      id: "003",
      patientName: "Mayra Hatfield",
      age: 82,
      time: "23/02/2007",
      diagnosis: "Root Canal",
      type: "General",
    },
    {
      id: "001",
      patientName: "Willian Mathews",
      age: 21,
      time: "20/06/2010",
      diagnosis: "Implant",
      type: "Consulting",
    },
  ];

  const handleAction = (action, item) => {
    console.log(`${action} action for:`, item);
  };

  return (
    <div className="bg-gray-100 mt-6 w-full">
      <div className="inline-block min-w-full w-[400px] overflow-x-auto">
        <GenericTable
          columns={columns}
          data={sampleData}
          title="Patient Management"
          currentPage={1}
          totalPages={1}
          onAction={handleAction}
        />
      </div>
    </div>
  );
};

export default PatientVisits;
