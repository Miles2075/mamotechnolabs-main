import { CertificateCategory } from '../types';

export const certificateList: CertificateCategory[] = [
  {
    id: 'soft-skills',
    name: 'Certified Soft Skills',
    category: 'AI, Business & Professional',
    desc: 'Communication, Teamwork, Leadership, Problem-solving & Workplace Etiquette.',
    badgeCode: 'SOFT SKILLS',
    gradientClass: 'from-amber-600 to-orange-700',
    questions: [
      {
        id: 1,
        question: 'Which of the following is considered an active listening technique?',
        options: [
          'Formulating your response while the other person is still speaking',
          'Paraphrasing what the speaker said to confirm understanding',
          'Interrupting to offer immediate solutions',
          'Remaining completely silent without any feedback'
        ],
        correctAnswerIndex: 1,
        explanation: 'Paraphrasing and summarizing reflects that you understood the speaker’s intent.'
      },
      {
        id: 2,
        question: 'In a workplace conflict, what is the best first step towards resolution?',
        options: [
          'Escalate immediately to senior management',
          'Identify the underlying issue through open dialogue with the individual',
          'Ignore the issue and wait for it to pass',
          'Express frustration publicly in team meetings'
        ],
        correctAnswerIndex: 1
      },
      {
        id: 3,
        question: 'Which component is vital for constructive feedback?',
        options: [
          'Focusing on personal traits rather than actions',
          'Providing specific, actionable observations timely and respectfully',
          'Keeping it as vague as possible',
          'Giving feedback only at the end of the year'
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: 'playwright',
    name: 'Certified Playwright Automation',
    category: 'Web & Software Development',
    desc: 'Playwright Automation to create fast, reliable, and scalable end-to-end test suites.',
    badgeCode: 'PLAYWRIGHT',
    gradientClass: 'from-emerald-600 to-green-700',
    questions: [
      {
        id: 1,
        question: 'What is a major advantage of Playwright over legacy Selenium?',
        options: [
          'Playwright requires manual sleeps (Thread.sleep) for every element',
          'Auto-waiting on elements before performing actions, avoiding flaky tests',
          'Playwright only works on Internet Explorer',
          'It cannot run headless tests'
        ],
        correctAnswerIndex: 1
      },
      {
        id: 2,
        question: 'Which selector engine is recommended in Playwright for user-centric testing?',
        options: [
          'getByRole and getByText',
          'Absolute XPath indices',
          'Dynamic CSS IDs',
          'Pixel coordinates'
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: 'data-science-cert',
    name: 'Certified Data Science',
    category: 'Data Science & Analytics',
    desc: 'Learn data analysis, exploratory statistics, machine learning, and essential data pipelines.',
    badgeCode: 'DATA SCIENCE',
    gradientClass: 'from-blue-600 to-indigo-700',
    questions: [
      {
        id: 1,
        question: 'In statistical modeling, what does the p-value indicate?',
        options: [
          'The exact percentage probability that the hypothesis is 100% correct',
          'The probability of observing the data given that the null hypothesis is true',
          'The percentage of missing data points in the dataset',
          'The Pearson correlation coefficient'
        ],
        correctAnswerIndex: 1
      },
      {
        id: 2,
        question: 'Which technique is used to prevent overfitting in decision tree models?',
        options: [
          'Increasing tree depth indefinitely',
          'Pruning and setting minimum samples per leaf',
          'Removing cross-validation',
          'Eliminating all training samples'
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: 'qa-selenium',
    name: 'Certified QA Selenium',
    category: 'Web & Software Development',
    desc: 'Selenium software testing framework for automated web application testing.',
    badgeCode: 'SELENIUM',
    gradientClass: 'from-teal-600 to-cyan-700',
    questions: [
      {
        id: 1,
        question: 'Which Selenium WebDriver method is used to navigate to a new URL?',
        options: ['driver.get("url")', 'driver.open("url")', 'driver.forward("url")', 'driver.fetch("url")'],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: 'tableau',
    name: 'Tableau Professional',
    category: 'Design & UI/UX',
    desc: 'Highlight practical Tableau skills with dashboarding, calculated fields, and charts.',
    badgeCode: 'TABLEAU',
    gradientClass: 'from-violet-600 to-purple-800',
    questions: [
      {
        id: 1,
        question: 'What is the difference between Dimensions and Measures in Tableau?',
        options: [
          'Dimensions contain qualitative categorical values, while Measures contain numerical quantitative values',
          'Measures are always blue, dimensions are always yellow',
          'Dimensions cannot be used on rows or columns',
          'There is no difference'
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript Professional',
    category: 'Web & Software Development',
    desc: 'Master TypeScript skills through practical interfaces, generics, and real-world typing.',
    badgeCode: 'TYPESCRIPT',
    gradientClass: 'from-blue-700 to-sky-600',
    questions: [
      {
        id: 1,
        question: 'What is the purpose of the "unknown" type in TypeScript?',
        options: [
          'It is identical to "any" and allows any property access without checking',
          'It represents a type-safe counterpart to "any" requiring type narrowing before use',
          'It causes a compiler crash by design',
          'It can only be assigned to numbers'
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: 'gen-ai-cert',
    name: 'Certified Generative AI Engineer',
    category: 'AI, Business & Professional',
    desc: 'Prompt engineering, Retrieval Augmented Generation (RAG), and LLM application development.',
    badgeCode: 'GEN AI',
    gradientClass: 'from-purple-600 to-pink-600',
    questions: [
      {
        id: 1,
        question: 'In Retrieval-Augmented Generation (RAG), what role does the Vector Database serve?',
        options: [
          'It stores model weights for gradient backpropagation',
          'It indexes semantic embeddings of private documents for context retrieval',
          'It acts as the frontend user interface',
          'It renders charts and graphs'
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: 'flutter-cert',
    name: 'Certified Flutter Developer',
    category: 'Mobile App Development',
    desc: 'Build reactive, high-performance cross-platform mobile apps for iOS and Android.',
    badgeCode: 'FLUTTER',
    gradientClass: 'from-cyan-600 to-blue-600',
    questions: [
      {
        id: 1,
        question: 'Which method is called in a StatefulWidget when mutable state needs to re-render the UI?',
        options: ['setState()', 'renderNow()', 'updateComponent()', 'rebuildWidget()'],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: 'digital-marketing-cert',
    name: 'Certified Digital Marketing Specialist',
    category: 'Digital Marketing',
    desc: 'SEO, SEM, social media management, Google Analytics 4, and conversion optimization.',
    badgeCode: 'DIGITAL MKTG',
    gradientClass: 'from-rose-600 to-pink-700',
    questions: [
      {
        id: 1,
        question: 'What does CTR stand for in digital advertising?',
        options: ['Click-Through Rate', 'Cost-To-Revenue', 'Customer-Tracking-Ratio', 'Conversion-Time-Record'],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: 'cloud-aws',
    name: 'Certified Cloud Practitioner (AWS)',
    category: 'IT, Cloud & Security',
    desc: 'Core AWS services, security, architecture, pricing models, and cloud compliance.',
    badgeCode: 'AWS CLOUD',
    gradientClass: 'from-amber-500 to-yellow-600',
    questions: [
      {
        id: 1,
        question: 'Which AWS service provides serverless event-driven computing?',
        options: ['AWS Lambda', 'Amazon EC2', 'Amazon EBS', 'AWS Glacier'],
        correctAnswerIndex: 0
      }
    ]
  }
];

export const skillCategories = [
  'All',
  'AI, Business & Professional',
  'Web & Software Development',
  'Mobile App Development',
  'Data Science & Analytics',
  'Design & UI/UX',
  'Digital Marketing',
  'IT, Cloud & Security'
];
