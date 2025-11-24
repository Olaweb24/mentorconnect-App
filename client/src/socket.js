import { io } from "socket.io-client";

// Connect to backend Socket.IO server
export const socket = io("https://mentorconnect-backend-o5mm.onrender.com", {
  autoConnect: false, // we will manually connect in components
  withCredentials: true
});
