import { ReadFit, ReadFile } from "../components/ReadFit";
import { useRideStore } from "./useRideStore";

export function useAddRides(e) {
  let files = [...e.target.files] || [];
  files.forEach((item, index) => {
    ReadFile(files[index], (e) => {
      const ride = ReadFit(e.target.result);
      useRideStore((state) => state.addRide(ride));
    });
  });
}
