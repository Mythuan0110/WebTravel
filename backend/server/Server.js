const { ODataServer } = require('odata-server');
const { MongooseAdapter } = require('odata-server-mongoose');

// Kết nối đến MongoDB
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Định nghĩa schema
const tourSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: Number, required: true },
  photo: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  maxGroupSize: { type: Number, required: true },
  reviews: [{ type: mongoose.Types.ObjectId, ref: 'Review' }],
  featured: { type: Boolean, default: false },
});

// Tạo model
const Tour = mongoose.model('Tour', tourSchema);

// Tạo adapter  
const adapter = new MongooseAdapter({
  model: Tour,
});

// Tạo OData server
const server = ODataServer()
  .model(Tour, adapter)
  .listen(process.env.PORT || 4000);

console.log(`Server is running on port ${process.env.PORT || 4000}`);
