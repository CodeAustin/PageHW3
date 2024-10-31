function generateTable() {
    // Get input values
    const minCol = parseInt(document.getElementById("minCol").value);
    const maxCol = parseInt(document.getElementById("maxCol").value);
    const minRow = parseInt(document.getElementById("minRow").value);
    const maxRow = parseInt(document.getElementById("maxRow").value);

    // Handle any errors
    // Check if any input is invalid
    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
        document.getElementById("error-message").innerText = "Please enter all numbers correctly.";
        return;
    }

    // Validate if inputs are between -50 and 50
    if ((50 < minCol < -50) || (50 < maxCol < -50) || (50 < minRow < -50) || (50 < maxRow < -50)) {
        document.getElementById("error-message").innerText = "All numbers must be between -50 and 50.";
        return;
    }
    
    // Validate if min values are less than max values 
    if (minCol > maxCol && minRow > maxRow) {
        document.getElementById("error-message").innerText = "Minimum values must be less than maximum values.";
        return;
    } else if (minCol > maxCol ) {
        document.getElementById("error-message").innerText = "Minimum column values must be less than maximum values.";
        return;
    } else  if (minRow > maxRow ) {
        document.getElementById("error-message").innerText = "Minimum row values must be less than maximum values.";
        return;
    }

    // Set top left cell to be empty
    let table = '<table><tr><th id="starValue"></th>';

    // Create the table headers based on column range
    for (let col = minCol; col <= maxCol; col++) {
        table += `<th id="colHeader">${col}</th>`;
    }
    table += '</tr>';
        
    // Generate table rows based on row range
    for (let row = minRow; row <= maxRow; row++) {
        table += `<tr><td id="rowHeader">${row}</td>`;
        for (let col = minCol; col <= maxCol; col++) {
            table += `<td id="value">${row * col}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';

    // Display the table in the container
    document.getElementById("table-container").innerHTML = table;
}