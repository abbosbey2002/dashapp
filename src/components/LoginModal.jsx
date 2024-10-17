import React from "react";

const LoginModal = ({ onSubmit, error, setLogin, setPassword, login, password }) => {

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white p-6 w-[80%] sm:w-80 md:w-[420px] rounded shadow-md">
        <h2 className="text-[25px] text-center font-medium text-[#040F1F] mb-4">
          Авторизация
        </h2>
        {error && <p className="text-red-600 text-center text-sm font-medium">{error}</p>}
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-[13px] font-bold text-[#556476]" htmlFor="login">
            Логин
          </label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={handleLoginChange}
            placeholder="Логин"
            className="border font-medium rounded text-sm text-[#0C1116] p-3 w-full"
          />
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="text-[13px] font-bold text-[#556476]" htmlFor="password">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Пароль"
            className="border rounded font-medium text-sm text-[#0C1116] p-3 w-full"
          />
        </div>

        <button
          className="bg-blue-500 w-full text-[15px] text-white px-4 py-2 rounded"
          onClick={() => onSubmit(login, password)} // Login va parolni onSubmit funksiyasiga uzatamiz
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
