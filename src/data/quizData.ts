import { CertificateCategory } from '../types';

// Skill assessments are aligned with the technical and professional programmes
// currently listed in the MaMo Technolabs course catalogue.
export const certificateList: CertificateCategory[] = [
  {
    id: 'python-development',
    name: 'Python Development',
    category: 'Programming & Software Development',
    desc: 'Python fundamentals, functions, object-oriented programming, APIs, data handling, and practical scripting.',
    badgeCode: 'PYTHON',
    gradientClass: 'from-blue-600 to-indigo-700',
    questions: [
      { id: 1, question: 'Which Python structure stores key-value pairs?', options: ['List', 'Tuple', 'Dictionary', 'Set'], correctAnswerIndex: 2, explanation: 'A dictionary stores values against unique keys.' },
      { id: 2, question: 'What is the main purpose of a Python decorator?', options: ['To delete a function', 'To extend or modify a function’s behavior', 'To convert Python into HTML', 'To stop a loop'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'ai-tools',
    name: 'AI Tools & Productivity',
    category: 'AI & Machine Learning',
    desc: 'Practical use of generative AI assistants, prompt design, research, content creation, and workflow automation.',
    badgeCode: 'AI TOOLS',
    gradientClass: 'from-violet-600 to-purple-700',
    questions: [
      { id: 1, question: 'Which prompt element most clearly defines what an AI assistant should produce?', options: ['A clear task and expected output format', 'An unrelated example', 'A longer greeting', 'Repeated punctuation'], correctAnswerIndex: 0 },
      { id: 2, question: 'What is a key benefit of connecting AI tools to an automation platform?', options: ['It removes the need to review outputs', 'It links repeatable tasks across apps and services', 'It guarantees every output is correct', 'It replaces all business data'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'generative-ai',
    name: 'Generative AI & LLM Applications',
    category: 'AI & Machine Learning',
    desc: 'Large language models, embeddings, RAG, vector databases, AI agents, and responsible AI application design.',
    badgeCode: 'GEN AI',
    gradientClass: 'from-purple-600 to-pink-600',
    questions: [
      { id: 1, question: 'What is the purpose of Retrieval-Augmented Generation (RAG)?', options: ['To retrieve relevant external context before generating an answer', 'To increase image resolution', 'To compile source code', 'To replace a database with a spreadsheet'], correctAnswerIndex: 0 },
      { id: 2, question: 'What does a vector database commonly store for semantic search?', options: ['Only video files', 'Numerical embeddings representing content', 'Operating system drivers', 'CSS stylesheets'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'AI & Machine Learning',
    desc: 'Supervised and unsupervised learning, feature engineering, model evaluation, and prediction workflows.',
    badgeCode: 'MACHINE LEARNING',
    gradientClass: 'from-cyan-600 to-blue-700',
    questions: [
      { id: 1, question: 'Which task is an example of supervised learning?', options: ['Grouping customers without labels', 'Predicting house prices from labelled examples', 'Compressing an image file', 'Sorting files by name'], correctAnswerIndex: 1 },
      { id: 2, question: 'Why should a dataset be split into training and test sets?', options: ['To evaluate performance on unseen data', 'To make every model perfect', 'To remove all input features', 'To avoid measuring model performance'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    category: 'Data Science & Analytics',
    desc: 'Data cleaning, exploratory analysis, statistics, SQL, visualization, and communicating data-driven insights.',
    badgeCode: 'DATA SCIENCE',
    gradientClass: 'from-blue-600 to-indigo-700',
    questions: [
      { id: 1, question: 'What is the main purpose of exploratory data analysis (EDA)?', options: ['Understand patterns, distributions, and anomalies in data', 'Encrypt a database', 'Deploy a mobile app', 'Create user passwords'], correctAnswerIndex: 0 },
      { id: 2, question: 'Which SQL clause filters grouped aggregate results?', options: ['ORDER BY', 'HAVING', 'LIMIT', 'DISTINCT'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'full-stack-web',
    name: 'Full-Stack Web Development',
    category: 'Web & Software Development',
    desc: 'Frontend interfaces, backend services, REST APIs, databases, authentication, and deployment fundamentals.',
    badgeCode: 'FULL STACK',
    gradientClass: 'from-emerald-600 to-teal-700',
    questions: [
      { id: 1, question: 'In a typical MERN application, which technology is used to build the user interface?', options: ['MongoDB', 'Express', 'React', 'Node.js'], correctAnswerIndex: 2 },
      { id: 2, question: 'What is the primary role of a REST API?', options: ['Define communication endpoints between software systems', 'Style page typography', 'Store images only', 'Replace the operating system'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    category: 'Mobile App Development',
    desc: 'Cross-platform app development, UI components, application state, API integration, and release basics.',
    badgeCode: 'MOBILE',
    gradientClass: 'from-cyan-600 to-blue-600',
    questions: [
      { id: 1, question: 'In Flutter, which language is primarily used to write applications?', options: ['Dart', 'Ruby', 'PHP', 'SQL'], correctAnswerIndex: 0 },
      { id: 2, question: 'What is the purpose of state management in a mobile app?', options: ['Track and update changing application data', 'Compress source files', 'Create database servers automatically', 'Replace navigation'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'power-bi',
    name: 'Power BI & Business Analytics',
    category: 'Data Science & Analytics',
    desc: 'Data modelling, Power Query, DAX measures, interactive dashboards, and business reporting.',
    badgeCode: 'POWER BI',
    gradientClass: 'from-amber-500 to-orange-600',
    questions: [
      { id: 1, question: 'What is DAX used for in Power BI?', options: ['Writing measures and calculated expressions', 'Designing mobile app icons', 'Managing Linux packages', 'Creating HTML forms'], correctAnswerIndex: 0 },
      { id: 2, question: 'What is the purpose of a dashboard?', options: ['Present important metrics and insights in a visual summary', 'Store source code', 'Replace data validation', 'Configure network routers'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX & Graphic Design',
    category: 'Design & UI/UX',
    desc: 'User research, wireframes, visual hierarchy, typography, color, prototyping, and design systems.',
    badgeCode: 'DESIGN',
    gradientClass: 'from-fuchsia-600 to-violet-700',
    questions: [
      { id: 1, question: 'What is the main purpose of a wireframe?', options: ['Plan page structure and content hierarchy', 'Finalize database indexes', 'Write server-side code', 'Measure network speed'], correctAnswerIndex: 0 },
      { id: 2, question: 'Which design principle helps users identify the most important content first?', options: ['Visual hierarchy', 'Random alignment', 'Excessive decoration', 'Hidden navigation'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'qa-automation',
    name: 'Software Testing & QA Automation',
    category: 'Web & Software Development',
    desc: 'Test planning, test cases, bug reporting, browser automation, assertions, and reliable regression testing.',
    badgeCode: 'QA TESTING',
    gradientClass: 'from-teal-600 to-cyan-700',
    questions: [
      { id: 1, question: 'What is the purpose of an assertion in an automated test?', options: ['Verify that actual behavior matches an expected result', 'Generate production passwords', 'Style the application', 'Create a database backup'], correctAnswerIndex: 0 },
      { id: 2, question: 'Which Playwright locator is generally preferred for accessible, user-focused tests?', options: ['getByRole()', 'A fragile absolute XPath', 'Hard-coded screen coordinates', 'A random CSS class'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Cloud Computing',
    category: 'IT, Cloud & Infrastructure',
    desc: 'Linux, Git, CI/CD, containers, cloud services, deployment pipelines, and infrastructure monitoring.',
    badgeCode: 'DEVOPS',
    gradientClass: 'from-sky-600 to-blue-700',
    questions: [
      { id: 1, question: 'What is the main benefit of a CI/CD pipeline?', options: ['Automate build, test, and delivery steps', 'Prevent developers from using version control', 'Replace application testing', 'Store design mockups only'], correctAnswerIndex: 0 },
      { id: 2, question: 'What does a container provide?', options: ['An isolated, portable environment for running an application', 'A physical network cable', 'A spreadsheet formula', 'A graphic design template'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'cyber-security',
    name: 'Cybersecurity Fundamentals',
    category: 'IT, Cloud & Infrastructure',
    desc: 'Security principles, network protection, access control, vulnerability awareness, and incident response basics.',
    badgeCode: 'CYBERSECURITY',
    gradientClass: 'from-rose-600 to-red-700',
    questions: [
      { id: 1, question: 'What does the principle of least privilege mean?', options: ['Give users only the access required for their tasks', 'Give every user administrator access', 'Disable authentication', 'Share one password across a team'], correctAnswerIndex: 0 },
      { id: 2, question: 'What is multi-factor authentication designed to do?', options: ['Require more than one type of verification', 'Make passwords public', 'Remove account recovery', 'Disable encryption'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'digital-marketing-seo',
    name: 'Digital Marketing & SEO',
    category: 'Digital Marketing',
    desc: 'Keyword research, on-page SEO, search campaigns, social media, analytics, and conversion measurement.',
    badgeCode: 'DIGITAL MARKETING',
    gradientClass: 'from-rose-600 to-pink-700',
    questions: [
      { id: 1, question: 'What is the purpose of keyword research in SEO?', options: ['Understand the search terms a target audience uses', 'Increase image file size', 'Configure server memory', 'Write database procedures'], correctAnswerIndex: 0 },
      { id: 2, question: 'What does conversion rate measure?', options: ['The share of visitors who complete a desired action', 'The number of website colors', 'The average file size', 'The number of HTML tags'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'iot-development',
    name: 'IoT & Embedded Systems',
    category: 'IT, Cloud & Infrastructure',
    desc: 'Connected devices, sensors, microcontrollers, communication protocols, and device-to-cloud workflows.',
    badgeCode: 'IOT',
    gradientClass: 'from-lime-600 to-emerald-700',
    questions: [
      { id: 1, question: 'What is the role of a sensor in an IoT system?', options: ['Collect data from the physical environment', 'Render a website layout', 'Compile SQL queries', 'Manage user interface themes'], correctAnswerIndex: 0 },
      { id: 2, question: 'What does MQTT commonly provide in IoT solutions?', options: ['Lightweight publish-subscribe messaging', 'Image editing', 'Database normalization', 'Mobile screen rendering'], correctAnswerIndex: 0 }
    ]
  }
];

export const skillCategories = [
  'All',
  'AI & Machine Learning',
  'Programming & Software Development',
  'Web & Software Development',
  'Mobile App Development',
  'Data Science & Analytics',
  'Design & UI/UX',
  'Digital Marketing',
  'IT, Cloud & Infrastructure'
];
