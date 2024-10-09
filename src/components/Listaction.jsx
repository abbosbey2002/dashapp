import Buttonsmall from "./Buttonsmall";
import Pagination from "./Pagination";
import PencilSimpleLinedark from "../assets/img/PencilSimpleLinedark.svg";
import FileArchive from "../assets/img/FileArchive.svg"

const Listaction = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded flex gap-1 text-[13px] transition-all duration-300 focus:outline-none bg-white border border-gray-300 text-gray-700 hover:bg-gray-300">
          <img src={PencilSimpleLinedark} alt="icon" />
          <span className="hidden md:inline-block">Редактировать</span>
        </button>

        <button className="px-4 py-2 rounded flex gap-1 text-[13px] transition-all duration-300 focus:outline-none bg-white border border-gray-300 text-gray-700 hover:bg-gray-300">
          <img src={FileArchive} alt="icon" />
          <span className="hidden md:inline-block">брать в архив</span>
        </button>
        {/* <Buttonsmall icon={PencilSimpleLinedark} text={"Редактировать"} /> */}
        {/* <Buttonsmall text="" /> */}
      </div>
      <Pagination />
    </div>
  );
};

export default Listaction;
