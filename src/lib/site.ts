// Single source of truth for names, links, and the Person schema.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://seanorrmd.com").replace(/\/$/, "");
export const CONTACT_EMAIL = "sean@neurogenesisproject.com";
export const PATIENT_URL = "https://neurogenesisproject.com";

// Verified identity profiles (Person schema sameAs + "Find me elsewhere").
export const PROFILES = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/seanorrmd/" },
  { label: "Doximity", url: "https://www.doximity.com/profiles/7191243d-699a-49f1-b2dd-0dd29aba8d1d/view" },
  { label: "ORCID", url: "https://orcid.org/0009-0002-1090-6685" },
  { label: "Google Scholar", url: "https://scholar.google.com/citations?user=WSVEQwgAAAAJ" },
  { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=7102191380" },
  { label: "ResearchGate", url: "https://www.researchgate.net/profile/Sean-Orr-4" },
  { label: "Medium", url: "https://medium.com/@drseanorr" },
  { label: "Instagram", url: "https://www.instagram.com/seanorrmd/" },
  { label: "YouTube", url: "https://www.youtube.com/@TheNeurogenesisProject" },
] as const;

// Approved public wording for the fellowship (matches the UAB certificate).
export const FELLOWSHIP =
  "Fellowship in Vascular and Critical Care Neurology (UAB), with training in endovascular intervention";

const USF = {
  "@type": "CollegeOrUniversity",
  name: "University of South Florida College of Medicine",
};
const UAB = {
  "@type": "CollegeOrUniversity",
  name: "University of Alabama at Birmingham",
};
const NGP = {
  "@type": "MedicalOrganization",
  name: "The Neurogenesis Project",
  legalName: "The Neurogenesis Project Inc.",
  url: "https://neurogenesisproject.com",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Sean C. Orr",
  givenName: "Sean",
  additionalName: "C.",
  familyName: "Orr",
  honorificSuffix: "M.D.",
  alternateName: ["Sean C. Orr, M.D.", "Dr. Sean Orr", "Sean Orr MD"],
  url: SITE_URL,
  jobTitle: "Co-founder and Chief Medical Officer, The Neurogenesis Project",
  description:
    "Fellowship-trained neurologist and physician entrepreneur. Co-founder and Chief Medical Officer of The Neurogenesis Project, founder of Action Potential Supplements, CEO of Doctor Media Group, and publisher of Florida Doctor Magazine. Coined 'The Neuroeconomy.'",
  hasOccupation: { "@type": "Occupation", name: "Neurologist" },
  worksFor: NGP,
  affiliation: [
    NGP,
    { "@type": "Organization", name: "Action Potential Supplements", url: "https://myactionpotential.com" },
    { "@type": "Organization", name: "Doctor Media Group", legalName: "Doctor Media Group LLC" },
    { "@type": "Organization", name: "Florida Doctor Magazine", url: "https://floridadoctormagazine.com" },
  ],
  alumniOf: [USF, UAB],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Doctor of Medicine (M.D.), 1995",
      recognizedBy: USF,
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Residency",
      name: "Neurology residency, completed 1999 (Chief Resident, PGY-4)",
      recognizedBy: USF,
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Fellowship",
      name: "Fellowship in Vascular and Critical Care Neurology, completed 2001",
      recognizedBy: UAB,
    },
  ],
  knowsAbout: [
    "Neurology",
    "Vascular neurology",
    "Neurocritical care",
    "Endovascular intervention",
    "Brain health",
    "Physician advocacy",
  ],
  sameAs: PROFILES.map((p) => p.url),
};
