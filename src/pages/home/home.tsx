import "./home.scss";
import ListofRepos from "./listofRepos/listofRepos";
import PageOptions from "../../components/PageOptions/PageOptions";
import { useAppSelector } from "../../store/hooks";
import { isDataFetched, isLoading, repoSearchList } from "../../store/selector";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  //the list of the repositories searched
  const repoData = useAppSelector(repoSearchList);
  //loading state
  const loading = useAppSelector(isLoading);
  //check if data is fetched
  const dataExists = useAppSelector(isDataFetched);
  return (
    <>
      <Loader isLoading={loading} />
      <div className="main-container">
        <div className="flex-container">
          <div className="actions-container">
            <div className="repo-cards ">
              <PageOptions />
            </div>
          </div>
          <div className="search-details">
            <ListofRepos repoData={repoData} checkData={dataExists} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
