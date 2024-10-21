// SelectInput.js
import React, { useEffect, useState } from "react";
import Label from "./Label";
import { getDepartments, getUserList } from "../services/api";

const UsersSelect = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {

    const [users, setUsers] = useState([]);

    const loadUsers = async() => {
        let users = await getUserList()
        setUsers(users);
    }

    useEffect(()=>{
        loadUsers();
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
        {users.map((option, index) => (
          <option key={option.user_id} value={option.user_id}>
            {option.first_name} {option.last_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UsersSelect;
