const fs = require('fs');

// 1. Create a JavaScript Object
const student = {
  name: "Sameer",
  rollNo: 215,
  city: "Ghaziabad",
  skills: ["Node.js", "React", "Java"]
};

// 2. Convert Object to JSON String
const jsonData = JSON.stringify(student, null, 2); // null, 2 for pretty printing

// 3. Write JSON to a file
fs.writeFile("student.json", jsonData, (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File 'student.json' created successfully!");

    // 4. Read JSON from the file
    fs.readFile("student.json", "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading file:", err);
      } else {
        // 5. Parse JSON string back to JavaScript Object
        const parsedData = JSON.parse(data);
        console.log("Read from file:", parsedData);
        console.log("Student Name:", parsedData.name);
      }
    });
  }
});
