import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaUtensils, FaCamera, FaMagic } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMagicWand } from "react-icons/bi";
import { IoCameraOutline } from "react-icons/io5";

const AddService = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Auditorium",
      icon: <TbBuildingBank size={32} />,
      path: "/provider/add-service/auditorium"
    },
    {
      name: "Catering / Food",
      icon: <GiKnifeFork size={32} />,
      path: "/provider/add-service/catering"
    },
    {
      name: "Stage Decoration",
      icon: <BiSolidMagicWand size={32} />,
      path: "/provider/add-service/stage-decoration"
    },
    {
      name: "Photography",
      icon: <IoCameraOutline size={32} />,
      path: "/provider/add-service/photography"
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-600">Choose a Service to Create</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
  key={index}
  onClick={() => navigate(service.path)}
  className="
    cursor-pointer
    bg-white
    rounded-2xl
    p-6
    flex flex-col items-center
    shadow-lg
    border border-gray-200
    transition-all duration-300
    hover:shadow-2xl
    hover:scale-[1.03]
    hover:bg-gradient-to-br
    hover:from-cyan-600
    hover:to-blue-400
    group
  "
>
  <div
    className="
      mb-4 
      text-blue-600 
      group-hover:text-white 
      transition-all 
      duration-300 
      bg-blue-100
      group-hover:bg-white/20
      p-4 
      rounded-full 
      shadow-md
    "
  >
    {service.icon}
  </div>

  <h3
    className="
      font-semibold 
      text-lg 
      text-gray-500 
      group-hover:text-white 
      transition-all duration-300
    "
  >
    {service.name}
  </h3>
</div>

        ))}
      </div>
    </div>
  );
};

export default AddService;
