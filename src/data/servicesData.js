// Service Categories with descriptions from opeltech.ae
export const servicesData = [
    {
        id: 1,
        image: '/services/networking.png',
        title: "Enterprise Networking",
        description: "Expert provider in Dubai specializing in standardized data cabling installation and infrastructure design using authentic products and latest technologies.",
        longDescription: "Opel Tech stands out as a premier provider of structured cabling solutions in Dubai, offering expertly designed and installed systems tailored to meet your organization's unique requirements."
    },
    {
        id: 2,
        image: '/services/datacenter.png',
        title: "Datacenter Solutions",
        description: "Comprehensive solutions for robust data center environments designed to support evolving enterprise workloads.",
        longDescription: "Our Datacenter Solutions encompass everything from advanced rack enclosures and power distribution to intelligent cooling systems, ensuring high availability and seamless scalability for mission-critical operations."
    },
    {
        id: 3,
        image: '/services/communications.png',
        title: "Unified Communications",
        description: "Implementation of IP-based communication systems that integrate voice and data, replacing traditional analog phone lines with efficient, scalable hardware.",
        longDescription: "IP telephony encompasses the various technologies that utilize Internet Protocols to transmit voice communications over networks, transforming how businesses connect and collaborate on a global scale."
    },
    {
        id: 4,
        image: '/services/access_control.png',
        title: "Access Control & Security",
        description: "Security-focused solutions featuring Biometric systems (fingerprint, facial recognition) and electronic locks to manage entry and exit in commercial spaces.",
        longDescription: "Opel Tech is a premier provider of advanced Biometric Access Control Systems tailored for diverse applications, ensuring comprehensive security, auditing capabilities, and peace of mind across your entire facility."
    },
    {
        id: 5,
        image: '/services/cloud.png',
        title: "Cloud & Virtualization",
        description: "Provision of robust cloud infrastructure and virtualized environments essential for a mobile workforce and scalable business operations.",
        longDescription: "Cloud access and virtualization are no longer viewed as luxuries; they are essential components of modern infrastructure, driving business mobility, disaster recovery, and seamless connectivity."
    },
    {
        id: 6,
        image: '/services/consulting.png',
        title: "IT Strategy & Consulting",
        description: "Strategic planning, system design, and continuous operational support tailored to enhance overall IT efficiency.",
        longDescription: "Our IT Strategy consultants deliver advanced solutions tailored to different organizational sizes, helping your team successfully navigate digital transformation, optimize hardware costs, and adopt industry best practices."
    }
];

// Product categories and their associated brands from opeltech.ae
export const productCategories = [
    {
        name: "Computers & Laptops",
        brands: ["Apple", "ASUS", "Dell", "HP", "Lenovo", "Fujitsu", "IBM"]
    },
    {
        name: "Monitors & Displays",
        brands: ["Samsung", "Dell", "HP", "Philips", "LG"]
    },
    {
        name: "Computer Accessories",
        brands: ["Logitech", "3M", "Microsoft", "Apple"]
    },
    {
        name: "Networking & Communication",
        brands: ["Cisco", "D-Link", "TP-Link", "Belden", "Belcable", "Commscope", "Panduit", "Mikrotik", "Ubiquiti"]
    },
    {
        name: "Cables & Adapters",
        brands: ["Monoprice", "UGREEN"]
    },
    {
        name: "Printers & Accessories",
        brands: ["Canon", "Epson", "Zebra", "SATO"]
    },
    {
        name: "Software & Licensing",
        brands: ["Adobe", "Kaspersky", "Microsoft"]
    },
    {
        name: "Storage & Graphics",
        brands: ["Western Digital", "Seagate", "Kingston"]
    },
    {
        name: "Power & Backup",
        brands: ["APC", "Eaton", "Schneider", "ATEN"]
    },
    {
        name: "Security & Access Control",
        brands: ["Dahua", "Hikvision", "Ezviz", "FLIR", "Honeywell", "Imou", "Suprema", "ZKTeco", "eSSL", "HID", "IDEMIA", "BioMax", "Bosch"]
    },
    {
        name: "Audio/Video",
        brands: ["Barco", "Polycom", "Logitech", "Jabra", "Plantronics", "Canon", "Epson", "Sony", "LG"]
    }
];

