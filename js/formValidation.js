
function validateNotEmpty(value, fieldName) {
  if (!value.trim()) {
    return `O campo ${fieldName} não pode estar vazio.`;
  }
  return null;
}

function validateChronologicalOrder(currentDate, previousDate, stepIndex) {
  if (previousDate && new Date(currentDate) <= new Date(previousDate)) {
    return `A data da Etapa ${stepIndex + 1} deve ser posterior à data da etapa anterior.`;
  }
  return null;
}

export function validateForm(formData) {
  const errors = [];
  let previousDate = null;


  const projectTitleError = validateNotEmpty(formData.projectTitle, 'Título do Projeto');
  if (projectTitleError) errors.push(projectTitleError);

  const projectObjectiveError = validateNotEmpty(formData.projectObjective, 'Objetivo do Projeto');
  if (projectObjectiveError) errors.push(projectObjectiveError);


  formData.steps.forEach((step, index) => {
    const stepNumber = index + 1;

  
    const dateError = validateNotEmpty(step.date, `Data da Etapa ${stepNumber}`);
    if (dateError) errors.push(dateError);

    const titleError = validateNotEmpty(step.title, `Título da Etapa ${stepNumber}`);
    if (titleError) errors.push(titleError);

    const descriptionError = validateNotEmpty(step.description, `Descrição da Etapa ${stepNumber}`);
    if (descriptionError) errors.push(descriptionError);

  
    if (step.date) {
      const chronologicalError = validateChronologicalOrder(step.date, previousDate, index);
      if (chronologicalError) errors.push(chronologicalError);
      previousDate = step.date;
    }
  });

  return errors;
}

export function displayValidationErrors(errors) {
  const errorContainer = document.getElementById('validationErrors') || createErrorContainer();
  errorContainer.innerHTML = '';

  if (errors.length > 0) {
    const errorList = document.createElement('ul');
    errors.forEach(error => {
      const errorItem = document.createElement('li');
      errorItem.textContent = error;
      errorList.appendChild(errorItem);
    });
    errorContainer.appendChild(errorList);
    errorContainer.style.display = 'block';
  } else {
    errorContainer.style.display = 'none';
  }
}

function createErrorContainer() {
  const container = document.createElement('div');
  container.id = 'validationErrors';
  container.style.color = 'red';
  container.style.marginBottom = '20px';
  document.querySelector('form').insertBefore(container, document.querySelector('form').firstChild);
  return container;
}
//Exemplo:
// import { validateForm, displayValidationErrors } from './formValidation.js';

// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = getFormData(); // Sua função existente para obter os dados do formulário
//   const errors = validateForm(formData);
//   if (errors.length > 0) {
//     displayValidationErrors(errors);
//   } else {
//     // Prosseguir com a submissão do formulário
//     generateRoadmap(formData);
//   }
// });