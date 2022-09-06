import { createContext, useState } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [jobName, setJobName] = useState<string>();
  const [total, setTotal] = useState<number>(0);
  const [images, setImages]: any = useState([]);

  return (
    <CartContext.Provider
      value={{ total, setTotal, images, setImages, jobName, setJobName }}
    >
      {children}
    </CartContext.Provider>
  );
};
