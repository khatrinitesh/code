import { FaExclamationCircle } from "react-icons/fa";
import MatterDetailsTabbed from "./components/matterDetailsTabbed/MatterDetailsTabbed";
import SectionTitleComponent from "../../components/sectionTitleComponent/SectionTitleComponent";

const MatterDetailsPage = () => {
  return (
    <div className="matterDetailsPage ">
      <SectionTitleComponent>
        <FaExclamationCircle className={` text-[var(--color6)]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          GRIEVANCES <span className="text-white">Matter Details - Case</span>
        </h2>
      </SectionTitleComponent>
      <div className="grid p-[20px] ">
        <MatterDetailsTabbed />
      </div>
    </div>
  );
};

export default MatterDetailsPage;
