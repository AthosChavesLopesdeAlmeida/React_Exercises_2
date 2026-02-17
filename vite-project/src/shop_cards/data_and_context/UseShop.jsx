import { useContext } from "react";
import { ShopContext } from "./ShopContext";

export function UseShop () {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useCart deve ser usado dentro de um ShopProvider');
  }

  return context;
}