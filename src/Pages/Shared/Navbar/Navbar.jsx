import {
  Navbar as Menubar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
  User,
} from "@nextui-org/react";
import { useState } from "react";
import img from "../../../assets/logo/online-study.png";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../../Context/useAuthContext";

const Navbar = () => {
  const { user, logOut, setUser } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = (
    <>
      <NavbarItem>
        <Link to="/" className="text-gray-200 cursor-pointer">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/assignments" className="text-gray-200 cursor-pointer">
          Assignments
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="/contact" className="text-gray-200 cursor-pointer">
          Contact Us
        </Link>
      </NavbarItem>
      {user?.email ? (
        <>
          <NavbarItem>
            <Link
              to="/create-assignment"
              className="text-gray-200 cursor-pointer"
            >
              Create assignments
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/pending-assignments"
              className="text-gray-200 cursor-pointer"
            >
              Pending assignments
            </Link>
          </NavbarItem>
        </>
      ) : (
        <></>
      )}
    </>
  );

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut().then(() => {
      setUser({});
      navigate("/home");
    });
  };

  return (
    <div>
      <Menubar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-neutral py-3 items-center"
      >
        <NavbarContent className=" justify-start text-gray-200">
          <NavbarMenuToggle
            className="lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />

          <img src={img} alt="" className="lg:flex hidden w-40" />
        </NavbarContent>

        <img src={img} alt="" className="lg:hidden flex max-w-28" />

        <NavbarContent className="hidden lg:flex gap-4 text-lg font-semibold  justify-center ">
          {menuItems}
          
        </NavbarContent>

        {user?.email ? (
          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end" className="bg-white ">
              <DropdownTrigger>
                <User
                  as="button"
                  className="text-white text-xl"
                  name={user.displayName}
                  avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                  }}
                />
                
              </DropdownTrigger>

              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem>
                  <Link
                    to="/myProfile"
                    className="hover:text-red-500"
                  >
                    My Profile
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    to="/attempted-assignments"
                    className="hover:text-red-500"
                  >
                    My Attempted Assignments
                  </Link>
                </DropdownItem>

                <DropdownItem>
                  <Link onClick={handleLogOut} className="hover:text-red-500">
                    Log Out
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem>
              <Link to="/login">
                <button className="btn lg:btn-md md:btn-md sm:btn-sm btn-xs btn-outline text-cyan-400	   border-cyan-400 hover:bg-cyan-400 hover:border-cyan-400 hover:text-white  rounded-none">
                  Login
                </button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/registration">
                <button className="btn lg:btn-md md:btn-md sm:btn-sm btn-xs bg-cyan-400  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-white rounded-none">
                  Register
                </button>
              </Link>
            </NavbarItem>
          </NavbarContent>
        )}

        <NavbarMenu className="bg-neutral  text-lg font-semibold py-6">
          {menuItems}
        </NavbarMenu>
      </Menubar>
    </div>
  );
};

export default Navbar;

/* 
<div className="lg:flex relative items-center hidden">
            <span className="font-semibold">Theme Mode</span>
            <input
              onClick={handleTheme}
              type="checkbox"
              className="toggle theme-controller ml-6"
            />
          </div>

*/
