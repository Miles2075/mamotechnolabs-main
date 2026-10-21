import { DetailedCourse, CatalogCourse } from '../types';

export const detailedCourses: Record<string, DetailedCourse> = {
  'ai': {
    id: 'ai',
    title: 'Artificial Intelligence Course In Vadodara',
    subtitle: 'Next-Gen AI & Deep Learning Master Training',
    tag: 'Certification In Vadodara',
    duration: '3 Months',
    badge: 'Trending',
    avgSalary: '₹8 – ₹18 LPA*',
    rating: 4.8,
    reviewsCount: '340+ reviews',
    description: "At Mamo TechnoLabs' artificial intelligence training, we empower learners to master the cutting-edge systems defining the future of technology. The global artificial intelligence market is projected to skyrocket past $1.3 trillion by 2032, driving unprecedented demand for certified AI specialists.",
    fullOverview: "The Artificial Intelligence course covers deep neural networks, natural language processing (NLP), computer vision, generative AI architectures, reinforcement learning, and production model deployment. Through practical, project-centric modules, students build custom conversational agents, image recognition models, and automated AI pipelines using Python, PyTorch, TensorFlow, Hugging Face, and LangChain.",
    features: [
      'Build advanced Deep Learning & Neural Network architectures with TensorFlow & PyTorch.',
      'Implement Large Language Models (LLMs), RAG pipelines, and LangChain agents.',
      'Master Computer Vision, Object Detection (YOLO), and Image Segmentation.',
      'Choose online or offline learning through Mamo TechnoLabs’ Vadodara campus.',
      'Deploy autonomous AI applications and scalable microservices on cloud platforms.'
    ],
    skills: [
      'Deep Learning & Artificial Neural Networks (ANN, CNN, RNN, LSTM)',
      'Transformer Architectures, Attention Mechanisms & Hugging Face',
      'Generative AI, Prompt Engineering & Retrieval-Augmented Generation (RAG)',
      'Natural Language Processing (NLP) & Conversational AI Systems',
      'Computer Vision, OpenCV & Real-Time Object Detection',
      'Cloud AI Deployment, Docker & Vector Databases (Pinecone, ChromaDB)'
    ],
    jobRoles: [
      'Artificial Intelligence Engineer',
      'Deep Learning Specialist',
      'Computer Vision Engineer',
      'NLP Research Scientist',
      'Applied AI Developer'
    ],
    tools: [
      { name: 'Python' },
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Hugging Face' },
      { name: 'LangChain' },
      { name: 'OpenCV' },
      { name: 'Docker' },
      { name: 'FastAPI' }
    ],
    syllabus: [
      {
        title: 'Module 1: Mathematical Foundations & Python for AI',
        topics: [
          'Linear Algebra, Vector Calculus, Matrices & Tensors',
          'Probability Distributions, Bayesian Reasoning & Optimization',
          'NumPy, Pandas, Vectorized Computations & Data Pipelines'
        ]
      },
      {
        title: 'Module 2: Neural Networks & Deep Learning Architectures',
        topics: [
          'Perceptrons, Multilayer Feedforward Networks & Backpropagation',
          'Convolutional Neural Networks (CNNs) for Computer Vision',
          'Recurrent Neural Networks (RNNs), LSTMs & GRUs for Sequence Data',
          'Model Regularization, Dropout & Hyperparameter Tuning'
        ]
      },
      {
        title: 'Module 3: Transformers, NLP & Generative AI',
        topics: [
          'Self-Attention Mechanisms, Multi-Head Attention & Transformers',
          'BERT, GPT architectures, Hugging Face Transformers library',
          'Building Custom Retrieval Augmented Generation (RAG) Pipelines',
          'Fine-tuning open weights models with LoRA & QLoRA'
        ]
      },
      {
        title: 'Module 4: Computer Vision & Real-time Perception',
        topics: [
          'Image Processing with OpenCV and PIL',
          'Object Detection with YOLOv8 & YOLOv9',
          'Semantic & Instance Segmentation with Mask R-CNN',
          'Video Analysis and Facial Landmark Detection'
        ]
      },
      {
        title: 'Module 5: Autonomous AI Agents & Cloud Deployment',
        topics: [
          'LangChain & AutoGen multi-agent orchestration',
          'Vector Databases: Pinecone, ChromaDB & FAISS',
          'Containerization with Docker & API serving with FastAPI',
          'Deploying AI Microservices to AWS & Google Cloud'
        ]
      }
    ],
    faqs: [
      {
        question: 'Who can join the Artificial Intelligence course?',
        answer: 'Graduates, engineering students, IT professionals, and aspiring data engineers with basic programming intuition can join. We start from foundational mathematics and Python programming.'
      },
      {
        question: 'What projects will I build during training?',
        answer: 'You will build 4 industry capstones: an automated RAG research assistant, an AI object detection surveillance pipeline, a custom fine-tuned customer support bot, and a cloud-deployed vision model.'
      },
      {
        question: 'Does Mamo TechnoLabs provide 100% placement support?',
        answer: 'Yes! We conduct resume review workshops, mock technical interviews, portfolio building on GitHub, and direct interviews with our 100+ hiring partner companies in Vadodara, Ahmedabad, and across India.'
      }
    ]
  },
  'ai-tools': {
    id: 'ai-tools',
    title: 'AI Master Tools Course In Vadodara',
    subtitle: 'Hybrid Learning Mode – Practical Everyday AI Mastery',
    tag: 'Certification In Vadodara',
    duration: '1 Month',
    badge: 'New',
    avgSalary: '₹3 – ₹10 LPA*',
    rating: 4.6,
    reviewsCount: '280+ reviews',
    description: 'Most people know five AI tools and may use them wrong. The course teaches them which of those tools to reach for and why. Learn the difference at Mamo TechnoLabs.',
    fullOverview: 'The AI tools course focuses on major AI tools used in research, business, content, productivity, automation and development. Instead of just teaching each tool on its own, it shows how they fit into real work. Learners write prompts, build business solutions, generate media and automate workflows.',
    features: [
      'Master 30+ top tier AI tools across text, design, audio, and code.',
      'Automate daily operations and workflows with Zapier & Make AI.',
      'Create high-converting marketing campaigns and visual assets in seconds.',
      'Learn prompt engineering methodologies (few-shot, chain-of-thought).',
      'Get certified and boost productivity by 10x.'
    ],
    skills: [
      'ChatGPT, Claude & Gemini for Strategic Reasoning',
      'Midjourney & Stable Diffusion Generative Art',
      'Make.com & Zapier AI Workflow Automation',
      'AI Presentation Tools (Gamma, Beautiful.ai)',
      'AI Code Copilots (GitHub Copilot, Cursor AI)',
      'Audio & Video Synthesis (ElevenLabs, HeyGen, Runway)'
    ],
    jobRoles: [
      'AI Operations Specialist',
      'Digital Marketing AI Lead',
      'Content Strategist with AI',
      'Automation Consultant',
      'Productivity Consultant'
    ],
    tools: [
      { name: 'ChatGPT Plus' },
      { name: 'Claude 3.5' },
      { name: 'Midjourney' },
      { name: 'Runway ML' },
      { name: 'ElevenLabs' },
      { name: 'Make.com' },
      { name: 'Cursor AI' },
      { name: 'Gamma' }
    ],
    syllabus: [
      {
        title: 'Module 1: Generative Text & Cognitive Workflows',
        topics: [
          'Advanced prompt architectures: Persona, constraint, and goal-oriented prompts',
          'Document analysis, structured data extraction, and executive summaries',
          'Comparing OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and Google Gemini'
        ]
      },
      {
        title: 'Module 2: Visual & Multimedia Generation',
        topics: [
          'Midjourney parameter mastery, lighting styles, camera perspectives',
          'Runway Gen-3 and Pika for cinematic video generation',
          'Voice cloning and realistic speech synthesis with ElevenLabs'
        ]
      },
      {
        title: 'Module 3: Business Automation & Multi-Tool Pipelines',
        topics: [
          'Connecting tools with Webhooks, Make.com, and Zapier',
          'Automated lead qualification and personalized email outreach',
          'Building custom GPTs and AI knowledge bases for corporate departments'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need any programming knowledge for AI Tools?',
        answer: 'No coding knowledge is required! This course is specially designed for business professionals, marketers, students, founders, and designers.'
      },
      {
        question: 'Will I get access to premium tools during the course?',
        answer: 'Yes, our dedicated lab systems are equipped with the latest software and tool access for classroom sessions.'
      }
    ]
  },
  'ds': {
    id: 'ds',
    title: 'Data Science Course In Vadodara',
    subtitle: 'From Exploratory Data Analysis to Predictive Machine Learning',
    tag: 'Certification In Vadodara',
    duration: '3 Months',
    badge: 'New',
    avgSalary: '₹6 – ₹16 LPA*',
    rating: 4.9,
    reviewsCount: '410+ reviews',
    description: 'Transform raw data into strategic business decisions. Learn statistics, SQL, Python data engineering, visual storytelling with Tableau/Power BI, and predictive modeling.',
    fullOverview: 'The Data Science curriculum at Mamo TechnoLabs is crafted by industry data architects to give students comprehensive end-to-end capabilities: data extraction, cleaning, statistical inference, feature engineering, machine learning pipelines, and interactive dashboard deployments.',
    features: [
      'Master Python (Pandas, NumPy, SciPy) and Advanced Analytical SQL.',
      'Design interactive executive dashboards with Power BI & Tableau.',
      'Deploy Predictive Models & A/B testing statistical frameworks.',
      'Hands-on with Big Data tools and cloud databases.',
      '100% project-based learning with real business datasets.'
    ],
    skills: [
      'Python Data Wrangling & Feature Engineering',
      'Advanced SQL & Relational Database Design',
      'Statistical Hypothesis Testing & A/B Experimentation',
      'Machine Learning: Regression, Classification, Clustering',
      'Data Visualization (Power BI, Tableau, Seaborn)',
      'Model Evaluation, Metrics & Cloud ML Pipelines'
    ],
    jobRoles: [
      'Data Scientist',
      'Data Analyst',
      'Business Intelligence Analyst',
      'Analytics Consultant',
      'Machine Learning Associate'
    ],
    tools: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'Power BI' },
      { name: 'Tableau' },
      { name: 'Pandas' },
      { name: 'Scikit-Learn' },
      { name: 'Jupyter' },
      { name: 'Git' }
    ],
    syllabus: [
      {
        title: 'Module 1: Advanced SQL & Data Extraction',
        topics: [
          'Window functions, CTEs, complex joins, and stored procedures',
          'Database optimization, indexing, and query execution plans',
          'Data normalization and relational database warehousing'
        ]
      },
      {
        title: 'Module 2: Python Data Engineering & Visualization',
        topics: [
          'NumPy and Pandas for large-scale data manipulation and cleaning',
          'Exploratory Data Analysis (EDA) with Matplotlib and Seaborn',
          'Statistical inference, distributions, and confidence intervals'
        ]
      },
      {
        title: 'Module 3: Machine Learning Algorithms & Applied Modeling',
        topics: [
          'Supervised learning: Linear/Logistic Regression, Decision Trees, Random Forests',
          'Unsupervised learning: K-Means clustering, PCA dimensionality reduction',
          'Model evaluation with Cross-Validation, ROC-AUC, Precision-Recall'
        ]
      },
      {
        title: 'Module 4: Business Intelligence & Dashboarding',
        topics: [
          'DAX formulas and data modeling in Power BI',
          'Interactive storyboards and calculated fields in Tableau',
          'Presenting insights to non-technical stakeholders'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the eligibility for this Data Science course?',
        answer: 'Graduates from any discipline (B.E, B.Tech, BCA, MCA, B.Sc, B.Com, MBA) with logical curiosity can enroll. Basic math and computer fundamentals are all you need to start.'
      },
      {
        question: 'Are there live capstone projects included?',
        answer: 'Yes! You will complete 3 live business projects including Customer Churn Prediction, E-commerce Sales BI Dashboard, and Financial Risk Analytics.'
      }
    ]
  },
  'gen-ai': {
    id: 'gen-ai',
    title: 'Generative AI Course In Vadodara',
    subtitle: 'Master Large Language Models, Diffusion, RAG & Autonomous Agents',
    tag: 'Certification In Vadodara',
    duration: '3 Months',
    badge: 'Trending',
    avgSalary: '₹7 – ₹18 LPA*',
    rating: 4.9,
    reviewsCount: '390+ reviews',
    description: 'Learn to build and deploy generative AI applications, fine-tune open-source models, construct production RAG architectures, and orchestrate intelligent agents.',
    fullOverview: 'Generative AI is rewriting software engineering. This comprehensive course takes you inside modern transformer architectures, embeddings, vector databases, LangChain, LlamaIndex, and multimodal generative pipelines for real-world enterprise applications.',
    features: [
      'Comprehensive understanding of Transformer architectures & Attention mechanisms.',
      'Build production-ready Retrieval-Augmented Generation (RAG) systems.',
      'Fine-tune open-weights models (Llama 3, Mistral) using LoRA & PEFT.',
      'Create multi-agent autonomous teams with CrewAI and AutoGen.',
      'Deploy enterprise AI applications with evaluation benchmarks.'
    ],
    skills: [
      'LLM Architectures & Prompt Engineering Tactics',
      'LangChain & LlamaIndex Frameworks',
      'Vector Search & Embeddings with ChromaDB / Pinecone',
      'PEFT, LoRA & QLoRA Model Fine-Tuning',
      'Multimodal AI (Text-to-Image, Text-to-Audio)',
      'AI Guardrails, Security & Hallucination Mitigation'
    ],
    jobRoles: [
      'Generative AI Engineer',
      'LLM Solutions Architect',
      'AI Application Developer',
      'Prompt Engineer & AI Strategist',
      'Cognitive Computing Engineer'
    ],
    tools: [
      { name: 'LangChain' },
      { name: 'LlamaIndex' },
      { name: 'Hugging Face' },
      { name: 'Ollama' },
      { name: 'ChromaDB' },
      { name: 'CrewAI' },
      { name: 'FastAPI' },
      { name: 'Streamlit' }
    ],
    syllabus: [
      {
        title: 'Module 1: Foundations of Generative AI & Transformer Models',
        topics: [
          'History of NLP, tokenization, embeddings, and context windows',
          'Encoder-Decoder architectures vs Decoder-only LLMs',
          'Running open-source models locally with Ollama and vLLM'
        ]
      },
      {
        title: 'Module 2: Advanced Retrieval-Augmented Generation (RAG)',
        topics: [
          'Chunking strategies, metadata filtering, and embedding model selection',
          'Dense vs Hybrid search (BM25 + Semantic Embeddings)',
          'Re-ranking with Cohere & FlashRank, contextual compression',
          'Building an enterprise PDF knowledge assistant'
        ]
      },
      {
        title: 'Module 3: Fine-Tuning & Parameter-Efficient Techniques',
        topics: [
          'Supervised fine-tuning (SFT) datasets preparation',
          'Quantization (4-bit, 8-bit) and LoRA/QLoRA mechanics',
          'Direct Preference Optimization (DPO) and RLHF concepts'
        ]
      },
      {
        title: 'Module 4: Autonomous Agents & Multi-Agent Systems',
        topics: [
          'ReAct frameworks and tool calling with function execution',
          'Multi-agent collaboration with CrewAI and LangGraph',
          'Evaluating LLM outputs with Ragas and TruLens'
        ]
      }
    ],
    faqs: [
      {
        question: 'How is Generative AI different from standard Machine Learning?',
        answer: 'While traditional ML focuses on classification and regression on historical data, Generative AI creates novel synthetic content (code, text, imagery, structured data) by leveraging vast pre-trained foundation models.'
      },
      {
        question: 'Will I learn how to deploy these models to production?',
        answer: 'Yes! You will learn how to dockerize your application, create clean FastAPI backends, and host them on scalable cloud servers.'
      }
    ]
  },
  'ml': {
    id: 'ml',
    title: 'Machine Learning Course In Vadodara',
    subtitle: 'Practical Algorithmic Mastery & Production Engineering',
    tag: 'Certification In Vadodara',
    duration: '2.5 Months',
    badge: 'Trending',
    avgSalary: '₹6 – ₹15 LPA*',
    rating: 4.7,
    reviewsCount: '320+ reviews',
    description: 'Learn the underlying mechanics of machine learning algorithms from scratch. Master predictive modeling, regression, tree ensembles, SVMs, neural networks, and MLOps.',
    fullOverview: 'The Machine Learning course at Mamo TechnoLabs focuses on hands-on practical implementation. Students write code from mathematical formulation to scikit-learn implementations, learning how algorithms function under the hood and how to tune them for maximum accuracy.',
    features: [
      'Comprehensive mathematical intuition behind every ML algorithm.',
      'Advanced Feature Engineering and dimensionality reduction (PCA, t-SNE).',
      'Ensemble methods: XGBoost, LightGBM, CatBoost, and Stacking.',
      'Deploying models as RESTful microservices with Docker.',
      'Real-world portfolio projects solving enterprise problems.'
    ],
    skills: [
      'Linear & Logistic Regression, Regularization (L1/L2)',
      'Decision Trees, Random Forests & Gradient Boosted Ensembles',
      'Support Vector Machines (SVM) & Kernel Tricks',
      'K-Means, Hierarchical Clustering & DBSCAN',
      'MLflow for Experiment Tracking & Model Registry',
      'FastAPI & Docker Model Deployment'
    ],
    jobRoles: [
      'Machine Learning Engineer',
      'Predictive Modeling Analyst',
      'Data Scientist - ML Focus',
      'Quantitative Analyst',
      'MLOps Engineer'
    ],
    tools: [
      { name: 'Scikit-Learn' },
      { name: 'XGBoost' },
      { name: 'LightGBM' },
      { name: 'MLflow' },
      { name: 'NumPy' },
      { name: 'Docker' },
      { name: 'FastAPI' },
      { name: 'Git' }
    ],
    syllabus: [
      {
        title: 'Module 1: Mathematical Foundations & Exploratory Analytics',
        topics: [
          'Linear algebra, gradient descent optimization, cost functions',
          'Data cleaning, imputation strategies, and one-hot / target encoding',
          'Feature scaling, normalization, and outlier detection'
        ]
      },
      {
        title: 'Module 2: Supervised Learning Mastery',
        topics: [
          'Linear, Ridge, Lasso, and ElasticNet Regression',
          'Logistic regression, classification thresholds, confusion matrices',
          'Decision Trees, information gain, Gini impurity, and pruning',
          'Ensemble architectures: Random Forest, AdaBoost, XGBoost, LightGBM'
        ]
      },
      {
        title: 'Module 3: Unsupervised Learning & Dimensionality Reduction',
        topics: [
          'K-Means clustering and optimal K selection (Elbow / Silhouette)',
          'Hierarchical clustering and Dendrogram analysis',
          'Principal Component Analysis (PCA) and t-SNE visualization'
        ]
      },
      {
        title: 'Module 4: MLOps, Tracking & Deployment',
        topics: [
          'Experiment tracking and metric logging with MLflow',
          'Serializing models with Joblib and ONNX',
          'Building high-throughput REST inference endpoints with FastAPI',
          'Docker containerization and deployment'
        ]
      }
    ],
    faqs: [
      {
        question: 'What background do I need for Machine Learning?',
        answer: 'Familiarity with high school mathematics (algebra, basic calculus) and basic Python syntax is helpful. We cover all algorithmic principles step-by-step.'
      },
      {
        question: 'Is MLOps included in this course?',
        answer: 'Yes! We cover model serialization, experiment tracking, Docker packaging, and creating REST APIs to serve predictions.'
      }
    ]
  },
  'pe': {
    id: 'pe',
    title: 'Prompt Engineering Course In Vadodara',
    subtitle: 'Systemic Prompt Design, Reasoning Architectures & AI Automation',
    tag: 'Certification In Vadodara',
    duration: '1.5 Months',
    badge: 'New',
    avgSalary: '₹6 – ₹15 LPA*',
    rating: 4.8,
    reviewsCount: '250+ reviews',
    description: 'Master the art and science of communicating with Large Language Models. Build bulletproof prompts, implement zero-shot/few-shot architectures, and automate corporate workflows.',
    fullOverview: 'Prompt engineering has emerged as one of the most critical tech skills of the decade. This course takes you far beyond simple chat queries to advanced reasoning chains, structured output generation (JSON schemas), meta-prompting, evaluation metrics, and programmatic API integrations.',
    features: [
      'Master prompt architectures: CoT, Tree-of-Thoughts, ReAct, Self-Consistency.',
      'Reliably extract structured JSON data from unstructured documents.',
      'Automate workflows across marketing, legal, coding, and analytics.',
      'Design robust system instructions that resist adversarial jailbreaks.',
      'Integrate prompts programmatically via OpenAI, Anthropic, and Gemini SDKs.'
    ],
    skills: [
      'Few-Shot & Many-Shot Context In-Context Learning',
      'Chain-of-Thought (CoT) & ReAct Reasoning Protocols',
      'Structured Outputs, Function Calling & JSON Schema Enforcement',
      'Adversarial Testing & Prompt Injection Defense',
      'Python SDK Scripting with OpenAI, Anthropic & Google Gemini',
      'Automated Prompt Evaluation & Benchmarking'
    ],
    jobRoles: [
      'Prompt Engineer',
      'AI Workflow Specialist',
      'Conversational AI Designer',
      'AI Prompt Consultant',
      'Enterprise AI Coordinator'
    ],
    tools: [
      { name: 'OpenAI API' },
      { name: 'Anthropic SDK' },
      { name: 'Google Gemini' },
      { name: 'LangSmith' },
      { name: 'Promptfoo' },
      { name: 'VS Code' },
      { name: 'Python' }
    ],
    syllabus: [
      {
        title: 'Module 1: Core Mechanics of LLM Prompting',
        topics: [
          'Tokens, temperature, top_p, frequency/presence penalties',
          'Role-based prompting: System, User, and Assistant instructions',
          'Zero-shot, one-shot, and few-shot formatting best practices'
        ]
      },
      {
        title: 'Module 2: Advanced Cognitive & Reasoning Frameworks',
        topics: [
          'Chain-of-Thought (CoT) and Least-to-Most decomposition',
          'Tree-of-Thoughts (ToT) exploration and heuristic evaluation',
          'Self-Reflection, critic-agent workflows, and iterative refinement'
        ]
      },
      {
        title: 'Module 3: Structured Outputs & Function Calling',
        topics: [
          'Strict JSON schema outputs with Pydantic and instructor',
          'Function calling and programmatic database/API triggers',
          'Extracting relational tables from messy PDFs and emails'
        ]
      },
      {
        title: 'Module 4: Security, Robustness & Evaluation',
        topics: [
          'Detecting and mitigating prompt injections and jailbreak attacks',
          'Automated benchmarking and evaluation with Promptfoo',
          'Version controlling and maintaining production prompt registries'
        ]
      }
    ],
    faqs: [
      {
        question: 'Who should take a Prompt Engineering course?',
        answer: 'Software developers, product managers, technical writers, consultants, marketers, and students who want to supercharge their output and automate repetitive tasks with LLMs.'
      },
      {
        question: 'Do we learn how to code with LLM APIs in this course?',
        answer: 'Yes! We provide practical hands-on Python scripts showing how to call LLM APIs, pass variables dynamically, and validate output formats.'
      }
    ]
  }
};

