import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("couldnt fetch the data from the source");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchTasks();
  }, [url]);

  return { data, isPending };
};

export default useFetch;
