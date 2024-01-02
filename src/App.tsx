export const App = () => {
  return (
    <div className="font-semibold text-lg text-green-500">
      Render ed from react app
      <h1 className="text-green-500 mt-2">Vite + React ngon</h1>
      <h1>{import.meta.env.VITE_API_KEY}</h1>
    </div>
  );
};
