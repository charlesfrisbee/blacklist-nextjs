import Link from "next/link";
import { useState } from "react";

export default function Search() {

const [allPromoters, setAllPromoters] = useState()
  
  const getPromoters = async () => {
    console.log();
    try {
      const res = await fetch("/api/promoter/get");
      const data = await res.json();
      console.log(data);
      setAllPromoters(data)
    } catch (error) {
      console.log(error);
    }
  };



  function IsData() {
    const eachPromoter = allPromoters.response.map((line) => 
      <li key={line.id}>
        <Link href={`/promoter_data/${line.id}`}>{line.first} {line.last}</Link>
        </li>
    )
    return eachPromoter
  }

  function IsNoData() {
    return <div>Still Loading</div>;
  }

  function DisplayData() {
    console.log(allPromoters)
    if (allPromoters) {
      return <IsData />
    }
    return <IsNoData />;
  }

  const handleClick = async (e) => {
    await getPromoters();
  };

  return (
    <>
      <h1>Look up a promoter</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <button onClick={handleClick}>query database</button>
      </h2>
      <div className="resultsContainer">
      <DisplayData />
      </div>
    </>
  );
}
