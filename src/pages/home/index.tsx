import { useEffect } from "react";
import { repoDetailsAsync } from "./reducer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { repoSearchList } from "./selector";

const Home = () => {

  const dispatch = useAppDispatch();
  const repoData = useAppSelector(repoSearchList);
  useEffect(() => {
    console.log('runs')
    dispatch(repoDetailsAsync({ searchValue: "google" }));
  },[]);

  return (
    <>
      <div>{repoData && repoData.map((items)=>{
        return <h1>{items.total_count}</h1>
      })}</div>
    </>
  );
};

export default Home;
