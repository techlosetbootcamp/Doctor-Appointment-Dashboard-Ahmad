"use client";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import ToogleTodoButton from "../modals/toogleTodoButton/ToogleTodoButton";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTasks } from "./useTasks";
import Loader from "../loader/Loader";
import ToogleTaskMenu from "../dropdownMenu/toogleTaskMenu/ToogleTaskMenu";

type TaskTypes = {
  isShow?: boolean;
  seeAll?: boolean;
};

const Task: React.FC<TaskTypes> = ({ isShow, seeAll }) => {
  const { todos, isError, isLoading } = useTasks();

  const Todos = isShow ? todos.slice(0, 3) : todos;
  return (
    <div className="rounded-md bg-white shadow-md p-4">
      <div className="flex justify-between border-b pb-2 border-gray-200">
        <h1 className="text-base font-bold">Tasks</h1>
        <ToogleTodoButton className="flex items-center gap-4 font-semibold text-primary text-xs">
          New Tasks
          <div className="text-xs border p-2 rounded-md border-gray-300">
            <FaPlus />
          </div>
        </ToogleTodoButton>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      )}
      {!isLoading && isError && <p>Error Loading Tasks</p>}
      {!isLoading && isError && todos.length === 0 && <p>No task Found!</p>}

      {!isLoading &&
        !isError &&
        todos.length > 0 &&
        Todos.map((todo, index) => (
          <div key={index} className="flex items-start gap-8 my-8 ">
            <input
              type="checkbox"
              checked={todo.completed === "COMPLETED"}
              readOnly
              className="cursor-not-allowed w-[31px] h-[31px] p-2 rounded-md"
            />
            <div className="flex items-center w-full justify-between">
              <div>
                <h1 className="py-2 font-medium text-base ">{todo?.title}</h1>
                <p className="py-2 font-normal text-xs ">{todo?.description}</p>
              </div>
              <p className="font-normal text-xs text-grayLight">
                {todo.date
                  ? new Date(todo.date).toLocaleDateString()
                  : "No date provided"}
              </p>
            </div>
            <div className="w-fit border border-gray-300 text-sky  rounded-md">
              <ToogleTaskMenu />
            </div>
          </div>
        ))}

      {Todos.length > 0 && seeAll ? (
        <Link
          href={"/dashboard/tasks"}
          className="flex items-center gap-4 font-semibold  text-xs justify-end text-primary"
        >
          See all{" "}
          <div className="text-xs border p-2 rounded-md border-gray-300">
            <MdKeyboardArrowRight />
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default Task;
