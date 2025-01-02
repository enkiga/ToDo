"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCheckIcon,
  RocketIcon,
  SquarePenIcon,
  TrashIcon,
} from "lucide-react";
import { useStore } from "@/app/_store/store";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [update, setUpdate] = useState<any>("");
  const [todo, setTodo] = useState<string>("");

  const { Todos, addTodo, removeTodo, updateTodo } = useStore();

  const handleAdd = () => {
    if (!todo) return alert("Please enter a todo");
    addTodo({
      id: Todos.length + 1,
      text: todo,
      completed: false,
    });
    setTodo("");
  };

  const handleUpdate = (id: number) => {
    setToggle(!toggle);
    updateTodo(id, update);
    setTodo("");
  };

  return (
    <main>
      {/* Header Section */}
      <section className="w-full bg-gray-500/10 h-40 text-center">
        <h1 className=" text-3xl pt-10 font-semibold tracking-wide">
          {" "}
          Welcome to Todo App
        </h1>
        <p className="mt-2">
          {" "}
          A todo app that uses Zustand for State Management
        </p>
      </section>

      {/* Input Section */}
      <section className="flex space-x-2 pt-16 w-5/6 mx-auto md:w-2/6">
        <Input
          placeholder="Add Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={handleAdd}>
          <RocketIcon />
        </Button>
      </section>

      <section className="pt-8 overflow-y-auto max-h-96">
        {/* List View Section */}

        {Todos.length > 0 &&
          Todos.map((todo) => (
            <div
              className="flex items-center space-x-2 mb-3 w-5/6 mx-auto md:w-1/3"
              key={todo.id}
            >
              <Input value={todo.text} disabled={true} />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleUpdate(todo.id)}
              >
                {toggle ? <SquarePenIcon /> : <CheckCheckIcon />}
              </Button>

              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeTodo(todo.id)}
              >
                <TrashIcon />
              </Button>
            </div>
          ))}
      </section>
    </main>
  );
}
