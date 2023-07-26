import { Menu, Video, Bell, Keyboard, Search, Mic } from "lucide-react"

export default function Home() {
  return (
      <div className="">
        <div className="">
          <div className="bg-neutral-500 flex top">
            <div className="bg-blue-950/90 text-zinc-100 flex items-center gap-7 px-4 h-16 w-56">
              <Menu size="25"/>
              <div className="flex gap-1">
                <img className="" src="youtube-logo.png" width={30} height={30} alt="Youtube-Logo" />
                <a className="font-semibold text-lg">Youtube</a>
              </div>
            </div>
          <div className='bg-neutral-500 text-zinc-100 flex'>
            <div className="bg-green-500/90 flex items-center gap-6 h-16 w-[132rem] px-[60rem]">
              <div className="flex">
                Barra de Pesquisa
                <Keyboard size="25"/>
                <Search size="25"/>
              </div>
              <Mic size="25"/>
            </div>
            <div className="bg-yellow-500/90 flex px-4 items-center gap-6 h-16 w-56 px-12">
              <Video size="25"/>
              <Bell size="25"/>
              <img className="rounded-full" src="eu.png" width={35} height={35} alt="Profile" />
            </div>
          </div>
        </div>
        <div className="flex">
              <div className="bg-red-500 w-56 h-[]">
                a
              </div>
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
    </div>
  )
}
