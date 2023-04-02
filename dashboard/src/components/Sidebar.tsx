import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, ChartBarIcon, UserIcon, CogIcon } from "@heroicons/react/24/solid";
import SidebarItem from "./sidebar/SidebarItem";

const SideBar = forwardRef(({ showNav }, ref) => {


    const links = [
        {
            header: true,
            title: 'Home',
            icon: <HomeIcon className="h-5 w-5" />,
            pathname: '/',
        },
        {
            header: true,
            title: 'About',
            icon: <UserIcon className="h-5 w-5" />,
            pathname: '/about',
        },
        {
            header: true,
            title: 'Dashboard',
            icon: <ChartBarIcon className="h-5 w-5" />,
            pathname: '/dashboard',
        },

     

        {
            header: false,
            title: 'Settings',
            icon: <CogIcon className="h-5 w-5" />,
            pathname: '/settings',
        },  
    ]



    return (
        <div ref={ref} className="fixed flex flex-col w-56 h-screen  bg-white shadow-sm" >

           
            <div className=" flex-grow-0 flex felx-col justify-center mt-6 mb-14">
                <picture>
                <img
                    className="w-24 h-auto"
                    src="logo.png"
                    alt="company logo"
                />
                </picture>
            </div>
            
            <div className=" flex-grow flex flex-col overflow-hidden hover:overflow-y-auto">

                {links.map(item => {
                    if(item.header) return (
                        <Link href={item.pathname}>
                            <SidebarItem itemName={item.title} pathname={item.pathname} itemIcon={item.icon}/>
                        </Link>    
                    )
                })}

            </div>

  
        
            <div className=" flex-grow-0 flex flex-col">
                {links.map(item => {
                    if(!item.header) return (
                        <Link href={item.pathname}>
                            <SidebarItem itemName={item.title} pathname={item.pathname} itemIcon={item.icon}/>
                        </Link>    
                    )
                })}
            </div>
        </div>
    );
    });

SideBar.displayName = "SideBar";

export default SideBar;