
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
    "|| Full-Stack Developer || Cloud & AI Enthusiast || ML & Data Engineer || DevOps Learner ||",

  subTitle:
    "• I am a passionate Software Engineer with a solid foundation in Data Structures and Algorithms. My technical expertise spans accross Android development, Modern web applications, Cloud technologies, and Artificial Intelligence. I have hands-on experience with  Python, Java, Flutter, JavaScript (and its supersets), as well as robust backend systems using DBMS and cloud services. I thrive on building scalable, high-performance applications that solve real-world problems.",
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
        "Fine-tune and deploy machine learning models using TensorFlow, Keras, and PyTorch for natural language processing (NLP) tasks.",
        "Utilize pretrained models like BERT with frameworks such as PyTorch and TensorFlow for tasks like named entity recognition (NER).",
        "Develop and integrate AI models into applications for data extraction and analysis using Scikit-learn and deep learning libraries.",
        "Process various forms of data, including text and audio, with machine learning techniques leveraging TensorFlow, Keras, and Scikit-learn.",

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
        "Built and deployed full-stack applications using Node.js, FastAPI, and .NET for backend services, enabling the development of robust, scalable APIs and real-time data processing capabilities.",
        "Leveraged Docker to containerize backend services, ensuring consistent and reliable performance across different environments.",
        "Deployed applications seamlessly on Railway, enabling fast, efficient, and scalable deployment with minimal configuration.",
        "Developed modern, responsive frontend interfaces using Angular, Flutter (for cross-platform apps), and React Bootstrap, focusing on creating intuitive user experiences.",
        "Designed and implemented seamless data layers with PostgreSQL and MongoDB, ensuring reliable storage and management of data.",

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
          skillName: "Flask",
          iconifyClassname: "simple-icons:flask",
          style: {
            color: "#4B5563",
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
          skillName: "MongoDB",
          iconifyClassname: "simple-icons:mongodb",
          style: {
            backgroundColor: "transparent",
            color: "#47A248",
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
          skillName: "ReactBootstrap",
          iconifyClassname: "simple-icons:reactbootstrap",
          style: {
            backgroundColor: "transparent",
            color: "#7952b3",
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
          skillName: "Flutter",
          iconifyClassname: "simple-icons:flutter",
          style: {
            backgroundColor: "transparent",
            color: "#258ecf"
          },
        },
        {
          skillName: "Railway",
          iconifyClassname: "simple-icons:railway",
          style: {
            backgroundColor: "transparent",
            color: "#4B5563",
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
          skillName: "kubernetes",
          iconifyClassname: "simple-icons:kubernetes",
          style: {
            backgroundColor: "transparent",
            color: "#326CE5",
          },
        },

      ],
    },
    {
      title: "Cloud Infra-Architecture",
      skills: [
        "Deploy applications and machine learning models on cloud platforms.",
        "Set up and manage cloud-based resources (e.g., storage, databases, computing).",
        "Automate deployment processes using CI/CD pipelines for cloud-based applications.",
        "Ensure scalability and reliability of applications in the cloud environment.",
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
        color: "#000000",
      },
      profileLink: "https://github.com/john672000",
    },

  ],
};
//Education Page
const eduHeader = {
  title: "Education & Participation",
  description:
    "• I hold both Master's and Bachelor's degree in Computer Science and Engineering from prestigious universities •",

  sections: [
    {
      title: "Academic Background",
      experiences: [
        {
          title: "University of Central Missouri",
          company: "🌐 ucmo.edu",
          company_url: "https://www.ucmo.edu/",
          abv: "UCM",
          duration: "2022-2024",
          tech: [
            { name: "Advanced Algorithms", value: 95 },
            { name: "Compiler Design & Cibstruction", value: 84 },
            { name: "Machine Learning", value: 90 },
            { name: "Cloud Computing", value: 92 }
          ],
          stats: {
            Projects: 6,
            Courses: 8,
            GPA: 3.30
          },
          location: "United States of America",
          description:
            "Master's in Computer Science with a focus on Algorithms, Operating Systems, and Databases. Explored Cloud Computing, Machine Learning, and Big Data, gaining hands-on experience to tackle real-world tech challenges and build practical solutions.",
        },
        {
          title: "Karunya Institute",
          company: "🌐 karunya.edu ",
          company_url: "https://karunya.edu/",
          abv: "KITS",
          duration: "2018-2022",
          location: "Tamil Nadu, India",
          tech: [
            { name: "Python Programming", value: 85 },
            { name: "Database Management", value: 90 },
            { name: "Computer Architecture", value: 92 },
            { name: "Data Structure & Algorithms", value: 86 }
          ],
          stats: {
            Projects: 23,
            Courses: 15,
            Hackathons: 2,
            Papers: 1,
            CGPA: 3.33
          },
          description:
            "Bachelor's in CS, building strong foundations in Data Structures, Algorithms, and Advanced Java. Gained hands-on experience with Python, C/C++, and C#, and explored Machine Learning techniques to develop intelligent, data-driven solutions.",
        },
        {
          title: "Tirumala Insitute",
          company: "🌐 tirumala.edu ",
          company_url: "http://tirumalaedu.com/",
          abv: "TI",
          duration: "2016-2018",
          location: "Andhra Pradesh, India",
          tech: [
            { name: "Maths", value: 98 },
            { name: "Physics", value: 95 },
            { name: "Chemistry", value: 100 }
          ],
          stats: {
            Projects: 2,
            TopRank: 2,
            Score: '97%'
          },
          description:
            "High School focused on Mathematics, Physics, and Chemistry, building a strong analytical and problem-solving foundation that prepared me for advanced studies in Computer Science and Engineering.",
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
    "• I have worked in various companies and with diffrent technologies. I also actively participate in Hackathons •",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Prior & Current Experiences",
      experiences: [
        {
          "title": "Full Stack Java Developer",
          "company": "TechUSA",
          "company_url": "#",
          "abv": "TCU",
          "duration": "Feb 2026 - Present",
          "location": "Edison NJ, U.S.A",
          "tech": [
            { "name": "Java", "value": 85 },
            { "name": "Spring Boot", "value": 80 },
            { "name": "React", "value": 75 },
            { "name": "AWS", "value": 70 },
            { "name": "MySQL", "value": 65 }
          ],
          "stats": {
            "Projects": 2,
            "APIs": 2,
            "Commits": 50
          },
          "description": "Designing and developing full-stack applications using Java, Spring Boot, React, and AWS, focusing on scalable, efficient, and maintainable solutions."
        },
        {
          title: "Full Stack Web Developer",

          company_url: "https://intellipathsystems.com/",
          company: "Intellipath Systems Inc",
          abv: "IPS",
          duration: "Jun 2025 - Feb 2026",
          location: "Simi Valley CA, U.S.A",
          tech: [
            { "name": "React", "value": 80 },
            { "name": "Redux", "value": 70 },
            { "name": "JavaScript", "value": 85 },
            { "name": "HTML/CSS", "value": 90 },
            { "name": "API Development", "value": 75 }
          ],
          stats: {
            Projects: 6,
            APIS: 5,
            Commits: 180
          },
          description:
            "Developed and maintained responsive web applications using React and Redux, optimizing UI performance and building reusable, scalable components.",
        },
        {
          title: "Software Developer",
          company: "Plural Technology Pvt Ltd",
          abv: "PTI",
          company_url: "https://www.pluraltechnology.com/",
          duration: "Oct 2024 - Jun 2025",
          location: "Ann Arbor MI, U.S.A",
          tech: [
            { "name": ".NET Core", "value": 75 },
            { "name": "AWS", "value": 70 },
            { "name": "Python", "value": 60 },
            { "name": "FastAPI", "value": 65 }
          ],
          stats: {
            Projects: 5,
            APIS: 8,
            Commits: 90
          },
          description:
            "Trained and contributed to backend development using .NET Core and AWS, building scalable, secure, and reliable applications while learning best practices and deployment workflows.",
        },
        {
          title: "Programmer Analyst",

          company_url: "https://www.cognizant.com/us/en",
          company: "Cognizant Technology Solutions",
          abv: "CGZ",
          duration: "Dec 2021 - May 2022",
          location: "Banglore, India",
          tech: [
            { "name": "Spring Boot", "value": 80 },
            { "name": "Java", "value": 85 },
            { "name": "MySQL", "value": 70 },
            { "name": "HTML/CSS", "value": 65 }
          ],
          stats: {
            "Projects": 5,
            "APIs": 6,
            "Commits": 120
          },
          description:
            "Developed and optimized backend systems with Spring Boot and Java, improving API efficiency and contributing to scalable web applications."
        },
        {
          title: "Software Developer",
          company: "OaksPro Software Solutions",
          abv: "OKP",
          company_url: "https://oakspro.com/",
          duration: "Dec 2020 - May 2021",
          location: "Hyderabad, India",
          tech: [
            { name: "Spring Boot", value: 85 },
            { name: "React", value: 70 },
            { name: "AWS", value: 60 }
          ],
          stats: {
            Projects: 8,
            PlugIns: 3,
            Commits: 98
          },
          description:
            "Built responsive websites and custom WordPress plugins, optimizing performance and enhancing user experience across client projects."
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
    "• My projects are open-source and I'm more than interested to collaborate & you're more than welcome to contact me •",

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
        color: "#4B5563",
      },
    },
    {
      siteName: "Android Studio",
      iconifyClassname: "simple-icons:androidstudio",
      style: {
        color: "#3DDC84",
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
    {
      siteName: "Docker",
      iconifyClassname: "simple-icons:docker",
      style: {
        color: "#2496ED",
      },
    },
    {
      siteName: "Railway",
      iconifyClassname: "simple-icons:railway",
      style: {
        backgroundColor: "transparent",
        color: "#4B5563",
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
