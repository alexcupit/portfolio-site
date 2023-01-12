export const projects = [
  {
    projectName: "Know It All",
    slug: "know-it-all",
    shortDesc: "An addictive daily quiz featuring lots of new technologies",
    longDesc:
      "Know It All was created as my final team project on the Northcoders Bootcamp. We were challenged to pitch three ideas for an app, spike lots of new technology and build an MVP within two weeks.\n\nWe wanted to challenge ourselves by utilising lots of technologies that hadn't been taught on the course so while simple in concept, it was a challenge to tackle so many new frameworks in the build.\n\nKnow It All is a quiz app that allows users to take part in a five question quiz each day, giving each user a score and daily streak. Creating an account allows users to access additional features such as creating and entering leaderboards with friends and unlocking achievements.",
    cardImage: "/KnowItAll/homepage.png",
    images: [
      "/KnowItAll/homepage.png",
      "/KnowItAll/quiz.png",
      "/KnowItAll/how-to-play.png",
      "/KnowItAll/profile.png",
    ],
    techStack: {
      frontend: ["Svelte", "TypeScript", "Firebase", "DaisyUI", "TailwindCSS"],
      backend: ["MongoDB, Mongoose", "Express.js", "Jest", "Node.js"],
    },
    labels: [
      "Svelte",
      "MongoDB",
      "TypeScript",
      "Firebase",
      "DaisyUI",
      "Team Project",
    ],
    githubURL: "https://github.com/alexcupit/tbc-FE/",
    productionURL: "https://knowitallquiz.netlify.app/",
  },
  {
    projectName: "Portfolio",
    slug: "portfolio",
    shortDesc: "This site! A chance to try using Vue.js for the first time",
    longDesc:
      "I created this site after completing my software development bootcamp as a chance to try a new framework (Vue.js) as well as compile some of the projects that I have completed during my time on the bootcamp. I'll be sure to keep adding to my portfolio as I take on extra challenges and continue to grow my skillset. Any feedback would be welcomed!",
    cardImage: "/Portfolio/homepage.png",
    images: ["/Portfolio/homepage.png", "/Portfolio/projects.png"],
    techStack: { frontend: ["Vue.js", "TailwindCSS", "DaisyUI"], backend: [] },
    labels: ["Vue.js", "DaisyUI", "Solo Project"],
    githubURL: "https://github.com/alexcupit/portfolio-site",
    productionURL: "",
  },
  {
    projectName: "NC News Frontend",
    slug: "nc-news-fe",
    shortDesc:
      "This is the front end to allow users to interact with my NC News Backend project. ",
    longDesc:
      "This project was my first solo app using React during a one week sprint. This responsive site displays the news articles from the database, allowing users to filter and order the results by various criteria.\n\nA logged in user is able to vote on articles, add their own comments to an article and votes on comments.\n\nI really enjoyed this project and looking back now that I have more UI knowledge and experince of using frameworks such as Tailwind, I can see how the design could be improved!",
    cardImage: "/nc-news-fe/example-article.png",
    images: [
      "/nc-news-fe/example-article.png",
      "/nc-news-fe/comments.png",
      "/nc-news-fe/404-page.png",
    ],
    techStack: { frontend: ["React", "CSS3"], backend: [] },
    labels: ["React", "JavaScript", "Solo Project"],
    githubURL: "https://github.com/alexcupit/fe-nc-news",
    productionURL: "https://acnews.netlify.app/",
  },
  {
    projectName: "NC News Backend",
    slug: "nc-news-be",
    shortDesc:
      "An API to interact with a PostgreSQL database featuring news articles, votes and comments",
    longDesc:
      "This restful API features multiple endpoints for interacting with a PostgreSQL database. The API is designed to allow multiple queries on certain endpoints to display the data as per the request, all while protecting from SQL injection.\n\nI really enjoyed working on this project for a week during the bootcamp, using test driven development to ensure the server responds as expected with robust error handling too.",
    cardImage: "/nc-news-be/homepage.png",
    images: ["/nc-news-be/homepage.png", "/nc-news-be/readme.png"],
    techStack: { frontend: [], backend: ["Express.js", "PostgreSQL", "Jest"] },
    labels: ["PostgreSQL", "Express.js", "Solo Project"],
    githubURL: "https://github.com/alexcupit/be-nc-news",
    productionURL: "https://black-springbok-cap.cyclic.app/api",
  },
  {
    projectName: "Wordle Clone",
    slug: "wordle-clone",
    shortDesc: "A first attempt at working with React",
    longDesc:
      "For my first pair programming project using React, we decided to make a clone of the ever popular Wordle game. Over this two day sprint, we kept styling to a minimum but I was pleased to gain experience using a variety of React hooks to create a simple but effective single page application.",
    cardImage: "/wordle-clone/in-play.png",
    images: ["/wordle-clone/empty.png", "/wordle-clone/in-play.png"],
    techStack: { frontend: ["React"], backend: [] },
    labels: ["React", "Team Project"],
    githubURL: "https://github.com/alexcupit/wordle-clone",
    productionURL: "",
  },
];
