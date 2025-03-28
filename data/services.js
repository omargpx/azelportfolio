export const services = [
    {
        id: "web-development",
        num: "01",
        title: "Web Development",
        description: "I transform your ideas into digital realities. I build functional, attractive and responsive websites that adapt to any device.",
        full_description: "I transform your ideas into digital realities.  I build functional, attractive and responsive websites that adapt to any device. I use the latest technologies to ensure optimal performance and an exceptional user experience. From static websites to complex web applications, I take care of the whole process, from design to deployment.",
        href: "/services/web-development", 
        icon: "💻", // Opcional: puedes usar iconos o luego importar de react-icons
        features: [ // Lista de características/bullet points
            "Custom website development",
            "Responsive design",
            "Performance",
            "SEO basic"
        ],
        examples: [ 
            "E-commerce sites",
            "Corporate websites",
            "Landing pages",
            "Marketing",
            "Inventory",
            "Portfolio"
        ]
    },
    {
        id: "graphic-design",
        num: "02",
        title: "Graphic Design",
        description: "I create stunning visual designs that communicate your message effectively. I design logos, branding, and marketing materials that stand out.",
        full_description:"I create stunning visual designs that communicate your message effectively.  From logos and branding to marketing materials, I create a consistent and compelling visual identity that helps you stand out.  My goal is to help you convey your message in a clear and memorable way.",
        href: "/services/graphic-design",
        icon: "🎨",
        features: [
            "Logo design",
            "Brand identity",
            "Marketing materials"
        ],
        examples: [
            "Business cards",
            "Brochures",
            "Social media graphics"
        ]
    },
    {
        id: "backend-development",
        num: "03",
        title: "Backend Development",
        description: "I develop the logic, architecture and databases that guarantee the security, scalability and performance of your platform.",
        full_description:"I take care of the invisible but essential part of your website: the infrastructure that makes it work.  I develop the logic, architecture and databases that guarantee the security, scalability and performance of your platform.  I use robust and efficient programming languages to create custom solutions that fit your specific needs.",
        href: "/services/backend-development",
        icon: "⚙️",
        features: [
            "API development",
            "Database design",
            "Server management"
        ],
        technologies: [ // Tech stack
            "Spring",
            "Java",
            "SQL/NoSQL",
            "Cloud services"
        ]
    },
    {
        id: "ui-ux-design",
        num: "04",
        title: "UI/UX Design",
        description: "I design intuitive and attractive user interfaces that make it easy for your users to interact with your website or application.",
        full_description:"I design intuitive and attractive user interfaces that make it easy for your users to interact with your website or application.  I focus on the user experience, creating designs that are easy to use, pleasing to the eye and that meet your business objectives.  My priority is that your users have a positive and efficient experience.",
        href: "/services/ui-ux-design",
        icon: "✨",
        features: [
            "User research",
            "Prototyping",
            "Usability testing"
        ],
        deliverables: [
            "User flows",
            "High-fidelity mockups",
            "Design systems"
        ]
    }
];

//getters
export const getServiceById = (id) => {
    return services.find(service => service.id === id);
};

export const getAllServiceIds = () => {
    return services.map(service => service.id);
};