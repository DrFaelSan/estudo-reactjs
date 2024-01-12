import { Menu, UserSquare2 } from "lucide-react";
import { useLayoutContext } from "../../context";

export default function Header() {
  const { toggleIsOpenClick } = useLayoutContext();
  return (
    <header className="bg-green-950 h-12 py-2 px-5">
      <div className="flex flex-row justify-between"> 
        <Menu className="text-white hover:cursor-pointer hover:bg-green-900 rounded-md p-1"
          size={30} 
          onClick={() => toggleIsOpenClick()}/>
        <UserSquare2 className="text-white" />
      </div>
    </header>
  );
}