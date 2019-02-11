const connection = require('./db')

class AnimalService {

    getAnimals(){
        connection.query('SELECT * from animal', function (error, results, fields) {
            if (error) throw error;
            console.log('Animals: ', results);

            return results;
          });
        
    }

    getAnimal(animalId){
        
    }

    getCats(){

    }

    getDogs(){

    }

    animalRegistration(){

    }

    animalModify(animalId){

    }

    animalDelete(animalId){

    }


}

module.exports = new AnimalService();