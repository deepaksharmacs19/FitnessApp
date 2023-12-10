<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Fitness Trainer App</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script type="text/javascript" src="js/index.js"></script>
</head>
<body>
    <div class="container">
        <h1>Fitness Trainer App</h1>
<button onclick='fillTableWithDemoData()'>Add demo data for testing</button>
        <table>
            <!-- Table header -->
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Location</th>
                <th>Appointments</th>
                <th>Action</th>
            </tr>
<tbody id="trainersTableBody">
            
</tbody>
        </table>
<button onclick="showAddTrainerModal()">Add Trainer</button>

    </div>
<div id="datePickerModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="hideDatePicker()">&times;</span>
        <label for="appointmentDate">Appointment Date:</label>
        <input type="datetime-local" id="appointmentDate">
        <label for="clientName">Client Name:</label>
        <input type="text" id="clientName">
        <button onclick="addAppointment()">Add Appointment</button>
    </div>
</div>

     <ul id="trainersList"></ul>

<div id="trainerModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="hideAddTrainerModal()">&times;</span>
        <label for="trainerFirstName">Trainer First Name: </label>
        <input type="text" id="trainerFirstName">
        <label for="trainerLastName">Trainer Last Name: </label>
        <input type="text" id="trainerLastName">
        <label for="trainerLocation">Location: </label>
        <input type="text" id="trainerLocation">

        <button onclick="addTrainer()">Add Trainer</button>
    </div>
</div>



<div id="editModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="hideEditModal()">&times;</span>
        <label for="editFirstName">First Name:</label>
        <input type="text" id="editFirstName">
        <label for="editLastName">Last Name:</label>
        <input type="text" id="editLastName">
        <label for="editLocation">Location:</label>
        <input type="text" id="editLocation">
        <button onclick="saveEdit()">Save</button>
    </div>
</div>

</body>
</html>
