"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [data, setData] = useState("Loading...");
  const [time, setTime] = useState(0);

  useEffect(() => {
    const start = performance.now();

    setTimeout(() => {
      setData("Product data loaded using CSR");

      setTime(
        Number((performance.now() - start).toFixed(2))
      );
    }, 500);
  }, []);

  return (
    <main>
      <h1>Client Side Rendering</h1>
      <p>{data}</p>
      <p>Rendering time: {time} ms</p>
    </main>
  );
}
