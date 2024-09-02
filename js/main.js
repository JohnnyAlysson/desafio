console.log('Arquivo carregado: main.js')

import { addStep,removeStep } from "./stepManager.js";
import { getFormData } from "./formHandler.js";
import { generateRoadmap } from "./roadmapGenerator.js";


document.addEventListener('DOMContentLoaded', () => {
  const addStepBtn = document.getElementById('addStepBtn');
  const stepsContainer = document.getElementById('stepsContainer');
  const roadmapForm = document.getElementById('roadmapForm');

  addStepBtn.addEventListener('click', addStep);

  stepsContainer.addEventListener('click', (e) => {
      if (e.target.closest('.remove-step')) {
          removeStep(e.target.closest('[data-step-index]'));
      }
  });

  roadmapForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const { projectTitle, projectObjective, steps } = getFormData(e.target);
      generateRoadmap(projectTitle, projectObjective, steps);
  });

  // Inicializa com uma etapa
  addStep();
});