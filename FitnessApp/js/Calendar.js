
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display appointments on calendar load
    fetchAppointments();
});

function fetchAppointments() {
    // Here we can implement logic to fetch appointments from the server
    // by making an AJAX request to get scheduled appointments

    // Dummy data for illustration purposes
    const appointments = [
        { clientName: 'John Doe', dateTime: '2023-01-01 10:00 AM' },
        { clientName: 'Jane Smith', dateTime: '2023-01-15 03:30 PM' },
    ];

    displayAppointments(appointments);
}

function displayAppointments(appointments) {
    const calendarContainer = document.getElementById('calendar');

    // Dummy calendar view, you may use a library like FullCalendar for more advanced features
    let calendarHTML = '<table border="1">';
    calendarHTML += '<tr><th>Date</th><th>Time</th><th>Client Name</th></tr>';

    appointments.forEach(appointment => {
        const date = appointment.dateTime.split(' ')[0];
        const time = appointment.dateTime.split(' ')[1];
        const clientName = appointment.clientName;

        calendarHTML += `<tr><td>${date}</td><td>${time}</td><td>${clientName}</td></tr>`;
    });

    calendarHTML += '</table>';
    calendarContainer.innerHTML = calendarHTML;
}

function goBack() {
    window.location.href = 'index.jsp';
}
