function validateForm() {
    var form = document.getElementById("resumeForm");
    var emailInput = form.elements.namedItem("email");
    if (!emailInput.value.match(/\S+@\S+\.\S+/)) {
        alert("Please enter a valid email.");
        return false;
    }
    // Add more validation rules as needed
    return true;
}
function getFormData() {
    var form = document.getElementById("resumeForm");
    return {
        personalInfo: {
            name: form.elements.namedItem("name").value,
            email: form.elements.namedItem("email").value,
            phone: form.elements.namedItem("phone").value,
            address: form.elements.namedItem("address").value,
        },
        education: [{
                school: form.elements.namedItem("school").value,
                degree: form.elements.namedItem("degree").value,
                graduationDate: form.elements.namedItem("graduationDate").value,
            }],
        workExperience: [], // Capture work experience dynamically
        skills: [], // Capture skills dynamically
    };
}
function generateResume(data) {
    var resumeSection = document.getElementById("resumeSection");
    // Dynamically generate personal information
    var personalInfo = "\n      <h1>".concat(data.personalInfo.name, "</h1>\n      <p>Email: ").concat(data.personalInfo.email, "</p>\n      <p>Phone: ").concat(data.personalInfo.phone, "</p>\n      <p>Address: ").concat(data.personalInfo.address, "</p>\n    ");
    // Dynamically generate education section
    var education = data.education.map(function (edu) { return "\n      <h2>".concat(edu.school, "</h2>\n      <p>Degree: ").concat(edu.degree, "</p>\n      <p>Graduation Date: ").concat(edu.graduationDate, "</p>\n    "); }).join("");
    // Append these sections to the resume container
    var resume = personalInfo + education;
}
