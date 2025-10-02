import {
  HomeIcon,
  BriefcaseIcon,
  UserIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

const addresses = [
  {
    type: "Home",
    icon: HomeIcon,
    details:
      "Nishchhal verma, Hn.665 sec- 3b avas vikas colony bodla, Shamshan ghat, Sector III, Avas Vikas Colony, Lohamandi, Agra",
  },
  {
    type: "College",
    icon: HomeIcon,
    details:
      "Nishchhal verma, University Computer Centre, Dr Bhim Rao Ambedkar University Agra, Jawaharnagar Colony, Khandari, Agra",
  },
  {
    type: "Friend",
    icon: UserIcon,
    details:
      "Tripda Singh, Unimall, Lovely Professional University, Jalandhar Delhi GT Road, Phagwara, Kapurthala District, Punjab",
  },
];

const AddressCard = ({ icon: Icon, type, details }) => (
  <div className="flex items-start p-4 border bg-white rounded-lg shadow-sm">
    <div className="p-3 bg-gray-100 rounded-full mr-4">
      <Icon className="h-6 w-6 text-gray-600" />
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-gray-800">{type}</h3>
      <p className="text-gray-600 text-sm">{details}</p>
    </div>
    <button className="text-gray-500 hover:text-gray-800">
      <EllipsisVerticalIcon className="h-5 w-5" />
    </button>
  </div>
);

const MyAddresses = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">My addresses</h2>
    <button className="text-green-600 font-semibold mb-6">
      + Add new address
    </button>
    <div className="space-y-4">
      {addresses.map((addr, index) => (
        <AddressCard
          key={index}
          icon={addr.icon}
          type={addr.type}
          details={addr.details}
        />
      ))}
    </div>
  </div>
);

export default MyAddresses;
