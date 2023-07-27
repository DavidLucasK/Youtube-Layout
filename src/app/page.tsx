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
                <div className="bg-zinc-900 w-16 h-10 mt-[-.5rem] flex items-center px-3 border-t border-b rounded-r-3xl border-zinc-800">
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
            <div className="bg-zinc-950 flex px-12 mt-[-5px] items-center gap-6 h-18 w-56">
              <Video size="25"/>
              <Bell size="25"/>
              <img className="rounded-full" src="eu.png" width={35} height={35} alt="Profile" />
            </div>
          </div>
        </div>
        <div className="flex">
          <SidebarBottom />
              <div className="w-screen">
                <div className="bg-red-950 text-zinc-100 h-12">
                  Barra de filtros
                </div>
                <div className="bg-green-950 text-zinc-100">
                  <div className="grid grid-cols-5 gap-4 mt-4">
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album1.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Red Hot Chilli Peppers</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/Marcela.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Te Amo</strong>
                      <button className='w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-red-600 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/heart.png" width={24} height={24} alt="Heart"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                    <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                      <img src="/album3.png" width={104} height={104} alt="Capa"/>
                      <strong>This Is Switchfoot</strong>
                      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                        <img src="/play.png" width={20} height={20} alt="Play"/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
