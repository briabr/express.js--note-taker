const util = require('util')
const fs = require('fs')
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
    read() {
      return readFileAsync('db/db.json', 'utf8');
    }
    write(){
        //change the note to JSON so it can be sotred in the db.json file
        return writeFileAsync ('db/db.json', JSON.stringify(note));
    }
    getNotes(){
        //return the notes stored in the read() function then parse the notes and return them
        return this.read().then((notes) => {
            let parsedNotes;
            // If notes isn't an array or can't be turned into one, send back a new empty array
            try {
              parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
              parsedNotes = [];
            }
            return parsedNotes;
          });
    }
    addNotes(){

    }
}

module.exports = new Store();