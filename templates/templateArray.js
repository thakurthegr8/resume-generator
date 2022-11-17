const basic = {
  title: "Basic Details",
  basicFields: [
    { field: "First Name", id: "first_name" },
    { field: "Last Name", id: "last_name" },
    { field: "Gender", id: "gender" },
    { field: "Age", id: "age" },
  ],
};

const contact = {
  title: "Contact",
  contacts: [
    { field: "Github", id: "github" },
    { field: "Linkedin", id: "linkedin" },
    { field: "Instagram", id: "instagram" },
    { field: "Facebook", id: "facebook" },
    { field: "Phone", id: "phone" },
  ],
};

const education = {
  title: "Education",
};

const project = {
  title: "Projects",
};

const experience = {
  title: "Experience",
};

const skill = {
  title: "Skills",
};

module.exports = { basic, contact, education, project, experience, skill };
