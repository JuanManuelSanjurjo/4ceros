export default function MenuItems({ openModal, filteredItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredItems.map((item, index) => (
        <div
          key={index}
          className={`menu-card card-hovern ${!item.stock ? "hidden" : item.stock < 1 ? "grayscale opacity-80" : ""}`}
        >
          <img
            src={item?.imageUrl || "./src/assets/4ceros.jpg"}
            alt={item?.name}
            className={`menu-image`}
          />
          <div className="menu-content">
            <div className="flex justify-between items-start mb-2">
              <h3 className="menu-name min-h-[2.5em]">{item?.name}</h3>
              <span className="menu-price">{item?.price}</span>
            </div>
            <span className="menu-category">{item?.category}</span>
            <p className="menu-description min-h-[3em]">{item?.description}</p>
            <button
              className="btn btn-primary mt-4 w-full py-3 font-semibold"
              onClick={() => openModal(item)}
            >
              Detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
