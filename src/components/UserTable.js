import React from 'react'

const UserTable = (props) => {
    console.log(props)
    return (
        <div>
          <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Postal Code</th>
    </tr>
  </thead>
  <tbody>
  {props.user.map(user => (
    <tr key={user.login.uuid}>
      <th scope="row">1</th>
    <td>{user.name.first}</td>
    <td>{user.name.last}</td>
    <td>{user.email}</td>
    <td>{user.location.postcode}</td>
    </tr>  
  ))}
  </tbody>
</table>  
            
    </div>


)

}
export default UserTable;
