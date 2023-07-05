import logo from "../../assets/images/mainstack.svg";
import { sidebarItems, secoondSidebarItems } from "./items";
import { NavLink, useLocation } from "react-router-dom";
import dots from "../../assets/images/dots.svg";
import user from "../../assets/images/user.svg";

const Item = ({ name, path, replace, isActive, img }) => {
  return (
    <NavLink
      end
      to={path}
      replace={replace}
      className={() =>
        `flex justify-between items-center mb-[24px] ${
          isActive ? "text-[#FF5403]" : " text-[#4D5760]"
        }`
      }
    >
      <div className="flex gap-14">
        <div
          className={`${
            isActive
              ? " border-l-2 border-[#FF5403]"
              : "border-l-2 border-[#FFF]"
          }`}
        ></div>
        <div className="flex gap-3">
          <img src={img} alt={name} />
          <div className="cursor-pointer font-semibold text-[14px]">{name}</div>
        </div>
      </div>
    </NavLink>
  );
};

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="bg-[#FFF] h-full pt-[14px] pb-14 fixed flex flex-col justify-between">
      <div>
        <img
          src={logo}
          height="35"
          width="35"
          className=" mb-8 ml-[48px] mt-[30px] cursor-pointer"
        />

        <div className="mt-[40px] mb-[30px]">
          {sidebarItems.map((data, index) => {
            return (
              <Item
                key={index + 1}
                path={data.path}
                name={data.name}
                img={data.icon}
                isActive={pathname === data.path}
              />
            );
          })}
        </div>
        <div className="mt-[40px] mb-[30px]">
          {secoondSidebarItems.map((data, index) => (
            <div key={index * 7}>
              <div className="flex justify-center mb-4">{data.name}</div>
              {data.nested_paths.map((item, index) => (
                <Item
                  key={index + 1}
                  path={item.path}
                  name={item.name}
                  img={item.icon}
                  isActive={pathname === item.path}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pl-[60px] pr-4">
        <div className="flex items-center justify-center gap-3">
          <img height={15} width={15} src={user} alt="user" />
          <span className="text-[14px]">Blessing Daniels</span>
        </div>
        <div>
          <img src={dots} alt="dot" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
