import React from "react";
import { formatDate, numFormatter } from "../../../utilities/tools";
import { GoRepo } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { AiOutlineFork } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IRepoData } from "../../../interface";

interface IListOfRepos {
  repoData: IRepoData;
  checkData: boolean;
}

const ListofRepos = (props: IListOfRepos) => {
  const { checkData, repoData } = props;
  return (
    <>
      <div className="flex-container repo-count-container">
        <div className="repo-count">
          {checkData ? (
            <>
              <h3>
                Showing {repoData.total_count} available repository results
              </h3>
            </>
          ) : (
            <>
              <h3>No repository searched</h3>
            </>
          )}
        </div>
      </div>
      <div className="home-container">
        {checkData ? (
          repoData &&
          repoData.items.map((items) => {
            return (
              <>
                <div key={items.id} className="flex-container" >
                  <div className="search-details" >
                    <div className="repo-cards">
                      <div className="repo-details">
                        <div className="flex">
                          <GoRepo className="icon-position" size={18} />
                          <Link to={`/repo-details/${items.full_name}`}>
                            <h5>{items.name}</h5>
                          </Link>
                        </div>
                        <h6>@{items.full_name.split("/")[0]}</h6>
                        <p className="no-wrap">{items.description}</p>
                      </div>
                      <div className="repo-sub-details">
                        <div className="flex-container">
                          <span>
                            <FaStar color="gold" />
                            {numFormatter(items.stargazers_count)}
                          </span>
                          <span>
                            <AiOutlineFork />
                            {numFormatter(items.forks)}
                          </span>
                          <span>{items.language}</span>
                          <span>{formatDate(items.updated_at)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="empty-container">
            <div>
              <GoRepo size={80} />
              <h3>
                You can search the repositories of github from the search field
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ListofRepos;
