import { createContext, Dispatch, useState, useContext } from "react";

// state type
interface StateType {
  fileUploaded: boolean;
  tags: {
    title: string;
    artist: string;
  };
  fileArray: any | any[];
}

// context types
interface ContextType {
  state: StateType;
  handleUpdate: Dispatch<StateType>;
  file: any;
  setFile: (value: any) => void;
}

// define context
export const AppContext = createContext({} as ContextType);

// define provider
interface PropType {
  children: React.ReactNode | React.ReactNode[];
}

export const useAppContext = () => {
  const currentValue = useContext(AppContext);
  if (currentValue === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return currentValue;
};

export const AppProvider = ({ children }: PropType) => {
  const [state, dispatch] = useState({} as StateType);
  const [file, setFile] = useState<any>(null);

  const handleUpdate = (newData: StateType) => {
    try {
      dispatch(newData);
    } catch (error: any) {
      console.error("Error updating data: " + error.message)
    }
  };

  return (
    <AppContext.Provider value={{state, handleUpdate, file, setFile}}>{children}</AppContext.Provider>
  );
};
