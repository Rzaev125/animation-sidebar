import { useAtomValue } from "jotai";
import { ImenuItem } from "./menu.data";
import { isCollapsedAtom } from "../../store";

export function MenuItem({item}: {item: ImenuItem}) {
    const isCollapsed = useAtomValue(isCollapsedAtom)

    return (  
        <a href={item.link} target="_blank">
            <item.icon />
            {!isCollapsed && <span>{item.name}</span>}
        </a>
    );
}