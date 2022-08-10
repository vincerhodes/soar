import React, { useState } from "react";

import { useRideStore } from "../hooks/useRideStore";
import { ReadFile, ReadFit } from "./ReadFit";

function ImportFit() {
  // read multiple fit files

  // useRideStore((state) => state.addRides(rides));
  const Input = () => (
    <div className='form-control'>
      <label className='input-group'>
        <input
          className='file-input p-2'
          type='file'
          onChange={async (e) => {
            let files = [...e.target.files] || [];
            files.forEach((item, index) => {
              ReadFile(files[index], (e) => {
                const ride = ReadFit(e.target.result);
                const id = ride.activity.timestamp.toString();
                console.log(id, ride);
                // add code to upload ride to prisma here
              });
            });
          }}
          multiple
        />
        <span className='btn-secondary'>Import New Rides</span>
      </label>
    </div>
  );

  return (
    <div>
      <Input />
    </div>
  );
}

export default ImportFit;
