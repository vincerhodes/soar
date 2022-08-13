import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useDeleteRide, fetchRides } from "../apis/rideApis";

const queryClient = new QueryClient();

const DisplayRides = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Rides />
    </QueryClientProvider>
  );
};

const Rides = () => {
  const deleteRide = useDeleteRide();

  const { data: rides } = useQuery(["rides"], fetchRides);
  if (!rides) {
    return null;
  }
  return (
    <div className='flex flex-col w-full'>
      {rides.map((ride: any) => {
        const ridedate: String = new Date(ride.ridedate).toDateString();
        var description: String;
        try {
          description =
            ride.ridedata.activity.type +
            " " +
            ride.ridedata.activity.event +
            ", recorded with " +
            ride.ridedata.device_infos[0].product_name;
        } catch {
          description = "No ride description available";
        }

        return (
          <div key={ride.id}>
            <div className='card w-full bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h2 className='card-title'>{ridedate}</h2>
                <p>{description}</p>
                <p>{ride.id}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>View Ride</button>
                  <button
                    className='btn btn-error'
                    onClick={() => deleteRide.mutate(ride.id)}
                  >
                    Delete Ride
                  </button>
                </div>
              </div>
            </div>
            <div className='divider'></div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayRides;
