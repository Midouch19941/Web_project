<<<<<<< HEAD
const Review = require('../models/Review');
const { validationResult } = require('express-validator');
=======
const Review = require("../models/Review");
const { validationResult } = require("express-validator");
>>>>>>> mehdi

const ReviewController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res.status(200).json(reviews);
    } catch (error) {
      console.error(error);
<<<<<<< HEAD
      res.status(500).json({ message: 'Internal server error' });
=======
      res.status(500).json({ message: "Internal server error" });
>>>>>>> mehdi
    }
  },

  createReview: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
<<<<<<< HEAD

      const newReview = await Review.create(req.body);
      res.status(201).json(newReview);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
=======
      console.log("user", req.user);
      const data = {
        comment: req.body.comment,
        rating: req.body.rating,
        customer_name: req?.user?.nom
          ? `${req?.user?.nom} ${req?.user?.prenom}`
          : null,
        UserId: req.user?.id || null,
      };
      const newReview = await Review.create(data);
      res.status(201).json(newReview);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
>>>>>>> mehdi
    }
  },

  getReviewById: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
<<<<<<< HEAD
        return res.status(404).json({ message: 'Review not found' });
=======
        return res.status(404).json({ message: "Review not found" });
>>>>>>> mehdi
      }
      res.status(200).json(review);
    } catch (error) {
      console.error(error);
<<<<<<< HEAD
      res.status(500).json({ message: 'Internal server error' });
=======
      res.status(500).json({ message: "Internal server error" });
>>>>>>> mehdi
    }
  },

  updateReview: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
<<<<<<< HEAD
        return res.status(404).json({ message: 'Review not found' });
      }
      await review.update(req.body);
      res.status(200).json({ message: 'Review updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
=======
        return res.status(404).json({ message: "Review not found" });
      }
      await review.update(req.body);
      res.status(200).json({ message: "Review updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
>>>>>>> mehdi
    }
  },

  deleteReview: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.id);
      if (!review) {
<<<<<<< HEAD
        return res.status(404).json({ message: 'Review not found' });
      }
      await review.destroy();
      res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
=======
        return res.status(404).json({ message: "Review not found" });
      }
      await review.destroy();
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
>>>>>>> mehdi
};

module.exports = ReviewController;
