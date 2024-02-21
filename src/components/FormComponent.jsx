/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import useSelectsForm from "../hooks/useSelectsForm";
import ErrorComponent from "./ErrorComponent";
import { coins } from "../data/coins";

const urlApiCripto = import.meta.env.VITE_URL_API_CRIPTO;

const FormComponent = ({ setValues }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrency] = useSelectsForm(
    "Selecciona una Moneda",
    coins
  );

  const [cripto, SelectCripto] = useSelectsForm(
    "Selecciona una Criptomoneda",
    criptos
  );

  useEffect(() => {
    const fetchApi = async () => {
      const url = urlApiCripto;
      const response = await fetch(url);
      const result = await response.json();

      const arrayCriptos = result.Data.map((cripto) => {
        const objectCripto = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
        return objectCripto;
      });
      setCriptos(arrayCriptos);
    };
    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(e);

    if ([currency, cripto].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setValues({ currency, cripto });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <SelectCurrency />
          <SelectCripto />
          <input
            className="bg-[#9497ff] border-none w-full p-3 rounded-md text-white 
            font-bold uppercase text-lg duration-200 hover:bg-[#7a7dfe] cursor-pointer mt-8"
            type="submit"
            value="Cotizar"
            />
        </form>
            {error && <ErrorComponent>Debes seleccionar una moneda y una cripto</ErrorComponent>}
      </div>
    </>
  );
};

export default FormComponent;
