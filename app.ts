function validateForm(): boolean {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    
    if (!emailInput.value.match(/\S+@\S+\.\S+/)) {
      alert("Please enter a valid email.");
      return false;
    }
    
    // Add more validation rules as needed
    return true;
  }
  interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
  }
  
  interface Education {
    school: string;
    degree: string;
    graduationDate: string;
  }
  
  interface WorkExperience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education[];
    workExperience: WorkExperience[];
    skills: string[];
  }
  
  function getFormData(): ResumeData {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    return {
      personalInfo: {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        address: (form.elements.namedItem("address") as HTMLTextAreaElement).value,
      },
      education: [{
        school: (form.elements.namedItem("school") as HTMLInputElement).value,
        degree: (form.elements.namedItem("degree") as HTMLInputElement).value,
        graduationDate: (form.elements.namedItem("graduationDate") as HTMLInputElement).value,
      }],
      workExperience: [], // Capture work experience dynamically
      skills: [], // Capture skills dynamically
    };
  }
  function generateResume(data: ResumeData) {
    const resumeSection = document.getElementById("resumeSection");
    
    // Dynamically generate personal information
    const personalInfo = `
      <h1>${data.personalInfo.name}</h1>
      <p>Email: ${data.personalInfo.email}</p>
      <p>Phone: ${data.personalInfo.phone}</p>
      <p>Address: ${data.personalInfo.address}</p>
    `;
  
    // Dynamically generate education section
    const education = data.education.map(edu => `
      <h2>${edu.school}</h2>
      <p>Degree: ${edu.degree}</p>
      <p>Graduation Date: ${edu.graduationDate}</p>
    `).join("");
  
    // Append these sections to the resume container
      const resume = personalInfo + education;
  }
  