import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      // const youtube = new FakeYoutube();
      const youtube = new Youtube();
      return youtube.search(keyword);
    },
  });

  return (
    <div>
      <h1 className="text-2xl">비디오 {keyword ? ` 🔍 ${keyword}` : " 🔥"}</h1>
      {isLoading && <p>Loading</p>}
      {/* {error && <p>에러</p>} */}
      {videos && ( // videos가 있다면
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
