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
    <header className=" w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      {/* <header> */}
      <Link to="/" className="flex items-center">
        {/* <Link to="/"> */}
        <FaYoutube className="text-4xl text-brand" />
        {/* <FaYoutube /> */}
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        {/* <h1>Youtube</h1> */}
      </Link>
      <form
        className="w-full flex justify-center bg-red-500"
        onSubmit={handleSubmit}
      >
        {/* <form onSubmit={handleSubmit}> */}
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={text}
        />
        <button className="bg-zinc-600 p-4">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
