import {Home as HomeIcon, PlaySquare, Clock, ThumbsUp, ChevronDown, Youtube, MonitorPlay, RotateCcw, Zap, Flame, ShoppingBag, Music2, Clapperboard, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Settings, Flag, HelpCircle, MessageSquare} from "lucide-react"

export default function AsidebarBottom () {
    return (
        <ul className="bg-zinc-950/90 px-3 pt-1 w-[265px] h-screen overflow-y-auto">
            <a href="">
                <li className="bg-zinc-700/50 rounded-xl text-zinc-100 text-sm font-semibold flex items-center h-10 gap-7 px-3 hover:bg-zinc-700/75 hover:rounded-xl">
                    <HomeIcon size="22"/>
                    Início
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Zap size="22"/>
                    Shorts
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                <Youtube size="22"/>
                <a href="">Inscrições</a>
                </li>
            </a>
            <div className="border-t mt-3 mb-3 border-zinc-500"></div>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <MonitorPlay size="22"/>
                    Biblioteca
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <RotateCcw size="22"/>
                    Histórico
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <PlaySquare size="22"/>
                    Seus vídeos
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Clock size="22"/>
                    Assistir mais tarde
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <ThumbsUp size="22"/>
                    Vídeos marcados c..
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <ChevronDown size="22"/>
                    Mostrar mais
                </li>
            </a>
            <div className="border-t mt-3 mb-3 ml-[-10px] mr-[-8px] border-zinc-500"></div>
            <a href="">
                <li className="text-zinc-100 flex items-center gap-7 px-3 mb-1 font-medium">
                    Inscrições
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-6 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="rocketseat.png" width={25} height={25} alt="Profile" />
                    Rocketseat
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-6 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="lucas.png" width={25} height={25} alt="Profile" />
                    Lucas Montano
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-6 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="podpah.png" width={25} height={25} alt="Profile" />
                    Podpah
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-6 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="ludoviajante.png" width={25} height={25} alt="Profile" />
                    Ludoviajante
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-6 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="otsuka.png" width={25} height={25} alt="Profile" />
                    OtsukaXD
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-6 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="in.png" width={25} height={25} alt="Profile" />
                    Inutilismo
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-6 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="rounded-full" src="balela.png" width={25} height={25} alt="Profile" />
                    Balela
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-2 hover:bg-zinc-800/75 hover:rounded-xl">
                    <ChevronDown size="22"/>
                    Mostrar mais 455
                </li>
            </a>
            <div className="border-t mt-3 mb-3 ml-[-10px] mr-[-8px] border-zinc-500"></div>
            <li className="text-zinc-100 flex items-center gap-7 px-3 mb-1 font-[500]">
              Explorar
            </li>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Flame size="22"/>
                    Em alta
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <ShoppingBag size="22"/>
                    Shopping
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Music2 size="22"/>
                    Música
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Clapperboard size="22"/>
                    Filmes
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Radio size="22"/>
                    Ao vivo
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Gamepad2 size="22"/>
                    Jogos
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Newspaper size="22"/>
                    Notícias
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Trophy size="22"/>
                    Esportes
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Lightbulb size="22"/>
                    Aprender
                </li>
            </a>
            <div className="border-t mt-3 mb-3 ml-[-10px] mr-[-8px] border-zinc-500"></div>
            <li className="text-zinc-100 font-normal flex items-center gap-7 px-3 text-normal mb-2">
                <div className="">
                    Mais do YouTube
                </div>
            </li>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="" src="youtube-logo.png" width={22} height={22} alt="Youtube-Logo" />
                    YouTube Premium
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="" src="youtube-logo.png" width={22} height={22} alt="Youtube-Logo" />
                    YouTube Studio
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="" src="youtube-logo.png" width={22} height={22} alt="Youtube-Logo" />
                    YouTube Music
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <img className="" src="youtube-logo.png" width={22} height={22} alt="Youtube-Logo" />
                    YouTube Kids
                </li>
            </a>
            <div className="border-t mt-3 mb-3 ml-[-10px] mr-[-8px] border-zinc-500"></div>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Settings size="22"/>
                    Configurações
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <Flag size="22"/>
                    Histórico de denún...
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <HelpCircle size="22"/>
                    Ajuda
                </li>
            </a>
            <a href="">
                <li className="text-zinc-100 text-sm flex items-center h-10 gap-7 px-3 hover:bg-zinc-800/75 hover:rounded-xl">
                    <MessageSquare size="22"/>
                    Enviar feedback
                </li>
            </a>
            <div className="border-t mt-3 mb-3 ml-[-10px] mr-[-8px] border-zinc-500"></div>
            <div className="className= text-zinc-300 text-sm flex items-center h-10 gap-7 px-3">
                Sobre Imprensa
            </div>
          </ul>
    )
}