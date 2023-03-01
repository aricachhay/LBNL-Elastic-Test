import * as React from "react";
import { Switch } from "react-router-dom";
import Root from "./pages/root";
import Elasticsearch from "./pages/elasticsearch";
import Engines from "./pages/engines";
import AppSearch from "./pages/app-search";
import SiteSearch from "./pages/site-search";
import WorkplaceSearch from "./pages/workplace-search";
import SearchAsYouType from "./pages/search-as-you-type";
import CustomizingStylesAndHtml from "./pages/customizing-styles-and-html";
import SearchBarInHeaderIndex from "./pages/search-bar-in-header/index";
import SearchBarInHeaderSearch from "./pages/search-bar-in-header/search";
import JonahSearchBarInHeaderIndex from "./pages/jonah-search-bar-header/index";
import JonahSearchBarInHeaderSearch from "./pages/jonah-search-bar-header/search";
import JonahSearchBarInHeaderIndexTEST from "./pages/jonah-search-bar-header-TEST/index";
import JonahSearchBarInHeaderSearchTEST from "./pages/jonah-search-bar-header-TEST/search";
import JonahSearchBarInHeaderIndexAUTOCOMPLETE from "./pages/jonah-search-bar-header-AUTOCOMPLETE/index";
import JonahSearchBarInHeaderSearchAUTOCOMPLETE from "./pages/jonah-search-bar-header-AUTOCOMPLETE/search";
import EcommerceHome from "./pages/ecommerce";
import EcommerceSearch from "./pages/ecommerce/Search";
import EcommerceCategory from "./pages/ecommerce/Category";
import { ApmRoute } from "@elastic/apm-rum-react";
import ListingPage from "./pages/ecommerce/ListingPage";

export default function Router() {
  return (
    <div className="App">
      <Switch>
        <ApmRoute exact path="/" component={Root} />

        {/* Connectors */}
        <ApmRoute exact path="/elasticsearch" component={Elasticsearch} />
        <ApmRoute exact path="/app-search" component={AppSearch} />
        <ApmRoute exact path="/site-search" component={SiteSearch} />
        <ApmRoute exact path="/workplace-search" component={WorkplaceSearch} />
        <ApmRoute exact path="/engines" component={Engines} />

        {/* Examples */}
        <ApmRoute
          exact
          path="/search-as-you-type"
          component={SearchAsYouType}
        />
        <ApmRoute
          exact
          path="/customizing-styles-and-html"
          component={CustomizingStylesAndHtml}
        />
        <ApmRoute
          exact
          path="/search-bar-in-header"
          component={SearchBarInHeaderIndex}
        />
        <ApmRoute
          exact
          path="/search-bar-in-header/search"
          component={SearchBarInHeaderSearch}
        />
        <ApmRoute
          exact
          path="/jonah-search-bar-header"
          component={JonahSearchBarInHeaderIndex}
        />
        <ApmRoute
          exact
          path="/jonah-search-bar-header/search"
          component={JonahSearchBarInHeaderSearch}
        />
        <ApmRoute
          exact
          path="/jonah-search-bar-header-TEST"
          component={JonahSearchBarInHeaderIndexTEST}
        />
        <ApmRoute
          exact
          path="/jonah-search-bar-header-TEST/search"
          component={JonahSearchBarInHeaderSearchTEST}
        />
        <ApmRoute
          exact
          path="/jonah-search-bar-header-AUTOCOMPLETE"
          component={JonahSearchBarInHeaderIndexAUTOCOMPLETE}
        />
        <ApmRoute
          exact
          path="/jonah-search-bar-header-AUTOCOMPLETE/search"
          component={JonahSearchBarInHeaderSearchAUTOCOMPLETE}
        />

        {/* Use cases */}
        <ApmRoute exact path="/ecommerce/" component={EcommerceHome} />
        <ApmRoute exact path="/ecommerce/search" component={EcommerceSearch} />
        <ApmRoute exact path="/ecommerce/all" component={ListingPage} />
        <ApmRoute
          exact
          path="/ecommerce/category/:category"
          component={EcommerceCategory}
        />
      </Switch>
    </div>
  );
}
