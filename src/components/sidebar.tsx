import * as React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {useState} from "react";
import Links from "./links.tsx";
import Profile from "./profile.tsx";

interface Props {
    children: React.ReactNode;
}

export default function Sidebar({children}: Props) {

    const [isCollapsed, setCollapsed] = useState(false);

    return (
        <div className="flex">
            <div className={`flex transition-all duration-200 ease-out flex-col h-[100vh] <bg-red-500 border-r border-zinc-300 ${isCollapsed ? "w-16" : "w-72"}`}>
                <div id="header" className={`h-16 border-b ${isCollapsed ? "border-white" : "border-zinc-300"}`}>
                    <div className={`h-full flex mx-5 items-center gap-3 ${isCollapsed ? "justify-center" : "justify-between"}`}>
                        <div className={`w-40 h-8 bg-zinc-100 rounded-xl ${isCollapsed ? "hidden" : "block"}`}></div>
                        <button className={`hover:cursor-pointer transition-all duration-200 ${isCollapsed ? "rotate-180" : "rotate-0"}`} onClick={()=>setCollapsed(!isCollapsed)}>
                            <KeyboardDoubleArrowLeftIcon />
                        </button>
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between">
                    <Links isCollapsed={isCollapsed} />
                    <Profile />
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}