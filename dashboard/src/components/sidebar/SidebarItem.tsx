import { forwardRef } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";




// const SideBar = SideBarItem(({ itemName, pathname }) => {
export default function SidebarItem({ itemName, pathname, itemIcon}) {

    const router = useRouter();
    
    return (
        
        <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == pathname
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
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