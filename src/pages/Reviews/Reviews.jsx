import { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { mockReviews } from './data/mockReviews';
import ReviewCard from './components/ReviewCard';

const Reviews = () => {
  const [dateRange] = useState('17 April 2020 - 21 May 2020');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
          <p className="text-gray-500">Dashboard / Customer review</p>
        </div>

        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border">
          <Calendar className="text-blue-600" size={20} />
          <select 
            className="bg-transparent border-none focus:outline-none pr-8"
            value={dateRange}
            onChange={(e) => console.log(e.target.value)}
          >
            <option>{dateRange}</option>
          </select>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Here is Customer review about your restaurant</p>
          <div className="relative">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border hover:border-blue-500">
              <span>Latest</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <button className="mt-6 w-full py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Reviews;