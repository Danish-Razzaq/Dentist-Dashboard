import { Star, User } from "lucide-react";

const PatientReviws = () => {
  const appointments = [
    {
      id: "P0039",
      name: "Tonia Woodard",
      avatar: "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient2.png",
      review:
        "I had a very good experience here. I got a best psychiatrist and a therapist. They analysed my case very deeply and there medicines helped me a lot.",
      star: 5,
    },
    {
      id: "P0063",
      name: "Roseann Kane",
      avatar: "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient1.png",
      review:
        "I had a very good experience here. I got a best psychiatrist and a therapist. They analysed my case very deeply and there medicines helped me a lot.",
      urgent: true,
      star: 4,
    },
    {
      id: "P0012",
      name: "Lillie Mccall",
      avatar: "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient2.png",
      review:
        "I had a very good experience here. I got a best psychiatrist and a therapist. They analysed my case very deeply and there medicines helped me a lot.",
      urgent: true,
      star: 3,
    },
    {
      id: "P0045",
      name: "Dale Mccullough",
      avatar: "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient1.png",
      review:
        "I had a very good experience here. I got a best psychiatrist and a therapist. They analysed my case very deeply and there medicines helped me a lot.",
      urgent: true,
      star: 3,
    },
    {
      id: "P0028",
      name: "Michele Mcclain",
      avatar: "https://www.bootstrapget.com/demos/dental-care-admin-template/assets/images/patient5.png",
      review:
        "I had a very good experience here. I got a best psychiatrist and a therapist. They analysed my case very deeply and there medicines helped me a lot.",
      urgent: true,
      star: 3,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 border-primary/20">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Patient Reviews</h2>
      <div className="space-y-4 overflow-y-scroll h-96">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex  space-x-4 border border-primary/20 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <img src={appointment.avatar} className="w-16 h-16 rounded" />
            {/* <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div> */}
            <div className="flex-1 space-y-2">
              <h3 className="font-medium text-gray-900">{appointment.name}</h3>
              <p className="text-sm text-gray-700 font-medium">
                {appointment?.review}
              </p>
              {/* review stars */}
              <div className="flex ">

              {[1,2,3,4,5].map((star)=>(
                  <Star className={`text-yellow-900  ${ appointment?.star ?  'fill-yellow-800' : 'fill-gray-200'} `} />
                ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientReviws;
