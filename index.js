const mongoose = require("mongoose");
const User = require("./database/models/User");
const generatePDF = require("./utils/pdfGenerator");

const db = async () =>
  mongoose.connect(
    `mongodb+srv://thakurthegr8:awskol9897@cluster0.93tbw3c.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );
db();

const saveUser = async (user) => {
  try {
    const createUser = await User.create(user);
    if (createUser) {
      console.log(createUser);
    }
  } catch (error) {
    console.log(error);
  }
};

const user = {
  first_name: "Rohan",
  last_name: "Thakur",
  gender: "Male",
  age: 28,
  contact: {
    github: "https://github.com/rohan7055",
    linkedin: "https://www.linkedin.com/in/rohan-thakur-814703213/",
    instagram: "string",
    phone: "tel:7906263190",
  },
  education: [
    {
      name: "GP PAUT COLLEGE PANTNAGAR",
      from: new Date(),
      to: new Date(),
      description: "Studied at gb paut college",
    },
    {
      name: "SGRR PUBLIC SCHOOL",
      from: new Date(),
      to: new Date(),
      description: "Studied at sgrr public school",
    },
  ],
  project: {
    name: "string",
    from: new Date(),
    to: new Date(),
    description: "string",
  },
  experience: {
    company: "string",
    role: "string",
    from: new Date(),
    to: new Date(),
    description: "string",
  },
  skills: ["react", "html", "css"],
};

saveUser(user);

generatePDF("637664350c21051befaf5364");
