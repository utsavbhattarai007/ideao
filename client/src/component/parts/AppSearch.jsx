import React, { useContext, useState } from "react";
import IdeaCard from "../IdeaCard";
import { ContextProvider } from "../../config/Context";
import CardLoading from "../loading/CardLoading";
import "../../css/SearchBar.css";
import { BiSearchAlt } from "react-icons/bi";
const AppSearch = () => {
  const loading = [1, 2, 3];
  const card = [
    {
      idea_id: "asnmkjsy8eb7et37ewb7e37",
      idea_postedBy: "Utsav Bhattarai",
      idea_doc: "March 25,2022",
      idea_title: "This is title",
      idea_userImg:
        "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:
        "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag: ["Web", "App", "Web3"],
    },
    {
      idea_id: "asnmkjsy8eb7et37ewb7e37",
      idea_postedBy: "Utsav Bhattarai",
      idea_doc: "March 25,2022",
      idea_title: "This is title",
      idea_userImg:
        "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:
        "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodiplaceat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag: ["Web", "App", "Web3"],
    },
    {
      idea_id: "asnmkjsy8eb7et37ewb7e37",
      idea_postedBy: "Utsav Bhattarai",
      idea_doc: "March 25,2022",
      idea_title: "This is title",
      idea_userImg:
        "https://lh3.googleusercontent.com/-stWcQqcBZIQ/AAAAAAAAAAI/AAAAAAAAAAA/AHYzNgpIfU1ph3OVWPLlSQKrdKyolIxlUg/photo.jpg?sz=46",
      idea_des:
        "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusasperiores placeat quas omnis, sint ad commodi",
      idea_tag: ["Web", "App", "Web3"],
    },
  ];
  const { ld } = useContext(ContextProvider);
  const [load, setLoad] = ld;

  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <>
      <div className="search_container">
        <input
          className="search_input"
          type="text"
          placeholder="Search Ideas..."
          onChange={handleInput}
          name="srh"
          value={search.srh}
        />
        <button className="searchbtn">
          <BiSearchAlt size="25" />
        </button>
      </div>
      {search ? (
        loading.map((data, i) => <CardLoading key={i} />)
      ) : (
        <>
          <div className="nosearch_wrapper">
            <p className="nosearch_text">Start Searching . . . </p>
          </div>
        </>
      )}
    </>
  );
};

export default AppSearch;