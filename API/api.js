import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection string
const atlasUri = "mongodb+srv://aastikn:2kBw2sn0tfsXmGx6@cluster0.jtyu7a2.mongodb.net/"


// Connect to MongoDB Atlas
mongoose.connect(atlasUri, {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Movie Rating Schema
const movieRatingSchema = new mongoose.Schema({
  imageUrl: String,
  movieName: String,
  review: String,
  rating: Number,
});

const MovieRating = mongoose.model('MovieRating', movieRatingSchema);

// API routes
app.get('/api/ratings', async (req, res) => {
  try {
    const ratings = await MovieRating.find();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/ratings', async (req, res) => {
  const rating = new MovieRating({
    imageUrl: req.body.imageUrl,
    movieName: req.body.movieName,
    review: req.body.review,
    rating: req.body.rating,
  });

  try {
    const newRating = await rating.save();
    res.status(201).json(newRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));