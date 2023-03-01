import React from "react";
import { config } from "./config";

import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import Header from "./Header";

const SORT_OPTIONS = [
  {
    name: "Relevance",
    value: []
  },
  {
    name: "Title",
    value: [
      {
        field: "title",
        direction: "asc"
      }
    ]
  }
];

export default function App() {
  return (
    <div>
      <Header />
      <SearchProvider config={config}>
        <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
          {({ wasSearched }) => {
            return (
              <div className="App">
                <ErrorBoundary>
                  <Layout
                    header={
                      <SearchBox
                        autocompleteMinimumCharacters={3}
                        //searchAsYouType={true}
                        autocompleteResults={{
                          linkTarget: "_blank",
                          sectionTitle: "Results",
                          titleField: "title",
                          urlField: "url",
                          shouldTrackClickThrough: true,
                          clickThroughTags: ["test"]
                        }}
                        autocompleteSuggestions={true}
                        debounceLength={0}
                      />
                    }
                    sideContent={
                      <div>
                        {wasSearched && (
                          <Sorting
                            label={"Sort by"}
                            sortOptions={SORT_OPTIONS}
                          />
                        )}
                        <Facet
                          field="title"
                          label="Title"
                          filterType="any"
                          isFilterable={true}
                        />
                      </div>
                    }
                    bodyContent={
                      <Results
                        titleField="title"
                        urlField="url"
                        shouldTrackClickThrough={true}
                      />
                    }
                    bodyHeader={
                      <React.Fragment>
                        {wasSearched && <PagingInfo />}
                        {wasSearched && <ResultsPerPage />}
                      </React.Fragment>
                    }
                    bodyFooter={<Paging />}
                  />
                </ErrorBoundary>
              </div>
            );
          }}
        </WithSearch>
      </SearchProvider>
    </div>
  );
}
