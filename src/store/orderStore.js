import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrderStore = create(
  persist(
    (set) => ({
      orders: [],
      placeOrder: (order) =>
        set((state) => ({
          orders: [
            ...state.orders,
            { ...order, id: Date.now(), createdAt: new Date() },
          ],
        })),
    }),
    {
      name: 'order-storage',
    }
  )
);

export default useOrderStore;
