export function getFormData(form){
  const formData = new FormData(form);
  const projectTitle = formData.get('projectTitle');
  const projectObjective = formData.get('projectObjective');
  const steps = [];

  document.querySelectorAll('#stepsContainer > div').forEach((stepElement, index) => {
    steps.push({
        date: formData.get(`date-${index}`),
        icon: formData.get(`icon-${index}`),
        title: formData.get(`title-${index}`),
        description: formData.get(`description-${index}`)
    });
});

  return{ projectTitle , projectObjective , steps }
}
