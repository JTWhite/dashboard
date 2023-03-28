import {ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import Link from 'next/link';
import navStyles from '../styles/Navbar.module.css';


export default function Navbar() {
    
    return (
        <>        
            <Sidebar style={{height: "100vh", position: "fixed"}}>
                <Menu>
                <Link href="/"><MenuItem>Dashboard</MenuItem></Link>
                <Link href="/about"><MenuItem>About</MenuItem></Link>
                </Menu>
            </Sidebar>
        </>
    )

}

