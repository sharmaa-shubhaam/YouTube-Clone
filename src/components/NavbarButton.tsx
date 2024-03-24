import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
   Icon?: React.ElementType;
   profile?: string;
   title: string;
   to: string;
};

export default function NavbarButton({ Icon, title, to, profile }: Props): React.JSX.Element {
   const [active, setActive] = useState<boolean>(false);
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === to) setActive(true);
      else if (location.pathname + location.search === to) setActive(true);
      else setActive(false);
   }, [location, to]);

   return (
      <Link to={to}>
         <div
            className={`w-full  flex items-center py-2 px-3 space-x-6 rounded-lg ${
               active ? "bg-slate-200 hover:bg-slate-300" : "hover:bg-gray-100"
            }`}
         >
            {Icon && <Icon className="text-2xl" />}
            {profile && (
               <figure className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                  <img src={profile} alt="Subscriptions Profile Picture" className="w-full h-full object-cover " />
               </figure>
            )}
            <span className="text-sm capitalize flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{title}</span>
         </div>
      </Link>
   );
}
