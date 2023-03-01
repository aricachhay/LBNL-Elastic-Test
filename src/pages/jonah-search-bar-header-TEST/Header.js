import React, { useState } from "react";
import Modal from "./Components/Modal";
import "./App.css";

import { config } from "./config";

import { SearchProvider, SearchBox } from "@elastic/react-search-ui";
//import "@elastic/react-search-ui-views/lib/styles/styles.css";

export default function Header() {
  const [modalOpenState, setModalState] = useState(false); // False because we dont want Modal to be open intially
  const [searchResults, setSearchResults] = useState("");
  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid black",
          display: "flex",
          // justifyContent: "space-between",
          //backgroundColor: "lightblue",
          flexGrow: "20",
        }}
      >
        <SearchProvider
          config={{
            ...config,
            trackUrlState: false,
          }}
        >
          <SearchBox
            onSubmit={(searchTerm) => {
              setModalState(true);
              console.log(`Modal state = ${modalOpenState}`);
              setSearchResults(
                `${window.location.origin}/jonah-search-bar-header-TEST/search?q=${searchTerm}`
              );
            }}
            autocompleteMinimumCharacters={3}
            autocompleteResults={{
              linkTarget: "_blank",
              sectionTitle: "Results",
              titleField: "title",
              urlField: "url",
              shouldTrackClickThrough: true,
              clickThroughTags: ["test"],
            }}
            autocompleteSuggestions={true}
            debounceLength={0}
            style={{ backgroundColor: "lightblue" }}
          />
        </SearchProvider>
      </div>
      {/*Opens modal based on state */}
      {modalOpenState && (
        <Modal
          showModal={setModalState}
          modalText={searchResults}
          close={() => {
            setModalState(false);
          }}
        />
      )}
    </div>
  );
}
