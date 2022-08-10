// Store for Google auth using zustand

import create from "zustand";
import { ReadFile, ReadFit } from "../components/ReadFit";

// move this to another file for ride calculations
const ProcessRide = (ride, userId) => {
  const id = ride.activity.timestamp.toString();
  const label = id;
  return { id: id, userId: userId, label: label, ride: ride };
};

const ProcessRides = (rides) => {};

export const useRideStore = create((set) => ({
  rides: [],
  addRide: (rides) => {
    set((state) => {
      rides: [rides, ...state.ride];
    });
  },
  addRides: async (rides) => {
    const response = await ImportRides(rides);
    console.log(await response);
    // set((state) => {
    //   rides: [rides, ...state.rides];
    // });
  },
  deleteRide: (id) =>
    set((state) => ({
      rides: state.rides.filter((ride) => ride.id !== id),
    })),
  deleteAllRides: () => set({ rides: [] }),
}));

// wrapper for class based modules

export const withRideStore = (BaseComponent) => (props) => {
  const store = useRideStore();
  return <BaseComponent {...props} store={store} />;
};
