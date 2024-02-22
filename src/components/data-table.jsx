import { TableVirtuoso } from "react-virtuoso"
import Data from "../data/MOCK_DATA.json"

function DataTable() {
  return (
    <>
      <section>
        <TableVirtuoso
          style={{ height: "65vh" }}
          data={Data}
          fixedHeaderContent={() => (
            <tr>
              <th style={{ background: "white" }}>Name</th>
              <th style={{ background: "white" }}>Description</th>
            </tr>
          )}
          itemContent={(index, user) => (
            <>
              <td style={{ width: 150 }}>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.ip_address}</td>
            </>
          )}
        />
      </section>
    </>
  )
}

export { DataTable }
