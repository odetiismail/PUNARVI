import { useAppSelector} from "./Hooks";

export const Home = () => {
  const count = useAppSelector((curr) => curr.data.values);
console.log(count)
  // const FilterData = (curr: any) => {
  //   let da = curr.map((cur: any) => {
  //     return cur.category;
  //   });

  //   const Filter = [];
  //   return new Set(da);
  //   // consol  e.log(da);
  // };
  // const data = FilterData(count);

  return (
    <div>
      {count == undefined ? <p>Loading . . . . . . . </p> : <div>Home</div>}
    </div>
  );
};
