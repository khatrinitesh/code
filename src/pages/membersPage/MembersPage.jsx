import {
  FaCaretLeft,
  FaCaretRight,
  FaCloudDownloadAlt,
  FaPlus,
  FaPrint,
  FaRegUser,
} from "react-icons/fa";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import MembersTable from "./components/membersTable";

const MembersPage = () => {
  return (
    <div className="membersPage ">
      <SectionTitleComponent>
        <FaRegUser className={` text-[var(--color6)]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          MEMBERS LIST
        </h2>
      </SectionTitleComponent>
      <div className="innerContent grid gap-[10px] w-full p-[20px]">
        <div className="toolbar flex justify-between gap-[10px] items-center">
          <SearchComponent
            className="md:max-w-[30%] rounded-full"
            placeholder="Quick Member Search"
          />
          <div className="optionBlock flex gap-[10px]">
            <FaPlus className="text-[var(--color5)]" />
            <FaCloudDownloadAlt className="text-[var(--color5)]" />
            <FaPrint className="text-[var(--color5)]" />
          </div>
        </div>
        <MembersTable />
        <div className="btnBlock">
          <button className="cursor-pointer">
            <FaCaretLeft className="text-[var(--color5)]" />
          </button>
          <button className="cursor-pointer">
            <FaCaretRight className="text-[var(--color5)]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
