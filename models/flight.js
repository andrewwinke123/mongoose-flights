import mongoose from "mongoose"

const Schema = mongoose.Schema

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
    let oneYearFromToday = new Date(today.getTime())
    oneYearFromToday.setFullYear(today.getFullYear() + 1)
    return oneYearFromToday
    }
  },
}, {
  timestamps: true
})




const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}