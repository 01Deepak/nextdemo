import { create } from 'zustand'

const useCounterStore = create((set) => ({
  count: 0,
  setCount: (payload) => set({count: payload})
}))

export default useCounterStore;