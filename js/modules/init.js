async function fetchUsers() {
  const response = await fetch('../data/employees.json');
  const employees = await response.json();
  for (let employee of employees) {
    tbody.innerHTML += `
          <tr>
              <td>${employee.id}</td>
              <td>${employee.name}</td>
              <td>${employee.extension}</td>
              <td><a href="mailto:${employee.email}">${employee.email}</a></td>
              <td>${employee.department}</td>
              <td><button class="btn btn-sm btn-danger delete">X</button></td>
          </tr> 
           `;
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${empTable.tBodies[0].rows.length})`;
    console.log(employees);
  }
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export { fetchUsers };
