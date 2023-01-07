import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaYoutube, FaSearch } from "react-icons/fa";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="flex w-full  p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link className="flex" to="/">
        <FaYoutube />
        <h1>youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          onChange={handleChange}
          value={text}
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
