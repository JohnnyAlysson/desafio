console.log('Arquivo carregado: stepManager.js')
alert('Se você ver este alerta, o main.js foi carregado com sucesso!')

import { iconOptions } from './config.js';

let stepCount = 0;

export function createStepHTML(index) {
  return `
      <div class="p-4 bg-gray-50 rounded-md relative transition-all duration-300 ease-in-out" data-step-index="${index}">
          <h3 class="font-medium mb-2">Etapa ${index + 1}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label for="date-${index}" class="block text-sm font-medium text-gray-700">Data</label>
                  <input type="date" id="date-${index}" name="date-${index}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              </div>
              <div>
                  <label for="icon-${index}" class="block text-sm font-medium text-gray-700">Ícone</label>
                  <select id="icon-${index}" name="icon-${index}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      ${Object.keys(iconOptions).map(icon => `<option value="${icon}">${icon}</option>`).join('')}
                  </select>
              </div>
              <div class="md:col-span-2">
                  <label for="title-${index}" class="block text-sm font-medium text-gray-700">Título</label>
                  <input type="text" id="title-${index}" name="title-${index}" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              </div>
              <div class="md:col-span-2">
                  <label for="description-${index}" class="block text-sm font-medium text-gray-700">Descrição</label>
                  <textarea id="description-${index}" name="description-${index}" rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
              </div>
          </div>
          ${index > 0 ? `
              <button type="button" class="remove-step absolute top-2 right-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1 transition-colors duration-200" aria-label="Remover etapa">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
              </button>
          ` : ''}
      </div>
  `;
}

export function updateStepNumbers() {
  document.querySelectorAll('#stepsContainer > div').forEach((step, index) => {
      step.querySelector('h3').textContent = `Etapa ${index + 1}`;
      step.dataset.stepIndex = index;
  });
}

export function addStep(){
    console.log("Inicializando")
    const stepsContainer = document.getElementById('stepsContainer');
    stepsContainer.insertAdjacentHTML('beforeend', createStepHTML(stepCount));
    stepCount++;
    updateStepNumbers();
};


export function removeStep(stepElement){
  stepElement.remove();
  updateStepNumbers();
}