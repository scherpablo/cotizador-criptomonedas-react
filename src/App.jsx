import { useState, useEffect } from "react";
import FormComponent from "./components/FormComponent";
import ResultComponent from "./components/ResultComponent";
import SpinnerComponent from "./components/SpinnerComponent";

const App = () => {
  const [values, setValues] = useState({});
  const [cotization, setCotization] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(values).length > 0) {
      setLoading(true);

      const criptoCotization = async () => {
        const { currency, cripto } = values;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`;
        const response = await fetch(url);
        const result = await response.json();

        setCotization(result.DISPLAY[cripto][currency]);

        setLoading(false)
      };
      criptoCotization();
    }
  }, [values]);

  return (
    <>
      <div className="max-w-[900px] w-[90%] my-0 mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            className="max-w-[400px] w-4/5 mt-36 block"
            src="/img/imagen-criptos.png"
            alt="imagen de fondo"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl text-white font-bold text-center mt-24">
            Cotiza Criptomonedas al Instante
          </h1>
          <div className="mt-6 mb-14 mx-auto w-28 h-2 bg-blue-500 rounded-md"></div>
          <FormComponent setValues={setValues} />
          {loading && <SpinnerComponent />}
          {cotization && cotization.PRICE && (
            <ResultComponent cotization={cotization} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
