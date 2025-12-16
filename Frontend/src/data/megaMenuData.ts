// src/data/megaMenuData.ts

export type Course = {
  uni: string;
  title: string;
  logo?: string;
};

export type CourseSection = {
  heading: string;
  courses: Course[];
};

export type CategoryData = {
  id: string;
  label: string;
  sections: CourseSection[];
};

export const MENU_DATA: CategoryData[] = [
  {
    id: "doctorate",
    label: "Doctorate",
    sections: [
      {
        heading: "FOR ALL DOMAINS",
        courses: [
          { uni: "IITB & IIM, Udaipur", title: "Chief Technology Officer & AI Leadership Programme" },
          { uni: "SSBM", title: "Global Doctor of Business Administration" },
          { uni: "Edgewood University", title: "Doctorate in Business Administration" },
          { uni: "Golden Gate University", title: "Doctor of Business Administration" },
          { uni: "ESGCI", title: "Doctorate of Business Administration (DBA)" },
        ],
      },
      {
        heading: "LEADERSHIP / AI",
        courses: [
          { uni: "Golden Gate University", title: "DBA in Emerging Technologies (Gen AI)" },
        ],
      },
    ],
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    sections: [
      {
        heading: "POPULAR COURSES",
        courses: [
          { uni: "LJMU & IIITB", title: "Master of Science in AI & ML" },
          { uni: "IIITB", title: "Executive PG Programme in AI & ML" },
        ],
      },
      {
        heading: "GENERATIVE AI",
        courses: [
          { uni: "Microsoft & IIITB", title: "Certification in Generative AI" },
          { uni: "Purdue University", title: "Post Graduate Program in AI & Data Science" },
        ],
      },
    ],
  },
  {
    id: "datascience",
    label: "Data Science",
    sections: [
      {
        heading: "MASTER'S PROGRAMS",
        courses: [
          { uni: "University of Arizona", title: "MS in Data Science" },
          { uni: "Woolf", title: "MS in Data Science & AI" },
        ],
      },
      {
        heading: "BOOTCAMPS",
        courses: [
          { uni: "IIITB", title: "Data Science Bootcamp" },
          { uni: "Caltech", title: "Data Analytics Bootcamp" },
        ],
      },
    ],
  },
  {
    id: "genai",
    label: "Gen AI & Agentic AI",
    sections: [
      {
        heading: "SPECIALIZATIONS",
        courses: [
          { uni: "Microsoft", title: "Applied Generative AI Specialization" },
          { uni: "IIITB", title: "Advanced Certificate in Generative AI" },
        ],
      },
    ],
  },
  {
    id: "mba",
    label: "MBA",
    sections: [
      {
        heading: "GLOBAL MBA",
        courses: [
          { uni: "Deakin University", title: "MBA (Global) with Specialisation" },
          { uni: "Liverpool Business School", title: "Master of Business Administration" },
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    sections: [
      {
        heading: "CERTIFICATIONS",
        courses: [
          { uni: "MICA", title: "Advanced Certificate in Digital Marketing" },
          { uni: "Meta", title: "Social Media Marketing Professional Certificate" },
        ],
      },
    ],
  },
  {
    id: "management",
    label: "Management",
    sections: [
      {
        heading: "PRODUCT MANAGEMENT",
        courses: [
          { uni: "Duke CE", title: "Product Management Certification" },
        ],
      },
    ],
  },
];