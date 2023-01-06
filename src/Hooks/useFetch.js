import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from that resource!");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.error("Fetch Aborted");
          } else {
            console.log(err.message); // this wil happen when the api server is terminated or is not connected
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { blogs, isPending, error, setBlogs };
};

export default useFetch;
