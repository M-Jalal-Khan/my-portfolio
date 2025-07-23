("scripts.js: Script started execution.");

document.addEventListener('DOMContentLoaded', () => {
    ("scripts.js: DOMContentLoaded event fired.");

    // Helper function to get flag emoji by country name
    const getFlagEmoji = (country) => {
        const flags = {
            "United Kingdom": "🇬🇧",
            "Canada": "🇨🇦",
            "Pakistan": "🇵🇰",
            "Germany": "🇩🇪",
            "UAE": "🇦🇪",
            "USA": "🇺🇸",
            "Australia": "🇦🇺",
            "India": "🇮🇳",
            // Add more countries as needed
        };
        return flags[country] || ""; // Return empty string if flag not found
    };

    // Helper function to get role icon
    const getRoleIcon = (role) => {
        if (!role) return '';
        const lowerCaseRole = role.toLowerCase();
        if (lowerCaseRole.includes("retail") || lowerCaseRole.includes("business owner")) {
            return '<i class="fas fa-store"></i>'; // Store icon for retail/business
        } else if (lowerCaseRole.includes("healthcare") || lowerCaseRole.includes("clinical")) {
            return '<i class="fas fa-hospital"></i>'; // Hospital icon for healthcare
        } else if (lowerCaseRole.includes("saas") || lowerCaseRole.includes("product founder")) {
            return '<i class="fas fa-cloud"></i>'; // Cloud icon for SaaS
        } else if (lowerCaseRole.includes("ceo") || lowerCaseRole.includes("leadership")) {
            return '<i class="fas fa-user-tie"></i>'; // Tie icon for CEO/leadership
        } else if (lowerCaseRole.includes("education") || lowerCaseRole.includes("research")) {
            return '<i class="fas fa-graduation-cap"></i>'; // Graduation cap for education/research
        } else if (lowerCaseRole.includes("analytics manager") || lowerCaseRole.includes("analyst")) {
            return '<i class="fas fa-chart-line"></i>'; // Chart line for analytics manager/analyst
        }
        return ''; // Default empty
    };

    // --- Data for dynamic content ---
    // All content that will be dynamically loaded into the HTML
    const portfolioData = {
        skills: [
            {
                groupName: "Core Expertise",
                items: [
                    { name: "Data Analytics & Business Intelligence", icon: "fas fa-chart-line", category: ["data-tools"] },
                    { name: "Predictive Analytics", icon: "fas fa-chart-area", category: ["ml-analytics"] },
                    { name: "Machine Learning", icon: "fas fa-brain", category: ["ml-analytics"] },
                    { name: "Natural Language Processing (NLP)", icon: "fas fa-language", category: ["ml-analytics"] },
                    { name: "Data Storytelling & Visualization", icon: "fas fa-eye", category: ["data-tools"] },
                    { name: "Automation & ETL Pipelines", icon: "fas fa-robot", category: ["data-infra"] }
                ]
            },
            {
                groupName: "Python Libraries",
                items: [
                    { name: "Pandas", icon: "fab fa-python", category: ["programming", "ml-analytics"] },
                    { name: "NumPy", icon: "fas fa-calculator", category: ["programming", "ml-analytics"] },
                    { name: "Scikit-learn", icon: "fas fa-robot", category: ["programming", "ml-analytics"] },
                    { name: "Seaborn", icon: "fas fa-chart-area", category: ["programming", "ml-analytics"] },
                    { name: "Matplotlib", icon: "fas fa-chart-pie", category: ["programming", "ml-analytics"] },
                    { name: "Plotly", icon: "fas fa-chart-bar", category: ["programming", "ml-analytics"] },
                    { name: "XGBoost", icon: "fas fa-leaf", category: ["programming", "ml-analytics"] },
                    { name: "LightGBM", icon: "fas fa-lightbulb", category: ["programming", "ml-analytics"] },
                    { name: "NLTK", icon: "fas fa-language", category: ["programming", "ml-analytics"] },
                    { name: "SpaCy", icon: "fas fa-comment-dots", category: ["programming", "ml-analytics"] },
                    { name: "Transformers", icon: "fas fa-exchange-alt", category: ["programming", "ml-analytics"] },
                    { name: "SciPy", icon: "fas fa-flask", category: ["programming", "ml-analytics"] },
                    { name: "Statsmodels", icon: "fas fa-chart-line", category: ["programming", "ml-analytics"] },
                    { name: "OpenAI", icon: "fas fa-robot", category: ["programming", "ml-analytics"] },
                    { name: "LangChain", icon: "fas fa-link", category: ["programming", "ml-analytics"] }
                ]
            },
            {
                groupName: "Power BI (Advanced)",
                items: [
                    { name: "Power Query", icon: "fas fa-puzzle-piece", category: ["data-tools"] },
                    { name: "Data Modeling", icon: "fas fa-project-diagram", category: ["data-tools"] },
                    { name: "Time Intelligence", icon: "fas fa-clock", category: ["data-tools"] },
                    { name: "Row-Level Security", icon: "fas fa-shield-alt", category: ["data-tools"] },
                    { name: "Advanced DAX Functions", icon: "fas fa-calculator", category: ["data-tools"] },
                    { name: "Virtual Tables & Relationships", icon: "fas fa-table", category: ["data-tools"] },
                    { name: "Drill-through Reports & Bookmarks", icon: "fas fa-chart-bar", category: ["data-tools"] }
                ]
            },
            {
                groupName: "SQL Skills",
                items: [
                    { name: "Joins, CTEs, Window Functions", icon: "fas fa-code", category: ["data-tools", "programming"] },
                    { name: "Data Cleaning & Transformation Queries", icon: "fas fa-broom", category: ["data-tools"] },
                    { name: "Stored Procedures & Views", icon: "fas fa-database", category: ["data-tools", "data-infra"] },
                    { name: "Performance Optimization", icon: "fas fa-tachometer-alt", category: ["data-tools", "data-infra"] }
                ]
            },
            {
                groupName: "Cloud & Data Platforms",
                items: [
                    { name: "Google BigQuery", icon: "fas fa-cloud", category: ["data-infra", "data-tools"] },
                    { name: "Snowflake", icon: "fas fa-snowflake", category: ["data-infra", "data-tools"] },
                    { name: "AWS S3 / RDS", icon: "fab fa-aws", category: ["data-infra"] },
                    { name: "Google Cloud Platform (GCP)", icon: "fas fa-cloud", category: ["data-infra"] }
                ]
            },
            {
                groupName: "GA4 & Analytics Tools",
                items: [
                    { name: "Google Analytics 4", icon: "fas fa-chart-line", category: ["data-tools"] },
                    { name: "Google Tag Manager", icon: "fas fa-tags", category: ["data-tools"] },
                    { name: "Funnel Analysis & UTM Tracking", icon: "fas fa-filter", category: ["data-tools"] },
                    { name: "Event-based Tracking Setup", icon: "fas fa-mouse-pointer", category: ["data-tools"] }
                ]
            },
            {
                groupName: "Excel & Automation",
                items: [
                    { name: "Pivot Tables & Dynamic Dashboards", icon: "fas fa-file-excel", category: ["data-tools"] },
                    { name: "Power Query in Excel", icon: "fas fa-puzzle-piece", category: ["data-tools"] },
                    { name: "Macros & VBA Automation", icon: "fas fa-code", category: ["programming"] }
                ]
            }
        ],
        credentials: [
            {
                title: "Google Data Analytics Professional Certificate",
                issuer: "Coursera",
                type: "Certificate",
                year: "2024",
                url: "https://www.coursera.org/account/accomplishments/professional-cert/KHJTNXBUW83A?utm_product=prof",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801874/google_data_nalystics_ow3bgn.png"
            },
            {
                title: "Google Data Analytics Professional Certificate",
                issuer: "Credly",
                type: "Achievement Badge", // Changed type to Achievement Badge
                year: "2024",
                url: "https://www.credly.com/badges/c1a32e50-07ec-4993-8f41-53dcfb98646f",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801792/credily_data_analyst_badge_k22l9p.png"
            },
            {
                title: "Google Advanced Data Analytics Certificate",
                issuer: "Coursera",
                type: "Certificate",
                year: "2024",
                url: "https://www.coursera.org/account/accomplishments/professional-cert/5LLH7ZYBE728?utm_product=prof",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801848/google_advance_data_anlytics_rosq1r.png"
            },
            {
                title: "Google Advanced Data Analytics Certificate",
                issuer: "Credly",
                type: "Achievement Badge", // Changed type to Achievement Badge
                year: "2024",
                url: "https://www.credly.com/badges/5328136f-e7e5-4dad-a2d7-e901a770017e",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801760/credily_advance_data_analytics_badge_cy8iof.png"
            },
            {
                title: "Data Analyst in Power BI",
                issuer: "DataCamp",
                type: "Certificate",
                year: "2024",
                url: "https://www.linkedin.com/in/mjalalkhan/details/certifications/1723700196418/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801858/data_analyst_in_power_bi_onfhmo.png"
            },
            {
                title: "Data Analyst with Python",
                issuer: "DataCamp",
                type: "Certificate",
                year: "2024",
                url: "https://www.linkedin.com/in/mjalalkhan/details/certifications/1727498930762/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801860/data_analyst_with_python_g90qby.png"
            },
            {
                title: "Associate Data Analyst in SQL",
                issuer: "DataCamp",
                type: "Certificate",
                year: "2024",
                url: "https://www.linkedin.com/in/mjalalkhan/details/certifications/1726491465275/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801826/assosiate_data_anlyst_with_sql_tfchi1.png"
            },
            {
                title: "GA4 (Google Analytics 4)",
                issuer: "Udemy",
                type: "Certificate",
                year: "2024",
                url: "https://www.linkedin.com/in/mjalalkhan/details/certifications/1739802838340/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801787/ga4_gwplku.png"
            },
            {
                title: "Google AI Essentials Certificate",
                issuer: "Coursera",
                type: "Certificate",
                year: "2024",
                url: "https://www.coursera.org/account/accomplishments/verify/ZNVVTOYVRZ49?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
                imageUrl: "https://res.cloudinary.com/dshznv39k/image/upload/v1751801879/google_ai_essentialss_u4umvq.png"
            }
        ],
        experience: [
            {
                title: "Freelance Data Analyst",
                company: "Upwork",
                duration: "Jan 2022 – Present",
                description: "I’ve had the opportunity to work with clients across the globe—USA, UK, Germany, and the UAE—delivering tailored analytics solutions that align with real business needs. My work ranges from creating interactive dashboards in Power BI to conducting predictive modeling in Python. What sets me apart is my commitment to understanding the business behind the data. I don’t just build models—I help my clients make confident, insight-backed decisions. Long-term client relationships and repeat contracts reflect the trust I’ve earned through clear communication, timely delivery, and consistent value.",
                techStack: ["Power BI", "Python", "Predictive Modeling", "Data Analysis", "Client Management"]
            },
            {
                title: "Senior Data & Insights Lead",
                company: "Code Prisma",
                duration: "Jan 2023 – Mar 2025",
                description: "At Code Prisma, I wasn’t just managing dashboards—I was shaping the entire data culture of the company. Collaborating directly with CEO Asif and senior leadership, I designed reporting systems that made key metrics visible and actionable for both internal teams and external clients. My role involved translating complex data into strategic insights, mentoring junior analysts, and aligning analytics efforts with business growth. This position taught me how to embed data thinking into the heart of a company’s operations.",
                techStack: ["Data Strategy", "BI Transformation", "Reporting Systems", "Stakeholder Management", "Team Leadership"]
            }
        ],
        projects: [
            // Power BI Projects
            {
                type: "Power BI",
                title: "Blinkit India – Sales & Outlet Analysis",
                description: "A dynamic Power BI dashboard built to break down product-level sales, customer ratings, and outlet performance. It enabled supply chain teams to identify high-performing stores and optimize regional distribution.",
                techTags: ["Power BI", "Data Modeling", "DAX", "Data Visualization", "Supply Chain Analytics", "Sales Analysis"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864009/Blinkit_India_Sales_Outlet_Analysis_1_oplofa.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864012/Blinkit_India_Sales_Outlet_Analysis_2_cimanu.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22090",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTQzODc4OTgtMGNkNi00ZDgxLWIzMTUtNjM3MTc4OWFkYjc2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "HR Analytics – Attrition & Demographics",
                description: "This dashboard reveals critical patterns in employee attrition using interactive visuals filtered by age, department, job role, and education. Built to support HR teams with actionable workforce intelligence.",
                techTags: ["Power BI", "HR Analytics", "Attrition Analysis", "Workforce Planning", "Data Visualization"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864284/HR_Analytics_Attrition_Demographics_1_gkrcno.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864287/HR_Analytics_Attrition_Demographics_2_supt8r.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22095",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNGI5NjIwMWYtNjg0Yi00YmIxLTkzMzYtZWZmZDViNDAzODIxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" // Updated link
            },
            {
                type: "Power BI",
                title: "Toman’s Bike Shop – Retail Sales Dashboard",
                description: "Built a streamlined dashboard to visualize sales volume, ride duration, and seasonal demand. Helped the business fine-tune marketing and staffing based on real-time trends.",
                techTags: ["Power BI", "Retail Analytics", "Sales Forecasting", "Demand Analysis", "Marketing Strategy"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864332/Toman_s_Bike_Shop_Retail_Sales_Dashboard_1_mqsdjn.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864334/Toman_s_Bike_Shop_Retail_Sales_Dashboard_2_f1tfbk.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22098",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMWM5Mzg3OTEtNjQ2Zi00NDZlLWIwZWItZjA5YWI4NTEzMjMxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Pizza Sales Insights",
                description: "An interactive dashboard that captures what sells, when, and how often. Offers clear insights into top-performing pizzas, customer preferences, and peak sales hours.",
                techTags: ["Power BI", "Sales Analysis", "Customer Insights", "Retail Operations", "Data Visualization"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864290/Pizza_Sales_Insights_1_gkbixj.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864293/Pizza_Sales_Insights_2_zld8bd.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864295/Pizza_Sales_Insights_3_kbqfin.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22099",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMWYyMDE1NGYtZWY0ZS00MWEzLTgzOTAtNWEyMTUzNjQ1M2QxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Super Store Sales – Category & Region Analysis",
                description: "Delivered a fully interactive dashboard to analyze sales by region, product category, and shipping mode. Included forecasting to support strategic planning and executive reporting.",
                techTags: ["Power BI", "Sales Analysis", "Regional Analysis", "Forecasting", "Executive Reporting", "Data Visualization"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864318/Super_Store_Sales_Category_Region_Analysis_1_f0o2wp.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864317/Super_Store_Sales_Category_Region_Analysis_2_cwibc0.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864321/Super_Store_Sales_Category_Region_Analysis_3_kasboe.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22100",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzljNTcyNzctZGNiNS00NWJjLTg0MzEtZGExMGI5Zjg4NDdmIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Call Center Operations – Performance Dashboard",
                description: "This dashboard tracked agent performance, customer sentiment, and resolution rates across states. Designed to improve service quality and reduce response time.",
                techTags: ["Power BI", "Call Center Analytics", "Performance Monitoring", "Customer Service", "Data Visualization"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864013/Call_Center_Operations_Performance_Dashboard_1_jhktwd.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864015/Call_Center_Operations_Performance_Dashboard_2_ajhkfr.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864019/Call_Center_Operations_Performance_Dashboard_3_de13tq.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22103",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMmRiMWM1NzMtNzg1MC00MDQ1LWIwNjctOWNlMDQ1MWFmM2UxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Car Sales – Monthly & Regional Insights",
                description: "Created a data model to analyze vehicle sales by brand, region, and body type. The dashboard includes YoY comparisons and heatmaps for rapid decision-making.",
                techTags: ["Power BI", "Sales Analysis", "Automotive", "Data Modeling", "YoY Comparison", "Heatmaps"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864021/Car_Sales_Monthly_Regional_Insights_1_egcwwv.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864023/Car_Sales_Monthly_Regional_Insights_2_xal4mz.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864026/Car_Sales_Monthly_Regional_Insights_3_yl5wri.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864029/Car_Sales_Monthly_Regional_Insights_4_rkw6dk.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22104",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiYmZhMTAxN2EtNzFjNS00MzRlLThhY2MtMjZmYTRiOThmNTI3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Plant Co. – Quantity & Profitability Dashboard",
                description: "Tracked global sales and profitability across regions and product types. Helped leadership teams pinpoint areas of underperformance and refine distribution strategy.",
                techTags: ["Power BI", "Profitability Analysis", "Global Sales", "Distribution Strategy", "Data Visualization"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864298/Plant_Co._Quantity_Profitability_Dashboard_1_ggtb2j.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864300/Plant_Co._Quantity_Profitability_Dashboard_2_jdamm2.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864304/Plant_Co._Quantity_Profitability_Dashboard_3_x6h7zk.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22106",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiODQzOTU3YWMtYWI1OS00MjczLTg2ZWMtYTRmMGRjZmZlZDQ2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Road Accident Trends – Public Safety Dashboard",
                description: "Mapped and analyzed accident frequency, location, and casualty trends across time. Designed for use by public safety teams and city planners.",
                techTags: ["Power BI", "Public Safety", "Accident Analysis", "Geospatial Analysis", "City Planning"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864307/Road_Accident_Trends_Public_Safety_Dashboard_1_b8d3oi.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864309/Road_Accident_Trends_Public_Safety_Dashboard_2_t66egi.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864315/Road_Accident_Trends_Public_Safety_Dashboard_3_tucsuj.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/22107",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTU2NDdiODItZmRhZS00ZWVmLWE5MTctODQ4YjA5Nzk5YTAyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" // Updated link
            },
            {
                type: "Power BI",
                title: "Telco Customer Retention & Churn Analysis",
                description: "Uncovered churn drivers across service plans, billing methods, and customer profiles. Built to support loyalty strategies with data-backed insights.",
                techTags: ["Power BI", "Customer Churn", "Telco Analytics", "Customer Retention", "Loyalty Programs"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864323/Telco_Customer_Retention_1_wvucai.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864326/Telco_Customer_Retention_2_kxuree.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864328/Telco_Customer_Retention_3_u56auj.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/28224",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzBkMTdjZjEtNmYwZi00MDVhLWFlMzQtNWY5NDNhNGE0YzQwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Bank Loan Monitoring Dashboard",
                description: "Tracked loan approvals, repayments, and borrower segmentation to support credit risk assessments and operational efficiency.",
                techTags: ["Power BI", "Loan Monitoring", "Credit Risk", "Financial Analytics", "Operational Efficiency"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864006/Bank_Loan_Monitoring_Dashboard_1_c7awua.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864007/Bank_Loan_Monitoring_Dashboard_2_gxe14h.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/28226",
                liveReportUrl: null // Explicitly null as no live report
            },
            {
                type: "Power BI",
                title: "Coffee Shop – Sales & Trend Analysis",
                description: "Visualized sales trends across weekdays, time slots, and product types. Helped optimize staffing and product placement.",
                techTags: ["Power BI", "Sales Trends", "Retail Optimization", "Staffing Analysis", "Product Placement"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864032/Coffee_Shop_Sales_Trend_Analysis_1_ak1d6w.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864234/Coffee_Shop_Sales_Trend_Analysis_2_os8lum.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864237/Coffee_Shop_Sales_Trend_Analysis_3_luabsv.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864240/Coffee_Shop_Sales_Trend_Analysis_4_sjnj2q.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864242/Coffee_Shop_Sales_Trend_Analysis_5_rf8h8b.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/28364",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiODFkMDcxZmUtMGY0OS00Yzg1LWJjYmItYTRlZjQ4OWJjNmQyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Hospital ER – Performance Overview",
                description: "Captured real-time data on patient intake, department referrals, and wait times. Empowered hospital teams to reduce bottlenecks and improve patient experience.",
                techTags: ["Power BI", "Healthcare Analytics", "Hospital Operations", "Performance Monitoring", "Patient Experience"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864271/Hospital_ER_1_zw5jsi.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864273/hospital_ER_2_sjzlng.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864276/Hospital_ER_3_bf54ak.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864279/Hospital_ER_4_ckstlw.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864282/Hospital_ER_5_bppbue.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/28369",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzJhODMxZmUtZTAxNS00MzlhLTg0NmItNDRmMjU5ZjM2MTc1IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            {
                type: "Power BI",
                title: "Financial Budget & Burn Rate Tracker",
                description: "Developed a project-level budgeting tool to visualize expense tracking, burn rate, and cost overruns across departments.",
                techTags: ["Power BI", "Financial Analysis", "Budgeting", "Expense Tracking", "Cost Management"],
                imageUrls: [
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864246/Financial_Budget_Burn_Rate_Tracker_1_fntzau.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864260/Financial_Budget_Burn_Rate_Tracker_2_sxyhhi.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864262/Financial_Budget_Burn_Rate_Tracker_3_v1hyjc.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864265/Financial_Budget_Burn_Rate_Tracker_4_cuui1x.png",
                    "https://res.cloudinary.com/dshznv39k/image/upload/v1751864267/Financial_Budget_Burn_Rate_Tracker_5_ao8wy9.png"
                ],
                caseStudyUrl: "https://mavenanalytics.io/project/28372",
                liveReportUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDZiYjU0ZWQtMTliMC00MWYzLTliNWYtYTIzM2UxYzM4MGViIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            },
            // Python Projects
            {
                type: "Python",
                title: "Retail Insights – Festive Sales Analysis & EDA",
                description: "I explored consumer behavior during the festive season to uncover what drives peak sales across age groups, cities, and product categories. This analysis helped identify market gaps and growth opportunities using real-world data.",
                techTags: ["Python", "EDA", "Sales Analysis", "Consumer Behavior", "Market Research", "Pandas", "Matplotlib", "Seaborn"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863418/Retail_Insights_Festive_Sales_Analysis_EDA_sw4u2q.png"],
                caseStudyUrl: "https://www.linkedin.com/in/mjalalkhan/details/projects/1722982666433/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                githubUrl: "https://github.com/M-Jalal-Khan/Festive-Sales-Analysis-and-EDA-"
            },
            {
                type: "Python",
                title: "NYC Taxi Trends – Urban Mobility Analysis",
                description: "Using over 130 million taxi trips from 2017, I visualized ride frequency, fare distribution, and rush hour behavior across NYC. This project connected data science to urban planning by revealing traffic load patterns across boroughs.",
                techTags: ["Python", "Data Visualization", "Urban Planning", "Big Data", "Geospatial Analysis", "Pandas", "Matplotlib", "Folium"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863415/NYC_Taxi_Trends_Urban_Mobility_Analysis_crb3bl.png"],
                caseStudyUrl: "https://www.linkedin.com/posts/mjalalkhan_nyc-taxi-data-analysis-activity-7263252758915399682-_hqI",
                githubUrl: "https://github.com/M-Jalal-Khan/NYC-Taxi-Data-Analysis"
            },
            {
                type: "Python",
                title: "Global Pandemic – COVID-19 Analysis",
                description: "During the pandemic, I tracked real-time COVID data across countries. The dashboard mapped confirmed cases, deaths, and recovery rates — offering a clear, comparative view into how nations responded to a global health crisis.",
                techTags: ["Python", "Data Analysis", "Public Health", "Time Series Analysis", "Data Visualization", "Pandas", "Plotly"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863418/Global_Pandemic_COVID-19_Analysis_cy3qfl.png"],
                caseStudyUrl: "https://www.linkedin.com/in/mjalalkhan/details/projects/1732385979567/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                githubUrl: "https://github.com/M-Jalal-Khan/COVID-19-Pandemic-Analysis-Using-Global-Dataset"
            },
            {
                type: "Python",
                title: "Global Pulse – Socioeconomic Indicator Analysis",
                description: "This wasn’t just data — it was a window into the world. I analyzed GDP, life expectancy, literacy, and carbon emissions across 100+ countries. The project revealed economic inequality, development gaps, and climate imbalances using public global indicators.",
                techTags: ["Python", "Socioeconomic Analysis", "Global Indicators", "Data Visualization", "Economic Analysis", "Pandas", "Plotly"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863415/Global_Pulse_Socioeconomic_Indicator_Analysis_qq6fwd.png"],
                caseStudyUrl: "https://www.linkedin.com/in/mjalalkhan/details/projects/1732902939005/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                githubUrl: "https://github.com/M-Jalal-Khan/Global-Indicators-Analysis"
            },
            {
                type: "Python",
                title: "Diabetes Prediction – Machine Learning Classifier",
                description: "Using patient data, I trained multiple models to predict the likelihood of diabetes. I compared logistic regression, SVM, and decision trees — each evaluated using real performance metrics like ROC-AUC and accuracy.",
                techTags: ["Python", "Machine Learning", "Classification", "Healthcare Analytics", "Model Evaluation", "Scikit-learn", "Pandas"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863414/Diabetes_Prediction_Machine_Learning_Classifier_s7hd9f.png"],
                caseStudyUrl: "https://www.linkedin.com/posts/mjalalkhan_diabetes-prediction-with-machine-learning-activity-7279960769826295808-A15E",
                githubUrl: "https://github.com/M-Jalal-Khan/Diabetes-Prediction-Project"
            },
            {
                type: "Python",
                title: "Optimizing Healthcare – Cost & Outcome Analysis",
                description: "Behind every patient is a cost — and a story. This project dug deep into treatment expenses, satisfaction ratings, and recovery trends to identify where hospitals can cut costs without compromising outcomes.",
                techTags: ["Python", "Healthcare Analytics", "Cost Optimization", "Patient Outcomes", "Data Analysis", "Pandas", "Seaborn"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863416/Optimizing_Healthcare_Cost_Outcome_Analysis_yuumbp.png"],
                caseStudyUrl: "https://www.linkedin.com/in/mjalalkhan/details/projects/1733849090416/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                githubUrl: "https://github.com/M-Jalal-Khan/Healthcare-Data-Analysis-to-Optimize-Costs-and-Improve-Patient-Outcomes"
            },
            {
                type: "Python",
                title: "Soybean Yield Forecasting – Regression Modeling",
                description: "Built a machine learning pipeline to predict crop yield based on soil quality, temperature, and fertilizer use. It’s a real-world application of ML in agriculture — designed to help farmers make smarter planting decisions.",
                techTags: ["Python", "Machine Learning", "Regression", "Agriculture", "Forecasting", "Predictive Analytics", "Scikit-learn", "Pandas"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863423/Soybean_Yield_Forecasting_Regression_Modeling_cg9enc.png"],
                caseStudyUrl: "https://www.linkedin.com/in/mjalalkhan/details/projects/1747859529707/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                githubUrl: "https://github.com/M-Jalal-Khan/Soybean-Yield-ML-Model"
            },
            {
                type: "Python",
                title: "World Ranking Decoder – 2024 Shanghai University Analysis",
                description: "What separates top universities from the rest? I analyzed Shanghai’s global university rankings using KPIs like research output, Nobel-winning alumni, and high-impact citations. The result? A data-backed breakdown of academic performance by region.",
                techTags: ["Python", "Data Analysis", "Education Analytics", "KPIs", "Academic Performance", "Pandas", "Matplotlib"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863425/World_Ranking_Decoder_2024_Shanghai_University_Analysis_d65zah.png"],
                caseStudyUrl: "https://www.linkedin.com/in/mjalalkhan/details/projects/1731434056058/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                githubUrl: "https://github.com/M-Jalal-Khan/2024-Shanghai-University-Ranking-Analysis"
            },
            {
                type: "Python",
                title: "Attrition Predictor – Employee Turnover Forecasting",
                description: "Using real HR data, I built a predictive model to flag which employees were most at risk of leaving. I considered salary, satisfaction, tenure, and growth to train a churn prediction system built for people-first decision-making.",
                techTags: ["Python", "Machine Learning", "Predictive Modeling", "HR Analytics", "Churn Prediction", "Scikit-learn", "Pandas"],
                imageUrls: ["https://res.cloudinary.com/dshznv39k/image/upload/v1751863411/Attrition_Predictor_Employee_Turnover_Forecasting_ljvmun.png"],
                caseStudyUrl: "https://www.linkedin.com/in/mjalalkhan/details/projects/1732216309099/single-media-viewer/?type=DOCUMENT&profileId=ACoAAD6hSqYBrXPxLfA_Vdx9fIcdLPjESpqKzNQ",
                githubUrl: "https://github.com/M-Jalal-Khan/Predicting-Employee-Turnover-at-Salifort-Motors"
            }
        ],
        testimonials: [
            {
                quote: "We were sitting on a pile of Excel files we didn’t know what to do with. Jalal stepped in, transformed them into one centralized, interactive BI tool, and helped us stop revenue loss in real time.",
                attribution: "Jack B. – Retail Business Owner",
                country: "United Kingdom",
                rating: 5,
                role: "Retail Business Owner"
            },
            {
                quote: "His dashboard didn’t just visualize our numbers—it told the story behind them. Jalal’s predictive work helped our clinical team take faster decisions, improving patient throughput and operational efficiency.",
                attribution: "Laura C. – Healthcare Operations Lead",
                country: "United Kingdom",
                rating: 5,
                role: "Healthcare Operations Lead"
            },
            {
                quote: "From ETL to churn prediction, Jalal built a full data flow that saved our engineering team hours each week. His ability to ‘get’ the product vision and translate it into data structure is rare.",
                attribution: "Steve D. – SaaS Product Founder",
                country: "Canada",
                rating: 5,
                role: "SaaS Product Founder"
            },
            {
                quote: "Jalal was central to establishing Code Prisma’s BI capabilities. His technical leadership on complex data challenges, paired with strategic thinking, made him one of the most reliable consultants we’ve had.",
                attribution: "Asif – CEO, Code Prisma",
                country: "Pakistan",
                rating: 5,
                role: "CEO"
            },
            {
                quote: "We needed data clarity across 300+ schools. Jalal built a clean, scalable dashboard that revealed literacy gaps we hadn’t seen before. His communication was as strong as his analysis.",
                attribution: "Naomi R. – Education Research Analyst",
                country: "Germany",
                rating: 5,
                role: "Education Research Analyst"
            },
            {
                quote: "I brought Jalal in to audit and rebuild our BI stack—and he delivered beyond expectations. From wrangling messy datasets to building executive dashboards, he made our data usable at every level.",
                attribution: "Omar A. – Senior Analytics Manager",
                country: "UAE",
                rating: 5,
                role: "Senior Analytics Manager"
            }
        ],
        contactLinks: [
            { name: "Email", icon: "fas fa-envelope", url: "mailto:m.jalalkhanktk@gmail.com" },
            { name: "WhatsApp", icon: "fab fa-whatsapp", url: "https://wa.me/message/NB46I4RLUZBAC1" },
            { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/mjalalkhan/" },
            { name: "GitHub", icon: "fab fa-github", url: "https://github.com/M-Jalal-Khan" },
            { name: "Kaggle", icon: "fab fa-kaggle", url: "https://www.kaggle.com/muhammadjalalkhanktk" },
            { name: "HackerRank", icon: "fab fa-hackerrank", url: "https://www.hackerrank.com/profile/m_jalalkhanktk" },
            { name: "Maven Analytics", icon: "fas fa-chart-area", url: "https://mavenanalytics.io/profile/98217380-00f1-70b8-bb79-ce8c2b065fcf" },
            { name: "Coursera", icon: "fas fa-graduation-cap", url: "https://www.coursera.org/account-profile" },
            { name: "Credly", icon: "fas fa-certificate", url: "https://www.credly.com/users/muhammad-jalal-khan.f12de91e" }
        ]
    };

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
        ("scripts.js: Current year set in footer.");
    } else {
        console.warn("scripts.js: Element with ID 'currentYear' not found.");
    }

    // --- Dynamic Scroll Padding for Navbar ---
    const navbar = document.querySelector('.navbar');
    let navbarHeight = 0;
    let resizeTimeout;

    const setScrollPadding = () => {
        if (navbar) {
            navbarHeight = navbar.offsetHeight;
            document.documentElement.style.setProperty('--navbar-height-dynamic', `${navbarHeight}px`);
            document.documentElement.style.scrollPaddingTop = `${navbarHeight + 5}px`;
            (`scripts.js: Navbar height: ${navbarHeight}px, scroll-padding-top set to ${navbarHeight + 5}px.`);
        } else {
            console.warn("scripts.js: Navbar element not found for scroll padding calculation.");
        }
    };

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setScrollPadding();
            setupIntersectionObserver();
        }, 100);
    });
    setScrollPadding();
    ("scripts.js: Initial scroll padding set and debounced resize listener added.");


    // --- TSParticles Background Animation Initialization ---
    ("scripts.js: Checking for tsParticles library...");
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("particle-bg", { // Changed ID to match user's provided HTML
            background: { color: "#0a0a0a" },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" }, // Keep push on click
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4, speed: 1.0 }, // Keep speed from previous, user provided distance
                    push: { quantity: 4 } // Keep quantity from previous
                }
            },
            particles: {
                color: { value: ["#00CED1", "#66CDAA", "#ffffff"] }, // Keep multiple colors for variety
                links: {
                    color: { value: "#66CDAA" }, // User provided link color
                    distance: 150, // User provided distance
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: { enable: true }, // User provided collisions
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "bounce",
                    speed: 2 // User provided speed
                },
                number: {
                    density: { enable: true, area: 800 }, // User provided area
                    value: 80 // User provided value
                },
                opacity: { value: 0.5 }, // User provided opacity
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } } // User provided size range
            },
            detectRetina: true
        }).then(() => {
            ("scripts.js: tsParticles initialized successfully!");
        }).catch((error) => {
            console.error("scripts.js: Error initializing tsParticles:", error);
        });
    } else {
        console.error("scripts.js: tsParticles library not loaded. Particle background will not appear. Check CDN link.");
    }

    // --- Smooth Scrolling & Active Nav Link Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('main section[id]');
    const siteLogo = document.getElementById('site-logo');
    let isScrollingByClick = false;

    const setActiveNavItem = (sectionId) => {
        navItems.forEach(item => {
            if (item.dataset.section === sectionId) {
                if (!item.classList.contains('active')) {
                    item.classList.add('active');
                }
            } else {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            }
        });
    };

    const handleScrollLinkClick = function(event) {
        event.preventDefault();
        const targetId = this.dataset.section;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            isScrollingByClick = true;
            setActiveNavItem(targetId);

            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 5;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isScrollingByClick = false;
                window.dispatchEvent(new Event('scroll'));
            }, 700);
        } else {
            console.warn(`scripts.js: Section with ID '${targetId}' not found for navigation.`);
        }
    };

    navItems.forEach(link => {
        link.addEventListener('click', handleScrollLinkClick);
    });
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', handleScrollLinkClick);
    });
    ("scripts.js: Click listeners attached to navigation items and footer links.");

    if (siteLogo) {
        siteLogo.addEventListener('click', function() {
            isScrollingByClick = true;
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
            setActiveNavItem('hero');

            setTimeout(() => {
                isScrollingByClick = false;
                window.dispatchEvent(new Event('scroll'));
            }, 700);
        });
    } else {
        console.warn("scripts.js: Site logo element not found.");
    }

    const setupIntersectionObserver = () => {
        if (!navbar) {
            console.error("scripts.js: Navbar element not found for IntersectionObserver setup. Cannot set up observer.");
            return;
        }

        if (window.sectionObserverInstance) {
            window.sectionObserverInstance.disconnect();
        }

        const currentNavbarHeight = navbar.offsetHeight;
        const rootMarginTop = `-${currentNavbarHeight + 1}px`;
        const rootMarginBottom = `-${window.innerHeight - currentNavbarHeight - 1}px`;
        const rootMarginValue = `${rootMarginTop} 0px ${rootMarginBottom} 0px`;

        (`scripts.js: IntersectionObserver rootMargin set to: ${rootMarginValue}`);

        window.sectionObserverInstance = new IntersectionObserver((entries) => {
            if (isScrollingByClick) {
                return;
            }

            let activeSectionId = null;
            let highestVisibleRatio = 0;

            entries.forEach(entry => {
                const rect = entry.boundingClientRect;
                const navbarBottom = currentNavbarHeight;

                if (rect.top <= navbarBottom + 5 && rect.bottom > navbarBottom) {
                    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, navbarBottom);
                    const sectionHeight = rect.height;
                    const visibleRatio = sectionHeight > 0 ? visibleHeight / sectionHeight : 0;

                    if (visibleRatio > highestVisibleRatio) {
                        highestVisibleRatio = visibleRatio;
                        activeSectionId = entry.target.id;
                    }
                }
            });

            if (!activeSectionId) {
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= currentNavbarHeight + 1 && rect.bottom > currentNavbarHeight) {
                        activeSectionId = section.id;
                        break;
                    }
                }
            }

            if (!activeSectionId && window.scrollY < currentNavbarHeight + 50) {
                activeSectionId = 'hero';
            }

            setActiveNavItem(activeSectionId);

        }, {
            root: null,
            rootMargin: rootMarginValue,
            threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
        });

        sections.forEach(section => {
            window.sectionObserverInstance.observe(section);
        });
        ("scripts.js: All relevant sections observed by IntersectionObserver.");
    };

    setupIntersectionObserver();
    window.addEventListener('load', () => {
        ("scripts.js: Window loaded event fired.");
        window.dispatchEvent(new Event('scroll'));
    });

    // --- Section Title Interactivity ---
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.classList.add('hover-active');
        });
        title.addEventListener('mouseleave', () => {
            title.classList.remove('hover-active');
        });
    });
    ("scripts.js: Section title hover effects initialized.");

    // --- Form Input Focus Effect ---
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Add focus effects if needed
        });
        input.addEventListener('blur', () => {
            // Remove focus effects if needed
        });
    });
    ("scripts.js: Form input focus effects initialized.");

    // --- About Section Paragraph Animations (Intersection Observer) ---
    const animatedParagraphs = document.querySelectorAll('.animated-paragraph');
    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    animatedParagraphs.forEach(p => {
        aboutObserver.observe(p);
    });
    ("scripts.js: About section paragraph animations initialized.");

    // --- Hero Section Title: Ensure original text is visible with heartbeat effect ---
    // The typewriter effect code has been removed.
    // The text "Strategic Data & Business Intelligence Consultant" is already in the HTML.
    // The 'neon-text-sm' class on this element in style.css provides the heartbeat animation.
    ("scripts.js: Typewriter effect removed. Original title with heartbeat effect should now be visible.");


    // --- Dynamic Content Rendering ---

    // Render Skills
    const skillsGrid = document.getElementById('skills-grid');
    const skillTabButtons = document.querySelectorAll('.skill-tab-button');

    const renderSkills = (filterCategory = 'all') => {
        if (skillsGrid) {
            skillsGrid.innerHTML = ''; // Clear existing content

            if (filterCategory === 'all') {
                portfolioData.skills.forEach(group => {
                    // Add a group header
                    const groupHeader = document.createElement('div');
                    groupHeader.className = 'skill-group-header col-span-full text-center text-xl font-bold text-accent-aqua-blue py-4 mt-4 mb-2 rounded-lg border-2 border-accent-aqua-blue shadow-lg'; // Added Tailwind classes for styling and spanning
                    groupHeader.textContent = group.groupName;
                    skillsGrid.appendChild(groupHeader);

                    // Render individual skill cards for this group
                    group.items.forEach(skill => {
                        const card = document.createElement('div');
                        card.className = 'skill-card';
                        card.innerHTML = `
                            <i class="${skill.icon} text-3xl ${skill.category.includes('programming') || skill.category.includes('ml-analytics') ? 'text-accent-aqua-green' : 'text-accent-aqua-blue'}"></i>
                            <p class="mt-2 text-white text-sm">${skill.name}</p>
                        `;
                        skillsGrid.appendChild(card);
                    });
                });
            } else {
                // If a specific category is selected, flatten and filter all skills
                portfolioData.skills.forEach(group => {
                    group.items.forEach(skill => {
                        if (skill.category.includes(filterCategory)) {
                            const card = document.createElement('div');
                            card.className = 'skill-card';
                            card.innerHTML = `
                                <i class="${skill.icon} text-3xl ${skill.category.includes('programming') || skill.category.includes('ml-analytics') ? 'text-accent-aqua-green' : 'text-accent-aqua-blue'}"></i>
                                <p class="mt-2 text-white text-sm">${skill.name}</p>
                            `;
                            skillsGrid.appendChild(card);
                        }
                    });
                });
            }

            // Re-observe skills for scroll animation after re-rendering
            const skillCards = document.querySelectorAll('#skills-grid .skill-card');
            skillCards.forEach((card) => {
                skillCardObserver.observe(card);
            });
            (`scripts.js: Skills rendered for category: ${filterCategory}.`);
        } else {
            console.warn("scripts.js: Skills grid element not found.");
        }
    };

    // Skill Category Tabs functionality
    skillTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            skillTabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderSkills(button.dataset.category);
        });
    });

    // Intersection Observer for Skill Cards
    const skillCardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    renderSkills(); // Initial render of all skills
    ("scripts.js: Skills section initialized with tabs and animations.");


    // Render Credentials
    const credentialsGrid = document.getElementById('credentials-grid');
    const certificateModal = document.getElementById('certificate-modal');
    const modalCloseButton = document.querySelector('.modal-close-button');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalIssuer = document.getElementById('modal-issuer');
    const modalLink = document.getElementById('modal-link');

    if (credentialsGrid) {
        credentialsGrid.innerHTML = ''; // Clear existing content
        portfolioData.credentials.forEach(cred => {
            const card = document.createElement('div');
            // Use a specific class for Credly badges for distinct styling if needed
            card.className = `certification-card group ${cred.type === 'Achievement Badge' ? 'credential-type-AchievementBadge' : ''}`;
            card.dataset.title = cred.title;
            card.dataset.issuer = cred.issuer;
            card.dataset.url = cred.url;
            card.dataset.imageUrl = cred.imageUrl;
            
            const displayTitle = cred.type === 'Achievement Badge' ? `${cred.title} (Achievement Badge)` : cred.title;

            card.innerHTML = `
                <div class="credential-image-wrapper">
                    <img src="${cred.imageUrl}" alt="${cred.title}" onerror="this.onerror=null;this.src='https://placehold.co/200x160/1f2937/d1d5db?text=Image+Not+Found';"/>
                </div>
                <div class="achievement-content p-4">
                    <h3 class="achievement-title text-accent-aqua-green text-lg">${displayTitle}</h3>
                    <p class="achievement-issuer text-gray-300 text-sm">${cred.issuer}</p>
                    <p class="achievement-year text-gray-400 text-xs">Issued: ${cred.year}</p>
                    <a href="${cred.url}" target="_blank" rel="noopener noreferrer" class="certification-link primary-button text-xs px-4 py-2 mt-3 view-credential-btn" title="View ${cred.title} Credential">
                        <span class="button-text">View Credential</span>
                        <span class="button-icon"><i class="fas fa-external-link-alt ml-1"></i></span>
                    </a>
                </div>
            `;
            credentialsGrid.appendChild(card);
        });
        ("scripts.js: Credentials rendered.");

        // Add event listeners for modal
        document.querySelectorAll('.certification-card').forEach(card => {
            card.addEventListener('click', (event) => {
                // Prevent modal from opening if the click was on the "View Credential" button directly
                if (event.target.closest('.view-credential-btn')) {
                    return; // Let the anchor tag's default action handle it
                }
                modalImage.src = card.dataset.imageUrl;
                modalTitle.textContent = card.dataset.title;
                modalIssuer.textContent = card.dataset.issuer;
                modalLink.href = card.dataset.url;
                certificateModal.classList.add('visible');
            });
        });

        modalCloseButton.addEventListener('click', () => {
            certificateModal.classList.remove('visible');
        });

        certificateModal.addEventListener('click', (event) => {
            if (event.target === certificateModal) {
                certificateModal.classList.remove('visible');
            }
        });

        // Intersection Observer for Credential Cards
        const credentialCardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        document.querySelectorAll('.certification-card').forEach(card => {
            credentialCardObserver.observe(card);
        });
        ("scripts.js: Certificate modal and animations initialized.");

    } else {
        console.warn("scripts.js: Credentials grid element not found.");
    }

    // Render Experience
    const experienceTimeline = document.querySelector('.timeline');
    if (experienceTimeline) {
        experienceTimeline.innerHTML = ''; // Clear existing content
        portfolioData.experience.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = `timeline-item ${index % 2 === 0 ? 'right' : 'left'}`;
            const techSpans = exp.techStack.map(tech => `<span class="text-xs px-2 py-1">${tech}</span>`).join('');
            item.innerHTML = `
                <div class="timeline-content p-4">
                    <h3 class="timeline-title text-lg">${exp.title} - <span class="text-accent-aqua-green">${exp.company}</span></h3>
                    <p class="timeline-duration text-xs">${exp.duration}</p>
                    <p class="timeline-description text-sm">${exp.description}</p>
                    <div class="timeline-tech-stack flex flex-wrap gap-2 mt-3">
                        ${techSpans}
                    </div>
                </div>
            `;
            experienceTimeline.appendChild(item);
        });
        ("scripts.js: Experience rendered.");

        // Intersection Observer for Timeline Items
        const timelineObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Adjust threshold for when animation should trigger
        });

        document.querySelectorAll('.timeline-item').forEach(item => {
            timelineObserver.observe(item);
        });
        ("scripts.js: Experience timeline animations initialized.");
    } else {
        console.warn("scripts.js: Experience timeline element not found.");
    }

    // Render Projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = ''; // Clear existing content
        portfolioData.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card group';

            let carouselHtml = '';
            if (project.imageUrls && project.imageUrls.length > 0) {
                const imagesHtml = project.imageUrls.map(url => `<img src="${url}" alt="${project.title} screenshot" onerror="this.onerror=null;this.src='https://placehold.co/400x200/1f2937/d1d5db?text=Image+Not+Found';"/>`).join('');
                const dotsHtml = project.imageUrls.map((_, dotIndex) => `<span class="carousel-dot" data-index="${dotIndex}"></span>`).join('');

                carouselHtml = `
                    <div class="project-image-carousel" data-project-index="${index}">
                        <div class="carousel-images">
                            ${imagesHtml}
                        </div>
                        ${project.imageUrls.length > 1 ? `
                            <button class="carousel-arrow left" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
                            <button class="carousel-arrow right" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
                            <div class="carousel-nav-dots">
                                ${dotsHtml}
                            </div>
                        ` : ''}
                    </div>
                `;
            } else {
                carouselHtml = `
                    <div class="project-image-carousel">
                        <div class="carousel-images">
                            <img src="https://placehold.co/400x200/111827/00CED1?text=No+Image" alt="No image available" onerror="this.onerror=null;this.src='https://placehold.co/400x200/1f2937/d1d5db?text=No+Image';"/>
                        </div>
                    </div>
                `;
            }

            const techSpans = project.techTags.map(tag => `<span class="text-xs px-2 py-1">${tag}</span>`).join('');

            let projectButtonsHtml = '';
            if (project.type === "Python") {
                if (project.caseStudyUrl) {
                    projectButtonsHtml += `
                        <a href="${project.caseStudyUrl}" target="_blank" rel="noopener noreferrer" class="project-button text-xs px-4 py-2" title="View Case Study for ${project.title}">
                            <span class="button-text">Case Study</span>
                            <span class="button-icon"><i class="fas fa-file-alt"></i></span>
                        </a>
                    `;
                }
                if (project.githubUrl) {
                    projectButtonsHtml += `
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-button github-button text-xs px-4 py-2" title="View GitHub Repo for ${project.title}">
                            <span class="button-text">GitHub</span>
                            <span class="button-icon"><i class="fab fa-github"></i></span>
                        </a>
                    `;
                }
            } else if (project.type === "Power BI") {
                if (project.caseStudyUrl) {
                    projectButtonsHtml += `
                        <a href="${project.caseStudyUrl}" target="_blank" rel="noopener noreferrer" class="project-button text-xs px-4 py-2" title="View Case Study for ${project.title}">
                            <span class="button-text">Case Study</span>
                            <span class="button-icon"><i class="fas fa-file-alt"></i></span>
                        </a>
                    `;
                }
                if (project.liveReportUrl) {
                    projectButtonsHtml += `
                        <a href="${project.liveReportUrl}" target="_blank" rel="noopener noreferrer" class="project-button text-xs px-4 py-2" title="View Live Report for ${project.title}">
                            <span class="button-text">Live Report</span>
                            <span class="button-icon"><i class="fas fa-chart-bar"></i></span>
                        </a>
                    `;
                }
            }

            card.innerHTML = `
                ${carouselHtml}
                <div class="project-content p-4 relative z-10">
                    <h3 class="project-title text-accent-aqua-green text-lg">${project.title}</h3>
                    <p class="project-description text-gray-300 mb-2 text-sm">${project.description}</p>
                    <div class="project-tech-tags flex flex-wrap gap-1 mb-3">
                        ${techSpans}
                    </div>
                    <div class="project-links-group flex justify-center gap-2">
                        ${projectButtonsHtml}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
        ("scripts.js: Projects rendered.");

        initializeCarousels(); // Initialize project image carousels
        
        // Intersection Observer for Project Cards
        const projectCardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        document.querySelectorAll('.project-card').forEach(card => {
            projectCardObserver.observe(card);
        });
        ("scripts.js: Project card animations initialized.");

    } else {
        console.warn("scripts.js: Projects grid element not found.");
    }

    // Render Testimonials (Now as a Grid)
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = ''; // Clear existing content
        portfolioData.testimonials.forEach((testimonial) => {
            const flag = getFlagEmoji(testimonial.country);
            const roleIcon = getRoleIcon(testimonial.role);
            const ratingStars = '<div class="testimonial-rating">' + '⭐'.repeat(testimonial.rating) + '</div>';

            const item = document.createElement('div');
            item.className = 'testimonial-item'; // Apply new grid item styling
            item.innerHTML = `
                <p class="text-lg text-gray-300 leading-relaxed italic mb-4">
                    "${testimonial.quote}"
                </p>
                <div class="flex flex-col items-center mt-auto">
                    <p class="text-accent-aqua-green font-semibold" title="${testimonial.country}">
                        ${testimonial.attribution} <span class="flag-emoji">${flag}</span>
                    </p>
                    ${testimonial.role ? `<p class="testimonial-role-icon text-gray-400 text-sm">${roleIcon} ${testimonial.role}</p>` : ''}
                    ${testimonial.rating ? ratingStars : ''}
                </div>
            `;
            testimonialsGrid.appendChild(item);
        });
        ("scripts.js: Testimonials rendered as grid.");

        // Intersection Observer for Testimonial Cards
        const testimonialObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        document.querySelectorAll('.testimonial-item').forEach(item => {
            testimonialObserver.observe(item);
        });
        ("scripts.js: Testimonial card animations initialized.");

    } else {
        console.warn("scripts.js: Testimonials grid element not found.");
    }


    // Render Contact Links
    const connectLinksGrid = document.getElementById('connect-links-grid');
    if (connectLinksGrid) {
        connectLinksGrid.innerHTML = ''; // Clear existing content
        // Explicitly define the desired links, replacing the old Kaggle URL
        const desiredContactLinks = [
            { name: "Email", icon: "fas fa-envelope", url: "mailto:m.jalalkhanktk@gmail.com" },
            { name: "WhatsApp", icon: "fab fa-whatsapp", url: "https://wa.me/message/NB46I4RLUZBAC1" },
            { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/mjalalkhan/" },
            { name: "GitHub", icon: "fab fa-github", url: "https://github.com/M-Jalal-Khan" },
            { name: "Kaggle", icon: "fab fa-kaggle", url: "https://www.kaggle.com/muhammadjalalkhanktk" },
            { name: "HackerRank", icon: "fab fa-hackerrank", url: "https://www.hackerrank.com/profile/m_jalalkhanktk" },
            { name: "Maven Analytics", icon: "fas fa-chart-area", url: "https://mavenanalytics.io/profile/98217380-00f1-70b8-bb79-ce8c2b065fcf" },
            { name: "Coursera", icon: "fas fa-graduation-cap", url: "https://www.coursera.org/account-profile" },
            { name: "Credly", icon: "fas fa-certificate", url: "https://www.credly.com/users/muhammad-jalal-khan.f12de91e" }
        ];

        desiredContactLinks.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = "_blank";
            linkElement.rel = "noopener noreferrer";
            linkElement.className = "connect-link";
            linkElement.title = `Connect on ${link.name}`;
            linkElement.innerHTML = `<i class="${link.icon} mr-2 ${link.name === 'Email' || link.name === 'Maven Analytics' || link.name === 'Coursera' || link.name === 'Credly' ? 'text-accent-aqua-blue' : 'text-accent-aqua-green'}"></i> ${link.name}`;
            connectLinksGrid.appendChild(linkElement);
        });
        ("scripts.js: Contact links rendered.");
    } else {
        console.warn("scripts.js: Connect links grid element not found.");
    }


    // Handle Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status'); // Assuming there's a status element

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const submitButtonText = submitButton.querySelector('.button-text');

            submitButton.disabled = true;
            submitButtonText.textContent = "Sending...";
            if (formStatus) {
                formStatus.textContent = ""; // Clear previous status message
                formStatus.className = "mt-4 text-center text-sm font-medium"; // Reset class
            }

            const formData = new FormData(contactForm);

            try {
                const response = await fetch("https://formspree.io/f/xdkdnkao", { // Your provided Formspree URL
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    if (formStatus) {
                        formStatus.textContent = "Message sent successfully!";
                        formStatus.className = "mt-4 text-center text-sm font-medium text-accent-aqua-green";
                    }
                    contactForm.reset();
                    ("scripts.js: Contact form submitted successfully.");
                } else {
                    const data = await response.json();
                    if (formStatus) {
                        if (Object.hasOwnProperty.call(data, 'errors')) {
                            formStatus.textContent = data.errors.map(error => error.message).join(", ");
                        } else {
                            formStatus.textContent = "Oops! There was a problem sending your message.";
                        }
                        formStatus.className = "mt-4 text-center text-sm font-medium text-red-500";
                    }
                    console.error("scripts.js: Contact form submission failed:", data);
                }
            } catch (error) {
                if (formStatus) {
                    formStatus.textContent = "Oops! There was a network error.";
                    formStatus.className = "mt-4 text-center text-sm font-medium text-red-500";
                }
                console.error("scripts.js: Network error during form submission:", error);
            } finally {
                // Introduce a slight delay before resetting the button, so user can see the status message
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButtonText.textContent = "Send Message";
                    // Optionally, clear the status message after a few seconds
                    setTimeout(() => {
                        if (formStatus) {
                            formStatus.textContent = "";
                            formStatus.className = "mt-4 text-center text-sm font-medium";
                        }
                    }, 3000); // Clear message after 3 seconds
                }, 500); // Keep "Sending..." for 0.5 seconds
            }
        });
        ("scripts.js: Contact form event listener attached.");
    } else {
        console.warn("scripts.js: Contact form element not found.");
    }


    // Mouse-follower glow for profile image
    const profileImageFrame = document.getElementById('profile-image-frame');
    if (profileImageFrame) {
        profileImageFrame.addEventListener('mousemove', (e) => {
            const rect = profileImageFrame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            profileImageFrame.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
            profileImageFrame.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
        });
        console.log("scripts.js: Mousemove listener added to profile image frame.");
    } else {
        console.warn("scripts.js: Profile image frame element not found for mouse-follower glow.");
    }

    console.log("scripts.js: Script finished DOMContentLoaded processing.");
});

// Function to initialize all project carousels
function initializeCarousels() {
    document.querySelectorAll('.project-image-carousel').forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.carousel-arrow.left');
        const nextButton = carousel.querySelector('.carousel-arrow.right');
        const dotsContainer = carousel.querySelector('.carousel-nav-dots');
        let currentIndex = 0;
        let intervalId;

        if (images.length === 0) {
            console.warn("No images found in carousel:", carousel);
            return;
        }

        const updateCarousel = () => {
            if (imagesContainer) {
                imagesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
            }
            if (dotsContainer) {
                dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        };

        const startAutoScroll = () => {
            clearInterval(intervalId); // Clear any existing interval
            if (images.length > 1) { // Only auto-scroll if there's more than one image
                intervalId = setInterval(() => {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateCarousel();
                }, 4000); // Auto-scroll every 4 seconds
            }
        };

        const stopAutoScroll = () => {
            clearInterval(intervalId);
        };

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                stopAutoScroll();
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateCarousel();
                startAutoScroll(); // Restart auto-scroll after manual interaction
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                stopAutoScroll();
                currentIndex = (currentIndex + 1) % images.length;
                updateCarousel();
                startAutoScroll(); // Restart auto-scroll after manual interaction
            });
        }

        if (dotsContainer) {
            dotsContainer.addEventListener('click', (event) => {
                if (event.target.classList.contains('carousel-dot')) {
                    stopAutoScroll();
                    currentIndex = parseInt(event.target.dataset.index);
                    updateCarousel();
                    startAutoScroll(); // Restart auto-scroll after manual interaction
                }
            });
        }

        updateCarousel(); // Initial update to show the first image and active dot
        startAutoScroll(); // Start auto-scrolling
    });
    console.log("scripts.js: Project Carousels initialized.");
}
