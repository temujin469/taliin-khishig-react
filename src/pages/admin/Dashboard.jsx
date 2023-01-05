import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { MyButton } from "../../components/admin";
import { RiCustomerService2Line } from "react-icons/ri";
import { useAdminContext } from "../../contexts/AdminStateContext";
import { TbClipboardList } from "react-icons/tb";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineChartBar, HiOutlineNewspaper } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../api/users";
import { useQuery } from "react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import { getAllNews } from "../../api/news";
import { getAllProject } from "../../api/projects";
import { Spin } from "antd";

// const MyDropDown = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <Dropdown
//       style={{ border: "none", color: currentMode === "Dark" && "white" }}
//       menu={{
//         items,
//       }}
//       placement="bottom"
//     />
//   </div>
// );

const Dashboard = () => {
  const [page, setPage] = useState(1);

  const { currentColor, currentMode } = useAdminContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const { data: usersData } = useQuery(["all-users", page], () =>
    getAllUsers(page, currentUser.token)
  );

  const { data: newsData } = useQuery(["all-projects"], () => getAllNews());

  const { data: projectsData } = useQuery(["all-news"], () => getAllProject());

  const usersQuantity = usersData?.pagination?.total || <Spin />;
  const newsQuantity = newsData?.pagination?.total || <Spin />;
  const projectsQuantity = projectsData?.pagination?.total || <Spin />;

  const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: usersQuantity || <Spin />,
      title: "Хэрэглэгч",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
    {
      icon: <HiOutlineNewspaper />,
      amount: newsQuantity || <Spin />,
      title: "Нийт мэдээ",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
    },
    {
      icon: <TbClipboardList />,
      amount: projectsQuantity,
      title: "Нийт төсөл",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",

      pcColor: "green-600",
    },
    {
      icon: <RiCustomerService2Line />,
      amount: "39,354",
      title: "Үйлчилгээ",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-wrap ">
        <div className="sm:bg-main-bg bg-white shadow-md dark:text-gray-200 dark:bg-main-dark-bg h-44 rounded-xl w-full p-8 pt-9 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Нийт хандалт</p>
              <p className="text-2xl">99</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <HiOutlineChartBar />
            </button>
          </div>
          <div className="mt-6">
            <MyButton
              color="white"
              bgColor={currentColor}
              onPress={() => navigate("/")}
              text="Нүүр хуудас"
              borderRadius="8px"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 my-3 gap-3 flex-[1]">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="sm:bg-main-bg bg-white shadow-md h-44 dark:text-gray-200 dark:bg-main-dark-bg  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="sm:bg-main-bg bg-white shadow-md dark:text-gray-200 dark:bg-main-dark-bg p-4 rounded-2xl ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Бусад</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-10">
                <MyButton
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              {/* <Stacked currentMode={currentMode} width="320px" height="360px" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
