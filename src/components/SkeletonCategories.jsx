export default function SkeletonCategories() {
  return (
    <div className="slider mt-8 justify-center">
      {/* Loading skeleton for category tabs */}
      <h3 className="text-center py-6">Actualizando...</h3>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[0, 0, 0].map((_, idx) => (
          <div
            key={idx}
            className="bg-gray-200 animate-pulse rounded-full px-6 py-3 m-2 w-24 h-10"
          ></div>
        ))}
      </div>
    </div>
  );
}
