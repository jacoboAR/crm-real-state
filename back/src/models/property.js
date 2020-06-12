const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = Schema({
  createdAt: { type: Date, default: Date.now() },
  ref: { type: Number, required: true },
  address: { type: String, required: true, trim: true },
  province: { type: String, required: true },
  location: { type: String, required: true },
  rentPrice: { type: Number },
  sellPrice: { type: Number },
  webPrice: { type: Number },
  offerPrice: { type: Number },
  surface: { type: Number },
  usefulMeter: { type: Number },
  energyCertificate: { type: String, trim: true },
  touristLicense: { type: String, trim: true },
  published: { type: String, trim: true },
  rooms: { type: Array },
  bathrooms: { type: Array },
  capacity: { type: Number },
  toilet: { type: Boolean, default: false },
  seaViews: { type: Boolean, default: false },
  beachDistance: { type: Number },
  orientation: { type: String },
  patio: { type: Boolean, default: false },
  parking: { type: Number },
  storageRoom: { type: Number },
  petsFriendly: { type: Boolean, default: false },
  furnished: { type: Boolean, default: false },
  cabinets: { type: Number },
  cuisineType: { type: String },
  openKitchen: { type: Boolean, default: false },
  warmWater: { type: String },
  warmWaterType: { type: String },
  heating: { type: String },
  dishwasher: { type: Boolean, default: false },
  microwaves: { type: Boolean, default: false },
  clothesLine: { type: Boolean, default: false },
  oven: { type: Boolean, default: false },
  communityFee: { type: Number },
  floorsBuilding: { type: Number },
  constructionYear: { type: Number },
  elevator: { type: Boolean, default: false },
  garden: { type: Boolean, default: false },
  swimmingPool: { type: Boolean, default: false },
  bigQuilt: { type: Number },
  smallQuilt: { type: Number },
  bigSheet: { type: Number },
  smallSheet: { type: Number },
  bigPillow: { type: Number },
  smallPillow: { type: Number },
  bigTowel: { type: Number },
  smallTowel: { type: Number },
  // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
});

module.exports = mongoose.model('Property', PropertySchema, 'properties');
