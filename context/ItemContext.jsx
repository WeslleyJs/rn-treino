import { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [listItem, setListItem] = useState([]);
  const value = listItem;
  return (
    <ItemContext.Provider value={{ listItem, setListItem }}>
      {children}
    </ItemContext.Provider>
  );
};
