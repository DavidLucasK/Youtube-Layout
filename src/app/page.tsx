import { Menu, Video, Bell, Keyboard, Search, Mic, Home as HomeIcon, PlaySquare, Clock, ThumbsUp, ChevronDown, Youtube, MonitorPlay, RotateCcw, Zap, Flame, BadgeCheck, MoreVertical} from "lucide-react"
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
                    <Search size="22"/>
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
              <img className="rounded-full" src="eu.png" width={30} height={30} alt="Profile" />
            </div>
          </div>
        </div>
        <div className="flex">
          <SidebarBottom />
              <div className="w-screen">
                <div className="bg-zinc-950 text-zinc-100 h-12 flex items-center">
                  <div className="flex gap-3 ml-8 mt-[-px]">
                    <a href="">
                      <div className="bg-zinc-100 rounded-lg h-8 font-normal flex items-center px-1">
                        <div className="p-[10px] text-zinc-950">Tudo</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Jogos</div>
                        </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">ASMR</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Música</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Podcast</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Programação</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">League of Legends</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Computadores</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Mixes</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Chocolates</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Culinária</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Tablets</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Ao vivo</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Notícias</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">Mundo</div>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-zinc-800/75 rounded-lg h-8 font-normal flex items-center px-1 hover:bg-zinc-700/75 hover:ease-in-out duration-300">
                        <div className="p-[10px]">CSS</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="bg-zinc-950 text-zinc-100 mr-12">
                  <div className="grid grid-cols-5 gap-4 mt-4 ml-8">
                    {/* Aqui começa um vídeo */}
                    <a href="https://www.youtube.com/watch?v=U1gMVr_zDPs" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb2.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="dev.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>MINHA PRIMEIRA VAGA COMO DEV</strong>
                            <MoreVertical size="25" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Futuro Dev - John
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="https://www.youtube.com/watch?v=cH4Ou9g_cfE" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb1.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE RODRIGO GOES - FAKE NATTY ?</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          26 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="https://www.youtube.com/watch?v=0zl72thBKzo" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb3.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="rocketseat.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>NOVAS FEATURES DO NEXT 13</strong>
                            <MoreVertical size="22" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Rocketseat
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="https://www.youtube.com/watch?v=UYjIe3JbM8g" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb4.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE ÍTALO SENA O MAIOR PSICOPATA</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                          Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          254 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="https://www.youtube.com/watch?v=qsojKSYk330&t=2s" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb5.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="podpah.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>GIL DO VIGOR - Podpah #658</strong>
                            <MoreVertical size="20" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Podpah
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          112 mil de visualizações • há 1 dia
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb5.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="podpah.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>GIL DO VIGOR - Podpah #658</strong>
                            <MoreVertical size="20" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Podpah
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          112 mil de visualizações • há 1 dia
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb3.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="rocketseat.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>NOVAS FEATURES DO NEXT 13</strong>
                            <MoreVertical size="22" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Rocketseat
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb4.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE ÍTALO SENA O MAIOR PSICOPATA</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                          Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          254 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb2.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="dev.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>MINHA PRIMEIRA VAGA COMO DEV</strong>
                            <MoreVertical size="25" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Futuro Dev - John
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb1.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE RODRIGO GOES - FAKE NATTY ?</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          26 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb2.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="dev.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>MINHA PRIMEIRA VAGA COMO DEV</strong>
                            <MoreVertical size="25" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Futuro Dev - John
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb1.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE RODRIGO GOES - FAKE NATTY ?</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          26 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb5.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="podpah.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>GIL DO VIGOR - Podpah #658</strong>
                            <MoreVertical size="20" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Podpah
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          112 mil de visualizações • há 1 dia
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb3.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="rocketseat.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>NOVAS FEATURES DO NEXT 13</strong>
                            <MoreVertical size="22" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Rocketseat
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb4.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE ÍTALO SENA O MAIOR PSICOPATA</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                          Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          254 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb2.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="dev.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>MINHA PRIMEIRA VAGA COMO DEV</strong>
                            <MoreVertical size="25" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Futuro Dev - John
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb1.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE RODRIGO GOES - FAKE NATTY ?</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          26 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb3.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="rocketseat.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>NOVAS FEATURES DO NEXT 13</strong>
                            <MoreVertical size="22" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Rocketseat
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          86 mil de visualizações • há 2 meses
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb4.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="casimito.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>CASIMIRO REAGE ÍTALO SENA O MAIOR PSICOPATA</strong>
                            <MoreVertical size="35" className="mt-[-4px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                          Cortes do Casimito
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          254 mi de visualizações • há 2 dias
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                    {/* Aqui começa um vídeo */}
                    <a href="#" className='rounded gap-4 group'>
                      <img className="rounded-xl" src="/thumb5.png" width={500} height={500} alt="VideoThumb"/>
                      <div className="flex gap-2 mt-3">
                        <img className="rounded-full w-10 h-10" src="podpah.png" width={30} height={30} alt="ChannelPhoto"/>
                        <div className="">
                          <div className="title flex gap-8">
                            <strong>GIL DO VIGOR - Podpah #658</strong>
                            <MoreVertical size="20" className="mt-[2px] invisible group-hover:visible"/>
                          </div>
                          <div className="flex gap-1 text-zinc-400 font-medium text-sm">
                            Podpah
                            <BadgeCheck size="20" className="mt-[-.2px]"/>
                          </div>
                          <div className="mt-[-2px] text-zinc-400 font-medium text-sm">
                          112 mil de visualizações • há 1 dia
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Aqui termina um vídeo */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
