// SelectInput.js
import React, { useEffect, useState } from "react";
import Label from "./Label";
import { getDepartments } from "../services/api";

const DepartamentsSelect = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {

    const [departaments, setDepartaments] = useState([]);

    const loadDeportaments = async() => {
        let deportaments = await getDepartments()
        setDepartaments(deportaments);
    }

    useEffect(()=>{
        loadDeportaments();
        console.log(departaments)
    },[])


  return (
    <div className="md-4">
      <Label text={label} />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border bg-white border-gray-300 text-[#0C1116] rounded-lg text-sm max-h-10 outline-none p-3 w-full"
      >
        <option value="">{placeholder}</option>
        {departaments.map((option, index) => (
          <option key={option.departament_id} value={option.departament_id}>
            {option.departament_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartamentsSelect;
