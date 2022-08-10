import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

export async function fetchRides() {
  const response = await fetch("/api/rides");
  const data = await response.json();
  const { rides } = data;
  return rides;
}

async function createRideRequest(rideData: any) {
  const response = await fetch("/api/rides/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rideData),
  });
  const data = await response.json();
  const { ride } = data;
  return ride;
}

export function useCreateRide() {
  return useMutation(createRideRequest);
}

async function deleteRideRequest(id: Number) {
  const rideData = { ride: { id: id } };
  const response = await fetch("/api/rides/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rideData),
  });
  const data = await response.json();
  const { ride } = data;
  return ride;
}

export function useDeleteRide() {
  return useMutation(deleteRideRequest);
}