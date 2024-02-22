function Navbar() {
  return (
    <>
      <nav>
        <div className="bg-white border border-solid">
          <div className=" min-h-[8vh] max-w-[88rem] mx-auto p-1 flex justify-between items-center">
            <img
              width="120"
              height="auto"
              src="https://website-assets.atlan.com/img/atlan-blue.svg"
            />
            <div>logo</div>
          </div>
        </div>
      </nav>
    </>
  )
}

export { Navbar }
