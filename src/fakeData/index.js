// import androids from './android';
// import cameras from './camera';
// import laptops from './laptop';

const fakeData = [
    {
        name: "The Complete 2020 Web Development Bootcamp",
        img: "https://img-a.udemycdn.com/course/240x135/1565838_e54e_11.jpg",
        seller: "Dr. Angela Yu",
        price: 134.99,
        rating: "4.7",
    },
    {
        name: "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp",
        img: "https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg",
        seller: "Dr. Angela Yu",
        price: 134.99,
        rating: "4.8",
    },
    {
        name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
        img: "https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg",
        seller: "Jonas Schmedtmann",
        price: 134.99,
        rating: "4.7",
    },
    {
        name: "Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)",
        img: "https://img-a.udemycdn.com/course/240x135/2365628_0b60_7.jpg",
        seller: "Andrei Neagoie",
        price: 134.99,
        rating: "4.7",
    },
    {
        name: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2020",
        img: "https://img-a.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",
        seller: "Jonas Schmedtmann",
        price: 134.99,
        rating: "4.7",
    },
    {
        name: "The Complete Financial Analyst Course 2020",
        img: "https://img-a.udemycdn.com/course/240x135/648826_f0e5_4.jpg",
        seller: "365 Careers",
        price: 134.99,
        rating: "4.5",
    },
    {
        name: "Beginner to Pro in Excel: Financial Modeling and Valuation",
        img: "https://img-a.udemycdn.com/course/240x135/321410_d9c5_4.jpg",
        seller: "365 Careers",
        price: 134.99,
        rating: "4.7",
    },
    {
        name: "R Programming A-Z™: R For Data Science With Real Exercises!",
        img: "https://img-a.udemycdn.com/course/240x135/765242_2578.jpg",
        seller: "Kirill Eremenko",
        price: 134.99,
        rating: "4.5",
    },
    {
        name: "Data Science and Machine Learning Bootcamp with R",
        img: "https://img-a.udemycdn.com/course/240x135/821726_8071.jpg",
        seller: "Jose Portilla",
        price: 134.99,
        rating: "4.6",
    },
    {
        name: "Artificial Intelligence A-Z™: Learn How To Build An AI",
        img: "https://img-a.udemycdn.com/course/240x135/1219332_bdd7.jpg",
        seller: "Hadelin de Ponteves",
        price: 134.99,
        rating: "4.3",
    },
    {
        name: "Python for Computer Vision with OpenCV and Deep Learning",
        img: "https://img-a.udemycdn.com/course/240x135/1982382_e2cf.jpg",
        seller: "Jose Portilla",
        price: 134.99,
        rating: "4.3",
    },
    {
        name: "Data Science: Deep Learning in Python",
        img: "https://img-a.udemycdn.com/course/240x135/713104_d4cb.jpg",
        seller: "Lazy Programmer Inc.",
        price: 134.99,
        rating: "4.6",
    },
    {
        name: "An Entire MBA in 1 Course:Award Winning Business School Prof",
        img: "https://img-a.udemycdn.com/course/240x135/637930_9a22_19.jpg",
        seller: "Chris Haroun",
        price: 134.99,
        rating: "4.5",
    },
    {
        name: "Coding Interview Essentials: Data Structures & Algorithms",
        img: "https://img-a.udemycdn.com/course/240x135/3320842_e29d.jpg",
        seller: "Ibrahim Irfan",
        price: 134.99,
        rating: "4.7",
    },
    {
        name: "Intro To Dynamic Programming - Coding Interview Preparation",
        img: "https://img-a.udemycdn.com/course/240x135/1334144_3e81_4.jpg",
        seller: "El Farouk Yasser",
        price: 134.99,
        rating: "4.2",
    }


];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;