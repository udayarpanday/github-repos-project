import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { repoDetailsAsync } from "../../store/reducer";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import { itemsPerPage, sortingOptions } from "../../constants/constants";
import Pagination from "../Pagination/Pagination";
import { repoSearchList } from "../../store/selector";
import { IPageOption } from "../../interface";

const PageOptions = () => {
  const dispatch = useAppDispatch();
  //list of repositories found
  const repoData = useAppSelector(repoSearchList);
  //parameters sent to search, sort, order, and page details
  const [filterParams, setFilterParams] = useState<IPageOption>({
    searchValue: "",
    sortValue: "",
    page: 1,
    order: "",
    itemsPerPage: 5,
  });
  //to disable sort and items per page dropdown until a repo is searched
  const [isSearched, setDropdownDisable] = useState<boolean>(true);
  //validate the search input field
  const [errors, setErrors] = useState<boolean>();
  //sort options in dropdown
  const [sortBy, setSortOption] = useState(null);
  //items per page option in dropdown
  const [itemPage, setPageOption] = useState(null);
  
  const { search } = useLocation();
  const navigate = useNavigate();

  //get the search value by query params
  const query = new URLSearchParams(search).get("q");
  useEffect(() => {
    if (query) dispatch(repoDetailsAsync({ searchValue: query })); 
  }, [query]);

  //function to handle search values
  const searchRepo = (e: any) => {
    e.preventDefault();
    if (filterParams.searchValue === "") {
      setErrors(true);
      return;
    }
    setDropdownDisable(false);
    const option = {
      ...filterParams,
      searchValue: filterParams.searchValue,
      page: 1,
    };
    setFilterParams(option);
    //dispatch the action to search the valued given by the user
    dispatch(repoDetailsAsync(option)); 
    navigate({ pathname: "/", search: `?q=${filterParams.searchValue}` });
  };
  //function to handle sort values
  const sortRepo = (e: any) => {
    const option = {
      ...filterParams,
      sortValue: e.value.sort,
      order: e.value.order,
    };
    setFilterParams(option);
    //dispatch the action to sort the valued given by the user
    dispatch(repoDetailsAsync(option)); 
  };

  const choosePagination = (e: any) => {
    const option = { ...filterParams, itemsPerPage: e.value };
    setFilterParams(option);
    //dispatch the action to determine the items per page
    dispatch(repoDetailsAsync(option)); 
  };

  return (
    <>
      <div className="section-header">
        <h3>Page Options</h3>
      </div>
      <div className="search-field-container">
        <h5>Search Repos</h5>
        <div className="action-field">
          <div className="flex input-container">
            <form method="GET" onSubmit={searchRepo}>
              <input
                id="search"
                type="text"
                placeholder="Enter the repo you want to search"
                onChange={(e) => {
                  setErrors(false);
                  setFilterParams({
                    ...filterParams,
                    searchValue: e.target.value,
                    page: 0,
                  });
                }}
              ></input>
              <button className="searchButton" type="submit">
                <FaSearch size={20} />
              </button>
              {errors && <p className="error-msg">Please enter a repo name</p>}
            </form>
          </div>
        </div>
      </div>
      <div className="sorting-container">
        <h5>Sort Repos</h5>
        <div className="action-field">
          <div className="flex input-container">
            <Select
              isDisabled={isSearched}
              defaultValue={sortBy}
              onChange={sortRepo}
              options={sortingOptions}
              className="dropdown"
            />
          </div>
        </div>
      </div>
      <div className="page-items-container">
        <h5>Items Per Page</h5>
        <div className="action-field">
          <div className="flex input-container">
            <Select
              isDisabled={isSearched}
              defaultValue={itemPage}
              onChange={choosePagination}
              options={itemsPerPage}
              className="dropdown"
            />
          </div>
        </div>
      </div>
      <div className="pagination-container">
        <Pagination
          filterParams={filterParams}
          pageCount={repoData.total_count}
        />
      </div>
    </>
  );
};

export default PageOptions;
