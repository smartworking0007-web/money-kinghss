export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    content: "The loan process was incredibly smooth. I received my funds within 24 hours just as promised. Truly the best financial service!",
    image: "/images/Testimonial/1.jpg", 
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Software Engineer",
    content: "Lowest interest rates I could find in the market. The user-friendly dashboard made tracking my application very easy.",
    image: "/images/Testimonial/2.jpg", 
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Entrepreneur",
    content: "Secured database and minimal documentation. I felt safe sharing my details and the approval was lightning fast.",
    image: "/images/Testimonial/3.jpg", 
    rating: 4,
  },
];