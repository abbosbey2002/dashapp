import React, { useEffect, useState } from "react";
import CreateItem from "../components/CreateItem";
import FilterDocumentBar from "../components/FilterDocumentBar";
import Listaction from "../components/Listaction";
import Buttonsmall from "../components/Buttonsmall";
import Pagination from "../components/Pagination";
import PencilSimpleLinedark from "../assets/img/PencilSimpleLinedark.svg";
import remove from "../assets/img/remove.svg";
import { getUserList } from "../services/api";



const EmployeeList = () => {
  // Xodimlar uchun namunaviy ma'lumotlar

  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectAll, setSelectAll] = useState(false);




  const filteredEmployees = () =>{
    return employees.filter((employee) =>
      employee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  const handleSearchChange = async (e) => {
  
     setSearchTerm(e); // Qidiruv uchun kiritilgan matnni saqlash
    if (searchTerm !== '') {
      let new_list = await filteredEmployees();
      setEmployees(new_list);
    }else{
      fetchData(department);
    }
  };


  const fetchData = async (department) => {
    try {
      const data = await getUserList(department); // Serverdan xodimlar ro'yxatini olish
      setEmployees(data); // Olingan ma'lumotlarni state ga saqlash

    } catch (error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
    fetchData(department); // Ma'lumotlarni olish uchun fetchData chaqirish

  }, []);


  const [selectedEmployees, setSelectedEmployees] = useState([]);

  // Xodimni tanlash yoki tanlamaslikni boshqarish
  const toggleEmployeeSelection = (id) => {
    console.log(id)
    if (selectedEmployees.includes(id)) {
      setSelectedEmployees(
        selectedEmployees.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedEmployees([...selectedEmployees, id]);
    }
   
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      // Agar hammasi tanlangan bo'lsa, hammasini olib tashlaymiz
      setSelectedEmployees([]);
    } else {
      // Agar tanlanmagan bo'lsa, barcha xodimlarni qo'shamiz
      setSelectedEmployees(employees.map(employee => employee.user_id));
    }
    setSelectAll(!selectAll); // Hammasini belgilash state'ini yangilash
  };


  const deleteSelectedEmployees = () => {
    // Tanlangan xodimlarni employees ro'yxatidan olib tashlash
    const updatedEmployees = employees.filter(
      (employee) => !selectedEmployees.includes(employee.user_id)
    );
    
    setEmployees(updatedEmployees); // Yangilangan xodimlar ro'yxatini o'rnatish
    setSelectedEmployees([]); // Tanlangan xodimlar ro'yxatini tozalash
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center mb-4">
        <h2 className="font-semibold text-[#040F1F] text-2xl  md:text-3xl">
          Список сотрудников
        </h2>
        {/* <CreateItem text="Добавить сотрудника" to="Create" /> */}
      </div>

      <FilterDocumentBar setData={fetchData} onSearchChange={handleSearchChange} />
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Buttonsmall icon={remove} onClick={deleteSelectedEmployees} text={"Удалить"} />
        </div>
        <Pagination />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" className="h-5  w-5"  checked={selectAll} // Hammasini tanlash uchun
              onChange={toggleSelectAll}  />
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                ФИО
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Почта
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Должность
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.user_id}
                className="bg-white border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-3">
                  <input
                  className="h-5 w-5"
                    type="checkbox" 
                    checked={selectedEmployees.includes(employee.user_id)} // Agar tanlangan bo'lsa, checkbox belgilanadi
                    onChange={() => toggleEmployeeSelection(employee.user_id)}
                  />
                </td>
                <td className="p-3 text-sm text-gray-700 underline cursor-pointer">
                  {employee.first_name} {employee.last_name}
                </td>
                <td className="p-3 text-sm text-gray-700 hover:underline cursor-pointer">
                  {employee.email}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {employee.post}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
