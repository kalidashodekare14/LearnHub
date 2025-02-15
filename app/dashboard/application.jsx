import React from 'react'

const Application = () => {
  return (
    <div>
      <h1 className='text-2xl my-5 text-center'>Applications</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Course Name</th>
              <th>University name</th>
              <th>Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Application