const connection = require('./db')
class HotelService {

    getHotel(res){
        connection.query('SELECT * from hotel', function (error, results, fields) {
            if (error) throw error;
            res.json(results)
          });
    }
}

module.exports = new HotelService();