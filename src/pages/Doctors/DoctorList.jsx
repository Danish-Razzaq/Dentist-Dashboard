import React from "react";
import GenericTable from "../../components/common/Table";
import Table from "../../components/common/DynamicTable";
import {
  Delete,
  DeleteIcon,
  Edit2,
  LucideView,
  Trash2,
  ViewIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const DoctorList = () => {
  const columns = [
    { key: "id", header: "# ID" },
    { key: "docName", header: "Doctor Name" },
    { key: "designation", header: "Designation" },
    { key: "sun", header: "Sun" },
    { key: "mon", header: "Mon" },
    { key: "tue", header: "Tue" },
    { key: "wed", header: "Wed" },
    { key: "thu", header: "Thu" },
    { key: "fri", header: "Fri" },
    { key: "sat", header: "Sat" },

    {
      key: "action",
      header: "Action",
      render: (item) => (
        <div className="flex gap-2 justify-center">
          <div className="flex items-center justify-center space-x-2">
            <button>
              <Trash2 color="red" />
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <button>
              <Edit2 color="green" />
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Link to={`/doctordashboard/${item.id.replace("#", "")}`}>
              <LucideView color="blue" />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "#0006",
      docName: "Allan Stuart",
      designation: "Oncologist",
      sun: "NA",
      mon: "9AM-2PM",
      tue: "9AM-2PM",
      wed: "9AM-2PM",
      thu: "9AM-2PM",
      fri: "9AM-2PM",
      sat: "9AM-2PM",
    },
    {
      id: "#0007",
      docName: "Allan Stuart",
      designation: "Oncologist",
      sun: "NA",
      mon: "9AM-2PM",
      tue: "9AM-2PM",
      wed: "9AM-2PM",
      thu: "9AM-2PM",
      fri: "9AM-2PM",
      sat: "9AM-2PM",
    },
    {
      id: "#0008",
      docName: "Allan Stuart",
      designation: "Oncologist",
      sun: "NA",
      mon: "9AM-2PM",
      tue: "10AM-12PM",
      wed: "9AM-2PM",
      thu: "5AM-2PM",
      fri: "9AM-2PM",
      sat: "9AM-2PM",
    },
    {
      id: "#0009",
      docName: "Allan Stuart",
      designation: "Oncologist",
      sun: "NA",
      mon: "9AM-2PM",
      tue: "9AM-2PM",
      wed: "9AM-2PM",
      thu: "10AM-1PM",
      fri: "9AM-2PM",
      sat: "9AM-2PM",
    },
  ];

return (
  <div className="p-6 bg-white rounded-lg shadow-sm border border-primary/20 w-full  overflow-hidden">
    <div className="flex justify-between items-center flex-wrap gap-4">
      <h2 className="text-lg font-semibold text-gray-900">Doctor List</h2>
      <Link to={'/adddoctor'} className="btn-secondary ">
        Add  Doctor
      </Link>
    </div>

    <span className="flex justify-end items-center gap-2 my-4 flex-wrap">
      <h4>Search:</h4>
      <input
        type="text"
        placeholder="Search Doctors..."
        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
      />
    </span>

    {/* Table container scrolls horizontally if needed */}
    <div className="w-full overflow-x-auto">
      <div className=" ">
        <Table columns={columns} data={data} />
      </div>
    </div>
  </div>
);



};

export default DoctorList;
