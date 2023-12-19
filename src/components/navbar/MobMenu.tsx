// mobile menu which will be hidden for the > md screen
"use client";
import Link from "next/link";
import { useState } from "react";
import {
 
  Book,
  FolderOpenDot,
  Home,
  Menu,
 
  Tally3,
} from "lucide-react";
import { Button } from "../ui/button";


const navItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Projects", url: "/Projects" },
  { id: 3, title: "About", url: "/About" },
  
  
];



const MobMenu = () => {
  const [isMobMenuOpen, setMobMenuOpen] = useState(false);

  return (
    <div>
      {!isMobMenuOpen ? (
        <Menu onClick={() => setMobMenuOpen(true)} />
      ) : (
        <Tally3 onClick={() => setMobMenuOpen(false)} />
      )}

      <div
        className={`fixed inset-y-0 left-0 py-10 bg-gray-900  backdrop-blur-md bg-opacity-75  flex flex-col gap-4 items-center w-3/5 z-50 transform transition-transform ease-in-out duration-500 ${
          isMobMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <Link
            className="py-1 text-slate-100 text-lg font-medium  "
            href={item.url}
            key={item.id}
            onClick={() => setMobMenuOpen(false)}
          >
            <div className="flex flex-row  justify-center items-center space-x-5">
            {item.title === "Home" && <Home className='glow'/>}
                {item.title === "About" && <Book className='glow' />}
                {item.title === "Projects" && <FolderOpenDot className='glow'/> }
              <Button
                className="text-slate-100 text-xl font-medium "
                variant="ghost"
              >
             {item.title}
              </Button>
            </div>
          </Link>
        ))}

      {/* if not user render the sign in button and if user render the sign out */}
        <Link href={"/"}>
          <Button
            className="text-slate-100 text-xl font-medium "
            variant="ghost"
          >
            
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobMenu;