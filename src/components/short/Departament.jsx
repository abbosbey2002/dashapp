import { useEffect, useState } from "react";
import { getDepartments } from "../../services/api";

const Departament = ({ id }) => {
  const [departaments, setDepartaments] = useState([]);
  const [departament, setDepartament] = useState(null); // Dastlab null bo'lib qoladi

  const loadData = async () => {
    try {
      // API dan ma'lumotlarni olish
      let data = await getDepartments();
      setDepartaments(data); // Departamentlarni state ga yuklash

      // API'dan kelgan ma'lumotlardan ID bo'yicha birini topish
      let single = data.find(departament => departament.departament_id === id);
      setDepartament(single); // Topilgan departamentni state'ga o'rnatish
    } catch (error) {
      console.error("Departamentlarni yuklashda xatolik:", error);
    }
  };

  useEffect(() => {
    loadData();
    console.log(departament)
  }, [id]);

  return <span>{departament?.departament_name}</span>;
};

export default Departament;
