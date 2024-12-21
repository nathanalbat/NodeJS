const fs = require('fs');
const path = require('path');

// שמות קבצי הקלט
const inputFiles = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
    'file6.txt',
    'file7.txt',
    'file8.txt',
    'file9.txt',
    'file10.txt'
];

// שם קובץ הפלט
const outputFile = 'output.txt';

function copyLinesToFile(inputFiles, outputFile) {
    const writeStream = fs.createWriteStream(outputFile);

    for (let i = 0; i < inputFiles.length; i++) {
        const filePath = inputFiles[i];
        const linesToCopy = i + 1; // Number of lines to copy
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split(/\r?\n/);

            for (let j = 0; j < Math.min(linesToCopy, lines.length); j++) {
                writeStream.write(lines[j] + '\n');
            }
       
    }

    writeStream.end(() => {
        console.log(`Output written to ${outputFile}`);
    });
}

// Call the function
copyLinesToFile(inputFiles, outputFile);
