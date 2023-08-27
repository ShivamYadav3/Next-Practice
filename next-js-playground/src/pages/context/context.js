import { createContext, useContext, useState } from "react";

export const ItemContext = createContext(null);

export const ItemProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  return (
    <ItemContext.Provider value={{ product, setProduct }}>
      {children}
    </ItemContext.Provider>
  );
};

export function useItemContext() {
  return useContext(ItemContext);
}
