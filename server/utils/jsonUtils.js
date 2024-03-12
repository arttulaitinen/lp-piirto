const fs = require('fs');
// Muista tarkistaa FileSystem

function readUsers() {
    try {
        const users = fs.readFileSync('server/data/users.json');
        return JSON.parse(users);
    } catch (error) {
        console.error('Error reading users', error);
        return [];
    }
} 
function writeUsers(users) {
    try {
        fs.writeFileSync('server/data/users.json', JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing users', error);
    }
}
function readData() {
    try {
        const data = fs.readFileSync('server/data/data.json');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data', error);
        return [];
    }
}
export const writeData = (data) => {
    try {
        fs.writeFileSync('server/data/data.json', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data', error);
    }
};