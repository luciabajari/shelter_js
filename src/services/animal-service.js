const connection = require('./db')

class AnimalService {

    getAnimals(res){
        connection.query('SELECT * from animal', function (error, results, fields) {
            if (error) throw error;
            //console.log('Animals: ', results);
            res.json(results)
          });
        
    }

    getAnimal(animalId, res){
        const id = connection.escape(animalId + '')
        connection.query('SELECT * from animal WHERE id = ' + id, function (error, results, fields) {
            if (error) throw error;
            console.log('AnimalById: ', results[0]);

            res.json(results[0]) //????????????????????????????? ERRE JOBB MEGOLDÁS!!!!!!!!!!
          });
    }

    getCats(res){
        connection.query("SELECT * FROM animal WHERE animal_type = 'CAT'", function (error, results, fields) {
            if (error) throw error;
            console.log('Cats: ', results);

            res.json(results)
          });
    }

    getDogs(res){
        connection.query("SELECT * FROM animal WHERE animal_type = 'DOG'", function (error, results, fields) {
            if (error) throw error;
            console.log('Dogs: ', results);
            res.json(results)
          });

    }

    animalRegistration(animalName,animalAge,res){
        // connection.query("INSERT INTO `animal` (`id`, `name`, `age`, `animal_type`, `create_date`, `status`, `description`, `get_on_well_with_cats`, `get_on_well_with_dogs`, `get_on_well_with_kids`, `owner_id`, `hotel_id`, `hospitals`, `breed`) VALUES (NULL, 'Nyafi', '4', 'CAT', CURRENT_TIMESTAMP, '0', 'Nyafi leírás', '1', '0', '1', '1', '1', '1', 'breed_nyafi')", 
        // function (error, results, fields) {
        //     if (error) throw error;
        //     console.log('Registrated_animal: ', results);
        //     res.json(results)
        //   });

        
        const name = connection.escape(animalName + '')
        const age = connection.escape(animalAge + '')
        let sql = "INSERT INTO `animal` (`name`, `age`) VALUES (?,?)";
        connection.query(sql, [name, age ],  function (error, results, fields) {
            if (error) throw error;
            console.log('Registrated_animal: ', results);
            res.json(results)
          });

    }

    animalModify(animalId){

    }

    animalDelete(animalId){

    }


}

module.exports = new AnimalService();