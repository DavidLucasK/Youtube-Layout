import { Menu, Video, Bell, Keyboard, Search, Mic, Home as HomeIcon, PlaySquare, Clock, ThumbsUp, ChevronDown, Youtube, MonitorPlay, RotateCcw, Zap, Flame} from "lucide-react"
import SidebarBottom from '@/components/SidebarBottom'
import AsideMenu from "@/components/AsideMenu"

export default function Home() {
  return (
      <div className="">
        <div className="">
          <div className="flex top">
            <AsideMenu />
          <div className='text-zinc-100 flex'>
            <div className="bg-zinc-950 flex items-center h-16 w-[1470px]">
              <div className="bg-zinc-950 flex items-center w-[1018px] px-[410px]">
                <div className="">
                  {/* Alterar aqui para tamanho da SearchBar | Actual Size: w-[34rem] */}
                  <input className="bg-zinc-900/50 rounded-full border border-zinc-800 h-10 mt-[-.5rem] w-[36rem] px-4 font-normal" type="text" id="Pesquisar" name="Pesquisar" placeholder="Pesquisar"/>
                </div>
                <div className="bg-zinc-900 h-10 mt-[-.5rem] flex items-center border-t border-b border-zinc-800 ml-[-20px]">
                  <a href="">
                    <Keyboard size="20" className="ml-[-40px]"/>
                  </a>
                </div>
                <div className="bg-zinc-900/90 w-16 h-10 mt-[-.5rem] flex items-center px-3 border-t border-b rounded-r-3xl border-zinc-800">
                  <a href="">
                    <Search size="20"/>
                  </a>
                </div>
              </div>
              <div className="rounded-full bg-zinc-800/75 w-[40px] h-[40px] flex items-center px-[7px] mt-[-7px] ml-[8px] hover:bg-zinc-700/75">
                <a href="">
                  <Mic size="25"/>
                </a>
              </div>
            </div>
            <div className="bg-yellow-500/90 flex px-4 items-center gap-6 h-16 w-56">
              <Video size="25"/>
              <Bell size="25"/>
              <img className="rounded-full" src="eu.png" width={35} height={35} alt="Profile" />
            </div>
          </div>
        </div>
          <SidebarBottom />
              <div className="">
                <div className="bg-red-950 text-zinc-100">
                  Barra de filtros
                  <Search />
                </div>
                <div className="bg-green-950 text-zinc-100">
                  Videos
                </div>
              </div>
        </div>
      </div>
  )
}
