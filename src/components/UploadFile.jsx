const UploadFile = ({handleInputChange, value})=>{
    return (
    <div className="mb-4">
          <label className="block text-gray-500 font-medium mb-2">
            Приоритет документа
          </label>
          <select
            name="priority"
            value={value}
            onChange={handleInputChange}
            className="border bg-white border-gray-300 rounded-lg px-4 py-2 w-full"
          >
            <option value="">Выберите</option>
            <option value="Низкий">Низкий</option>
            <option value="Средний">Средний</option>
            <option value="Высокий">Высокий</option>
          </select>
        </div>
    )
}

export default UploadFile;