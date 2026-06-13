import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle, ChevronDown, Award, Quote, HelpCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { Review } from '../types';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(TESTIMONIALS_DATA);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [writeOpen, setWriteOpen] = useState(false);
  
  // Review form states
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Niagara Falls, NY');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview: Review = {
      id: `rev-custom-${Date.now()}`,
      name,
      location,
      rating,
      date: 'Just now',
      comment,
      avatarLetter: name.charAt(0).toUpperCase(),
      verified: true,
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    setName('');
    setComment('');
    
    setTimeout(() => {
      setSubmitted(false);
      setWriteOpen(false);
    }, 2500);
  };

  const filteredReviews = ratingFilter === 0 
    ? reviews 
    : reviews.filter(r => r.rating === ratingFilter);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold text-ak-red uppercase tracking-widest bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full inline-block">
              Driving Testimonials
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ak-dark tracking-tight leading-tight">
              What Our Customers Are Saying
            </h2>
            <p className="text-gray-600 text-sm.5">
              Read transparent 5-star ratings from local vehicle owners, families, commuters, and fleet clients who rely on AK Auto &amp; Tire Inc.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Filter controls */}
            <div className="inline-flex items-center space-x-1.5 bg-gray-50 border border-gray-200/50 p-1 rounded-xl">
              <button
                onClick={() => setRatingFilter(0)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer ${
                  ratingFilter === 0 ? 'bg-white text-ak-dark shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                All
              </button>
              {[5, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setRatingFilter(num)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg flex items-center space-x-1 cursor-pointer ${
                    ratingFilter === num ? 'bg-white text-ak-dark shadow-sm' : 'text-gray-500 hover:text-gray-750'
                  }`}
                >
                  <span>{num}</span>
                  <Star size={11} fill="currentColor" className="text-amber-500" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setWriteOpen(!writeOpen)}
              className="bg-ak-dark hover:bg-slate-800 text-white font-bold text-xs.5 py-2.5 px-4 rounded-xl shadow-sm cursor-pointer transition-colors"
            >
              Write A Review
            </button>
          </div>
        </div>

        {/* Expandable Write A Review Drawer Form block */}
        <AnimatePresence>
          {writeOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-rose-50/40 border border-dashed border-rose-200/85 p-6 rounded-2xl mb-12 overflow-hidden"
            >
              {submitted ? (
                <div className="py-6 text-center space-y-2">
                  <div className="inline-flex items-center justify-center p-3.5 bg-emerald-100 text-emerald-500 rounded-full animate-bounce">
                    <CheckCircle size={28} />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-gray-800">Review Submitted Successfully!</h3>
                  <p className="text-gray-500 text-xs">Thank you for your valuable feedback supporting AK Auto &amp; Tire Inc.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 max-w-xl mx-auto">
                  <h3 className="font-heading font-extrabold text-lg text-ak-dark">Share Your Experience</h3>
                  <p className="text-xs text-gray-500">Your comments help other local vehicle owners buy and maintain with certainty.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-750 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rachel Adams"
                        className="w-full text-xs p-3 bg-white border border-gray-200 rounded-lg focus:border-ak-red focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-750 mb-1">Location</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Niagara Falls, NY"
                        className="w-full text-xs p-3 bg-white border border-gray-200 rounded-lg focus:border-ak-red focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-755 mb-1.5">Rating</label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 cursor-pointer focus:outline-none"
                        >
                          <Star
                            size={20}
                            fill={star <= rating ? 'currentColor' : 'none'}
                            className={`${star <= rating ? 'text-amber-500' : 'text-gray-300'}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-750 mb-1">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share details about the work done, customer support, wait times, or values..."
                      className="w-full text-xs p-3 bg-white border border-gray-200 rounded-lg focus:border-ak-red focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setWriteOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-700 bg-transparent cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold text-white bg-ak-red hover:bg-ak-red-hover rounded-lg shadow-sm cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials List Grid Layout with visual quotes */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-250/70 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                {/* Floating Absolute Quote Icon to symbolize testimonials */}
                <Quote size={40} className="absolute right-6 top-6 text-rose-500/5 rotate-180" />

                <div>
                  {/* Stars Row */}
                  <div className="flex items-center space-x-1 text-amber-500 mb-4.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                    {[...Array(5 - rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="text-gray-200" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-600 text-xs.5 leading-relaxed italic mb-6">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Customer Details Row */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4.5">
                  <div className="flex items-center space-x-3.5">
                    {/* Circle Avatar */}
                    <div className="h-10 w-10 text-xs rounded-full bg-rose-50 text-ak-red border border-rose-100 font-extrabold flex items-center justify-center">
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-[13.5px] text-ak-dark leading-none">{rev.name}</h4>
                      <p className="text-[10px] text-gray-400 font-mono mt-1">{rev.location}</p>
                    </div>
                  </div>

                  {/* Verified & Date Badge */}
                  <div className="text-right">
                    <span className="inline-flex items-center text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-md border border-emerald-100 mb-1">
                      <CheckCircle size={9} className="mr-1 inline" /> Verified Customer
                    </span>
                    <span className="block text-[9px] text-gray-400 font-mono">{rev.date}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
