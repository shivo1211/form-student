// script.js
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way

    // Get form data
    const formData = new FormData(event.target);
    const studentData = {
        name: formData.get('name'),
        class: formData.get('class'),
        division: formData.get('division'),
        rollNumber: formData.get('rollNumber'),
        subject1: formData.get('subject1'),
        subject2: formData.get('subject2')
    };

    // Handle form data, e.g., send it to the server or save it to a database
    console.log(studentData);

    // Display a success message
    document.getElementById('response').innerText = 'Form submitted successfully!';
});
