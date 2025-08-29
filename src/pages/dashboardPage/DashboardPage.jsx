import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../components/cardComponent/CardComponent";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import MemberComponent from "../../components/memberComponent/MemberComponent";
import Button from "../../components/button/Button";
import TableFormatComponent from "../../components/tableFormatComponent/TableFormatComponent";
import {
  deadlinesData,
  members,
  tableHeaders,
  tasksData,
} from "../../constants/constants";

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="innerContent grid gap-[20px] w-full">
        <CardComponent />
        <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2">
          <div className="leftBox grid  gap-[20px]">
            <SearchComponent
              placeholder="Search members..."
              maxLength={50}
              disabled={false}
              className="w-full max-w-md"
            />

            <MemberComponent />
          </div>
          <div className="rightBox">
            {" "}
            {/* <MemberTableComponent /> */}
            <TableFormatComponent
              caption="Recently Accessed Members"
              rows={members}
              colorKey="color1"
              thead={tableHeaders.members}
            />
          </div>
        </div>
        <div className="btnBlock flex items-start  w-full">
          <Button
            label="Search"
            className="!mx-0"
            onClick={handleClick}
            variant="color1"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {/* <UpComingGrievanceTableComponent /> */}
          <TableFormatComponent
            caption="Upcoming Grievance Tasks"
            rows={tasksData}
            colorKey="color2"
            thead={tableHeaders.tasks}
          />
          <TableFormatComponent
            caption="Upcoming Dates & Deadlines"
            rows={deadlinesData}
            colorKey="color3"
            thead={tableHeaders.deadlines}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
