import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModalOpen {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalState: ModalOpen = {
  open: false,
  setOpen: () => {},
};

export const UserContext = React.createContext<ModalOpen>(ModalState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <UserContext.Provider value={{ open, setOpen }}>
      {children}
    </UserContext.Provider>
  );
};
