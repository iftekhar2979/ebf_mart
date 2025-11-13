
// --- MOCK REVIEW DATA (Matching the visual style) ---
export interface Review {
  id: number;
  reviewerName: string;
  rating: number;
  reviewText: string;
}

export const mockReviews: Review[] = [
  {
    id: 1,
    reviewerName: 'Kristin Watson',
    rating: 4.5,
    reviewText: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
  {
    id: 2,
    reviewerName: 'Kristin Watson', // Duplicated for grid filling
    rating: 4.5,
    reviewText: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
  {
    id: 3,
    reviewerName: 'Kristin Watson',
    rating: 4.5,
    reviewText: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
  {
    id: 4,
    reviewerName: 'Kristin Watson',
    rating: 4.5,
    reviewText: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
  {
    id: 5,
    reviewerName: 'Kristin Watson',
    rating: 4.5,
    reviewText: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
  {
    id: 6,
    reviewerName: 'Kristin Watson',
    rating: 4.5,
    reviewText: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
  },
];
