/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sudip's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sudip Ghosh Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Sudip Ghosh",
  logo_name: "SudipGhosh",
  nickname: "@imsudip",
  subTitle:
    " I'm passionate about manifesting ideas into digital reality and thrive towards accelerated progress every moment with unique and impactful projects to contribute to global development.",
  resumeLink:
    "https://drive.google.com/file/d/1myckpQvEluq-6e7x4cK06Dj2dcwXp27J/view?usp=sharing",
  portfolio_repository: "mailto:sudipghosh93338@gmail.com",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/imsudip",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  // {
  //   name: "LinkedIn",
  //   link: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  //   fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
  //   backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  // },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sudipghosh93338@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/imsudip/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Dribble",
    link: "https://dribbble.com/sdpdrkprince",
    fontAwesomeIcon: "fa-dribbble", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E34A85", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/imsudipghosh",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },


];

const skills = {
  data: [
    {
      title: "Mobile App Developent",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing mobile applications using Flutter and Android Studio.",
        "⚡ Experience in using various kinds of REST APIs",
        "⚡ Working with user authentication and firebase CRUD"
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android studio",
          fontAwesomeClassname: "cib:android",
          style: {
            backgroundColor: "transparent",
            color: "#A4C639",
          },
        },
        {
          skillName: "Vscode",
          fontAwesomeClassname: "vscode-icons:file-type-vscode",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "vscode-icons:file-type-kotlin",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive webapps/PWAs using flutter web framework",
        "⚡ Worked with DS and algorithm visualisation using p5.js library",
        "⚡ Creating responsive website using react",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "p5js",
          fontAwesomeClassname: "simple-icons:p5-dot-js",
          style: {
            color: "#E61E5B",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
        {
          skillName: "React.js",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flutter Web",
          fontAwesomeClassname: "logos:flutter",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Having two years of experience working with dart.",
        "⚡ Creating intermediate projects using python and javascript",
        "⚡ Having four years of experience with C and C++",
        
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "file-icons:c",
          style: {
            color: "#6295CB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos-dart",
          style: {
            color: "#336791",
          },
        },

      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Made high quality poster for clients"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos-figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#310000",
          },
        },
        {
          skillName: "Affinity designer",
          fontAwesomeClassname: "vscode-icons:file-type-affinitydesigner",
          style: {
            //color: "#000000",
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
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kalyani Mahavidyalaya",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "KU.png",
      alt_name: "Kalyani Mahavidyalaya",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I am pursuing a bachelor's degree in Computer Science.",
        "⚡ I have completed courses on popular programming languages like python,javascript, and dart.",
        "⚡ I have studied the basics of DS, Algorithms, and COA.",
      ],
      website_link: "http://kalyanimahavidyalaya.net.in/",
    },
    {
      title: "Kendriya Vidyalaya Ranaghat",
      subtitle: "Higher Secondary",
      logo_path: "kvs-logo.webp",
      alt_name: "Kendriya Vidyalaya Ranaghat",
      duration: "2007 - 2019",
      descriptions: [
        "⚡ Qualified Secondary Education Examination(X)",
        "⚡ Qualified Higher Secondary Education Examination(XII)",
        ],
      website_link: "https://ranaghat.kvs.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    " I have interned with various companies as an App developer and also a UI/UX designer. I have developed apps for well-established client companies.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter App Development Intern",
          company: "Paprclip Pvt. Ltd.",
          company_url: "http://www.paprclip.in/",
          logo_path: "paprclip.jpg",
          duration: "Nov 2020 - Present",
          location: "Work From Home",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "UI & UX designer , App development Intern",
          company: "Psyber Technologies",
          company_url:
            "https://psyber.co/",
          logo_path: "psyber.png",
          duration: "Apr 2020 - Jun 2020",
          location: "Work From Home",
          description:
            "I have designed and developed a LMS Application from the ground up using the web APIs available.",
          color: "#0071C5",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects include android applications for several purposes including, algorithm visualization, data management, and commercial apps developed using flutter.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dp.png",
    description:
      "Like my works? Get in touch on my social media handles for any assistance on app and web development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Anulia , Srinathpur , Ranaghat , Dist.-Ranaghat, West Bengal - 741201",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/FgoqPJqgorQDJB3E6",
  },
  phoneSection: {
    title: "Contacts",
    subtitle: "+91 7908646141\nsudipghosh9333@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
