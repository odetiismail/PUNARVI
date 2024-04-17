import { Link } from "react-router-dom";
import { useAppSelector } from "./Hooks";
import Section from "./Section";


export const Home = () => {
  const count = useAppSelector((curr:any) => curr.data.values);
  //console.log(count);

  const FilterDa = (curr: any) => {
    return [curr[0], curr[7], curr[13], curr[18]];
  };

  const ProductData = FilterDa(count).slice(0, 4);
  //console.log(ProductData);

  return (
   <div>
   <Section/>
     <div className="flex flex-wrap gap-2 ">
      {ProductData[0] === undefined ? (
        <p>Loading . . . . . . . </p>
      ) : (
        <div className="w-full m-auto p-4">
          <div className="flex gap-2 flex-wrap justify-around">
            {ProductData.map((curr: any, k) => {
              return (
               <Link to={`/SingleProduct/${curr.id}`} key={k}>
                 <div 
                  className="relative redious rounded-xl group w-72 h-52 overflow-hidden shadow-xl shadow-color  hover:shadow-Hovers transition duration-700"
                 
                >
                  <div className="">
                    <img
                      src={curr.thumbnail}
                      className="w-[100%]  hover:scale-110 transition duration-700 object-fit aspect-[2/2]  "
                    />
                  </div>
                  <div className="absolute w-72 h-52 top-0 -translate-x-72 isolate transition duration-1000       bg-black/60 group-hover:translate-x-0">
                    <div className="text-2xl italic font-bold   text-white p-2 pt-6">
                      {curr.category}
                    </div>
                    <div className="text-lg text-white italic p-5 font-md line-clamp-4 text-center">
                      {curr.description}
                    </div>
                  </div>
                </div>
               </Link>
              );
              })}
          </div>
        </div>
      )}
    </div>
   </div>
  );
};
