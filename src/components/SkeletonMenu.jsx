export default function SkeletonMenu() {
  return (
    <div className="mt-12">
      {/* Loading skeleton for category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <div className="bg-gray-200 animate-pulse rounded-full px-6 py-3 m-2 w-20 h-10"></div>
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-200 animate-pulse rounded-full px-6 py-3 m-2 w-24 h-10"
            ></div>
          ))}
      </div>

      {/* Loading skeletons for menu items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="menu-card bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-gray-200 animate-pulse w-full h-48"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-gray-200 animate-pulse h-6 w-3/4 mb-2"></div>
                <div className="bg-gray-200 animate-pulse h-6 w-1/4"></div>
              </div>
              <div className="bg-gray-200 animate-pulse h-4 w-1/2 mb-4"></div>
              <div className="space-y-2 mb-4">
                <div className="bg-gray-200 animate-pulse h-4 w-full"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-5/6"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-4/6"></div>
              </div>
              <div className="bg-gray-200 animate-pulse rounded-md h-12 w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
