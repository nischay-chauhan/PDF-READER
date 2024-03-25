import PropTypes from "prop-types";

const DataPage = ({ data }) => {
//   const handleClose = () => {
//     onClose();
//   };

  if (!data || !data.success) {
    return (
      <div className="container mx-auto mt-10 mb-10">
        <h1 className="text-2xl font-semibold text-red-500">Error</h1>
        <p>{data && data.message ? data.message : "Unknown error occurred"}</p>
        {/* <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
          onClick={handleClose}
        >
          Close
        </button> */}
      </div>
    );
  }

  const flattenArray = (arr) => {
    if (!Array.isArray(arr)) return [arr];
    return arr.reduce((acc, val) => acc.concat(flattenArray(val)), []);
  };

  const flattenedData = flattenArray(data.data);

  return (
    <div className="container mx-auto mt-10 bg-white p-4 rounded-lg mb-10">
      <h1 className="text-2xl font-semibold mb-4">Text Extracted Successfully</h1>
      <div className="top-0 right-0 fixed">
      {/* <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
        onClick={handleClose}
      >
        Close
      </button> */}
      </div>
      <div className="whitespace-pre-wrap">
        {flattenedData.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

    </div>
  );
};

DataPage.propTypes = {
  data: PropTypes.shape({
    success: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default DataPage;
