const connection = require('./db')
class HotelService {

    getHotel(){
        console.log('getHotel() method')
    }
}

module.exports = new HotelService();