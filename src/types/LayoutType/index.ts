import { Dispatch, ReactNode, SetStateAction } from "react";

export type HeaderProps =  {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export type DrawerProps =  {
  children: ReactNode;
}