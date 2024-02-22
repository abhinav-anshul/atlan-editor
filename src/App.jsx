import { CodeEditor, DataTable, Navbar } from "./components"

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-[1fr_3fr] gap-2">
            <div className="min-h-[90vh]">
              <div className="bg-[#dbeafe] min-h-[45vh] rounded-lg m-1">1</div>
              <div className="bg-[#dbeafe] min-h-[45vh] rounded-lg m-1">2</div>
            </div>
            <div className="grid min-h-[90vh] grid-rows-[1fr_3fr]">
              <div className="bg-[#dbeafe] rounded-lg m-1">
                <CodeEditor />
              </div>
              <div className="bg-[#dbeafe] rounded-lg m-1">
                <DataTable />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
