const puppeteer = require("puppeteer");
const fs = require("fs");
const User = require("../database/models/User");
const template_1 = require("../templates/template_1");

const generatePDF = async (id) => {
  try {
    //fetch data from database using id
    const fetchResumeData = await User.findById(id);
    if (!fetchResumeData) throw new Error("User does not exists");
    //assign template
    const generateTemplate = template_1(fetchResumeData);
    await fs.writeFileSync(`./pages/index.html`, generateTemplate);
    //use puppeteer and create pdf from that data
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(generateTemplate);
    const createdPDF = await page.pdf({ format: "A4" });
    const currentDate = new Date();
    await fs.writeFileSync(
      `./pdfs/${id}_${
        currentDate.getFullYear() +
        "_" +
        currentDate.getMonth() +
        "_" +
        currentDate.getDate() +
        "_" +
        currentDate.getHours()
      }.pdf`,
      createdPDF
    );
    browser.close();
    console.log("done");
  } catch (error) {
    console.log(error);
  }
};

module.exports = generatePDF;
