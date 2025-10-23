// src/components/Card.jsx
const Card = ({ title, content, image, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:text-gray-100">
      {/* Optional Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Card Content */}
      <div className="p-4">
        {title && (
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
        )}

        {content && (
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {content}
          </p>
        )}

        {/* Slot for custom content (buttons, links, etc.) */}
        {children}
      </div>
    </div>
  );
};

export default Card;
