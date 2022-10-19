import React, { createContext, ReactNode, useContext, useState } from "react";

const UserContext = createContext({});

// type ChildProps = {
//     children: React.ReactNode
// }
interface Bool {
    open: boolean;
}
export const UserProvider = ({children}: {children: ReactNode}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <UserContext.Provider value={{ open, setOpen, handleClose, handleOpen }}>
      {children}
    </UserContext.Provider>
  );
};
export const UserData = () => useContext(UserContext);