// Brand to logo file mapping
export const brandLogos = {
    "HP": "/logos/hp-svgrepo-com.svg",
    "Canon": "/logos/Canon_logo.svg.png",
    "Epson": "/logos/epson-svgrepo-com.svg",
    "Lenovo": "/logos/lenovo-svgrepo-com.svg",
    "Logitech": "/logos/logitech-svgrepo-com.svg",
    "Dell": "/logos/dell-2-logo-svgrepo-com.svg",
    "Seagate": "/logos/seagate-svgrepo-com.svg",
    "Fujitsu": "/logos/png-transparent-fujitsu-hd-logo-1624243671.png",
    "Schneider": "/logos/logo_Schneider_Electric_logotype_green.svg",
    "APC": "/logos/APC-logo.svg.png",
    "ASUS": "/logos/ASUS_Logo.svg.png",
    "Microsoft": "/logos/microsoft-svgrepo-com.svg",
    "IBM": "/logos/ibm-svgrepo-com.svg",
    "Monoprice": "/logos/Monoprice_logo_black.svg.png",
    "Belden": "/logos/Belden.svg",
    "Honeywell": "/logos/Honeywell_logo.svg.png",
    "D-Link": null,
    "TP-Link": "/logos/TP-LINK_logo.svg",
    "Pegasus": "/logos/Pegasus_Airlines_logo.svg",
    "UGREEN": "/logos/ugreen.svg",
    "Apple": "/logos/apple-173-svgrepo-com.svg",
    "Zebra": "/logos/ZBRA_BIG.svg",
    "Samsung": "/logos/samsung-logo.svg",
    "ATEN": "/logos/aten-international.svg",
    "3M": "/logos/3M_wordmark.svg",
    "SATO": "/logos/sato.svg",
    "Cisco": "/logos/cisco-svgrepo-com.svg",
    "Western Digital": "/logos/brand-western-digital-svgrepo-com.svg",
    "Suprema": "/logos/suprema.svg",
    "ZKTeco": null,
    "HID": "/logos/HID_Global_logo.svg",
    "Panduit": "/logos/Logo_of_Panduit_Corporation.svg",
    "BioMax": "/logos/BIOMAX Logo Vector.svg",
    "IDEMIA": "/logos/IDEMIA_logo.svg",
    "Bosch": "/logos/Bosch-Logo.svg",
    "Eaton": "/logos/Eaton_Corporation_logo.svg",
    "Commscope": "/logos/CommScope_logo.svg",
    "eSSL": null,
    "Jabra": null,
    "Hikvision": "/logos/Hikvision_logo.svg",
    "Philips": "/logos/Philips_logo.svg"
};

// Brand website URLs
export const brandWebsites = {
    "HP": "https://www.hp.com",
    "Canon": "https://www.canon.com",
    "Epson": "https://www.epson.com",
    "Lenovo": "https://www.lenovo.com",
    "Logitech": "https://www.logitech.com",
    "Dell": "https://www.dell.com",
    "Seagate": "https://www.seagate.com",
    "Fujitsu": "https://www.fujitsu.com",
    "Schneider": "https://www.se.com",
    "APC": "https://www.apc.com",
    "ASUS": "https://www.asus.com",
    "Microsoft": "https://www.microsoft.com",
    "IBM": "https://www.ibm.com",
    "Monoprice": "https://www.monoprice.com",
    "Belden": "https://www.belden.com",
    "Honeywell": "https://www.honeywell.com",
    "D-Link": "https://www.dlink.com",
    "TP-Link": "https://www.tp-link.com",
    "Pegasus": "https://www.flypgs.com",
    "UGREEN": "https://www.ugreen.com",
    "Apple": "https://www.apple.com",
    "Zebra": "https://www.zebra.com",
    "Samsung": "https://www.samsung.com",
    "ATEN": "https://www.aten.com",
    "3M": "https://www.3m.com",
    "SATO": "https://www.sato-global.com",
    "Cisco": "https://www.cisco.com",
    "Western Digital": "https://www.westerndigital.com",
    "Suprema": "https://www.supremainc.com",
    "ZKTeco": "https://www.zkteco.com",
    "HID": "https://www.hidglobal.com",
    "Panduit": "https://www.panduit.com",
    "BioMax": "https://www.biomax.com",
    "IDEMIA": "https://www.idemia.com",
    "Bosch": "https://www.bosch.com",
    "Belcable": "https://www.belcable.com",
    "Eaton": "https://www.eaton.com",
    "Commscope": "https://www.commscope.com",
    "eSSL": "https://www.esslindia.com",
    "Jabra": "https://www.jabra.com",
    "Hikvision": "https://www.hikvision.com",
    "Philips": "https://www.philips.com"
};

// Helper functions for components
export const getServices = () => servicesData;

export const getProductCategories = () => productCategories.map(cat => cat.name);

export const getBrandsByCategory = (category) => {
    if (category === "All") {
        const allBrands = productCategories.flatMap(cat => cat.brands);
        return [...new Set(allBrands)].sort();
    }
    const categoryData = productCategories.find(cat => cat.name === category);
    return categoryData ? categoryData.brands : [];
};

export const getAllBrandsForDisplay = () => {
    const allBrands = productCategories.flatMap(cat => cat.brands);
    return [...new Set(allBrands)].sort();
};

export const getBrandLogo = (brandName) => {
    const path = brandLogos[brandName];
    if (!path) return null;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return import.meta.env.BASE_URL + cleanPath;
};

export const getBrandWebsite = (brandName) => {
    return brandWebsites[brandName] || null;
};
