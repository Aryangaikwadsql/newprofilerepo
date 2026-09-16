export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Experience", link: "#experience" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title: "I'm Aryan Gaikwad, a passionate Full Stack Engineer",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh] xl:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/assets/b1.png",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-72 xl:min-h-60",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Pursuing B.E. in Information Technology with focus on scalable systems and applied AI.",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "NutriLens - AI-Powered Nutrition Assistant",
		des: "Developed a fully free web app that analyzes food images to deliver real-time nutritional insights using AI. Integrated Claude via OpenRouter API to offer intelligent meal assessments and promote healthier eating habits.",
		img: "/p1.png",
		iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
		link: "/ui.earth.com",
		url: "#",
	},
	{
		id: 2,
		title: "GateLog – Visitor Management System",
		des: "Built a full-stack visitor management system for residential and commercial societies to enhance security and accountability. Designed with role-based access control, real-time resident approvals, and PDF export of visitor logs.",
		img: "/p2.gif",
		iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
		link: "/ui.yoom.com",
		url: "#",
	},
];


export const workExperience = [
	{
		id: 1,
		title: "Research Trainee\nBhabha Atomic Research Centre (BARC)",
		desc: "Conducting research on intelligent network intrusion detection using hybrid deep learning, NetFlow analysis, and transformer-based attention. Evaluating models on large-scale traffic datasets to improve threat detection, robustness, and accuracy while reducing false positives.",
		className: "md:col-span-2",
		thumbnail: "/barclogo.png",
	},
	{
		id: 2,
  		title: "Project Trainee\nBhabha Atomic Research Centre (BARC)",
  		desc: "Developed an unsupervised network anomaly detection system using an ensemble of autoencoders to model normal traffic and flag anomalies via reconstruction error. Worked with Scientific Officers in a high security research environment and validated detection on large scale IoT traffic exceeding 100k flows.",
  		className: "md:col-span-2",
  		thumbnail: "/barclogo.png",
	},
	{
		id: 3,
		title: "Student Coordinator\nTraining & Placement Office",
		desc: "Assisted in coordinating campus recruitment drives and student-company interactions. Helped organize workshops and placement-focused events, ensuring smooth execution. Acted as a point of contact to resolve student queries and ensure smooth operations.",
		className: "md:col-span-2",
		thumbnail: "/college_logo.png",
	},
];

export const extensions = [
	{
		id: 1,
		title: "CAPTCHA OCR Cropper\n(VS Code Extension)",
		desc: "This VS Code extension opens a webview where you can load or paste an image, crop a region, and run OCR using OCR.space. It includes local preprocessing, adjustable threshold and scale controls, and automatic re-runs for improved accuracy.",
		badges: ["300+ installs", "Under development"],
		className: "md:col-span-2",
		thumbnail: "/ocr.png",
		url: "https://marketplace.visualstudio.com/items?itemName=AryanGaikwad.captcha-ocr-cropper",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		url: "https://github.com/Aryangaikwadsql",
	},
	{
		id: 2,
		img: "/link.svg",
		url: "https://linkedin.com/in/aryan-g-3093862ab/",
	},
	{
		id: 3,
		img: "/resumeicon.png",
		url: "https://drive.google.com/file/d/1nWv52KR01Pth-SOdBLHQdVdq1j8obF4X/view?usp=sharing",
	},
];



//  projects for 3d screen

export const myProject = [
	{
		title: 'Network Intrusion Detection System',
		desc: 'Built a machine learning system to identify suspicious patterns in network traffic and support faster cybersecurity monitoring.',
		subdesc:
			'Focused on improving threat detection, reducing false alarms, and making security analysis more reliable across different types of network activity.',
		href: '',
		texture: '',
		modelPath: '/models/artificial_neural_network_ann.glb',
		groupScale: 0.65,
		modelScale: 0.15,
		modelPosition: [0, 1.3, 0],
		modelRotation: [0.15, Math.PI * 0.88, 0],
		videoOnly: false,
		logo: '/assets/cybersecurity-logo.svg',
		logoStyle: {
			backgroundColor: '#0B1220',
			border: '0.2px solid #58E6B1',
			boxShadow: '0px 0px 60px 0px #58E6B14D',
		},
		spotlight: '/assets/spotlight3.png',
		tags: [
		  {
		    id: 1,
		    name: 'Python',
		    path: '/assets/python.svg',
		  },
		  {
		    id: 2,
		    name: 'TensorFlow',
		    path: '/assets/tensorflow.svg',
		  },
		  {
		    id: 3,
		    name: 'PyTorch',
		    path: '/assets/pytorch.svg',
		  },
		  {
		    id: 4,
		    name: 'Scikit-learn',
		    path: '/assets/sklearn.png',
		  },
		  {
		    id: 5,
		    name: 'CUDA',
		    path: '/assets/cuda.svg',
		  },
		  {
		    id: 6,
		    name: 'ONNX Runtime',
		    path: '/assets/onnx-runtime.svg',
		  },
		],
	},
  {
    title: 'NutriLens - AI-Powered Nutrition Assistant',
    desc: 'Developed a fully free web app that analyzes food images to deliver real-time nutritional insights using AI.',
    subdesc:
      'Integrated Claude via OpenRouter API to offer intelligent meal assessments and promote healthier eating habits. Designed for commercial production-grade deployment with clean architecture, modular code, and scalable backend. Integrated Claude (via OpenRouter API), deployed on Vercel, and secured using TypeScript, Axios, and .env configs.',
    href: 'https://nutrilens-update3-t2fh.vercel.app/',
    texture: '/textures/project/project1.mp4',
    groupScale: 1.7,
    modelScale: 0.85,
    modelPosition: [0, -0.2, 0],
    modelRotation: [0, Math.PI * 0.15, 0],
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.svg',
      },
    ],
  },
  {
    title: 'GateLog – Visitor Management System',
    desc: 'Built a full-stack visitor management system for residential and commercial societies to enhance security and accountability.',
    subdesc:
      'Designed and deployed the MVP with role-based access control, real-time resident approvals, and PDF export of visitor logs. Architected for commercial production-grade deployment on Vercel, featuring scalable authentication, Firestore, and cloud storage.',
    href: 'https://gate-log-visitor-management-system-mu.vercel.app/',
    texture: '/textures/project/project2.mp4',
    groupScale: 1.75,
    modelScale: 0.9,
    modelPosition: [0, -0.25, 0],
    modelRotation: [0, Math.PI * 0.12, 0],
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.svg',
      },
    ],
  },
];

// Companies I've worked with (none yet)
export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
];
