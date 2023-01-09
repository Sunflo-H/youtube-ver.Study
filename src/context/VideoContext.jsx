import { createContext, useState } from "react";

export const VideoContext = createContext;

export function VideoProvider({ children }) {
  const [video, setVideo] = useState("");

  const clickVideo = (item) => {
    setVideo(item);
  };

  return <VideoContext.Provider></VideoContext.Provider>;
}
