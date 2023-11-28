document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const food = document.getElementById("food").value;
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        
        const newRow = table.insertRow(table.rows.length);
        const cells = [
            newRow.insertCell(0),
            newRow.insertCell(1),
            newRow.insertCell(2),
            newRow.insertCell(3),
            newRow.insertCell(4),
            newRow.insertCell(5),
            newRow.insertCell(6),
            newRow.insertCell(7),
        ];

        
        cells[0].innerHTML = firstName;
        cells[1].innerHTML = lastName;
        cells[2].innerHTML = address;
        cells[3].innerHTML = pincode;
        cells[4].innerHTML = gender;
        cells[5].innerHTML = food;
        cells[6].innerHTML = state;
        cells[7].innerHTML = country;

        
        form.reset();
    });
});
