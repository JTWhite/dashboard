import { forwardRef } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";




// const SideBar = SideBarItem(({ itemName, pathname }) => {
export default function SidebarItem({ itemName, pathname, itemIcon}) {

    const router = useRouter();
    
    return (
        
        <div
            className={`pl-6 py-3 mx-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == pathname
                ? "bg-black text-white"
                : "text-gray-400 hover:text-white hover:bg-black"
            }`}
        >
            <div className="mr-2">
                {itemIcon}
            </div>
            <div>
            <p>{itemName}</p>
            </div>
        </div>
        
    )
}