/*** 
File: index.html
GUI Assignment: HW3
Austin Nguyen, UMass Lowell, austin_nguyen@student.uml.edu
Copyright (c) 2024. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.

Updated on October 29, 2021 by Austin Nguyen

This file contains the JavaScript code for the Multiplication Table Generator.
It will generate a table based on the user's input of the minimum and maximum values for the 
columns and rows. Only one function is present, generateTable(), which will provide two functions
for the site: error handling and table generation.

The first portion of the function will handle any errors that may occur when the user inputs values,
and will display an error message if any of the following occur:
 - Any input is invalid
 - Any input is not between -50 and 50
 - The minimum values are greater than the maximum values

The second portion of the function will generate the table based on the user's input. This uses a 
series of id tags to style the table, which will then be styled in detail within the CSS file. The
table is generated by two for loops: one for the columns and one nest loop for the rows to generate
the series of products for each row and column. The table will be displayed in the table-container.
***/
function generateTable() {
    document.getElementById("error-message").innerText = "";
    document.getElementById("table-container").innerHTML = "";
    
    // Get input values
    const minCol = parseInt(document.getElementById("minCol").value);
    const maxCol = parseInt(document.getElementById("maxCol").value);
    const minRow = parseInt(document.getElementById("minRow").value);
    const maxRow = parseInt(document.getElementById("maxRow").value);

    /* Handle any errors, clear any previous error messages and the table via innerHTML
    and innerText.
    References: 
    https://www.w3schools.com/jsref/prop_text_innertext.asp
    https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    */

    document.getElementById("error-message").innerText = "";
    document.getElementById("table-container").innerHTML = "";
    
    // Check if any input is invalid, return an appropriate error message
    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
        document.getElementById("error-message").innerText = "Please enter all numbers correctly.";
        return;
    }

    // Validate if inputs are between -50 and 50, return an appropriate error message
    if (minCol > 50 || maxCol > 50 || minRow > 50 || maxRow > 50) {
        document.getElementById("error-message").innerText = "All numbers must be between -50 and 50.";
        return;
    }
    if ((-50 > minCol ) || (-50 > maxCol) || (-50 > minRow) || (-50 > maxRow)) {
        document.getElementById("error-message").innerText = "All numbers must be between -50 and 50.";
        return;
    }
    
    // Validate if min values are less than max values, return an appropriate error message
    if (minCol > maxCol && minRow > maxRow) {
        document.getElementById("error-message").innerText = "Minimum values must be less than maximum values.";
        return;
    }

    if (minCol > maxCol ) {
        document.getElementById("error-message").innerText = "Minimum column values must be less than maximum values.";
        return;
    } 
    
    if (minRow > maxRow ) {
        document.getElementById("error-message").innerText = "Minimum row values must be less than maximum values.";
        return;
    }

    /*** Table Generation***
     * Will use tags of blankCell, colHeader, rowHeader, and value to style the table
     * blankCell: The top left cell where the columns and row will intersect, will be empty
     * colHeader: The header cells for the columns, must be fixed to the top of the table
     * rowHeader: The header cells for the rows, must be fixed to the left of the table
     * value: The cells containing the product of the row and column, will be the main content of
     * the table
     *  
     * A table object will be created with for the purpose of generating the table which will
     * replace the innerHTML of the table-container. Idea to collect the table in a string and 
     * pushed to the innerHTML was inspired by the following StackOverflow posts:
     * https://stackoverflow.com/questions/34232688/for-loop-with-array-doesnt-work-with-innerhtml
     * https://stackoverflow.com/questions/12996763/innerhtml-with-for-loop-in-javascript?rq=3
     * 
     * VERY Helpful documentation for how innerHTML works:
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
     * ***/

    // Set top left cell to be empty, giving it an id of blankCell, also this method 
    // does not allow tabs in the string
    let table = '<table><tr><th id="blankCell"></th>';

    // Create the table headers based on column range
    for (let col = minCol; col <= maxCol; col++) {
        let colHeader = `<th id="colHeader">${col}</th>`;
        table += colHeader;
    }
    table += '</tr>';
        
    // Generate table rows based on row range
    for (let row = minRow; row <= maxRow; row++) {
        // Create the row header, id of rowHeader, where in each row...
        let rowHeader = `<tr><th id="rowHeader">${row}</th>`;
        table += rowHeader;
        for (let col = minCol; col <= maxCol; col++) {
            // Create the cell with the product of the row and column, id of value
            let cell = `<td id="value">${row * col}</td>`;
            table += cell;
        }
        table += '</tr>';
    }
    table += '</table>';

    // Display the table in the container via innerHTML
    document.getElementById("table-container").innerHTML = table;
}