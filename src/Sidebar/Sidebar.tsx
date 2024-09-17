import { useEffect, useRef, useState } from "react"
import { Menu } from "./menu/Menu"
import styles from './Sidebar.module.scss'
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useAtom } from "jotai";
import { isCollapsedAtom } from "../store";
import {m} from 'framer-motion';
import cn from 'clsx';

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] =  useAtom(isCollapsedAtom)

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <m.aside className={cn(styles.sidebar, {
            [styles.collapsed]: isCollapsed
        })} 
            animate={{width: isCollapsed ? 48:224}}
            transition={{type: 'spring', stiffness: 300,
            damping: 23}}
        >
            <button className={styles.toggle} onClick={toggleSidebar}>
                {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
            </button>
            <Menu />
        </m.aside>
    )
}