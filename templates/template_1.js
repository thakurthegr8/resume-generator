const wrapper = require(".");
const {
  basic,
  contact,
  education,
  project,
  experience,
  skill,
} = require("./templateArray");

const fieldTemplate = (field, value) =>
  `<div class="grid grid-cols-2">
  <dt class="p-2 text-gray-600">${field}</dt>
  <dd class="p-2">${value}</dd>
  </div>`;

const educationTemplate = (data) => {
  return `<div class="flex flex-col">
  <h1 class="text-lg font-semibold">${data.name}</h1>
  <span class="text-sm text-gray">${data.from.getFullYear()} - ${data.to.getFullYear()}</h1>
  <p>${data.description}</p>
  </div>`;
};

const projectTemplate = (data) => {
  return `<div class="flex flex-col">
    <h1 class="text-lg font-semibold">${data.name}</h1>
    <span class="text-sm text-gray">${data.from.getFullYear()} - ${data.to.getFullYear()}</h1>
    <p>${data.description}</p>
    </div>`;
};

const experienceTemplate = (data) => {
  return `<div class="flex flex-col">
      <h1 class="text-lg font-semibold">${data.company}</h1>
      <span class="text-sm text-gray">${data.from.getFullYear()} - ${data.to.getFullYear()}</h1>
      <p>${data.description}</p>
      </div>`;
};

const skillTemplate = (data) => {
  return `<span class="p-2 bg-black text-white rounded-full">${data}
  </span>`;
};

const innerTemplate = (innerText) =>
  `<div class="flex flex-col divide-y p-2 mx-auto container max-w-2xl">${innerText}</div>`;
const titleTemplate = (title) => `<h1 class="text-2xl mt-2">${title}</h1>`;

const template_1 = (data) => {
  //basic
  const basicFields = basic.basicFields.reduce((prev, curr) => {
    const value = data[curr.id];
    if (value) return prev + fieldTemplate(curr.field, data[curr.id]);
    return prev + "";
  }, "");

  const basicTemplateValue = `${titleTemplate(basic.title)}${basicFields}`;
  //contact
  const contactFields = contact.contacts.reduce((prev, curr) => {
    const value = data.contact[curr.id];
    if (value)
      return prev + fieldTemplate(curr.field, `<a href="#">${value}</a>`);
    return prev + "";
  }, "");
  const contactTemplate = `${titleTemplate(contact.title)}${contactFields}`;

  const educationFields = data.education.reduce(
    (prev, curr) => prev + educationTemplate(curr),
    ""
  );

  const educationTemplateValue = `${titleTemplate(
    education.title
  )}${educationFields}`;

  const projectFields = data.project.reduce(
    (prev, curr) => prev + projectTemplate(curr),
    ""
  );

  const projectTemplateValue = `${titleTemplate(
    project.title
  )}${projectFields}`;

  const experienceFields = data.experience.reduce(
    (prev, curr) => prev + experienceTemplate(curr),
    ""
  );
  const experienceTemplateValue = `${titleTemplate(
    experience.title
  )}${experienceFields}`;

  const skillFields = `<div class="flex gap-2 py-2">${data.skills.reduce(
    (prev, curr) => prev + skillTemplate(curr),
    ""
  )}</div>`;

  const skillTemplateValue = `${titleTemplate(skill.title)}${skillFields}`;

  const finalTemplate = `${basicTemplateValue}
  ${contactTemplate}
  ${educationTemplateValue}
  ${projectTemplateValue}
  ${experienceTemplateValue}
  ${skillTemplateValue}`;

  return wrapper(innerTemplate(finalTemplate));
};

module.exports = template_1;
