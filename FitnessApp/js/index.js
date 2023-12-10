function showCalendar() {
    window.location.href = 'Calendar.jsp';
}

document.addEventListener('DOMContentLoaded', function () {
    populateTableFromSessionStorage();
});

function populateTableFromSessionStorage() {
    const trainersData = JSON.parse(sessionStorage.getItem('trainersData')) || [];

    const trainersTableBody = document.getElementById('trainersTableBody');

    trainersTableBody.innerHTML = '';

    trainersData.forEach(trainer => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td contenteditable="true">${trainer.firstName}</td>
            <td contenteditable="true">${trainer.lastName}</td>
            <td contenteditable="true">${trainer.location}</td>
            <td>
                <ul>
                    ${trainer.appointments.map(appointment => `<li>${appointment}</li>`).join('')}
                </ul>
                <button onclick="showDatePicker(this)">Add Appointment</button>
            </td>
            <td>
                <button onclick="showEditModal(this)">Edit</button>
                <button onclick="showDeleteConfirmation(this)">Delete</button>
                <button onclick="showCalendar(this)">Show Calendar</button>
            </td>
        `;

        trainersTableBody.appendChild(newRow);
    });
}


let selectedTrainerRowForEdit;

function showEditModal(button) {
    selectedTrainerRowForEdit = button.closest('tr');
    
    const firstName = selectedTrainerRowForEdit.cells[0].textContent;
    const lastName = selectedTrainerRowForEdit.cells[1].textContent;
    const location = selectedTrainerRowForEdit.cells[2].textContent;

    document.getElementById('editFirstName').value = firstName;
    document.getElementById('editLastName').value = lastName;
    document.getElementById('editLocation').value = location;

    document.getElementById('editModal').style.display = 'block';
}

function hideEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

function saveEdit() {
    selectedTrainerRowForEdit.cells[0].textContent = document.getElementById('editFirstName').value;
    selectedTrainerRowForEdit.cells[1].textContent = document.getElementById('editLastName').value;
    selectedTrainerRowForEdit.cells[2].textContent = document.getElementById('editLocation').value;

    hideEditModal();
}





let selectedTrainerRow;

function showDatePicker(button) {
    selectedTrainerRow = button.closest('tr');

    document.getElementById('datePickerModal').style.display = 'block';
}

function hideDatePicker() {
    document.getElementById('datePickerModal').style.display = 'none';
}


function deleteClient() {
    // Implement client deletion logic
}


function addAppointment() {
    const clientName = document.getElementById('clientName').value;
    const rawAppointmentDate = document.getElementById('appointmentDate').value;

    const appointmentDate = new Date(rawAppointmentDate);

    const formattedDate =
        appointmentDate.getFullYear() + '-' +
        padZero(appointmentDate.getMonth() + 1) + '-' +
        padZero(appointmentDate.getDate()) + ' ' +
        padZero(appointmentDate.getHours()) + ':' +
        padZero(appointmentDate.getMinutes());

    console.log('Client Name:', clientName);
    console.log('Appointment Date:', formattedDate);

    if (!clientName || !rawAppointmentDate) {
        alert('Please enter a client name and select a valid appointment date and time.');
        return;
    }

    console.log('Selected Trainer Row:', selectedTrainerRow);

    const appointmentsContainer = selectedTrainerRow.querySelector('td ul');

    console.log('Appointments Container:', appointmentsContainer);

    if (!appointmentsContainer) {
        alert('Error: Appointments container not found. Please check the DOM structure.');
        return;
    }

    const newAppointmentItem = document.createElement('li');
    newAppointmentItem.textContent = formattedDate;
    appointmentsContainer.appendChild(newAppointmentItem);

    hideDatePicker();

    alert('Appointment added successfully!');
}


function padZero(number) {
    return number < 10 ? '0' + number : number;
}



function showAddTrainerModal() {
    document.getElementById('trainerModal').style.display = 'block';
}

function hideAddTrainerModal() {
    document.getElementById('trainerModal').style.display = 'none';
}

function addTrainer() {
const firstName=document.getElementById('trainerFirstName').value;
const lastName=document.getElementById('trainerLastName').value;
const location=document.getElementById('trainerLocation').value;
const appointments='';
    if (firstName === null || lastName === null || location === null) {
        alert('Trainer not added. Please provide all details.');
        return;
    }

    // Create a new row for the trainer
    const newRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = firstName;

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = lastName;

    const locationCell = document.createElement('td');
    locationCell.textContent = location;

    const appointmentsCell = document.createElement('td');
    appointmentsCell.innerHTML ='<ul></ul><button onclick="showDatePicker(this)">Add Appointment</button>';

    const actionsCell = document.createElement('td');
    actionsCell.innerHTML = '<button onclick="showEditModal(this)">Edit</button> <button onclick="deleteTrainer(this)">Delete</button> <button onclick="showCalendar(this)">Show Calendar</button>';

    // Append cells to the new row
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(locationCell);
    newRow.appendChild(appointmentsCell);
    newRow.appendChild(actionsCell);

    // Append the new row to the table body
    const trainersTableBody = document.getElementById('trainersTableBody');
    trainersTableBody.appendChild(newRow);

sessionStorage.setItem('trainerData',trainersTableBody);

    alert('Trainer added successfully!');
hideAddTrainerModal();
}




function fillTableWithDemoData() {
    // Demo data for two trainers
    const demoData = [
        {
            firstName: 'Alice',
            lastName: 'Johnson',
            location: 'Fitness Studio A',
            appointments: ['2023-01-01 10:00', '2023-01-15 15:30']
        },
        {
            firstName: 'Bob',
            lastName: 'Smith',
            location: 'Gym B',
            appointments: ['2023-02-05 14:00', '2023-02-20 09:45']
        }
    ];

    const trainersTableBody = document.getElementById('trainersTableBody');

    trainersTableBody.innerHTML = '';

    demoData.forEach(trainer => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td contenteditable="true">${trainer.firstName}</td>
            <td contenteditable="true">${trainer.lastName}</td>
            <td contenteditable="true">${trainer.location}</td>
            <td>
                <ul>
                    ${trainer.appointments.map(appointment => `<li>${appointment}</li>`).join('')}
                </ul>
                <button onclick="showDatePicker(this)">Add Appointment</button>
            </td>
            <td>
                <button onclick="showEditModal(this)">Edit</button>
                <button onclick="showDeleteConfirmation(this)">Delete</button>
                <button onclick="showCalendar(this)">Show Calendar</button>
            </td>
        `;

        trainersTableBody.appendChild(newRow);
    });
}