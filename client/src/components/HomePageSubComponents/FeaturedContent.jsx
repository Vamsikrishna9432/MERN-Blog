import { Card } from "flowbite-react";
import cardImage from "../../assets/card-image.webp";
const latestPosts = [
    {
        id: 1,
        date: '02-08-2024',
        title: "10 JavaScript Projects",
        description: 'You should know about 10 projects, that will make you get placed in MNCYou should know about 10 projects, that will make you get placed in',
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 2,
        date: '02-07-2024',
        title: "A Beginner's Guide to React",
        description: "Learn React from scratch with this comprehensive guide.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 3,
        date: '02-06-2024',
        title: "Python Tips and Tricks",
        description: "Boost your Python skills with these useful tips and tricks.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 4,
        date: '02-05-2024',
        title: "Mastering CSS Flexbox",
        description: "Become a CSS Flexbox pro with this in-depth tutorial.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 5,
        date: '02-04-2024',
        title: "Introduction to Data Science",
        description: "Discover the world of data science and its applications.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 6,
        date: '02-03-2024',
        title: "The Art of UI/UX Design",
        description: "Learn the principles of UI/UX design and create stunning interfaces.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 7,
        date: '02-02-2024',
        title: "Advanced JavaScript Concepts",
        description: "Dive deep into advanced JavaScript topics and enhance your skills.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 8,
        date: '02-01-2024',
        title: "Introduction to Machine Learning",
        description: "Get started with machine learning and explore its possibilities.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 9,
        date: '01-31-2024',
        title: "Learning Git and GitHub",
        description: "Master version control with Git and collaborate efficiently using GitHub.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 10,
        date: '01-30-2024',
        title: "Building Responsive Websites",
        description: "Create websites that look great on all devices with responsive design techniques.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 11,
        date: '01-29-2024',
        title: "Java Programming Basics",
        description: "Learn the fundamentals of Java programming language for beginners.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 12,
        date: '01-28-2024',
        title: "Getting Started with HTML5",
        description: "Start your journey into web development with HTML5.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 13,
        date: '01-27-2024',
        title: "CSS3 Styling Techniques",
        description: "Explore modern CSS3 styling techniques and make your websites stand out.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 14,
        date: '01-26-2024',
        title: "Essential Linux Commands",
        description: "Master essential Linux commands and navigate your system like a pro.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    },
    {
        id: 15,
        date: '01-25-2024',
        title: "Getting Started with Node.js",
        description: "Learn the basics of Node.js and kickstart your backend development journey.",
        image: "https://pixabay.com/photos/laptop-typing-working-pink-woman-8499942/",
    }
  ];

const FeaturedContent = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6">
         <h2 className="text-2xl mb-4 font-bold">Featured Content</h2>
         <div className="w-full flex items-center gap-5 overflow-scroll flex-shrink-0">
              {latestPosts.map((each) => (
                <div className="flex-shrink-0 w-full max-w-sm" key={each.id}>
                    <Card key={each.id}  imgSrc={cardImage} imgAlt={each.title}>
                        <h2 className="text-xl font-bold">{each.title}</h2>
                        <p className="text-grey-400">Nov 15 - 15 min read</p>
                    </Card>
                </div>
              ))}
         </div>
      </div>
  )
}

export default FeaturedContent