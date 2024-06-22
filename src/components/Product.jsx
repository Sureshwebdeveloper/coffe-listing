import starfill from "../assets/Star_fill.svg";
import unfill from "../assets/Star.svg";

const Product = ({ coffee }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3  md:gap-x-4  my-4">
      {coffee.map((data, index) => {
        return (
          <div key={index} className="py-3">
            {data.popular === true ? <span className="bg-[#F6C768] rounded-full px-3 mx-2 my-1  absolute"> popular  </span> : ""}
            <img
              src={data.image}
              alt={data.name}
              className="h-40 w-56 lg:w-full  object-cover rounded-lg"
            />
            <div className="flex items-center justify-between pt-3">
              <h2 className="text-white text-lg">{data.name}</h2>
              <h4 className="bg-[#BEE3CC] py-1 mr-2 px-1 rounded">
                {data.price}
              </h4>
            </div>
            <p className="flex space-x-1 lg:space-x-5 items-center mt-3">
              {data.votes > 1 ? <img src={starfill} alt="star fill svg"/> : <img src={unfill} alt="star unfill svg"/>}
              <span className="text-[#FEF7EE]">{data.rating}</span>
              <span className="text-[#6F757C] mx-2">({data.votes} Votes)</span>
              {data.available === false ? <span className="text-[#ED735D]">Sold Out</span> : ""}
              <span>{data.sold}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
