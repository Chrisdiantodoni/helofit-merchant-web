import { createContext, useReducer, useState } from "react";

const dataMerchant = localStorage.getItem("dataUser");
const parsedDataMerchant = JSON.parse(dataMerchant);

const initialState = {
  merchantId: parsedDataMerchant?.id,
};

export const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "merchantId":
      return {
        ...state,
        merchantId: action.payload,
      };
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
