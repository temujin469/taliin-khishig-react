import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/mn";
import { BsCalendarDate } from "react-icons/bs";
import * as FiIcons from "react-icons/fi";

moment.locale("mn");

export default function NewsCard({ news }) {
  return (
    <div className="w-full mb-5">
      <div className="w-full overflow-hidden h-[210px] rounded-xl">
        <img
          alt="Post thumbnail"
          src={news.photo}
          className="hover:scale-[1.1] transition-all w-full h-full object-cover cursor-pointer mb-2"
        />
      </div>
      <p className="text-[13px] mt-2 mb-1 text-gray flex items-center gap-1">
        <BsCalendarDate />
        {moment(news.createdAt).format("ll")}
      </p>
      <h3 className=" md:h-[50px] mb-2 overflow-hidden">
        {news.title.length > 100 ? `${news.title.slice(0, 64)}...` : news.title}
      </h3>
      <Link to={`/news/${news.slug}`} className="flex items-end">
        <p className="text-primary  hover:pr-2 duration-200">See more</p>
        <FiIcons.FiChevronRight className="text-[#FE7200] text-[23px] pl-1" />
      </Link>
    </div>
  );
}
