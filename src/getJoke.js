import { useEffect, useState } from "react";

export default function GetJoke() {
  const [data, setData] = useState(null);

  let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

  const loadData = async () => {
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const sortData = () => {
    if (data.type === "twopart") {
      return ` ${data.setup} ${data.delivery}`;
    } else {
      return data.joke;
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="master-container">
      <div className="text-container">{data ? sortData() : "...Loading"}</div>
      <button
        className="btn"
        onClick={() => {
          loadData();
        }}
      >
        New Joke
      </button>
    </div>
  );
}
