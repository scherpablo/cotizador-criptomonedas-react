import { useState } from "react";

const useSelectsForm = (label, options) => {
  const [state, setState] = useState("");

  const SelectsForm = () => {
    return (
      <>
        <label className="text-white text-2xl font-bold block my-4 mx-0">
          {label}
        </label>
        <select
          className="rounded-md p-3 w-full mx-0 font-semibold"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">-Seleccionar-</option>
          {options.map((option) => (
            <option className="font-semibold" key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    );
  };

  return [state, SelectsForm];
};

export default useSelectsForm;
