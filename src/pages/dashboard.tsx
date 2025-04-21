export function Dashboard() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex gap-4">
        <div>
          <h1 className="text-2xl">Your current balance</h1>
          <p className="text-3xl font-semibold"></p>
        </div>
        <main className="flex gap-6 p-4">
          <div className="flex-1"></div>
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl font-semibold">Your transactions</h2>
          </div>
        </main>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1>Titulo teste</h1>
          <p>paragrafo teste</p>
        </div>
        <div>
          <h1>Titulo teste</h1>
          <p>paragrafo teste</p>
        </div>
        <div>
          <h1>Titulo teste</h1>
          <p>paragrafo teste</p>
        </div>
      </div>
    </div>
  );
}
