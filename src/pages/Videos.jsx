import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      return fetch(`/data/${keyword ? "search" : "popular"}.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });

  return (
    <div>
      <h1 className="text-2xl">비디오 {keyword ? ` 🔍 ${keyword}` : " 🔥"}</h1>
      {isLoading && <p>Loading</p>}
      {error && <p>에러</p>}
      {videos && ( // videos가 있다면
        <ul>
          {videos.map((item, index) => (
            <li key={index} className="text-2xl">
              {item.snippet.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
