import {Navbar as Menubar, NavbarMenuToggle, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { useState } from "react";
import img from '../../../assets/logo/online-study.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = <>
  <NavbarItem>
          <Link className="text-gray-200 cursor-pointer" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-gray-200 cursor-pointer">
            Assignments
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-200 cursor-pointer">
          Create assignments
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-200 cursor-pointer">
          Pending assignments
          </Link>
        </NavbarItem>
        
  </>
  return (
    <div>
      <Menubar
      
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-neutral py-3 items-center"
    >
      <NavbarContent className=" justify-start text-gray-200" >
        
        <NavbarMenuToggle className="lg:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      
        
          
          <img src={img} alt="" className="lg:flex hidden w-40" />
        
      
      </NavbarContent>
      
          
          <img src={img} alt="" className="lg:hidden flex max-w-28" />
        
      


      <NavbarContent className="hidden lg:flex gap-4 text-lg font-semibold  justify-center" >
        
        {menuItems}
      
      </NavbarContent>

      <NavbarContent justify="end">
      <NavbarItem>
      <Link>
          <button className="btn lg:btn-md md:btn-md sm:btn-sm btn-xs btn-outline text-cyan-400	   border-cyan-400 hover:bg-cyan-400 hover:border-cyan-400 hover:text-white  rounded-none">Login</button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link>
          <button className="btn lg:btn-md md:btn-md sm:btn-sm btn-xs bg-cyan-400  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-white rounded-none">Register</button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-neutral  text-lg font-semibold py-6">
        {menuItems}
      </NavbarMenu>
    </Menubar>
    </div>
  );
};

export default Navbar;
