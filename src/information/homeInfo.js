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
            title: "Above Par",
            description: "A PWA that allows users to save mini-golf courses, input up to 2 players scores, and save the game. ",
            languages: "React | Node.js | IndexDB",
            githubLink: "https://github.com/aarosan/above-par.git",
            deployedLink: "",
            projectLink: "",
        },
        {
            title: "Run Tracker",
            description: "A React application, where users log in to their unique account, save their data, and track their runs.",
            languages: "React | Node.js | Express.js | MySQL | OAuth",
            githubLink: "https://github.com/aarosan/run-tracker.git",
            deployedLink: "",
            projectLink: "",
        },
        {
            title: "Comic Book Search Engine",
            description: "A MERN application where users can search for comic books, utilizing the Marvel Comics RESTful API.",
            languages: "MongoDB | Express.js | React | Node.js",
            githubLink: "https://github.com/aarosan/comic-book-search-engine.git",
            deployedLink: "",
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