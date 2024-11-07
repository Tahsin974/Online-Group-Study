import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = (
    <>
      <Link className="text-gray-200 cursor-pointer">Home</Link>
      <Link className="text-gray-200 cursor-pointer">Assignments</Link>
    </>
  );
  return (
    <div className="min-w-screen">
      <footer className="footer  footer-center bg-neutral text-neutral-content items-center border-neutral p-4">
        <aside className="grid-flow-col items-center">
          
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Online Study</p>
        </aside>
        
      </footer>
    </div>
  );
};

export default Footer;
