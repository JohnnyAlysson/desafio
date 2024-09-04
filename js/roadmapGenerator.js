console.log('Arquivo carregado: roadmapGenerator.js')

import { iconOptions } from './config.js';

export function generateRoadmap(projectTitle, projectObjective, steps) {
  const roadmapHTML = `
      <section class="roadmap max-w-6xl w-full">
          <h1 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">${projectTitle}</h1>
          <div class="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4">
              <div class="space-y-8 md:space-y-12 text-left md:text-right">
                  <div class="p-4">
                      <h2 class="text-sm font-semibold mb-2">OBJETIVOS DO PROJETO</h2>
                      <p class="text-xs text-gray-400">${projectObjective}</p>
                  </div>
                  ${steps.slice(0, Math.ceil(steps.length / 2)).map((step, index) => `
                      <div class="flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:justify-end' : ''}">
                          <div class="bg-gray-800 p-4 rounded-lg max-w-xs w-full md:max-w-[250px] mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4 order-2'}">
                              <h3 class="text-xs font-semibold mb-2">${step.title}</h3>
                              <p class="text-xs text-gray-400">${step.description}</p>
                              <p class="text-xs text-gray-500 mt-2">Data: ${step.date}</p>
                          </div>
                          <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4 order-1'}">
                              <div class="hexagon bg-gray-700 w-6 h-6 flex items-center justify-center">
                                  ${iconOptions[step.icon]}
                              </div>
                          </div>
                      </div>
                  `).join('')}
              </div>
              <div class="hidden md:block w-px bg-gray-700 relative mx-auto">
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full"></div>
                  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full"></div>
              </div>
              <div class="space-y-8 md:space-y-12">
                  ${steps.slice(Math.ceil(steps.length / 2)).map((step, index) => `
                      <div class="flex flex-col md:flex-row items-start md:items-center">
                          <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                              <div class="hexagon bg-gray-700 w-6 h-6 flex items-center justify-center">
                                  ${iconOptions[step.icon]}
                              </div>
                          </div>
                          <div class="bg-gray-800 p-4 rounded-lg max-w-xs w-full md:max-w-[250px]">
                              <h3 class="text-xs font-semibold mb-2">${step.title}</h3>
                              <p class="text-xs text-gray-400">${step.description}</p>
                              <p class="text-xs text-gray-500 mt-2">Data: ${step.date}</p>
                          </div>
                      </div>
                  `).join('')}
                  <div class="p-4">
                      <h2 class="text-sm font-semibold mb-2">PROGRESSO GERAL</h2>
                      <p class="text-xs text-gray-400">Acompanhamento do progresso de implementação das funcionalidades planejadas.</p>
                      <div class="mt-4 space-y-2">
                          <div class="bg-gray-800 w-full h-2 rounded-full overflow-hidden">
                              <div class="bg-gray-600 w-0 h-full transition-all duration-1000" style="width: 0%"></div>
                          </div>
                          <div class="flex justify-between text-xs text-gray-500">
                              <span>0%</span>
                              <span>100%</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="mt-8 flex justify-between text-gray-500 text-xs">
              <div>${steps[0]?.date || ''}</div>
              <div>${steps[Math.floor(steps.length / 2)]?.date || ''}</div>
              <div>${steps[steps.length - 1]?.date || ''}</div>
          </div>
      </section>
  `;

  document.getElementById('app').classList.add('hidden');
  const roadmapView = document.getElementById('roadmapView');
  roadmapView.classList.remove('hidden');
  roadmapView.innerHTML = roadmapHTML;
}