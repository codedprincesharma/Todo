import { createContext, useState } from "react";

export const todocontext = createContext(null);

const Wrapper = (props) => {
   const [todo, settodo] = useState([
    { id: 1, title: "kaam kar le bhai", iscompleted: true },
  ]);
  return (
    <todocontext.Provider value={[todo,settodo]}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Wrapper;
