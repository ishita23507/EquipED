// Career Data
const careers = [
    {
        id: "software-developer",
        title: "Software Developer",
        category: "technology",
        shortDesc: "Build applications and software systems using programming languages.",
        description: "Software developers design, create, and maintain computer programs and applications. They write code, test software, fix bugs, and collaborate with teams to build products used by millions.",
        responsibilities: [
            "Write clean, efficient code",
            "Debug and test applications",
            "Collaborate with designers and other developers",
            "Maintain and update existing software",
            "Document code and technical processes"
        ],
        skills: ["Programming (Python, JavaScript, Java)", "Problem-solving", "Logical thinking", "Version control (Git)", "Communication"],
        education: "Bachelor's degree in Computer Science or related field, or coding bootcamp. Self-taught paths are also common.",
        salary: "$70,000 - $150,000/year",
        related: ["data-analyst", "web-developer", "cybersecurity-analyst"]
    },
    {
        id: "web-developer",
        title: "Web Developer",
        category: "technology",
        shortDesc: "Create and maintain websites and web applications.",
        description: "Web developers build websites and web applications. They work with HTML, CSS, and JavaScript to create user interfaces, and may also work on server-side programming.",
        responsibilities: [
            "Design and build web pages",
            "Ensure website performance and speed",
            "Make sites mobile-friendly",
            "Work with designers on visual elements",
            "Integrate websites with databases"
        ],
        skills: ["HTML, CSS, JavaScript", "Responsive design", "Web frameworks (React, Vue)", "Basic design sense", "Problem-solving"],
        education: "Degree in Computer Science or web development bootcamp. Many successful developers are self-taught.",
        salary: "$50,000 - $120,000/year",
        related: ["software-developer", "ux-designer", "data-analyst"]
    },
    {
        id: "data-analyst",
        title: "Data Analyst",
        category: "technology",
        shortDesc: "Analyze data to help organizations make better decisions.",
        description: "Data analysts collect, process, and analyze data to find patterns and insights. They create reports and visualizations to help businesses understand trends and make informed decisions.",
        responsibilities: [
            "Collect and clean data from various sources",
            "Analyze data using statistical methods",
            "Create charts, dashboards, and reports",
            "Present findings to stakeholders",
            "Identify trends and patterns"
        ],
        skills: ["Excel and spreadsheets", "SQL", "Data visualization tools", "Statistical analysis", "Critical thinking"],
        education: "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field. Online certifications also valuable.",
        salary: "$55,000 - $100,000/year",
        related: ["software-developer", "marketing-manager", "financial-analyst"]
    },
    {
        id: "cybersecurity-analyst",
        title: "Cybersecurity Analyst",
        category: "technology",
        shortDesc: "Protect computer systems and networks from cyber threats.",
        description: "Cybersecurity analysts protect organizations from cyber attacks. They monitor systems for security breaches, investigate incidents, and implement security measures.",
        responsibilities: [
            "Monitor networks for security threats",
            "Investigate security breaches",
            "Install and maintain security software",
            "Develop security policies",
            "Train employees on security practices"
        ],
        skills: ["Network security", "Risk assessment", "Security tools", "Problem-solving", "Attention to detail"],
        education: "Bachelor's degree in Cybersecurity, Computer Science, or IT. Certifications like CompTIA Security+ are valuable.",
        salary: "$65,000 - $130,000/year",
        related: ["software-developer", "data-analyst", "network-administrator"]
    },
    {
        id: "registered-nurse",
        title: "Registered Nurse",
        category: "healthcare",
        shortDesc: "Provide patient care and support in healthcare settings.",
        description: "Registered nurses provide and coordinate patient care, educate patients about health conditions, and provide advice and emotional support to patients and their families.",
        responsibilities: [
            "Assess patient health conditions",
            "Administer medications and treatments",
            "Monitor patient progress",
            "Educate patients about health management",
            "Collaborate with doctors and healthcare teams"
        ],
        skills: ["Clinical skills", "Patient care", "Communication", "Critical thinking", "Empathy"],
        education: "Nursing degree (BSN or ADN) and passing the NCLEX-RN exam. Some roles require additional specialization.",
        salary: "$60,000 - $110,000/year",
        related: ["medical-assistant", "pharmacist", "physical-therapist"]
    },
    {
        id: "medical-assistant",
        title: "Medical Assistant",
        category: "healthcare",
        shortDesc: "Support healthcare operations with clinical and administrative tasks.",
        description: "Medical assistants work in clinics and hospitals, helping with both clinical tasks (taking vitals, assisting with procedures) and administrative duties (scheduling, records).",
        responsibilities: [
            "Take patient vital signs",
            "Prepare patients for examinations",
            "Schedule appointments",
            "Maintain medical records",
            "Assist physicians during procedures"
        ],
        skills: ["Medical terminology", "Patient communication", "Basic clinical skills", "Organization", "Computer skills"],
        education: "Certificate or diploma from a medical assisting program. Some positions offer on-the-job training.",
        salary: "$30,000 - $45,000/year",
        related: ["registered-nurse", "pharmacist", "physical-therapist"]
    },
    {
        id: "pharmacist",
        title: "Pharmacist",
        category: "healthcare",
        shortDesc: "Dispense medications and advise patients on proper use.",
        description: "Pharmacists dispense prescription medications, advise patients on drug interactions and side effects, and ensure safe and effective medication use.",
        responsibilities: [
            "Fill and verify prescriptions",
            "Counsel patients on medication use",
            "Check for drug interactions",
            "Manage pharmacy inventory",
            "Collaborate with healthcare providers"
        ],
        skills: ["Pharmaceutical knowledge", "Attention to detail", "Patient communication", "Chemistry", "Ethics"],
        education: "Doctor of Pharmacy (PharmD) degree and licensure exam. Requires 6-8 years of education.",
        salary: "$100,000 - $150,000/year",
        related: ["registered-nurse", "medical-assistant", "physical-therapist"]
    },
    {
        id: "physical-therapist",
        title: "Physical Therapist",
        category: "healthcare",
        shortDesc: "Help patients recover movement and manage pain after injuries.",
        description: "Physical therapists help patients recover from injuries, surgeries, or illnesses by developing treatment plans that improve movement, reduce pain, and restore function.",
        responsibilities: [
            "Evaluate patient conditions",
            "Develop treatment plans",
            "Guide patients through exercises",
            "Track patient progress",
            "Educate patients on injury prevention"
        ],
        skills: ["Anatomy knowledge", "Physical stamina", "Communication", "Problem-solving", "Patience"],
        education: "Doctor of Physical Therapy (DPT) degree. Requires clinical internships and licensure.",
        salary: "$70,000 - $100,000/year",
        related: ["registered-nurse", "medical-assistant", "pharmacist"]
    },
    {
        id: "marketing-manager",
        title: "Marketing Manager",
        category: "business",
        shortDesc: "Plan and execute marketing strategies to promote products or services.",
        description: "Marketing managers oversee marketing campaigns, analyze market trends, and develop strategies to reach target audiences and drive sales.",
        responsibilities: [
            "Develop marketing strategies",
            "Manage advertising campaigns",
            "Analyze market research",
            "Oversee social media presence",
            "Track campaign performance"
        ],
        skills: ["Marketing strategy", "Data analysis", "Communication", "Creativity", "Project management"],
        education: "Bachelor's degree in Marketing, Business, or Communications. MBA can advance career.",
        salary: "$65,000 - $140,000/year",
        related: ["financial-analyst", "hr-manager", "ux-designer"]
    },
    {
        id: "financial-analyst",
        title: "Financial Analyst",
        category: "business",
        shortDesc: "Analyze financial data and provide investment recommendations.",
        description: "Financial analysts evaluate financial data, study economic trends, and provide recommendations on investments, budgeting, and financial planning.",
        responsibilities: [
            "Analyze financial statements",
            "Create financial models",
            "Prepare reports for stakeholders",
            "Monitor market trends",
            "Recommend investment strategies"
        ],
        skills: ["Financial modeling", "Excel", "Analytical thinking", "Communication", "Attention to detail"],
        education: "Bachelor's degree in Finance, Accounting, or Economics. CFA certification is valuable.",
        salary: "$60,000 - $120,000/year",
        related: ["accountant", "marketing-manager", "data-analyst"]
    },
    {
        id: "accountant",
        title: "Accountant",
        category: "business",
        shortDesc: "Manage financial records and ensure regulatory compliance.",
        description: "Accountants prepare and examine financial records, ensure taxes are paid properly, and help organizations run efficiently by maintaining accurate financial information.",
        responsibilities: [
            "Prepare financial statements",
            "Manage tax filings",
            "Audit financial records",
            "Ensure regulatory compliance",
            "Advise on cost reduction"
        ],
        skills: ["Accounting principles", "Tax knowledge", "Excel", "Attention to detail", "Ethics"],
        education: "Bachelor's degree in Accounting. CPA certification required for many positions.",
        salary: "$50,000 - $95,000/year",
        related: ["financial-analyst", "hr-manager", "marketing-manager"]
    },
    {
        id: "hr-manager",
        title: "Human Resources Manager",
        category: "business",
        shortDesc: "Manage employee relations, hiring, and workplace policies.",
        description: "HR managers oversee recruitment, employee relations, benefits administration, and ensure compliance with labor laws. They work to create positive workplace environments.",
        responsibilities: [
            "Recruit and hire employees",
            "Manage employee benefits",
            "Handle workplace conflicts",
            "Develop company policies",
            "Ensure legal compliance"
        ],
        skills: ["Communication", "Conflict resolution", "Organization", "Labor law knowledge", "Empathy"],
        education: "Bachelor's degree in Human Resources, Business, or Psychology. HR certifications add value.",
        salary: "$65,000 - $120,000/year",
        related: ["marketing-manager", "accountant", "teacher"]
    },
    {
        id: "ux-designer",
        title: "UX Designer",
        category: "creative",
        shortDesc: "Design user-friendly digital products and experiences.",
        description: "UX designers focus on creating intuitive, accessible, and enjoyable experiences for users of websites, apps, and software. They research user needs and design solutions.",
        responsibilities: [
            "Research user needs and behaviors",
            "Create wireframes and prototypes",
            "Conduct usability testing",
            "Collaborate with developers",
            "Iterate designs based on feedback"
        ],
        skills: ["User research", "Wireframing tools (Figma, Sketch)", "Empathy", "Problem-solving", "Visual design basics"],
        education: "Bachelor's degree in Design, HCI, or related field. Bootcamps and portfolios are also pathways.",
        salary: "$60,000 - $130,000/year",
        related: ["web-developer", "marketing-manager", "content-writer"]
    },
    {
        id: "content-writer",
        title: "Content Writer",
        category: "creative",
        shortDesc: "Create written content for websites, blogs, and marketing materials.",
        description: "Content writers create engaging written material for various platforms including websites, blogs, social media, and marketing campaigns. They adapt their writing style to different audiences.",
        responsibilities: [
            "Write articles, blogs, and web copy",
            "Research topics thoroughly",
            "Optimize content for SEO",
            "Edit and proofread content",
            "Meet deadlines consistently"
        ],
        skills: ["Writing", "Research", "SEO basics", "Adaptability", "Grammar"],
        education: "Bachelor's degree in English, Journalism, or Communications. Strong portfolio often more important.",
        salary: "$40,000 - $80,000/year",
        related: ["ux-designer", "marketing-manager", "teacher"]
    },
    {
        id: "teacher",
        title: "Teacher",
        category: "education",
        shortDesc: "Educate students and help them develop knowledge and skills.",
        description: "Teachers plan lessons, deliver instruction, assess student progress, and create supportive learning environments. They work in schools at various levels from elementary to high school.",
        responsibilities: [
            "Plan and deliver lessons",
            "Assess student progress",
            "Manage classroom behavior",
            "Communicate with parents",
            "Adapt teaching to different learners"
        ],
        skills: ["Communication", "Patience", "Subject expertise", "Organization", "Creativity"],
        education: "Bachelor's degree in Education or subject area, plus teaching certification/license.",
        salary: "$40,000 - $70,000/year",
        related: ["hr-manager", "content-writer", "registered-nurse"]
    }
];
// Opportunities Data
const opportunities = {
    internships: [
        { name: "LinkedIn Jobs", desc: "Search internships worldwide", url: "https://www.linkedin.com/jobs/internship-jobs" },
        { name: "Indeed", desc: "Find local and remote internships", url: "https://www.indeed.com/q-internship-jobs.html" },
        { name: "Internshala", desc: "Internships in India", url: "https://internshala.com/" },
        { name: "Handshake", desc: "For college students in the US", url: "https://joinhandshake.com/" },
        { name: "WayUp", desc: "Entry-level jobs and internships", url: "https://www.wayup.com/" }
    ],
    courses: [
        { name: "Coursera", desc: "Free courses from top universities", url: "https://www.coursera.org/" },
        { name: "edX", desc: "Harvard, MIT, and more—free to audit", url: "https://www.edx.org/" },
        { name: "Khan Academy", desc: "100% free learning platform", url: "https://www.khanacademy.org/" },
        { name: "freeCodeCamp", desc: "Learn coding for free", url: "https://www.freecodecamp.org/" },
        { name: "Udemy", desc: "Affordable courses on many topics", url: "https://www.udemy.com/" },
        { name: "MIT OpenCourseWare", desc: "Free MIT course materials", url: "https://ocw.mit.edu/" }
    ],
    certifications: [
        { name: "Google Career Certificates", desc: "Job-ready skills in tech and business", url: "https://grow.google/certificates/" },
        { name: "IBM SkillsBuild", desc: "Free tech and business training", url: "https://skillsbuild.org/" },
        { name: "Microsoft Learn", desc: "Free Microsoft certifications", url: "https://learn.microsoft.com/" },
        { name: "AWS Training", desc: "Cloud computing certifications", url: "https://aws.amazon.com/training/" },
        { name: "HubSpot Academy", desc: "Free marketing certifications", url: "https://academy.hubspot.com/" }
    ],
    projects: [
        { name: "GitHub", desc: "Host projects and contribute to open source", url: "(https://github.com/" },
        { name: "Kaggle", desc: "Data science competitions", url: "https://www.kaggle.com/" },
        { name: "Devpost", desc: "Hackathons and competitions", url: "https://devpost.com/" },
        { name: "Behance", desc: "Showcase creative projects", url: "https://www.behance.net/" },
        { name: "The Odin Project", desc: "Build real web projects", url: "https://www.theodinproject.com/" }
    ]
};
// Render Functions
function renderCareers() {
    const grid = document.getElementById('careersGrid');
    if (!grid) return;
    
    grid.innerHTML = careers.map(career => `
        <a href="career-detail.html?id=${career.id}" class="career-card" data-category="${career.category}">
            <div class="career-card-header">
                <h3>${career.title}</h3>
                <span class="career-tag">${capitalizeFirst(career.category)}</span>
            </div>
            <p>${career.shortDesc}</p>
        </a>
    `).join('');
}

