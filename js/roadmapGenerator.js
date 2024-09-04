console.log('Arquivo carregado: roadmapGenerator.js')

import { iconOptions } from './config.js';

export function generateRoadmap(projectTitle, projectObjective, steps) {
    const roadmapHTML = `
        <section class="roadmap max-w-6xl w-full mx-auto px-4">
            <h1 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">${projectTitle}</h1>
            <div class="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8">
                <div class="space-y-8 md:space-y-12">
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <h2 class="text-xl font-semibold mb-4">OBJETIVOS DO PROJETO</h2>
                        <p class="text-gray-400">${projectObjective}</p>
                    </div>
                    ${steps.slice(0, Math.ceil(steps.length / 2)).map((step, index) => `
                        <div class="bg-gray-800 p-6 rounded-lg flex flex-row-reverse items-start text-right">
                            <div class="flex-shrink-0 ml-4">
                                <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                    <div class="hexagon w-8 h-8 flex items-center justify-center">
                                        ${iconOptions[step.icon]}
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold mb-2">${step.title}</h3>
                                <p class="text-gray-400 mb-2">${step.description}</p>
                                <p class="text-sm text-gray-500">Data: ${step.date}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="hidden md:block w-px bg-gray-700 relative mx-auto">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                </div>
                <div class="space-y-8 md:space-y-12">
                    ${steps.slice(Math.ceil(steps.length / 2)).map((step, index) => `
                        <div class="bg-gray-800 p-6 rounded-lg flex items-start">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                    <div class="hexagon w-8 h-8 flex items-center justify-center">
                                        ${iconOptions[step.icon]}
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold mb-2">${step.title}</h3>
                                <p class="text-gray-400 mb-2">${step.description}</p>
                                <p class="text-sm text-gray-500">Data: ${step.date}</p>
                            </div>
                        </div>
                    `).join('')}
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <h2 class="text-xl font-semibold mb-4">PROGRESSO GERAL</h2>
                        <p class="text-gray-400 mb-4">Acompanhamento do progresso de implementação das funcionalidades planejadas.</p>
                        <div class="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
                        </div>
                        <div class="flex justify-between text-sm text-gray-400">
                            <span>0%</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 flex justify-between text-sm text-gray-400">
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