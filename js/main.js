// main.js

import { addStep, removeStep } from "./stepManager.js";
import { getFormData } from "./formHandler.js";
import { generateRoadmap } from "./roadmapGenerator.js";
import { validateForm, displayValidationErrors } from "./formValidation.js";

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
        const formData = getFormData(e.target);
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            displayValidationErrors(errors);
        } else {
            // Limpar erros anteriores, se houver
            displayValidationErrors([]);
            generateRoadmap(formData.projectTitle, formData.projectObjective, formData.steps);
        }
    });

    // Inicializa com uma etapa
    addStep();
});

// Função auxiliar para rolar a página para o topo suavemente
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}