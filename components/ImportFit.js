import React from "react";
import { useAuthStore } from "../hooks/useAuthStore";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { useCreateRide } from "../apis/rideApis";
import { ReadFile, ReadFit } from "./ReadFit";

const queryClient = new QueryClient();

const ImportInput = () => {
  const userId = useAuthStore((state) => state.userId);
  const createRide = useCreateRide();

  return (
    <div className='form-control'>
      <label className='input-group'>
        <input
          className='file-input p-2'
          type='file'
          onChange={async (e) => {
            let files = [...e.target.files] || [];
            files.forEach((item, index) => {
              ReadFile(files[index], (e) => {
                const fitData = ReadFit(e.target.result);
                const ride = {
                  ride: {
                    authorGoogleId: userId,
                    ridedate: fitData.activity.timestamp,
                    ridedata: fitData,
                  },
                };
                // console.log(ride);
                // add code to upload ride to prisma here
                createRide.mutate(ride);
              });
            });
          }}
          multiple
        />
        <span className='btn-secondary'>Import New Rides</span>
      </label>
    </div>
  );
};

function ImportFit() {
  // read multiple fit files

  return (
    <QueryClientProvider client={queryClient}>
      <ImportInput />
    </QueryClientProvider>
  );
}

export default ImportFit;
