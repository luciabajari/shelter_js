const connection = require('./db')

class AnimalService {

    getAnimals(res){
        connection.query('SELECT * from animal', function (error, results, fields) {
            if (error) throw error;
            console.log('Animals: ', results);

            res.json(results)
          });
        
    }

    getAnimal(animalId, res){
        const id = connection.escape(animalId + '')
        connection.query('SELECT * from animal WHERE id = ' + id, function (error, results, fields) {
            if (error) throw error;
            console.log('Animals: ', results);

            res.json(results)
          });
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