import React from "react";

const Search = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchValue, setSearchValue] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const handleOnChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //  if(searchTerm) useEffect(() => {
  //   setLoading(true);
  //   apiClient
  //     .getResults(searchTerm)
  //     .then((res) => {
  //       setSearchValue(res);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       setLoading(false);
  //     });
  // }, []);
  // };

  // if(searchTerm) {
  //   useEffect(() => {
  //     setLoading(true);
  //     apiClient
  //       .getResults(searchTerm)
  //       .then((res) => {
  //         setSearchValue(res);
  //         setLoading(false);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         setLoading(false);
  //       });
  //   }, []);
  // }

  return (
    <div className="searchSection">
      <div className="searchText">
        <h2>Find Movies, TV Shows and much more</h2>
      </div>
      <div className="searchBar">
        <div className="loupe">
          <img src="./loupe.svg" alt="loupe"></img>
        </div>
        <form>
          <input
            className="searchInput"
            type="search"
            placeholder="Enter the Name......"
          ></input>
        </form>
        <div className="arrow">
          <img src="./right-arrow.svg" alt="right arrow"></img>
        </div>
      </div>
    </div>
  );
};

export default Search;
