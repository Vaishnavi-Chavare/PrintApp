const Pagination = ({ currentPage, totalPages, rowsShown, totalRows, currentStatus }) => {
  return (
    <div className="flex justify-between items-center mt-4 px-4 py-3 bg-white rounded-lg">
      <div className="text-sm text-gray-700">
        {currentStatus === 'delivered-today' ? (
          <span>
            Showing <span className="font-medium">{rowsShown}</span> Delivered Today out of{' '}
            <span className="font-medium">{totalRows}</span>
          </span>
        ) : (
          <span>
            Showing <span className="font-medium">{rowsShown}</span> out of{' '}
            <span className="font-medium">{totalRows}</span>
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          Page <span className="font-medium">{currentPage}</span> of{' '}
          <span className="font-medium">{totalPages}</span>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
