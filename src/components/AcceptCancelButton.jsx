import React from 'react';
import PropTypes from 'prop-types';

const AcceptCancelButton = ({ onAccept, onCancel }) => {
  return (
    <div className="flex gap-4">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={onAccept}
      >
        Accept
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

AcceptCancelButton.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AcceptCancelButton;
