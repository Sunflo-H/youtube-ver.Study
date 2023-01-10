import { useQuery } from "@tanstack/react-query";

import React from "react";
import { useParams } from "react-router-dom";

import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  // const { youtube } = useContext(YoutubeApiContext);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });

  console.log(videos);
  return (
    <div>
      <h1 className="text-2xl">비디오 {keyword ? ` 🔍 ${keyword}` : " 🔥"}</h1>
      {/* {isLoading && <p>Loading</p>} */}
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
