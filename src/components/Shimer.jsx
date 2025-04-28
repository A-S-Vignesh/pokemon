function Shimer() {
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="animate-pulse">
            <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-2/3 mx-auto"></div>
              <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-1/3 mx-auto"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Shimer;