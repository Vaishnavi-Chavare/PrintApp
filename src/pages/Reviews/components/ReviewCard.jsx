import StarRating from './StarRating';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex space-x-4">
          <img
            src={review.avatarUrl}
            alt={review.authorName}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{review.authorName}</h4>
            <p className="text-sm text-gray-500">
              {review.authorRole} • {review.date}
            </p>
            <p className="mt-2 text-gray-600">{review.text}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {review.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-medium">{review.rating}</span>
          <StarRating rating={review.rating} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
