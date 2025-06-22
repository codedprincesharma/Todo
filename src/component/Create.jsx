import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const settodo = props.settodos;
  const todo = props.todos;
  const [title, settitle] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      iscompleted: true,
    };
    // const x = [...todo];
    // x.push(newtodo);
    // settodo(x);

    settodo([...todo, newtodo]);
    settitle("");
  };
  return (
    <div className=" w-5xl">
  <form className="flex flex-col gap-6" onSubmit={submitHandler}>
    <h1 className="text-white text-4xl font-semibold">
      Set <span className="text-red-400">Reminder</span> for tasks
    </h1>

    <input
      className="bg-transparent border-b-2 border-gray-400 focus:border-red-400 text-white placeholder-gray-400 text-lg outline-none py-2 transition"
      type="text"
      value={title}
      onChange={(e) => settitle(e.target.value)}
      placeholder="Add a task..."
    />

    <button
      type="submit"
      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition w-fit"
    >
      Create Todo
    </button>
  </form>
</div>

  );
};

export default Create;
