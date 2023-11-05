import { create } from "zustand";

const useCatalog = create((set) => ({
  products: [],
  basketItems: [],
  setProducts: (products) => {
    set(() => ({
      products: products,
    }));
  },
  setBasketItems: (items) => {
    set(() => ({
      basketItems: items,
    }));
  },
  addBasketItem: (item) => {
    set((state) => ({
      basketItems: [...state.basketItems, item],
    }));
  },
  deleteBasketItem: (item) => {
    set((state) => {
      const updatedProducts = state.basketItems.filter(
        (product) =>
          !(
            product.id === item.id &&
            product.size.id === item.size.id &&
            product.colorId === item.colorId
          )
      );
      return {
        basketItems: [...updatedProducts],
      };
    });
  },
}));

export default useCatalog;
