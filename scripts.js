document.getElementById('emergencyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const emergencyType = document.getElementById('emergencyType').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `Emergency: ${emergencyType} | Location: ${location} | Description: ${description}`;

    // Append the new emergency report to the list
    document.getElementById('emergencyList').appendChild(li);

    // Clear the form fields
    document.getElementById('emergencyForm').reset();
});
