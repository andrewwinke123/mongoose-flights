import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String},
  price: {type: Number, min: 0}
})

const flightSchema = new Schema( {
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  airport: {
    type: String, 
    enum: ['AUS', 'CLT', 'DFW', 'DEN', 'LAX', 'SAN'], 
    default: 'DEN',
    required: true
  },
  flightNo: {
    type: Number, 
    min: 10, 
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
    let today = new Date 
    //let oneYearFromToday = new Date(today.getTime())
    today.setFullYear(today.getFullYear() + 1)
    return today
    }
  },
  tickets: [ticketSchema],
  menu: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})




const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}