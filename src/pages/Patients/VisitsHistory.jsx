import { DownloadCloud } from "lucide-react";
import React from "react";
import DoctorVisits from "./DoctorVisits";

const VisitsHistory = ({ singlePatient }) => {
  console.log("VisitsHistory component rendered", singlePatient);
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

  const handleCloseModel = () => {
    setShowModel(false);
  };

  return (
    <>
     <div className="bg-white border border-primary/30 rounded-lg lg:p-6 p-4 overflow-hidden">
  {/* Visits Section */}
  <DoctorVisits doctorLists={singlePatient} title="Visits" />

  {/* Prescription / Reports / Medicines */}
  <div className="w-full overflow-x-auto">
    <div className="min-w-full lg:w-full p-4">
      <h3 className="font-bold text-gray-700">Prescription</h3>
      <p className="text-gray-600">
        The prescriptions featured in the dataset exhibit illegible handwriting, commonly encountered in medical practices. These images serve as invaluable resources for developing and evaluating algorithms aimed at enhancing handwriting recognition technologies within the medical domain.
      </p>
      <hr className="bg-gray-400 my-1 h-[3px]" />

      <h3 className="font-bold text-gray-700">Reports</h3>
      <p className="text-gray-600">
        Weight: 48lbs | Blood Pressure: 120 | Sugar Levels Before: 90 | Sugar Levels After: 180
      </p>
      <hr className="bg-gray-400 my-1 h-[3px]" />

      <h3 className="font-bold text-gray-700">Medicines</h3>
      <p className="text-gray-600">For 10 Days</p>

      <div className="flex flex-wrap gap-6 pl-5 my-3">
        <ul className="list-disc  gap-5 flex flex-wrap">
          <li>
            <div>
              <h6 className="font-bold text-gray-800">Aricep Tablet</h6>
              <ul className="flex flex-wrap gap-2 text-gray-600">
                <li>Morning: 1</li>
                <li>Afternoon: 0</li>
                <li>Night: 1</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h6 className="font-bold text-gray-800">Cresemba Capsule</h6>
              <ul className="flex flex-wrap gap-2 text-gray-600">
                <li>Morning: 0</li>
                <li>Afternoon: 1</li>
                <li>Night: 1</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h6 className="font-bold text-gray-800">Justoza Tablet</h6>
              <ul className="flex flex-wrap gap-2 text-gray-600">
                <li>Morning: 1</li>
                <li>Afternoon: 1</li>
                <li>Night: 0</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
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

export default VisitsHistory;
