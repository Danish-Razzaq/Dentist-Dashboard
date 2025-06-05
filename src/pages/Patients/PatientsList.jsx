import { Search, List, Grid } from "lucide-react";
import {Link} from "react-router-dom"
import { patientsMokeData } from "../../utils/mokeData";


export default function PatientList() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-primary/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-xl ">My Patients List</h2>

        <div className="flex items-center gap-2">
          <input
            type="text"
        
            placeholder="Search"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-sm w-full sm:w-60"
          />
          <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20">
            <List size={18} />
          </button>
          <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20">
            <Grid size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-4 flex-wrap">
        <button className=" px-3 py-1 rounded-sm border border-gray-400 text-sm font-medium">
          Active Patients{" "}
          <span className="ml-1 text-xs font-semibold bg-primary p-1 rounded-md text-white">
            360
          </span>
        </button>
        <button className="  px-3 py-1 rounded-sm border border-gray-400  text-sm font-medium">
          Inactive Patients{" "}
          <span className="ml-1 text-xs font-semibold bg-red-400 p-1 rounded-md text-white">
            20
          </span>
        </button>
      </div>
      <Link to={'/addPatients'}  className="ml-auto flex  w-fit bg-primary p-1 px-2 rounded text-white  mb-3">
        Add Patient
      </Link>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patientsMokeData.map((p) => (
            <Link to={`/patient/${p.id}`}>
          <div
            key={p.id}
            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col gap-2"
          >
            <div className="flex items-start gap-4">
              <div>
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
              </div>
              <div className="text-sm">
                <p className="text-primary text-sm ">#{p.id}</p>
                <p className=" text-gray-800 py-1">{p.name}</p>
                <p className="text-gray-600">
                  Age: {p.age} | {p.gender} | {p.blood}
                </p>
              </div>
            </div>
            <hr className="border-gray-200 mt-2" />
            <div className="flex flex-col gap-1">
              <p className="text-primary font-semibold text-md mt-2">
                Diagnosis
              </p>
              <p className="text-md text-gray-600 line-clamp-2">
                {p.diagnosis}
              </p>
              <p className="text-md text-primary font-medium mt-1">
                Last Visit: <span className="text-gray-700">{p.lastVisit}</span>
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="px-3 py-1 rounded-md text-sm font-medium text-primary hover:bg-primary/10"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
