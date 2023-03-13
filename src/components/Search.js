import React from "react";
import { useGlobalContext } from "./Context";
// import "bootstrap/dist/css/bootstrap.min.css";


export default function Search() {
  const { query, SearchPost } = useGlobalContext();

  return (
    <>
      <h1>Amit  Teck Website</h1>
      <form onSubmit={(e) =>  e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => SearchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}
