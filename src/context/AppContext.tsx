import { createContext, Dispatch, useState } from "react";

// state type
type StateType = {
  fileUploaded: boolean;
  tags: {
    title: string;
    artist: string;
  }
  fileArray: any | any[];
};

// context types
type ContextType = {
  state: StateType;
  dispatch: Dispatch<StateType>;
};

// define context
export const AppContext = createContext({} as ContextType);

// define provider
type PropType = {
  children: JSX.Element | JSX.Element[];
};

export const AppProvider = ({ children }: PropType) => {
  const [state, dispatch] = useState({} as StateType);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