export const catalogCourses: CatalogCourse[] = [
  {
    id: 'python-adv',
    name: 'Advanced Python Course',
    category: 'Programing Development',
    duration: '2 Months',
    description: 'Python is widely used in various applications and development projects. Master OOP, decorators, generators, APIs, and real projects.',
    badges: ['New'],
    icon: 'code'
  },
  {
    id: 'ai-tools-cat',
    name: 'AI Master Tools',
    category: 'AI & Machine Learning',
    duration: '1 Month',
    description: 'Most people know five AI tools and may use them wrong. The course teaches them which of those tools to reach for and why.',
    badges: ['Trending', 'New'],
    icon: 'brain',
    detailedSlug: 'ai-tools'
  },
  {
    id: 'aws-cloud',
    name: 'AWS Cloud Engineer Training',
    category: 'AI & Machine Learning',
    duration: '3 Months',
    description: 'Cloud computing has become the core of all digital businesses. Master EC2, S3, Lambda, IAM, and VPC architectures.',
    badges: ['New'],
    icon: 'cloud'
  },
  {
    id: 'ai-content',
    name: 'AI Content Creation Course',
    category: 'Digital Marketing',
    duration: '2 Months',
    description: 'Produce high-converting blog posts, marketing copies, and social media creative at 10x speed using generative text and image models.',
    badges: ['Trending'],
    icon: 'pen-tool'
  },
  {
    id: 'gen-ai-cat',
    name: 'Generative AI Course',
    category: 'AI & Machine Learning',
    duration: '3 Months',
    description: 'Comprehensive Generative AI training built for making AI learning easier without heavy jargon. Build LLM apps and RAG systems.',
    badges: ['Trending'],
    icon: 'sparkles',
    detailedSlug: 'gen-ai'
  },
  {
    id: 'selenium-cert',
    name: 'Selenium Certification Course',
    category: 'Software Testing & QA',
    duration: '2 Months',
    description: 'Selenium certification training designed for learners who want to master automated browser testing and QA frameworks.',
    badges: ['Trending'],
    icon: 'shield-check'
  },
  {
    id: 'ai-full',
    name: 'Artificial Intelligence',
    category: 'AI & Machine Learning',
    duration: '3 Months',
    description: 'Master Deep Learning, CNNs, Transformers, Computer Vision, and autonomous models with certified industry curriculum.',
    badges: ['Trending'],
    icon: 'cpu',
    detailedSlug: 'ai'
  },
  {
    id: 'ml-full',
    name: 'Machine Learning',
    category: 'AI & Machine Learning',
    duration: '2.5 Months',
    description: 'Practical algorithmic mastery from Regression and Tree Ensembles to MLOps, experiment tracking, and model deployment.',
    badges: ['Trending'],
    icon: 'bot',
    detailedSlug: 'ml'
  },
  {
    id: 'ds-full',
    name: 'Data Science',
    category: 'Analytics',
    duration: '3 Months',
    description: 'Transform raw data into strategic business decisions with Python, SQL, Statistics, Tableau, and Machine Learning.',
    badges: ['New'],
    icon: 'bar-chart',
    detailedSlug: 'ds'
  },
  {
    id: 'pe-full',
    name: 'Prompt Engineering',
    category: 'AI & Machine Learning',
    duration: '1.5 Months',
    description: 'Systemic prompt design, reasoning architectures, function calling, JSON schemas, and enterprise workflow automation.',
    badges: ['New'],
    icon: 'terminal',
    detailedSlug: 'pe'
  },
  {
    id: 'fullstack-mern',
    name: 'Full Stack MERN Development',
    category: 'Web Development',
    duration: '4 Months',
    description: 'Master MongoDB, Express.js, React.js, and Node.js with modern REST APIs, authentication, and full-stack cloud deployment.',
    badges: ['Trending'],
    icon: 'layers'
  },
  {
    id: 'flutter-app',
    name: 'Flutter Mobile App Development',
    category: 'Mobile App Development',
    duration: '3 Months',
    description: 'Build native iOS and Android apps from a single Dart codebase. Master state management, REST APIs, and app store deployment.',
    badges: ['New'],
    icon: 'smartphone'
  },
  {
    id: 'powerbi-dash',
    name: 'Power BI Business Analytics',
    category: 'Analytics',
    duration: '1.5 Months',
    description: 'Create interactive executive dashboards, master DAX calculations, and transform complex enterprise databases into visual insights.',
    badges: ['Trending'],
    icon: 'pie-chart'
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design with Figma',
    category: 'Design',
    duration: '2 Months',
    description: 'Wireframing, interactive prototyping, user research, design systems, and responsive layout guidelines in Figma.',
    badges: ['Trending'],
    icon: 'palette'
  },
  {
    id: 'digital-mktg-pro',
    name: 'Digital Marketing & SEO Mastery',
    category: 'Digital Marketing',
    duration: '3 Months',
    description: 'Search engine optimization (SEO), Google Ads, social media strategy, analytics, and conversion rate optimization.',
    badges: ['Trending'],
    icon: 'globe'
  },
  {
    id: 'playwright-qa',
    name: 'Playwright Test Automation',
    category: 'Software Testing & QA',
    duration: '2 Months',
    description: 'Modern, fast, and resilient end-to-end testing with Microsoft Playwright, TypeScript, CI/CD integration, and reporting.',
    badges: ['New'],
    icon: 'check-circle'
  }
];
