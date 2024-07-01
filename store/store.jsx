

import { createStore } from "redux"
import data from '../data.json'

const jsondata = data;

const reducer = (currData = jsondata, action) => {
  let newData = currData
  return newData;

}

export const store = createStore(reducer);
