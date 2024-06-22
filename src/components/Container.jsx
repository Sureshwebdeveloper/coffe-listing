import { useState, useEffect } from "react";
import bgcofee from "../assets/bg-cafe.jpg";
import imgstyle from "../assets/vector.svg";
import Product from "./Product";

const Container = () => {
  const [coffee, setCoffee] = useState([]);

  const [selected, setSelected] = useState(false);

  const availableCofee = () => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) =>
        setCoffee(data.filter((cofee) => cofee.available === true))
      )
      .then(console.log("available Coffe", coffee))
      .catch((error) => console.error(error));
    setSelected(true);
  };

  const allproduct = () => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setCoffee(data))
      .then(console.log("allcoffe", coffee))
      .catch((error) => console.error(error));
    setSelected(false);
    console.log(fetch);
  };

  useEffect(() => {
    allproduct();
  }, []);
  return (
    <div>
      <img
        src={bgcofee}
        alt="background of cofee image"
        className=" sm:bg-cover h-[300px] w-full absolute"
      />
      <section className="bg-[#111315] h-full pb-40 ">
        <div className="bg-[#1B1D1F] w-10/12 sm:w-1/2 lg:w-[90%]  lg:px-14 flex flex-col items-center mx-auto   relative  top-32 rounded-md">
          <img
            src={imgstyle}
            alt="image layer"
            className="absolute z-10 right-0"
          />
          <h1 className="text-white font-bold font-dmsans  text-[30px] mx-auto mt-10 z-20">
            Our Collection
          </h1>
          <p className="text-[#6F757C] text-center text-lg font-dmsans max-w-[250px] md:max-w-[450px] lg:max-w-[500px] font-semibold  m-5  z-20">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="flex justify-around font-dmsans space-x-8 items-center">
            <button
              className={
                selected === false
                  ? "bg-[#6F757C] text-[#FEF7EE] p-2 rounded-md"
                  : "text-[#fff]"
              }
              onClick={() => allproduct()}
            >
              All Products
            </button>
            <button
              className={
                selected === true
                  ? "bg-[#6F757C] text-[#FEF7EE] p-2 rounded-md"
                  : "text-[#fff]"
              }
              onClick={() => availableCofee()}
            >
              Available Now
            </button>
          </div>
          <Product coffee={coffee} />
        </div>
      </section>
    </div>
  );
};

export default Container;
