import { ReactNode, createContext, useContext, useState } from 'react';

interface LayoutContextData {
  isOpen: boolean;
  toggleIsOpenClick: () => void; 
}

export const LayoutContext = createContext<LayoutContextData>({} as LayoutContextData);

const LayoutProvider = ({ children }: { children : ReactNode}) => {
  const [isOpen, setIsOpen ] = useState<boolean>(false);

  const toggleIsOpenClick = () => {
    setIsOpen(prev => !prev);
  }

  return <LayoutContext.Provider value={{isOpen, toggleIsOpenClick}}>{children}</LayoutContext.Provider>;
};

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  return context;
}

export default LayoutProvider;