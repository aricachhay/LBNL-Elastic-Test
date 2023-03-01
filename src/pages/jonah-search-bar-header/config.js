import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

const connector = new AppSearchAPIConnector({
  searchKey:
    process.env.REACT_APP_SEARCH_KEY || "search-ryvk8fon3wwimveer9v1muyo",
  engineName: process.env.REACT_APP_SEARCH_ENGINE_NAME || "it-lbl-gov",
  endpointBase:
    process.env.REACT_APP_SEARCH_ENDPOINT_BASE ||
    "https://lbnl.ent.us-central1.gcp.cloud.es.io",
});

export const config = {
  alwaysSearchOnInitialLoad: true,
  searchQuery: {
    result_fields: {
      url: { raw: {} },
      meta_description: { raw: {} },
      title: {
        snippet: {
          size: 100,
          fallback: true,
        },
      },
    },
    disjunctiveFacets: [],
    facets: [],
  },
  autocompleteQuery: {
    results: {
      resultsPerPage: 5,
      result_fields: {
        title: {
          snippet: {
            size: 100,
            fallback: true,
          },
        },
      },
    },
    suggestions: {
      types: {
        documents: {
          fields: ["title", "meta_description"],
        },
      },
      size: 4,
    },
  },
  apiConnector: connector,
};