function renderCareerDetail() {
    const container = document.getElementById('careerDetail');
    if (!container) return;
    
    const params = new URLSearchParams(window.location.search);
    const careerId = params.get('id');
    const career = careers.find(c => c.id === careerId);
    
    if (!career) {
        container.innerHTML = `
            <p>Career not found. <a href="careers.html">View all careers</a></p>
        `;
        return;
    }
    
    document.title = `${career.title} - Career Explorer`;
    
    const relatedCareers = career.related
        .map(id => careers.find(c => c.id === id))
        .filter(c => c);
    
    container.innerHTML = `
        <h2>${career.title}</h2>
        <span class="career-tag">${capitalizeFirst(career.category)}</span>
        
        <div class="career-detail-section">
            <h3>What They Do</h3>
            <p>${career.description}</p>
        </div>
        
        <div class="career-detail-section">
            <h3>Key Responsibilities</h3>
            <ul>
                ${career.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
        
        <div class="career-detail-section">
            <h3>Skills Needed</h3>
            <ul>
                ${career.skills.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
        
        <div class="career-detail-section">
            <h3>Education Path</h3>
            <p>${career.education}</p>
        </div>
        
        <div class="career-detail-section">
            <h3>Typical Salary</h3>
            <span class="salary-badge">${career.salary}</span>
        </div>
        
        ${relatedCareers.length > 0 ? `
            <div class="career-detail-section">
                <h3>Related Careers</h3>
                <div class="related-careers">
                    ${relatedCareers.map(rc => `
                        <a href="career-detail.html?id=${rc.id}" class="related-career-link">${rc.title}</a>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
}

function renderOpportunities() {
    renderOpportunityGrid('internshipsGrid', opportunities.internships);
    renderOpportunityGrid('coursesGrid', opportunities.courses);
    renderOpportunityGrid('certificationsGrid', opportunities.certifications);
    renderOpportunityGrid('projectsGrid', opportunities.projects);
}

function renderOpportunityGrid(gridId, items) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = items.map(item => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="opportunity-card">
            <div class="opportunity-info">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
            </div>
            <span class="external-icon">↗</span>
        </a>
    `).join('');
}

// ========================================
// Progress Tracker
// ========================================

function getProgress() {
    const saved = localStorage.getItem('careerExplorerProgress');
    return saved ? JSON.parse(saved) : {
        internships: [],
        courses: [],
        certifications: [],
        projects: []
    };
}

function saveProgress(progress) {
    localStorage.setItem('careerExplorerProgress', JSON.stringify(progress));
}

function renderProgress() {
    const progress = getProgress();
    
    // Render summary
    const summaryContainer = document.getElementById('progressSummary');
    if (summaryContainer) {
        const totalItems = Object.values(progress).flat().length;
        const completedItems = Object.values(progress).flat().filter(item => item.completed).length;
        
        summaryContainer.innerHTML = `
            <div class="summary-card">
                <div class="summary-number">${progress.internships.length}</div>
                <div class="summary-label">Internships</div>
            </div>
            <div class="summary-card">
                <div class="summary-number">${progress.courses.length}</div>
                <div class="summary-label">Courses</div>
            </div>
            <div class="summary-card">
                <div class="summary-number">${progress.certifications.length}</div>
                <div class="summary-label">Certifications</div>
            </div>
            <div class="summary-card">
                <div class="summary-number">${completedItems}/${totalItems}</div>
                <div class="summary-label">Completed</div>
            </div>
        `;
    }
    
    // Render lists
    renderProgressList('internshipsList', progress.internships, 'internships');
    renderProgressList('coursesList', progress.courses, 'courses');
    renderProgressList('certificationsList', progress.certifications, 'certifications');
    renderProgressList('projectsList', progress.projects, 'projects');
    
    // Setup clear button
    const clearBtn = document.getElementById('clearProgress');
    if (clearBtn) {
        clearBtn.onclick = function() {
            if (confirm('Are you sure you want to clear all progress?')) {
                localStorage.removeItem('careerExplorerProgress');
                renderProgress();
            }
        };
    }
}

function renderProgressList(listId, items, category) {
    const list = document.getElementById(listId);
    if (!list) return;
    
    if (items.length === 0) {
        list.innerHTML = '<li class="empty-message">No items yet. Add one above!</li>';
        return;
    }
    
    list.innerHTML = items.map((item, index) => `
        <li class="progress-item ${item.completed ? 'completed' : ''}">
            <input type="checkbox" 
                   class="item-checkbox" 
                   ${item.completed ? 'checked' : ''} 
                   onchange="toggleItem('${category}', ${index})">
            <span class="item-name">${item.name}</span>
            <button class="item-delete" onclick="deleteItem('${category}', ${index})" title="Delete">×</button>
        </li>
    `).join('');
}

function toggleItem(category, index) {
    const progress = getProgress();
    progress[category][index].completed = !progress[category][index].completed;
    saveProgress(progress);
    renderProgress();
}

function deleteItem(category, index) {
    const progress = getProgress();
    progress[category].splice(index, 1);
    saveProgress(progress);
    renderProgress();
}

function setupProgressForm() {
    const form = document.getElementById('addItemForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const category = document.getElementById('itemCategory').value;
        const name = document.getElementById('itemName').value.trim();
        
        if (!category || !name) return;
        
        const progress = getProgress();
        progress[category].push({ name: name, completed: false });
        saveProgress(progress);
        
        // Reset form
        document.getElementById('itemCategory').value = '';
        document.getElementById('itemName').value = '';
        
        renderProgress();
    });
}

// ========================================
// Search & Filter
// ========================================

function setupCareerSearch() {
    const searchInput = document.getElementById('careerSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const cards = document.querySelectorAll('.career-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            const matches = title.includes(query) || desc.includes(query);
            card.classList.toggle('hidden', !matches);
        });
    });
}

function setupCareerFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            const cards = document.querySelectorAll('.career-card');
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
            
            // Clear search
            const searchInput = document.getElementById('careerSearch');
            if (searchInput) searchInput.value = '';
        });
    });
}
// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Make functions globally available
window.toggleItem = toggleItem;
window.deleteItem = deleteItem;
