const ErrorComponent = ({ children }) => {
  return (
    <>
      <div className="mt-5">
        <div className="bg-red-600 text-white p-5 text-center rounded-md uppercase font-bold">{children}</div>
      </div>
    </>
  );
};

export default ErrorComponent;
