import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCheckIcon,
  RocketIcon,
  SquarePenIcon,
  TrashIcon,
} from "lucide-react";

export default function Home() {
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
        <Input placeholder="Add Todo" />
        <Button>
          <RocketIcon />
        </Button>
      </section>

      {/* List View Section */}
      <section className="pt-8 overflow-scroll max-h-96">
        <div className="flex items-center space-x-2 mb-3 w-5/6 mx-auto md:w-1/3">
          <Input value="Simple todo value" />
          {/* <Button>
            <SquarePenIcon />
          </Button> */}
          {/* <Button>
            <CheckCheckIcon />
          </Button> */}
          <Button>
            <TrashIcon />
          </Button>
        </div>
      </section>
    </main>
  );
}
