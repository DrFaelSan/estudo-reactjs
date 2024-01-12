/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown, Home, PackageSearch, Settings } from "lucide-react";
import { useLayoutContext } from "../../context";
import { ReactNode, useState } from "react";

type SubMenuType = Pick<MenuItemType, "title" | "path">;

type MenuItemType = {
  title: string;
  path: string;
  icon: ReactNode;
  subMenu?: boolean;
  subMenuItems?: SubMenuType[] 
}

const Menus : MenuItemType[] = [
  {
    title: "Home",
    path: '',
    icon: <Home/>,
  },
  {
    title: "Configurações",
    path: '',
    icon: <Settings />,
    subMenuItems: [
      {title: "Parâmetros",path: '',},
      {title: "Trimestres",path: '',},
      {title: "Malhas Fiscais",path: '',},
      {title: "Diretrizes",path: '',},
      {title: "Modelos de Mensagem",path: '',},
    ]
  },
  {
    title: "Planejamento",
    path: '',
    icon: <PackageSearch />,
    subMenuItems: [
      {title: "Cadastro de Contribuinte",path: '',},
      {title: "Bloqueio de Contribuinte",path: '',},
      {title: "Seleção de Contribuinte",path: '',}
    ]
  },
  {
    title: "Validação",
    path: '',
    icon: <PackageSearch />,
    subMenuItems: [
      {title: "Validação SAT",path: '',}
    ]
  },
  
];

export default function AsideBar() {
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  const { isOpen } = useLayoutContext();

  const toggleSubMenuOpen = (menu: MenuItemType, index: number) => {
    console.log("menu : ",menu);
    console.log("index : ",index);
    menu.subMenu = isOpen;
  }

  return (
    <aside className={`min-w-[3%]  ${isOpen ? "w-64" : ""}`}>
      <div className="bg-white border border-slate-150 p-1">
      <ul className="flex flex-col justify-between items-start gap-1">
          {
            Menus.map((menu: any, index: number) => (
            <>
              <div className="min-w-full hover:bg-green-100 rounded-md">
                <li key={index} className="m-y-1 p-2 text-green-950 text-sm flex flex-row items-center
                gap-x-4 cursor-pointer"> 
                  <span className="block float-left">{menu.icon}</span> 
                  <span className={`text-base font-medium flex-1 duration-200 ${!isOpen && "hidden"}`}>{menu.title}</span>
                  {menu.subMenuItems?.length > 0 && isOpen &&  (
                    <ChevronDown className={`text-green-950 ${subMenuOpen && "rotate-180"}`} onClick={() =>{ toggleSubMenuOpen(menu, index); setSubMenuOpen(prev=> !prev)}} />
                  )}
                </li>
              </div>
               {menu.subMenuItems?.length > 0 && menu.subMenu && isOpen && (
                <ul>
                   {menu.subMenuItems.map((submenuItem: any, indexSub: number) => ( 
                     <li key={indexSub} className="m-y-1 mx-4 p-2 px-5 text-green-950 text-sm flex flex-row items-center
                     gap-x-4 cursor-pointer hover:bg-green-100 rounded-md">
                       {submenuItem.title}
                     </li>
                   ))}
                 </ul>
               )}
            </>
            ))}
        </ul>
      </div>
    </aside>
  )
}