function generateTable() {
    // Clear previous error and table
    document.getElementById("error-message").innerText = '';
    document.getElementById("table-container").innerHTML = '';

    // Get input values
    const minCol = parseInt(document.getElementById("minCol").value);
    const maxCol = parseInt(document.getElementById("maxCol").value);
    const minRow = parseInt(document.getElementById("minRow").value);
    const maxRow = parseInt(document.getElementById("maxRow").value);

    // Error handling: Check if any input is NaN
    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
        document.getElementById("error-message").innerText = "Please enter all numbers correctly.";
        return;
    }

    // Validate if inputs are between -50 and 50
    if (minCol < -50 || maxCol < -50 || minRow < -50 || maxRow < -50) {
        document.getElementById("error-message").innerText = "All numbers must be between -50 and 50.";
        return;
    }

    if (minCol > 50 || maxCol > 50 || minRow > 50 || maxRow > 50) {
        document.getElementById("error-message").innerText = "All numbers must be between -50 and 50.";
        return;
    }

    // Create a table with dynamic range based on minCol, maxCol, minRow, and maxRow
    let table = '<table><tr><th>*</th>';

    // Create column headers
    for (let col = minCol; col <= maxCol; col++) {
        table += `<th>${col}</th>`;
    }
    table += '</tr>';

    // Generate table rows based on row range
    for (let row = minRow; row <= maxRow; row++) {
        table += `<tr><td>${row}</td>`;
        for (let col = minCol; col <= maxCol; col++) {
            table += `<td>${row * col}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';

    // Display the table in the container
    document.getElementById("table-container").innerHTML = table;
}