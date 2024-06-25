

function Track({ tracks ,artist }) {
  return (
    <div>
       <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Track</th>
                  <th scope="col">Artists</th>
                  <th scope="col">Duration <small>(min)</small></th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{track.name}</td>
                    <td>{artist}</td>
                    <td>{track.duration}</td>
                    <td>
                      <i className="bi bi-pencil p-2 rounded text-primary text-sm bg-primary-subtle"></i>
                      <i className="bi bi-trash p-2 rounded text-danger text-sm bg-danger-subtle ms-2"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div>
  )
}

export default Track;
