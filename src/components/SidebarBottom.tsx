import {Home as HomeIcon, PlaySquare, Clock, ThumbsUp, ChevronDown, Youtube, MonitorPlay, RotateCcw, Zap, Flame} from "lucide-react"

export default function AsidebarBottom () {
    return (
        <ul className="bg-zinc-950/90 px-3 pt-1 w-56">
            <a href="">
                <li className="bg-zinc-800/75 rounded-xl text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-700/75 hover:rounded-xl">
                    <HomeIcon size="22"/>
                    Início
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Zap size="22"/>
                    Shorts
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                <Youtube size="22"/>
                <a href="">Inscrições</a>
                </li>
            </a>
            <div className="border-t mt-3 mb-3 border-zinc-500"></div>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <MonitorPlay size="22"/>
                    Biblioteca
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <RotateCcw size="22"/>
                    Histórico
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <PlaySquare size="22"/>
                    Seus vídeos
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Clock size="22"/>
                    Assistir mais tarde
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <ThumbsUp size="22"/>
                    Vídeos marcados c..
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <ChevronDown size="22"/>
                    Mostrar mais
                </li>
            </a>
            <div className="border-t mt-3 mb-3 ml-[-10px] border-zinc-500"></div>
            <a href="">
                <li className="text-zinc-100 font-semibold flex items-center gap-7 px-3 text-lg mb-1">
                    Inscrições
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-6 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="eu.png" width={25} height={25} alt="Profile" />
                    Rocketseat
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-6 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="eu.png" width={25} height={25} alt="Profile" />
                    Lucas Montano
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-6 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="eu.png" width={25} height={25} alt="Profile" />
                    Podpah
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-6 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="eu.png" width={25} height={25} alt="Profile" />
                    Ludoviajante
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-6 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="eu.png" width={25} height={25} alt="Profile" />
                    OtsukaXD
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-6 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="eu.png" width={25} height={25} alt="Profile" />
                    Inutilismo
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-6 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="eu.png" width={25} height={25} alt="Profile" />
                    Balela
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <ChevronDown size="22"/>
                    Mostrar mais 455
                </li>
            </a>
            <div className="border mt-3 mb-3 ml-[-10px] border-zinc-500"></div>
            <li className="text-zinc-100 font-semibold flex items-center gap-7 px-3 text-lg mb-1">
              Explorar
            </li>
            <a href="">
                <li className="text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Flame size="22"/>
                    Em alta
                </li>
            </a>
          </ul>
    )
}