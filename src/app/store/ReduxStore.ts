import { createStore } from "redux";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";

const reducer = (state = {}) => state;
export const store = createStore(reducer, offline(offlineConfig));
