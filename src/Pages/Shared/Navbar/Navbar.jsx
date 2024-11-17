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
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";


const Navbar = () => {
  const { user, logOut, setUser } = useFirebase();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link className="text-gray-200 cursor-pointer">
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
    e.preventDefault()
    logOut().then(() => {
      setUser();
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
                {/* <Avatar
                  as="button"
                  className="transition-transform"
                  size="lg"
                  src={userImg}
                /> */}
              </DropdownTrigger>
              
              <DropdownMenu aria-label="Profile Actions" variant="flat">
              
                <DropdownItem>My Attempted Assignments</DropdownItem>

                <DropdownItem>
                  <Link onClick={handleLogOut} className="hover:text-red-500">Log Out</Link>
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
<NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

*/
