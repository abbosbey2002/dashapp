import React from "react";

function NotificationModal({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="absolute bottom-0 translate-y-full w-72  right-0 bg-white shadow-lg rounded-lg p-4">
      <p className="text-sm">Документ "Купить лаб. оборудование"</p>
      <p className="text-sm">ожидает согласования</p>
      <p className="text-gray-400 text-xs mt-2">21.03.2024. 17:49</p>
    </div>
  );
}

export default NotificationModal;
