/* eslint-disable react/prop-types */
const EmptyState = ({ title, message, image, actionLabel, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-gray-600">
      <img src={image} alt={title} className="w-64 h-64 mb-4 rounded-lg" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-6">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
