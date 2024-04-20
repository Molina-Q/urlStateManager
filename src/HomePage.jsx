import { useEffect } from "react";

export default function HomePage() {
  useEffect(function () {
    async function fetchData() {

      try{
      const res = await fetch("http://localhost:9000/products");
      const clothesData = await res.json();
      console.log(clothesData);   
      }
      catch (error) {  console.log(error);}
      }
    fetchData();
  }, []);

  return (
    <main className="homepage">
      <h1>Homepage of my Dummy Product Page</h1>
    </main>
  );
}

