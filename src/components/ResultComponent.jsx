/* eslint-disable react/prop-types */
const ResultComponent = ({ cotization }) => {
  console.log(cotization);
  const { PRICE, LOWDAY, HIGHDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL } =
    cotization;

  return (
    <>
      <div className="mt-4 text-white flex flex-col">
        <div>
          <h2 className="text-2xl font-black mb-2 bg-blue-500 rounded-md p-2 text-center text-black">
            <span className="font-semibold">El precio actual es: </span>
            {PRICE}
          </h2>
        </div>
        <div className="flex items-center mt-2 border-[1px] border-solid rounded-md p-2">
          <div className="w-2/3">
            <h2 className="text-lg font-bold mt-3 mb-2">
              <span className="font-light">
                El precio más alto del día fue:{" "}
              </span>
              {HIGHDAY}
            </h2>
            <h2 className="text-lg font-bold mb-2">
              <span className="font-light">
                El precio más bajo del día fue:{" "}
              </span>
              {LOWDAY}
            </h2>
            <h2 className="text-lg font-bold mb-2">
              <span className="font-light">
                Variación en las últimas 24hs:{" "}
              </span>
              {CHANGEPCT24HOUR}
            </h2>
            <h2 className="text-lg font-bold">
              <span className="font-light">Ultima actualización: </span>
              {LASTUPDATE}
            </h2>
          </div>
          <img
            className="my-0 mx-auto w-1/3"
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="image currency"
          />
        </div>
      </div>
    </>
  );
};

export default ResultComponent;
