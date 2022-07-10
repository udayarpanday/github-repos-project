import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isLoading, userDetails } from "../../store/selector";
import Loader from "../../components/Loader/Loader";
import { userRepoAsync } from "../../store/reducer";
import "./repoDetails.scss";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { formatDate, } from "../../utilities/tools";

const RepoDetails = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(isLoading);
  const userRepo = useAppSelector(userDetails);

  //to get params of the repo selected by the user
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //get the user and repo details selected by the using 
    dispatch(userRepoAsync({ userName: params.username, repo: params.repo }));
  }, []);

  const routeToHome=()=>{
    navigate({ pathname: "/"});
  }

  return (
    <>
      <Loader isLoading={loading} />
      <div className="repo-user-section">
        <div className="main-container">
          <div className="flex-container">
            <div className="repo-cards">
              <div className="user-details-section">
                <div className="user-image">
                  <img src={userRepo.owner.avatar_url} alt="user-img" />
                </div>
                <div className="user-info">
                  <div className="user-name">
                    <h3>{userRepo.owner.login}</h3>
                  </div>
                  <div className="user-link">
                    <Link
                      to={{ pathname: `/${userRepo.html_url}` }}
                      target="_blank"
                    >
                      {userRepo.html_url}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="repo-cards">
              <div className="users-repos=section">
                <div className="section-title flex">
                  <button className="searchButton" onClick={()=>routeToHome()}>
                    <MdArrowBackIosNew />
                  </button>
                  <h3>Repository Details</h3>
                </div>
                <div className="user-repo-details">
                  <div className="flex-container">
                    <div className="repo-header">
                      <h5>Repo Name</h5>
                      <p>{userRepo.name}</p>
                      <h5>Repo Url</h5>
                      <p>{userRepo.html_url}</p>
                      <h5>Description</h5>
                      <p>{userRepo.description}</p>
                      <div className="dates">
                        <h5>Dates</h5>
                        <div className="flex">
                          <div>
                            <h6>Created At</h6>
                            <p>{formatDate(userRepo.created_at)}</p>
                          </div>
                          <div>
                            <h6>Updated At</h6>
                            <p>{formatDate(userRepo.updated_at)}</p>
                          </div>
                          <div>
                            <h6>Last Pushed</h6>
                            <p>{formatDate(userRepo.pushed_at)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="repo-body">
                      <h5>Visibility</h5>
                      <p>{userRepo.visibility}</p>
                      <h5>Number of open issues</h5>
                      <p>{userRepo.open_issues}</p>
                      <h5>Default Branch</h5>
                      <p>{userRepo.default_branch}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoDetails;
