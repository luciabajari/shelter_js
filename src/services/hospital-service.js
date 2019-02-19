const connection = require('./db')

class HospitalService {

    getHospitals(res){
        connection.query('SELECT * from hospital', function (error, results, fields) {
            if (error) throw error;
            console.log('Hospital: ', results);
            res.json(results)
          });
    }

    // getHospital(hospitalId,res){
    //     const id = connection.escape(hospitalId + '')
    //     connection.query('SELECT * from hospital WHERE id = ' + id, function (error, results, fields) {
    //         if (error) throw error;
    //         console.log('HospitalById: ', results[0]);

    //         res.json(results[0]) //????????????????????????????? ERRE JOBB MEGOLDÁS!!!!!!!!!!
    //       });
    // }
}

module.exports = new HospitalService();