export default function MenuItems({ openModal, filteredItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredItems.map((item, index) => (
        <div
          key={index}
          className={`menu-card card-hovern ${!item.stock ? "hidden" : item.stock < 1 ? "grayscale" : ""}`}
        >
          <img
            src={item?.imageUrl || "https://placehold.co/600x400"}
            alt={item?.name}
            className={`menu-image`}
          />
          <div className="menu-content">
            <div className="flex justify-between items-start mb-2">
              <h3 className="menu-name">{item.name}</h3>
              <span className="menu-price">{item.price}</span>
            </div>
            <span className="menu-category">{item.category}</span>
            <p className="menu-description">{item.description}</p>
            <button
              className="btn btn-primary mt-4 w-full py-3 font-semibold"
              onClick={() => openModal(item)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
