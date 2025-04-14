const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Welcome to my Portfolio",
  description:
    "A passionate individual who thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Welcome to my Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "John Emmanuel",

  subtitle1:
    "|| Software Developer || Cross-Platform Developer || Cloud & AI Enthusiast || Data Engineer ||",

  subTitle:
    "I am a passionate Software Engineer with expertise in Android development, Web applications, Cloud technologies, and Artificial Intelligence. My experience spans across Java, Python, Flutter, JavaScript (Supersets), DBMS & Cloud Services, where I have successfully built scalable and high-performing applications.",
  resumeLink:
    "https://drive.google.com/file/d/1d4DpW-1VLCGjng6glTCpXQJ4gYXfh4I3/view?usp=sharing",
  githubProfile: "https://github.com/Motupallisailohith",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/john672000",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/john-emmanuelraj/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:tjemmanuelraj@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      skills: [
        "🌟 Fine-tune and deploy machine learning models using TensorFlow, Keras, and PyTorch for natural language processing (NLP) tasks.",
        "🌟 Utilize pretrained models like BERT with frameworks such as PyTorch and TensorFlow for tasks like named entity recognition (NER).",
        "🌟 Develop and integrate AI models into applications for data extraction and analysis using Scikit-learn and deep learning libraries.",
        "🌟 Process various forms of data, including text and audio, with machine learning techniques leveraging TensorFlow, Keras, and Scikit-learn.",

      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          iconifyClassname: "simple-icons:tensorflow",
          style: {
            backgroundColor: "transparent",
            color: "#f38014",
          },
        },
        {
          skillName: "Keras",
          iconifyClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          iconifyClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#e63e12",
          },
        },
        {
          skillName: "Scikit-Learn",
          iconifyClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#f99c3f",
          },
        },
      ],
    },
    {
      title: "Full-Stack Development",
      fileName: "DataScienceImg",
      skills: [
        "🌟 Build and deploy full stack applications using Node.js, FastAPI, and .NET for backend services, enabling robust API development and real-time processing.",
        "🌟 Develop modern frontend interfaces using Angular, Flutter (for cross-platform apps), and React Bootstrap, with efficient bundling through Webpack.",
        "🌟 Design seamless data layers and ensure reliable operations using PostgreSQL and MongoDB, incorporating thorough validation and error handling.",
        "🌟 Implement scalable workflows with clean architecture, real-time communication, and comprehensive documentation across the full stack.",

      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          iconifyClassname: "simple-icons:nodedotjs",
          style: {
            backgroundColor: "transparent",
            color: "#5FA04E",
          },
        },
        {
          skillName: "FastAPI",
          iconifyClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "transparent",
            color: "#009688",
          },
        },
        {
          skillName: "WebPack",
          iconifyClassname: "simple-icons:webpack",
          style: {
            backgroundColor: "transparent",
            color: "#8DD6F9",
          },
        },
        {
          skillName: "MongoDB",
          iconifyClassname: "simple-icons:mongodb",
          style: {
            backgroundColor: "transparent",
            color: "#47A248",
          },
        },
        {
          skillName: "Angular",
          iconifyClassname: "simple-icons:angular",
          style: {
            backgroundColor: "transparent",
            color: "#dd0836",
          },
        },
        {
          skillName: "PostgreSQL",
          iconifyClassname: "simple-icons:postgresql",
          style: {
            backgroundColor: "transparent",
            color: "#4169E1",
          },
        },
        {
          skillName: "Flutter",
          iconifyClassname: "simple-icons:flutter",
          style: {
            backgroundColor: "transparent",
            color: "#258ecf"
          },
        },
        {
          skillName: "Docker",
          iconifyClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
            color: "#326CE5",
          },
        },
        {
          skillName: ".NET",
          iconifyClassname: "simple-icons:dotnet",
          style: {
            backgroundColor: "transparent",
            color: "#6d277d",
          },
        },
        {
          skillName: "Railway",
          iconifyClassname: "simple-icons:railway",
          style: {
            backgroundColor: "transparent",
            color: "#0B0D0E",
          },
        },
        {
          skillName: "kubernetes",
          iconifyClassname: "simple-icons:kubernetes",
          style: {
            backgroundColor: "transparent",
            color: "#326CE5",
          },
        },
        {
          skillName: "ReactBootstrap",
          iconifyClassname: "simple-icons:reactbootstrap",
          style: {
            backgroundColor: "transparent",
            color: "#7952b3",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      skills: [
        "🌟 Deploy applications and machine learning models on cloud platforms.",
        "🌟 Set up and manage cloud-based resources (e.g., storage, databases, computing).",
        "🌟 Automate deployment processes using CI/CD pipelines for cloud-based applications.",
        "🌟 Ensure scalability and reliability of applications in the cloud environment.",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud",
          iconifyClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Alibaba Cloud",
          iconifyClassname: "simple-icons:alibabacloud",
          style: {
            color: "#FF6A00",
          },
        },
        {
          skillName: "AWS",
          iconifyClassname: "simple-icons:amazonwebservices",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "ElasticCloud",
          iconifyClassname: "simple-icons:elasticcloud",
          style: {
            color: "#005571",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2dac5c",
      },
      profileLink: "https://www.hackerrank.com/profile/tjemmanuelraj",
    }, {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#fea116",
      },
      profileLink: "https://leetcode.com/u/8XewhrOeut/",
    },
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#303030",
      },
      profileLink: "https://github.com/john672000",
    },

  ],
};
//Education Page
const eduHeader = {
  title: "Education & Participation",
  description:
    "I hold both a Master's and Bachelor's degree in Computer Science and Engineering.",

  sections: [
    {
      title: "Academic Background",
      experiences: [
        {
          title: "University of Central Missouri",
          company: "🌐 ucmo.edu",
          company_url: "https://www.ucmo.edu/",
          logo_path: "UCM.png",
          duration: "Master's in Computer Science, Missouri, United States of America",
          location: "2022-2024",
          description:
            "During my Master's in Computer Science and Engineering, I gained a deep understanding of Advanced Algorithms, Advanced Operating Systems, and Advanced Database Systems, which enhanced my problem-solving and technical skills. Additionally, I explored cutting-edge topics such as Cloud Computing, Machine Learning, and Big Data Analytics, which allowed me to develop expertise in modern computing paradigms and data-driven technologies.",
          color: "#0879bf",
        },
        {
          title: "Karunya Institute of Technology & Sciences",
          company: "🌐 karunya.edu ",
          company_url: "https://karunya.edu/",
          logo_path: "Karunya.jpg",
          duration: "Bachelor's in Computer Science & Engineering, Tamil Nadu, India",
          location: "2018-2022",
          description:
            "Throughout my Bachelor's in Computer Science and Engineering, I built a strong foundation in core concepts such as Data Structures & Algorithms and Advanced Java. I also gained proficiency in multiple programming languages, including Python, C/C++, and C#, which helped me develop versatile software development skills. Additionally, I explored the fundamentals of Machine Learning, allowing me to apply data-driven approaches to solve complex problems.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience & Certifications",
  subtitle: "Work & Internship",
  description:
    "I have worked in various companies and with diffrent technologies. I also actively participate in Hackathons. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Plural Technology Intern",
          company: "Plural Technology Pvt Ltd",
          company_url: "https://www.pluraltechnology.com/",
          logo_path: "plural.png",
          duration: "OCT 2024 - CURRENT",
          location: "United States of America",
          description:
            "Developed cross-platform mobile applications using Flutter, ensuring consistent performance and user experience across iOS and Android. Built and maintained RESTful APIs with .NET Core, improving backend performance and scalability by optimizing request handling and reducing response times by 30%. Integrated Python FastAPI with machine learning models to process and analyze real-time data, enhancing data processing efficiency by 40%. Implemented data synchronization between mobile applications and backend services, improving data accuracy and consistency across platforms. Utilized containerization technologies like Docker for seamless deployment of backend services, reducing deployment time by 25%. Integrated authentication mechanisms (e.g., OAuth2) for secure user login and data access in mobile and web applications, improving overall security by 35%. Optimized API endpoints in .NET Core and FastAPI, reducing response times and improving user satisfaction by 20%. Collaborated with frontend and backend teams using Git and GitHub, ensuring version control and improving code integration and team productivity by 30%.",
          color: "#0879bf",
        },
        {
          title: "Cognizant Intern",

          company_url: "https://www.cognizant.com/us/en",
          company: "Cognizant Technology Solutions",
          logo_path: "Cognizant_Logo.png",
          duration: "DEC 2021 - May 2022",
          location: "Banglore, India",
          description:
            "• Developed and optimized RESTful web services using Spring Boot and Spring MVC, reducing average response time by 25% through effectivecaching and database query optimization. • Implemented micro services architecture with Spring Cloud to enhance scalability and service resilience, resulting in a 30% reduction in system downtime. • Refactored legacy code bases to integrate Spring Boot, improving application performance and reducing API response times by 20% through efficient resource management and streamlined service layer logic. • Designed and developed a full-functioning e-commerce platform integrated with AWS, leveraging Neo4j for database management, improving system reliability by 35%. • Created and deployed Android applications using Android Studio, Java, and Kotlin, enhancing app performance and user experience, resulting in a 20% increase in user retention. • Optimized frontend development by implementing responsive designs using HTML, CSS, and Bootstrap, reducing page load times by 30% and bounce rates by 25%.",
          color: "#0879bf",
        },
        {
          title: "OaksPro Intern",
          company: "OaksPro Software Solutions",
          company_url: "https://oakspro.com/",
          logo_path: "oaks_logo.png",
          duration: "DEC 2020 - May 2021",
          location: "Hyderabad, India",
          description:
            "• Developed dynamic and responsive web applications using HTML, Bootstrap, PHP, and MySQL, enhancing user experience and reducing page load times by 30%. • Optimized database queries and server-side scripting, resulting in a 40% reduction in response times and improved application performance. • Implemented frontend enhancements and responsive designs, reducing bounce rates by 25% and improving user engagement. • Leveraged caching strategies such as Redis and browser-based caching, reducing server load and improving content delivery speed by 35%. • Streamlined version control and collaboration by utilizing Git and GitHub, ensuring smooth project development and reducing code conflicts by 40%. • Deployed applications on cloud platforms such as AWS and Azure, enhancing scalability and reducing infrastructure costs by 25%.",
          color: "#0879bf",
        },
      ],
    },
  ],
};
//certifications
const certifications = {
  certifications: [
    {
      siteName: "Python Essentials --PCAP",
      iconifyClassname: "simple-icons:python",
      style: {
        color: "#3776AB",
      },

    }, {
      siteName: "Cybersecurity Essentials - CISCO",
      iconifyClassname: "simple-icons:cisco",
      style: {
        color: "#1BA0D7",
      },

    },
    {
      siteName: "Java Programming - Great Learning",
      iconifyClassname: "simple-icons:greatlearning",
      style: {
        color: "#0E39A9",
      },

    },

    {
      siteName: "WebWord Press -- Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },

    },
    {
      siteName: "SoftSkills -- TCS",
      iconifyClassname: "simple-icons:tcs",
      style: {
        color: "#EE3984",
      },

    },

  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are open-source and are mostly built using small scale infrastructure.",

  sections: [
    {
      title: "Projects",
      experiences: [
        {
          title: "NER using BERT",
          company: "GitHub-->",
          company_url: "https://github.com/john672000/Entity_Recognition-Machine-Learning",
          logo_path: "Entity_REG.png",
          duration: "Python, Dart",
          location: "Pytorch, BERT, FastAPI, Tensorflow",
          description:
            "Named Entity Recognition (NER) using BERT with FastAPI and TensorFlow. The project focuses on extracting named entities from text data using the BERT model, providing a robust solution for various NLP tasks. (My use case was to extract the emergency data for a smaple 911 call dataset)",
          color: "#0879bf",
        },
        {
          title: "Movie-Recommender-System",
          company: "GitHub-->",
          company_url: "https://github.com/john672000/Movie-Recommender-System----Python-ML_CountVectorizer-Cosine_Similarity-from-SCIKIT-LEARN.git",
          logo_path: "mrs_logo.png",
          duration: "Python",
          location: "Scikit-Learn, Cosine_similarity, Tkinter",
          description:
            "Developing a Movie Recommendation System using Machine Learning CountVectorizer & Cosine_Similarity from SCIKIT_LEARN and featuring Tkinter UI",
          color: "#0879bf",
        },
        {
          title: "Face-Recognition",
          company: "GitHub-->",
          company_url: "https://github.com/john672000/Face-Recognition-using--Machine-Learning-KNN.git",
          logo_path: "gcp_logo.png",
          duration: "Python",
          location: "Python-Pillow, Tkinter",
          description:
            "The main aspect of this project is to make the model learn faces and recognize it when identified in the stream. I've used KNN Model and Tkinter as GUI for efficient and easier User-Interface",
          color: "#0879bf",
        },
        {
          title: "WeHelp----Android",
          company: "GitHub-->",
          company_url: "https://github.com/john672000/WeHelp----Android.git",
          logo_path: "android.png",
          duration: "Android Studio",
          location: "JS, XML, .NET",
          description:
            "WeHelp is an Android Application developed on the base of Android Studio using JavaScript,XML and .NET. The idea for this Application is to server as a Media between food that is wasted and people in need of it. A Roboust database can be set as the ports and urls have been left empty.",
          color: "#0879bf",
        }, {
          title: "E-Commerece-Website",
          company: "GitHub-->",
          company_url: "https://github.com/john672000/E-Commerece-Website----PHP.git",
          logo_path: "GeeksforGeeks.png",
          duration: "PHP",
          location: "PHP, MongoDB",
          description:
            "This is a PHP based Website created for learning sake. It's basic and features a online shopping platform where you can either connet it to a database with unique keys matching the front-end or use the pre described items.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

const ProjectIcs = {
  projicns: [
    {
      siteName: "Android Studio",
      iconifyClassname: "simple-icons:androidstudio",
      style: {
        color: "#3DDC84",
      },

    }, {
      siteName: "Angular",
      iconifyClassname: "simple-icons:angular",
      style: {
        color: "#DD1100",
      },
    },
    {
      siteName: "Flutter",
      iconifyClassname: "simple-icons:flutter",
      style: {
        color: "#02569B",
      },
    },
    {
      siteName: "Python FastAPI",
      iconifyClassname: "simple-icons:fastapi",
      style: {
        color: "#009688",
      },

    },
    {
      siteName: "Flask",
      iconifyClassname: "simple-icons:flask",
      style: {
        color: "#000000",
      },
    },
    {
      siteName: "React Bootstrap",
      iconifyClassname: "simple-icons:reactbootstrap",
      style: {
        color: "#7952B3",
      },
    },
    {
      siteName: "Docker",
      iconifyClassname: "simple-icons:docker",
      style: {
        color: "#2496ED",
      },
    },
    {
      siteName: "PostgreSQL",
      iconifyClassname: "simple-icons:postgresql",
      style: {
        color: "#4169E1",
      },
    },

    {
      siteName: "MongoDB",
      iconifyClassname: "simple-icons:mongodb",
      style: {
        backgroundColor: "transparent",
        color: "#47A248",
      },
    },

  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_blue.png",
    description:
      "Feel free to choose your preferred mode of communication, and I will make sure to respond promptly. You can reach out to me via GitHub, Gmail, LinkedIn or even Fill out a form, whichever works best for you.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Overland Park, Kansas, United States of America",
    location_map_link: "https://maps.app.goo.gl/abPeXKqzXzE4nAKFA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  experience,
  projectsHeader,
  certifications,
  eduHeader,
  ProjectIcs,
  contactPageData,
};
