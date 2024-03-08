const fs = require('fs');

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