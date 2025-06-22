const Read = (props) => {
  const todo = props.todos;
  const settodo =props.settodos

  const delethandler = (id) => {
   const delettodo = todo.filter((item) => item.id != id);
   settodo(delettodo)
  };
  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-white text-4xl font-semibold mb-4">
        Pending <span className="text-red-300">Todos</span>
      </h1>

      {todo.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-xl flex justify-between items-center bg-white text-black rounded-xl p-4 shadow-md transition hover:shadow-lg"
        >
          <span className="text-lg font-medium">{item.title}</span>
          <button
            onClick={() => delethandler(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition duration-200"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Read;
