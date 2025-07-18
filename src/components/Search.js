// import React from "react";

// function Search() {
//   return (
//     <div className="filter">
//       <input id="search-bar" type="text" placeholder="Search Notes" />
//     </div>
//   );
// }

// export default Search;

// import React from "react";

// function Search({ filter, setFilter }) {
//   return (
//     <div
//       className="filter"
//       style={{
//         padding: "1rem",
//         borderBottom: "1px solid #ccc",
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       <input
//         id="search-bar"
//         type="text"
//         placeholder="Search Notes"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "0.5rem",
//           fontSize: "1rem",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//         }}
//       />
//     </div>
//   );
// }

// export default Search;


import React from "react";

function Search({ filter, setFilter }) {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default Search;

