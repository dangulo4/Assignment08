async function fetchUsers() {
  try {
    const response = await fetch('/data/employees.json');
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export { fetchUsers };
