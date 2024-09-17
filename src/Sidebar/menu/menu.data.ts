import { Award, CheckSquare, Home, LucideIcon, Settings, Users } from "lucide-react"

export interface ImenuItem {
    icon:LucideIcon
    name:string
    link:string
}

export const MENU: ImenuItem[] = [
    {
        icon: Home,
        name: 'Home',
        link: '/'
    },
    {
        icon: Users,
        name: 'Friends',
        link: '/friends'
    },
    {
        icon: CheckSquare,
        name: 'Todo',
        link: '/todo'
    },
    {
        icon: Award,
        name: 'Achievments',
        link: '/achivments'
    },
    {
        icon: Settings,
        name: 'Settings',
        link: '/settings'
    },
]