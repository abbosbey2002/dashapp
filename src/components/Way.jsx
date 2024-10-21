import { useEffect, useState } from "react";
import { getSingleTemplate } from "../services/api";
import Departament from "./short/Departament";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Way = ({ id }) => {
  const [template, setTemplate] = useState(null); // Dastlab null holatda boshlanadi
  const [loading, setLoading] = useState(true); // Ma'lumot yuklanishini boshqarish uchun

  const loadTemplate = async () => {
    try {
      setLoading(true); // Yuklanayotganini belgilash
      const s = await getSingleTemplate(id); // id parametrini dinamik foydalanish
      setTemplate(s);
      setLoading(false); // Yuklash tugagandan keyin to'xtatish
    } catch (error) {
      console.error("Template ma'lumotlarini olishda xatolik:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadTemplate();
    }
  }, [id]); // id o'zgarganda qayta yuklanishi uchun

  if (loading) {
    return (
      <SkeletonTheme baseColor="#e5e7eb" highlightColor="#9ca3af">
        Путь маршрута:
        <div className="flex gap-4 p-4 my-4 flex-row">
          {/* Bu yerda skeletonni 3 ta satr uchun ishlatamiz */}
          <Skeleton  height={24} borderRadius={7} width={100} />
          <Skeleton  height={24} width={100} />
        </div>
      </SkeletonTheme>
    ); // Agar yuklanayotgan bo'lsa
  }

  return (
    <td className="sm:border-2 p-4">
      <span className="text-gray-600">Путь маршрута:</span>
      <div className="flex flex-col flex-wrap sm:flex-row justify-start gap-2 ps-2 mt-1">
        {template && template.way && template.way.length > 0 ? (
          template.way.map((step, index) => (
            <div
              key={index}
              className="bg-gray-200 w-full sm:w-auto text-gray-700 rounded-2xl px-3 py-1 text-sm"
            >
              <span>
                {step?.step_route_id} {step?.waiting_answer_id}{" "}
                {step?.to_user_id}
              </span>
              <Departament id={step.to_departament_id} />
            </div>
          ))
        ) : (
          <span className="text-gray-500">Маршрут пока не создан.</span>
        )}
      </div>
    </td>
  );
};

export default Way;
