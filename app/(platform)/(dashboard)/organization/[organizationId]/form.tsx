"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

export const Form = () => {
const {}

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title.map((error) => (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
