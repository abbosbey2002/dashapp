import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import ArrowCircleLeft from "../assets/img/ArrowCircleLeft.svg";
import trash from "../assets/img/Trash.svg";
import PlusSquare from "../assets/img/PlusSquare.svg";
import PlusSquareblue from "../assets/img/PlusSquareblue.png";
import VectorThreebluesmall from "../assets/img/VectorThreebluesmall.svg";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput"; // SelectInputni import qilamiz
import Buttoncom from "../components/Buttoncom";
import DepartamentsSelect from "../components/DepartamentsSelect";
import UsersSelect from "../components/UserSelect";
import { createTemplate } from "../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateRoute() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
  });


  useEffect(()=>{
    console.log('mashrute', formData);
  
  }, [])

  const [template, setTemplate] = useState(false)

  const [routes, setRoutes] = useState([
    { to_user_id: null, to_departament_id: "", waiting_answer_id: "" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRouteChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRoutes = routes.map((route, i) =>
      i === index ? { ...route, [name]: value } : route
    );
    setRoutes(updatedRoutes);
  };

  const addRoute = () => {
    setRoutes([
      ...routes,
      { to_user_id: "", to_departament_id: "", waiting_answer_id: "" },
    ]);

    console.log(routes);
  };

  const choosethemplate = () =>{
    setTemplate( !template )
  }

  const clothethemplate = () =>{
    setTemplate( false )
  }

  const removeRoute = (index) => {
    const updatedRoutes = routes.filter((_, i) => i !== index);
    setRoutes(updatedRoutes);
  };

  const handleSubmit = async () => {
    let res =await createTemplate(formData, routes);
    console.log('hi tere', res.error)
    toast(res.error);
    if(res.status == 'ok'){
      navigate('/directory');
    }else{
    }
  };

  function add(){
    console.log('add')
  }

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-6 text-[#040F1F]">
        <NavLink to="/directory">
          <img src={ArrowCircleLeft} alt="" />
        </NavLink>
        Создание маршрута
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Название маршрута и Создаёт маршрут */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextInput
            label="Название маршрута"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Введите"
          />
          <TextInput
            label="Создаёт маршрут"
            name="creator"
            value={formData.creator}
            onChange={handleInputChange}
            placeholder="Введите"
          />
        </div>

        {/* Маршрут items */}
        {routes.map((route, index) => (
          <div key={index} className="">
            {/* Должность и Подразделение */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 mb-4">
              <UsersSelect
                label="Должность"
                name="to_user_id"
                value={route.to_user_id}
                onChange={() => add()}
                placeholder="Выберите список"
              />

              <DepartamentsSelect
                label="Подразделение"
                name="to_departament_id"
                value={route.to_departament_id}
                onChange={(e) => handleRouteChange(index, e)}
                placeholder="Выберите список"
              />
            </div>

            {/* Согласовывает маршрут */}
            <DepartamentsSelect
              label="Согласовывает маршрут"
              name="waiting_answer_id"
              value={route.waiting_answer_id}
              onChange={(e) => handleRouteChange(index, e)}
              placeholder="Выберите список"
            />
          </div>
        ))}

        {/* Добавить маршрут button */}
        <div className="flex items-center space-x-4 my-3">
          <button
            type="button"
            className="text-blue-600 flex items-center space-x-1"
            onClick={addRoute}
          >
            <img src={PlusSquareblue} alt="Plus Icon" />{" "}
            <span>Добавить</span>
          </button>

          <button
            type="button"
            className="text-blue-600 flex relative items-center space-x-1"
            onClick={choosethemplate}
          >
            <img src={VectorThreebluesmall} alt="Icon" />{" "}
            <span>Выбрать шаблон</span>
            {template && <div className="absolute border rounded-md shadow-md -translate-x-9 sm:-translate-x-0 p-2 w-64 bg-white text-base text-[#233357] font-medium -bottom-2 translate-y-full">
                <div onClick={clothethemplate} className="rounded-md hover:bg-blue-100 px-3 transition-all transition-transform py-2">Шаблон 1</div>
                <div onClick={clothethemplate} className="rounded-md hover:bg-blue-100 px-3 transition-all transition-transform py-2">Шаблон 1</div>
                <div onClick={clothethemplate} className="rounded-md hover:bg-blue-100 px-3 transition-all transition-transform py-2">Шаблон 1</div>
            </div>}
          </button>
          
        </div>


        <div className="flex flex-col md:flex-row-reverse items-stretch gap-3 space-y-2 md:space-y-0 md:space-x-2">
          <Buttoncom text="Создать" onClick={handleSubmit} icon={PlusSquare} variant="primary" />
          <Buttoncom text="Remove" icon={trash} variant="borderblue" />
        </div>
      </form>
    </div>
  );
}

export default CreateRoute;
