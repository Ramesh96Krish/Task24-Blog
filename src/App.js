import './App.css';
import All from './components/all/all';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FSD from './components/fsd/fsd';
import DataScience from './components/data-science/data-science';
import CyberSecurity from './components/cyber/cyber';
import Career from './components/career/career';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 0,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-HTML-vs-CSS-Critical-Differences-Developers-Cant-Ignore.webp",
    title: "HTML vs CSS: Critical Differences Developers Can’t Ignore",
    decription: "HTML and CSS are essential languages in web development, each playing a unique role in creating attractive and functional websites. HTML provides the structure and content, while CSS adds style and design elements.By understanding how HTML vs CSS works, you can effectively leverage these languages to create visually appealing as well as user-friendly web pages and become a master Web Developer.An excellent resource to start your journey towards a successful development career would be GUVI’s highly accredited HTML & CSS course with expert industry mentors and a cumulative syllabus with the most in-demand tools!",
    category: "all",
  },
  {
    id: 0,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-JavaScript-Tools-Every-Developer-Should-Know.png",
    title: "JavaScript Tools Every Developer Should Know",
    decription: "Choosing the right JavaScript tools can make a massive difference in your coding journey. From must-have package managers like npm to versatile text editors like Visual Studio Code, these tools are more than just software; they’re catalysts for personal and professional growth.The right toolkit can boost your efficiency, improve the quality of your code, and offer numerous learning opportunities. It’s not just about getting the job done; it’s about doing it well and constantly growing.Remember, the technology landscape is ever-changing. The most popular JavaScript tools today may be overshadowed by newer, more innovative solutions tomorrow. Therefore, it’s essential to stay updated, adapt, and always look for tools that can make you a more effective developer.",
    category: "all",
  },
  {
    id: 0,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Difference-Between-C-and-C-You-Should-Know.png",
    title: "Difference Between C and C++ You Should Know",
    decription: "After reading the blog, you would have definitely come to a point where you can understand that every programming language has its features, and functionality, and works according to the usage. Both C and C++ have their own features and can be applied in different areas of applications.Ultimately, the choice between C and C++ depends on the specific needs and goals of your project, and it is important to carefully consider the trade-offs between the two languages before making a decision. Happy Reading!",
    category: "all",
  },
  {
    id: 0,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Engineers.png",
    title: "Top Product-Based Companies for Data Engineers 2023",
    decription: "In the dynamic world of data engineering, working for a product-based company is definitely rewarding and contributes towards your continuous growth. These companies not only help you grow but also give you a challenging work environment to prove yourself better and bag huge salaries.You just need to have the required skills and you’re ready to get into the data engineering field. So, get ready to take your career to the next level and take your data engineering career to new heights.",
    category: "all",
  },
  {
    id: 1,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
    title: "7 Best Full-Stack Development Online Courses [2023]",
    decription: "The field of web development is constantly evolving, and staying ahead in the field of full-stack Development requires comprehensive and up-to-date knowledge of both front-end and back-end technologies. The 7 best full-stack development online courses highlighted in this blog offer a diverse range of options, each catering to different learning styles, skill levels, and career aspirations.As you consider your options, remember that the best course for you is the one that aligns with your current skill level, learning preferences, and future goals. Make an informed decision by evaluating such personalized factors. We hope this blog will be a guiding light to finding the best full-stack development online courses that suit your learning style and career path. If you think that we’ve missed out on any of your favorite courses, let us know in the comments below. Happy Learning!",
    category: "FSD",
  },
  {
    id: 2,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png",
    title: "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
    decription: "As a full stack developer, mastering the right set of tools can make all the difference in your journey towards becoming a top-notch developer. The tools mentioned in this article cover various aspects of web development, from coding and debugging to testing and deployment.By familiarizing yourself with these tools and continuously expanding your skill set, you can enhance your productivity, improve the quality of your code, and stay ahead in the ever-evolving world of web development.So, dive in, explore these tools, and embark on your journey to becoming an exceptional full stack developer in 2023 and beyond. And you can do so in just 90 days with this amazing Full Stack Development Bootcamp conducted by expert mentors which also comes with extensive Placement Assistance!",
    category: "FSD",
  },
  {
    id: 3,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png",
    title: "The Ultimate Guide to Real-World Full Stack Development Applications",
    decription: "Full stack development is a versatile and highly valued skill set in today’s tech industry. By mastering both front-end and back-end technologies, you can create seamless and efficient web applications.Whether you’re a beginner looking to enhance your skills or an experienced professional aiming to showcase your expertise, real-world full stack development projects are an excellent way to demonstrate your capabilities. Choose projects that align with your interests and career goals, and don’t forget to maintain an updated and visually appealing portfolio.With dedication, continuous learning, and the correct resource you can become a successful full stack developer and unlock exciting opportunities in the world of web development.One such excellent resource that we totally recommend is the Full Stack Development Bootcamp by GUVI with expert mentors and extensive Placement Assistance!",
    category: "FSD",
  },
  {
    id: 4,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/24746653_7002417-1-2048x1365.jpg",
    title: "The Future & Scope of Full Stack Developers in India",
    decription: "As we look ahead to the future of full stack development, it’s clear that the possibilities are endless. Full stack developers are in high demand because they can handle both front-end and back-end tasks. This means they have exciting job opportunities and can work on various projects.Technology is always changing, and full stack developers need to keep learning to stay ahead. But don’t worry! By updating their skills and staying curious, they can enjoy a successful career in the tech world.The future of full stack development is full of growth and new challenges. Aspiring full stack developers, get ready for an exciting journey! If you have any thoughts or experiences to share, please feel free to leave a comment below. Let’s support and inspire each other as we shape a bright future in this ever-evolving tech world. Together, we can achieve great things!",
    category: "FSD",
  },
  {
    id: 5,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
    title: "10 Best Data Science Frameworks in 2023",
    decription: "What are Data Science Frameworks?10 Best Data Science Frameworks in 2023,1. TensorFlow: Powering Machine Learning at Scale,2. Scikit-learn: The Swiss Army Knife of Machine Learning,3. Keras: Simplifying Deep Learning,4. Pandas: Unleashing the Power of Data Manipulation,5. Spark MLib: Scaling Machine Learning with Apache Spark,6. PyTorch: Flexibility and Dynamic Computation,7. Matplotlib: Visualizing Data with Ease,8. Numpy: Powering Scientific Computing,9. Seaborn: Creating Stunning Statistical Visualizations,10. Theano: Efficient Computation and Deep Learning,the field of data science continues to evolve, and data scientists rely on a diverse range of frameworks and tools to tackle complex data analysis and modeling tasks. These 10 data science frameworks are expected to dominate the industry in 2023, providing data scientists with the necessary tools to explore, analyze, and interpret data effectively. By leveraging these frameworks, data scientists can unlock valuable insights and drive innovation in various industries.",
    category: "data-science",
  },
  {
    id: 6,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/conceptual-data-analysis-with-wooden-blocks-magnifying-glass-side-view-1.jpg",
    title: "Best Way to Learn Data Science in 2023",
    decription: " embarking on the journey of learning data science can be both exciting and rewarding. With a systematic approach and a dedication to continuous learning, you can master the essential skills needed to become a proficient data scientist.Remember, the best way to learn data science is not merely through theory, but through practical application and a passion for unraveling the mysteries hidden within data. So, embrace the challenges, stay curious, and be open to exploring the ever-evolving landscape of data science.",
    category: "data-science",
  },
  {
    id: 7,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
    title: "Roles and Responsibilities of a Data Scientist",
    decription: "Data science is a dynamic and rapidly evolving field that offers exciting career opportunities. As a data scientist, you will play a crucial role in extracting valuable insights from data, solving complex business problems, and driving strategic decision-making.By acquiring the right skills, gaining practical experience, and staying updated with the latest trends, you can pave the way for a successful career in data science.",
    category: "data-science",
  },
  {
    id: 8,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/04/image-5.png",
    title: "Data Science vs. Machine Learning: What every elite coder needs to know",
    decription: "The amount of data being generated is growing exponentially, and companies that can make sense of this data are gaining a competitive advantage.Both of them are being used in a wide range of industries, including healthcare, finance, marketing, and e-commerce, to name just a few.In healthcare, ML algorithms are being used to analyze medical images, diagnose diseases, and develop personalized treatment plans and in finance, these algorithms are being used to detect fraud, predict market trends, and develop investment strategies.In marketing, Data Science techniques are being used to identify customer segments, personalize marketing campaigns, and measure the effectiveness of advertising.To make it easy for you, here’s one of the most well-known resources for mastering both Data Science as well as Machine Learning and earning a swanky certificate from IIT-Madras so that you can start your career with a bang!",
    category: "data-science",
  },
  {
    id: 9,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    decription: "This blog summarizes the difference between Cybersecurity and Ethical Hacking. It might’ve given you a clear insight into the scope of the same. If you’re interested in getting started in ethical hacking or Cybersecurity, there are a plethora of resources available online.One good starting point is the GUVI’s Cybersecurity and Ethical Hacking course bundle. We have a wide range of tutorials and scripts that will teach you everything you need to know about this fascinating field of hacking coaligned with a vetted curriculum of Cybersecurity.",
    category: "cyber",
  },
  {
    id: 10,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
    title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    decription: "So those were our concluded list of top 10 ethical hacking books. Do you agree with our list? Or did we miss something? Feel free to share your suggestions and reviews in the comments.Now that you had a look at the books let’s move on and see how GUVI can help you become an ethical hacker.  GUVI provides a certified Ethical Hacking course Bundle, The certification training course provides you with hands-on training that will help you master the techniques used to penetrate network systems and defend your system against them. Our Ethical hacking courses bundle is aligned with the latest industrial practices. Here you will learn about the trojans, back doors and countermeasures, IDs, firewalls and honeypots, cryptography, and DarkNet & all advanced hacking concepts that are eminent to your White Hat career Journey.",
    category: "cyber",
  },
  {
    id: 11,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    title: "8 Different Types of Cybersecurity and Threats Involved",
    decription: "And that brings us to the end of our article. Do you agree with our list of types of cybersecurity niches, or do you want to include something more in the list? Feel free to comment below. If you’re a cybersecurity enthusiast, we keep adding great valuable reads, that may interest you in the longer run. We also have two level-based cybersecurity programs, where you can learn how to monitor systems and alleviate threats when they happen. Through these courses, you can become proficient in Offensive Security, Cloud Security Architecture, Security Systems Architecture, Security Teams Management, etc. Get on – hands tutorials with exclusive case studies and exciting quizzes.",
    category: "cyber",
  },
  {
    id: 12,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg",
    title: "Top 7 Cyber Security Attacks in Real Life",
    decription: "Man-in-the-Middle Attack(MITM) – The common type of cyber attack, where an attacker eavesdrop on the communication between a user and the application. The attacker acts as a super-spy between the two targeted parties & illicitly alters or accesses the communicating message before it reaches its destination. Major methods to avoid these MITM attacks are: End-to-End encryption (WhatsApp uses this strong encryption for secure messaging) Usage of Virtual Private Network (VPN)Winding up the binge-read…, The bottom line is to realize that there are many other cyber attacks that are complex enough for individuals or organizations to come up with modern & secure solutions.Of course! The increasing complexity & evolution of attacks widen the demand for cybersecurity professionals. Did you know? There were 3.5 million+ vacant cybersecurity jobs globally (According to Cybersecurity Ventures’ survey).",
    category: "cyber",
  },
  {
    id: 13,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Fascinating-Career-Opportunities-in-Civil-Engineering.webp",
    title: "Fascinating Career Opportunities in Civil Engineering in 2023",
    decription: "career opportunities in civil engineering are humongous where you can build and shape the world around you. Whether you’re drawn to designing impressive structures, ensuring the safety of our cities, or protecting the environment, this field has something for everyone.So, if you’re looking for a career that combines creativity, problem-solving, and a sense of purpose, civil engineering might just be the path that leads you to a fulfilling and exciting future.",
    category: "career",
  },
  {
    id: 14,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Webinars-and-Workshops-That-You-Should-Know.webp",
    title: "6 Mechanical Engineering Webinars and Workshops That You Should Know",
    decription: "mechanical engineering webinars and workshops are valuable learning and networking opportunities for you as a mechanical engineer and it is too important for you to ignore it.They help both beginners and experts in this field to learn new things, improve their skills, and connect with others who share their interests.These events are like stepping stones to success in mechanical engineering, helping you to stay updated, learn practical skills, and meet new friends and colleagues who build up your connections and chances of succeeding in the field.So, whether you’re just starting or have been in the field for a while, these webinars and workshops can be a key to your success in mechanical engineering.",
    category: "career",
  },
  {
    id: 15,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp",
    title: "Everything You Should Know About ChatGPT & Why It Matters?",
    decription: "ChatGPT is a marvel in the world of AI, Machine Learning, and NLP. Its origins in the success of GPT-3 have led to a specialized AI model that excels in conversational interactions and offers a multitude of real-world applications.As ChatGPT continues to unwind and find its place in various industries, its impact on our day-to-day lives will become massive. From improving customer support and content creation to assisting in healthcare and education, ChatGPT is poised to play a central role in shaping the future of AI-driven human-machine interactions.It is on our hands, as developers, businesses, and consumers, to harness its powerful potential while ensuring its responsible and ethical use. By this, we can unlock the full power of ChatGPT and navigate the magical landscape of artificial intelligence with wisdom and foresight.",
    category: "career",
  },
  {
    id: 16,
    imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Promising-Scope-of-Cloud-Computing.webp",
    title: "Promising Scope of Cloud Computing in 2023",
    decription: "The scope of cloud computing is vast and promising. From diverse job opportunities to innovative technologies like serverless computing and robust security measures, cloud computing is transforming the way we work and store information.With the ever-growing demand for cloud services across industries, the future is bright for those who explore and excel in this dynamic field. So, whether you’re a budding cloud engineer or a business owner looking to utilize the benefits of the cloud, the scope of cloud computing offers a world of possibilities in the digital age.",
    category: "career",
  },
]

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <h1>MY BLOGS</h1>
      <div className='nav-bar'>
          <div className='nav-elements' >
            <Link className='link' to="./">
            ALL
            </Link>
          </div>
          <div className='nav-elements'>
          <Link className='link' to="./fsd">
            FULL STACK DEVELOPMENT
          </Link>
          </div>
          <div className='nav-elements'>
          <Link className='link' to="./data-science">
            DATA SCIENCE
          </Link>
          </div>
          <div className='nav-elements'>
          <Link className='link' to="./cyber-security">
            CYBER SECURITY
          </Link>
          </div>
          <div className='nav-elements'>
          <Link className='link' to="./career">
            CAREER
          </Link>
          </div>
      </div>
      <Routes>
        <Route path='/' element={<All data={data}/>}></Route>
        <Route path='/fsd' element={<FSD data={data}/>}></Route>
        <Route path='/data-science' element={<DataScience data={data}/>}></Route>
        <Route path='/cyber-security' element={<CyberSecurity data={data}/>}></Route>
        <Route path='/career' element={<Career data={data}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
