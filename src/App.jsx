import Create from "./component/Create";
import Read from "./component/Read";

const App = () => {
  return (
    <div className=" w-screen h-screen bg-gray-700 p-10 flex justify-between px-20 py-15">
      <Create />
      <Read />
    </div>
  );
};

export default App;
