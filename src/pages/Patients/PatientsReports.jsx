import React from "react";
import GenericTable from "../../components/common/Table";
import Table from "../../components/common/DynamicTable";
import {
  Delete,
  DeleteIcon,
  DownloadCloud,
  Edit2,
  File,
  FileSpreadsheet,
  LucideView,
  Trash2,
  ViewIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const PatientsReports = () => {
  const columns = [
    { key: "id", header: "# ID" },
    {
      key: "file",
      header: "File",
      render: (item) =><div className="bg-primary p-1 py-2 flex justify-center items-center rounded"> <FileSpreadsheet  className="text-white" /></div>,
    },
    { key: "reportslink", header: "Reports Link" },
    { key: "date", header: "Date" },

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
              <DownloadCloud />
            </button>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      //   file:
      reportslink: "Reports 1 clinical documentation",
      date: "May-28, 2024",
    },
    {
      id: "2",
      //   file:
      reportslink: "Reports 2 random files documentation",
      date: "May-28, 2024",
    },
    {
      id: "3",
      //   file:
      reportslink: "Reports 3 glucose level complete report",
      date: "May-28, 2024",
    },
  ];

  return (
    <div className=" w-full  overflow-hidden">
      <h1 className="text-2xl mb-4 ">Reports</h1>
      {/* Table container scrolls horizontally if needed */}
      <div className="w-full overflow-x-auto">
        <div className=" ">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default PatientsReports;
