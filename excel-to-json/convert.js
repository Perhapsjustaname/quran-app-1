const XLSX = require('xlsx'); // Correctly use XLSX here
const fs = require('fs');

// Read the Excel file
const workbook = XLSX.readFile("C:\\Users\\khawa\\Downloads\\SAHEEH INTERNATIONAL - SALAFI REVISION.xlsx"); // Match case with XLSX

// Select the first sheet
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert the sheet to JSON, treating the first row as headers
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// Write the JSON data to a file
fs.writeFileSync('output.json', JSON.stringify(data, null, 2));

console.log('Excel file converted to JSON successfully.');
