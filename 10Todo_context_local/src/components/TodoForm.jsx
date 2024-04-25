import { useState } from "react";
import { useTodo } from "../contexts";
import { Button } from "./ui/moving-border.jsx";
function TodoForm() {

  const [todo , setTodo] = useState("")

  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()

    if(!todo) return

    addTodo({todo , completed:false})
    setTodo("")

    //niche vala tareeka bhi sahi hai lekin uski jarurat nahi hai , kyo ki kaffi sari functionality humne addTodo jo ki app.jsx me define ki hai , vo vha already hai , jaise ki id : date.now() and todo:todo iski bhi jarurat nahi kyo ki naye syanatax ke andar agar done same hai to ek bar likhe ge to kaam chak jaye ga
    // addTodo({id:Date.now() , todo:todo , completed:false})

  }


  return (
    <form onSubmit={add}
      className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value = {todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        type="submit"
        className=""
      >
        Add
      </Button>
    </form>
  );
}

export default TodoForm;
