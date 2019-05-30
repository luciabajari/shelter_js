const connection = require('./db')
const jwt  = require('jsonwebtoken');

class OwnerService {

    getOwners(res){
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

    ownerLogin(ownerName,res){
        const name = connection.escape(ownerName + '')
       // const pw = connection.escape(ownerPassword + '') 
        //+'and password= ' + pw
        let sql = 'SELECT * from owner WHERE name = ' + name;
        connection.query(sql, [ownerName],  
            function (error, results, fields) {
                if (error) throw error;
                console.log("RES 0", results[0])
                return results[0]
                //res.json(results[0])
              });
    }


    ownerRegistration(ownerName,ownerEmail,ownerAddress,ownerPhoneNum,ownerPassword,ownerRole,res){
        let sql = "INSERT INTO owner (name, email ,address, phone_number, password, role) VALUES (?,?,?,?,?,?)";
        connection.query(sql, [ownerName,ownerEmail,ownerAddress,ownerPhoneNum,ownerPassword,ownerRole],  
        function (error, results, fields) {
            if (error) throw error;
            res.json(results)
          });
    }

    ownerModify(ownerId,ownerName,ownerEmail,ownerAddress,ownerPhoneNum,ownerPassword,ownerRole,res){
        const id = connection.escape(ownerId + '')
        let sql="UPDATE `owner` SET name=?, email=? ,address=?, phone_number=?, password=?, role=?  WHERE `owner`.`id` =" + id;
        let data= [ownerName,ownerEmail,ownerAddress,ownerPhoneNum,ownerPassword,ownerRole]
        connection.query(sql, data,function (error, results, fields) {
            if (error) throw error;
            res.json(results[0]) //????????????????????????????? ERRE JOBB MEGOLDÁS!!!!!!!!!!
          });
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