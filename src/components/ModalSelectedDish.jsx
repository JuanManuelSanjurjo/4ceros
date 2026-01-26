import logo from "../assets/4ceros.jpg";

export default function ModalSelectedDish({ selectedItem, closeModal }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 py-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedItem?.name}
            </h2>
            <button
              className="text-gray-500 hover:text-gray-800 text-3xl leading-none"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <img
                src={selectedItem?.imageUrl || logo}
                alt={selectedItem?.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-3">
              <p className="text-yellow-600 font-semibold text-lg">
                {selectedItem?.category}
              </p>
              <p className="text-gray-700 py-4">{selectedItem.description}</p>
              <p className="text-2xl font-bold text-black">
                {selectedItem?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
