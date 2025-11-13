// components/AllReviewsSection.tsx

import * as React from 'react';
import { ReviewCard } from './ReviewCard';
import gsap from 'gsap';
import { Review } from './data/reviews';

interface AllReviewsSectionProps {
    reviews: Review[];
    totalCount: number;
}

export const AllReviewsSection: React.FC<AllReviewsSectionProps> = ({ 
    reviews, 
    totalCount 
}) => {
    const sectionRef = React.useRef<HTMLDivElement>(null);

    // GSAP Fade-in and stagger for the whole section
    // React.useEffect(() => {
    //     gsap.from(sectionRef.current, {
    //         opacity: 0,
    //         y: 20,
    //         duration: 0.8,
    //         ease: 'power2.out',
    //     });
    // }, []);

    return (
        <div ref={sectionRef} className="max-w-7xl mx-auto py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
                All Reviews ({totalCount})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                    // Applying a stagger to individual cards for a nice entrance effect
                    <div key={review.id} className="review-card-gsap">
                        <ReviewCard
                            reviewerName={review.reviewerName}
                            rating={review.rating}
                            reviewText={review.reviewText}
                        />
                        {/* <style jsx global>{`
                            .review-card-gsap {
                                animation-delay: ${index * 0.1}s;
                                animation-fill-mode: forwards;
                            }
                        `}</style> */}
                    </div>
                ))}
            </div>
        </div>
    );
};