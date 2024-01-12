import { ChevronLeft } from "lucide-react";
import { DrawerProps } from "../../../types/LayoutType";
import { useLayout } from "../../../../logic/hooks/useLayout";
export default function Drawer({children}: DrawerProps) {
  const { isOpen, setIsOpen } = useLayout();
//   const activeSide = "bg-gray-800 h-screen w-60 transform transition-all fixed duration-400 text-white flex justify-center p-2"
//   const hiddenSide = "bg-gray-800 h-screen w-60 transform transition-all fixed duration-400 text-white flex justify-center p-2 -translate-x-60"
//   const activeButton = "absolute w-10 h-10 bg-yellow-400 top-0 cursor-pointer transition-all transform duration-400 flex items-center justify-center"
//   const normalButton = "absolute w-10 h-10 bg-yellow-400 top-0 cursor-pointer transition-all transform duration-400 flex items-center justify-center translate-x-60"
  return (<div>
    <div className="w-screen h-screen flex transform relative transition-all duration-500">
        {/* <div className={isOpen ? activeSide:hiddenSide}> */}
        <div>
            Sidebar
        </div>
        <div className="w-full h-screen flex justify-center ">
            {children}
        </div>
    </div>
     
    <div 
    // className={isOpen ? normalButton : activeButton}
//----onClick the state is changed -------
        onClick={() => setIsOpen(!isOpen)}
    > 
      <ChevronLeft className={`duration-300 ${isOpen ?'rotate-180': ''}`}/>
     </div>

</div>);
}
