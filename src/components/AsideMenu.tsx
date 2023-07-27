import { Menu } from "lucide-react"

export default function AsideMenu () {
    return (
      <div className="bg-zinc-950/90 text-zinc-100 flex items-center gap-6 px-6 w-56 mt-[-3px]">
              <a href="">
                <Menu size="25"/>
              </a>
              <div className="">
                <a href="" className="flex items-center gap-1">
                  <img className="" src="youtube-logo.png" width={30} height={30} alt="Youtube-Logo" />
                  <a className="font-bold text-lg">YouTube</a>
                </a>
              </div>
            </div>
    )
}