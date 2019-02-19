const connection = require('./db')
class HospitalService {

    getHospitals(){
        console.log('getHospitals() method')
    }

    getHospital(hospitalId){
        console.log('getHospitals() method')
    }
}

module.exports = new HospitalService();