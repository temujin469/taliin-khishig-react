import {
  FcBarChart,
  FcConferenceCall,
  FcViewDetails,
  FcTodoList,
  FcPlus,
  FcNews,
} from "react-icons/fc";

export const links = [
  {
    title: "Хянах самбар",
    links: [
      {
        name: "Хураангуй",
        path: "dashboard",
        icon: <FcBarChart />,
      },
      {
        name: "Нийтэлсэн мэдээ",
        path: "news",
        icon: <FcTodoList />,
      },
      {
        name: "Оруулсан төсөлүүд",
        path: "projects",
        icon: <FcViewDetails />,
      },
      {
        name: "Мэдээ нийтлэх",
        path: "add-news",
        icon: <FcNews />,
      },
      {
        name: "Төсөл оруулах",
        path: "add-project",
        icon: <FcPlus />,
      },

      {
        name: "Админ бүртгэх",
        path: "add-admin",
        icon: <FcConferenceCall />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "Өнгө 1",
    color: "#ff7849",
  },
  {
    name: "Өнгө 2",
    color: "#03C9D7",
  },
  {
    name: "Өнгө 3",
    color: "#7352FF",
  },
  {
    name: "Өнгө 4",
    color: "#FF5C8E",
  },
  {
    name: "Өнгө 5",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "Өнгө 6",
  },
];
