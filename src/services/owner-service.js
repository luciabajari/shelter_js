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


    ownerRegistration(res){

    }

    ownerModify(ownerId,res){

    }

    ownerDelete(ownerId,res){
        const id = connection.escape(ownerId + '')
        var sql = "DELETE FROM owner WHERE id = " + id;
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            console.log('OwnerById: ', results[0]);
            res.json(results[0]) //????????????????????????????? ERRE JOBB MEGOLDÁS!!!!!!!!!!
          });
    }


}

module.exports = new OwnerService();