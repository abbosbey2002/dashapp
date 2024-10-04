import React, { useState } from 'react';

function FileUpload() {
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Yuklanish holatini boshqarish

  // Faylni tanlash funksiyasi
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setIsLoading(true); // Fayl tanlanganida yuklanish jarayoni boshlanadi

      // Fayl yuklanish animatsiyasini bir necha soniyaga (simulyatsiya) qo'yamiz
      setTimeout(() => {
        setIsLoading(false); // Yuklash tugadi deb belgilaymiz
      }, 2000);
    }
  };

  // Drag and drop uchun faylni olish funksiyasi
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      setIsLoading(true); // Fayl tushirilganida yuklanish jarayoni boshlanadi

      // Fayl yuklanish animatsiyasini simulyatsiya qilish uchun
      setTimeout(() => {
        setIsLoading(false); // Yuklash tugadi deb belgilaymiz
      }, 2000);
    }
  };

  // Drag va drop eventlarni boshqarish uchun funksiyalar
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-500 font-medium mb-2">Прикрепить файл</label>

      {/* Drag and Drop qismi */}
      <div
        id="fileupload"
        className={`border border-dashed border-gray-400 bg-gray-100 cursor-pointer rounded-lg h-16 flex justify-center items-center ${isLoading ? 'animate-pulse' : ''}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileinput').click()} // Fayl tanlash oynasini ochish
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            <p className="text-blue-500">Файл загружается...</p>
          </div>
        ) : (
          <p className="text-gray-500">{fileName ? `Выбран файл: ${fileName}` : 'Перетащите или выберите файл'}</p>
        )}
      </div>

      {/* Fayl inputi, hidden qilib qo'yiladi */}
      <input
        type="file"
        id="fileinput"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUpload;
