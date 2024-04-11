// This is where I am storing the text information for the Home Page. I will be calling on this object frequently thought pages/home.jsx

const INFO = {
    intro: {
            name: "Aaron Sanchez",
            bio: `Hello, my name is Aaron!

                I'm a Full-Stack Developer based in Austin, TX.
          
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat odio id urna ullamcorper luctus. Mauris et lacus eget arcu cursus vestibulum sed nec tortor. Nulla tortor velit, molestie et vulputate quis, imperdiet id elit. Proin at commodo est. In nec tortor aliquet, finibus mi et, eleifend nisl.`,
            headshot: '../assets/headshot.jpg'
    },

    headers: {
            project: "Projects",
            viewMore: "View More"
    },

    projects: [
        {
            title: "Recipe Finder",
            description: "A single page front-end application to find recipe and movie recommendations based on user input. This application features the Edamam API and The Movie Database API.",
            participation: "I executed this project in a group of 3, where I designed the wireframe using Figma, and handled the Edamam API by setting up its connection and routes.",
            languages: "HTML | CSS | Tailwind | JavaScript",       
            githubLink: "https://github.com/aarosan/recipe-finder",
            deployedLink: "https://aarosan.github.io/recipe-finder/",
            projectLink: "",
        },
        {
            title: "Fitness Tracker",
            description: "A web application, where users can create and log in to their unique account, save their data, and track their runs. This project also features Google OAuth access for user accounts.",
            participation: "I executed this project in a group of 4, where I coded the backend routes, worked with MySQL, as well as connected the Google OAuth access.",
            languages: "HTML (Handlebars) | CSS | JavaScript | Node.js | MySQL | Google OAuth",
            githubLink: "https://github.com/aarosan/fitness-tracker.git",
            deployedLink: "https://run-tracker-aa4292a38872.herokuapp.com/",
            projectLink: "",
        },
        {
            title: "Personal Portfolio",
            description: "A React application to show personal coding projects.",
            participation: "I independently executed this project.",
            languages: "React | Node.js",
            githubLink: "https://github.com/aarosan/react-portfolio.git",
            deployedLink: "https://aarosan.com",
            projectLink: "",
        }
    ],

    contact: {
        title: "Contact Me!",
        githubProfle: "",
        linkedInProfile: "",
        email: "aaron.ross.sanchez@gmail.com"
    }


}

export default INFO;