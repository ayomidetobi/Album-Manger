import PropTypes from "prop-types";

function Track({  artist }) {
  const trackData = [
    { name: "Track 1", duration: "3:45" },
    { name: "Track 2", duration: "4:20" },
    { name: "Track 3", duration: "5:10" },
    { name: "Track 4", duration: "3:30" },
    { name: "Track 5", duration: "4:00" },
    { name: "Track 6", duration: "2:50" },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" className="min-w-24">
              #
            </th>
            <th scope="col" className="min-w-24">
              Track
            </th>
            <th scope="col" className="min-w-24">
              Artists
            </th>
            <th scope="col" className="min-w-24">
              Duration <small>(min)</small>
            </th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {trackData.map((track, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{track.name}</td>
              <td>{artist}</td>
              <td>{track.duration}</td>
              {/* <td className="min-w-24">
                <i className="bi bi-pencil p-2 rounded text-white text-sm bg-dark"></i>
                <i className="bi bi-trash p-2 rounded text-danger text-sm bg-danger-subtle ms-2"></i>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Track.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
  artist: PropTypes.string.isRequired,
};

export default Track;
