const connection = require('./db')
class OwnerService {

    getowners(res){
        connection.query('SELECT * from owner', function (error, results, fields) {
            if (error) throw error;
            console.log('Owners: ', results);
            res.json(results)
          });
    }

    getOwner(ownerId,res){
        const id = connection.escape(ownerId + '')
        connection.query('SELECT * from owner WHERE id = ' + id, function (error, results, fields) {
            if (error) throw error;
            console.log('ownerId: ', results[0]);
            res.json(results[0]) //????????????????????????????? ERRE JOBB MEGOLDÁS!!!!!!!!!!
          });
        
    }


    ownerRegistration(){

    }

    ownerModify(ownerId){

    }

    ownerDelete(ownerId){

    }


}

module.exports = new OwnerService();