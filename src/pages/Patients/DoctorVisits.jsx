import { DownloadCloud } from "lucide-react";
import React from "react";

const DoctorVisits = ({ doctorLists, title }) => {
  console.log("VisitsHistory component rendered", doctorLists);
  const [showModel, setShowModel] = React.useState(false);
  const modelreport = React.useRef(null);

  const handleViewReports = () => {
    setShowModel(true);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelreport.current && !modelreport.current.contains(event.target)) {
        setShowModel(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modelreport]);
  return (
    <>
      <div className="bg-white overflow-hidden  ">
        <h1 className="text-2xl mb-4 ">{title}</h1>
        <div className="border border-gray-500 overflow-x-auto">
          <table className=" divide-y divide-gray-200 min-w-[760px]  w-full">
            <thead className="bg-primary ">
              <tr>
                <th className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Consulting Doctor
                </th>
                <th className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {" "}
                  Visit Date
                </th>
                <th className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {" "}
                  Department
                </th>
                <th className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {" "}
                  Fee Paid
                </th>
                <th className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {" "}
                  Lab Reports
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example row */}
              <tr>
                <td className="p-4 whitespace-nowrap">
                  <img
                    src={doctorLists?.avatar}
                    alt="doc"
                    className="w-10 h-10 rounded inline-block mr-1"
                  />
                  Dr. Hector
                </td>
                <td className="p-4 whitespace-nowrap">
                  {doctorLists?.lastVisit}
                </td>
                <td className="p-4 whitespace-nowrap">Orthopaedics</td>
                <td className="p-4 whitespace-nowrap">$200</td>
                <td className="p-4 whitespace-nowrap flex gap-1">
                  <button
                    className="btn-secondary"
                    onClick={handleViewReports}
                  >
                    View Reports
                  </button>
                  <button
                    title="Download report"
                    className="border border-primary p-2 text-white rounded-lg hover:bg-primary/20 transition"
                    // onClick={handleViewReports}
                  >
                    <DownloadCloud className="w-6 h-6 text-black" />
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {showModel && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modelreport}
            className="bg-white p-6 rounded-lg shadow-lg w-1/2"
          >
            <h2 className="text-xl font-semibold mb-4">Visit Report</h2>
            <hr className="border-gray-300 mb-4 " />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5].map((report, index) => (
                <div key={index} className="mb-4 border  ">
                  <h3 className="text-lg font-medium">Report {index + 1}</h3>
                  <img
                    src="https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/report.svg"
                    alt={`Report ${index + 1}`}
                    className="w-full h-auto rounded-md mb-2"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModel(false)}
              className="mt-4 px-4 py-2 bg-primary text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorVisits;
