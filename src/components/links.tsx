import { Link } from "react-router-dom";
import {ListTodoIcon, type LucideIcon, SearchIcon} from "lucide-react";

interface Props {
    isCollapsed: boolean;
}

export default function Links(props: Props) {
    // 1. Define the data structure
    const links: LinkObject[] = [
        { name: 'Todos', icon: ListTodoIcon, url: '/app/todos' },
        { name: 'Search', icon: SearchIcon, url: '/app/search' }
    ];

    return (
        <div className={`flex flex-col gap-1 my-5 ${props.isCollapsed ? "items-center" : ""}`}>
            {links.map((item, index) => (
                <LinkItem isCollapsed={props.isCollapsed} item={item} key={index} />
            ))}
        </div>
    );
}

interface LinkObject {
    name: string;
    icon: LucideIcon;
    url: string
}

function LinkItem({item, isCollapsed}: { item: LinkObject} & Props) {
    return (
        <Link to={item.url} className={`flex items-center py-1.5 gap-2 mx-2 hover:cursor-pointer hover:bg-zinc-100/50 rounded-xl ${isCollapsed ? "w-9 justify-center" : "px-3"}`}>
            <item.icon className="w-5 h-5" />
            <p className={isCollapsed ? "hidden" : "block"}>{item.name}</p>
        </Link>
    )
}