import {
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

async function clearAllRides() { 
  const response = await fetch("/api/rides/clear", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export function useClearRides() {
  return useMutation(clearAllRides);
}

export function getRecordData(records: Array<Object>) {
  const result = records.map((record: any) => {
    return {
      power: record.power,
      speed: record.speed,
      cadence: record.cadence,
      distance: record.distance,
      timestamp: record.timestamp,
      heart_rate: record.heart_rate,
      elapsed_time: record.elapsed_time,
      position_lat: record.position_lat,
      position_long: record.position_long,
    }
  })
  return result;
}