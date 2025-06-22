import { useState } from "react";
import Create from "./component/Create";
import Read from "./component/Read";

const App = () => {
  const [todo, settodo] = useState([
    { id: 1, title: "kaam kar le bhai", iscompleted: true },
  ]);

  return (
    <div className=" w-screen h-screen bg-gray-700 p-10 flex justify-between px-20 py-15">
      <Create todos={todo} settodos={settodo} />
      <Read todos={todo} settodos={settodo} />
    </div>
  );
};

export default App;
