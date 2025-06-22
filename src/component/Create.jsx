import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const settodo = props.settodos;
  const todo = props.todos;

  const submitHandler = (data) => {
    console.log(data);
    data.iscompleted = false;
    data.id = nanoid();
    settodo([...todo, data]);
    toast.success("create todo!")
    reset();
  };

  return (
    <div className="w-5xl">
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-white text-4xl font-semibold">
          Set <span className="text-red-400">Reminder</span> for tasks
        </h1>

        <input
          {...register("title", { required: "Title is required" })}
          className="bg-transparent border-b-2 border-gray-400 focus:border-red-400 text-white placeholder-gray-400 text-lg outline-none py-2 transition"
          type="text"
          placeholder="Add a task..."
        />
        <small className="text-red-400">{errors?.title?.message}</small>

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
