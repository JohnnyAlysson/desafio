# Gerador de Roadmap 

## Visão Geral

O Gerador de Roadmap é uma aplicação web interativa que permite aos usuários criar visualizações personalizadas de roadmaps de projetos. Esta ferramenta é projetada para ser simples e fácil de usar, ideal para planejamento de projetos, apresentações ou comunicação de estratégias.

## Funcionalidades Principais

1. **Criação de Projeto**
   - Inserir título do projeto
   - Definir objetivo do projeto

2. **Gerenciamento de Etapas**
   - Adicionar múltiplas etapas ao roadmap
   - Remover etapas individualmente
   - Reordenação automática das etapas após remoção

3. **Detalhamento das Etapas**
   - Definir data para cada etapa
   - Selecionar um ícone representativo para cada etapa
   - Adicionar título para cada etapa
   - Incluir descrição detalhada para cada etapa

4. **Geração Visual do Roadmap**
   - Criar uma representação visual do roadmap baseada nos dados inseridos
   - Exibir as etapas em uma linha do tempo vertical
   - Alternar entre a visualização do formulário e do roadmap gerado

5. **Design Responsivo**
   - Layout adaptável para diferentes tamanhos de tela (desktop e mobile)

6. **Estilização Customizada**
   - Uso de estilos CSS personalizados para uma aparência moderna e consistente
   - Ícones SVG para representação visual das etapas

7. **Interatividade**
   - Formulário dinâmico que permite adição e remoção de etapas em tempo real
   - Transições suaves entre a visualização do formulário e do roadmap

8. **Indicador de Progresso**
   - Barra de progresso visual no roadmap gerado

9. **Marcadores de Tempo**
   - Exibição das datas inicial, intermediária e final do projeto no roadmap gerado

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

- `index.html`: Estrutura HTML da aplicação
- `style.css`: Estilos CSS para a aparência da aplicação
- `config.js`: Configurações e constantes, incluindo opções de ícones
- `stepManager.js`: Gerenciamento de etapas do roadmap
- `formHandler.js`: Manipulação do formulário
- `roadmapGenerator.js`: Geração do roadmap visual
- `main.js`: Arquivo principal para inicialização e event listeners

## Como Usar

1. Abra o arquivo `index.html` em um navegador moderno.
2. Preencha o título e o objetivo do projeto.
3. Adicione etapas ao roadmap usando o botão "Adicionar Etapa".
4. Para cada etapa, preencha a data, selecione um ícone, adicione um título e uma descrição.
5. Remova etapas se necessário usando o botão de remoção.
6. Clique em "Gerar Roadmap" para visualizar o roadmap criado.

## Personalização

### Estilos

O arquivo `style.css` contém todos os estilos da aplicação. Você pode modificar as cores, fontes e layouts ajustando este arquivo.

### Ícones

Os ícones são definidos no arquivo `config.js`. Para adicionar ou modificar ícones, edite o objeto `iconOptions` neste arquivo.

## Detalhes Técnicos

### JavaScript Modular

O projeto utiliza JavaScript modular (ES6 modules) para melhor organização e manutenção do código.

### Responsividade

O design é responsivo, adaptando-se a diferentes tamanhos de tela através de media queries no CSS.

### Acessibilidade

Foram feitos esforços para tornar a aplicação acessível, incluindo uso apropriado de roles ARIA e estrutura semântica HTML.

## Possíveis Melhorias Futuras

1. Implementar salvamento local ou integração com backend para persistência de dados.
2. Adicionar opções de exportação do roadmap (por exemplo, PDF, imagem).
3. Implementar funcionalidade de arrastar e soltar para reordenar etapas.
4. Adicionar temas alternativas ou modo escuro.
5. Implementar validação de formulário mais robusta.

## Considerações de Desenvolvimento

- A aplicação atual é puramente frontend, rodando inteiramente no navegador do cliente.
- O código está estruturado de forma modular para facilitar manutenção e expansão futura.
- A estilização utiliza uma abordagem personalizada, mas poderia ser facilmente adaptada para usar um framework CSS se desejado.

## Conclusão

O Gerador de Roadmap oferece uma maneira intuitiva e visualmente atraente de criar roadmaps de projetos, permitindo que os usuários personalizem cada aspecto do roadmap de acordo com suas necessidades específicas. Com sua interface amigável e design responsivo, é uma ferramenta útil para uma variedade de contextos de planejamento e apresentação de projetos.


## Contribuidores

 <a href="https://johnnytec.com">
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/149841185?v=4" width="100px;" alt=""/>
 <br />

    Criado com ❤️ por Johnny Alysson 👋🏽.
[![Linkedin Badge](https://img.shields.io/badge/-Johnny-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/johnnyalysson)](https://www.linkedin.com/in/johnnyalysson) 
[![Gmail Badge](https://img.shields.io/badge/-johnalysson30@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:johnalysson30@gmail.com)](mailto:johnalysson30@gmail.com)

 <a href="https://github.com/licyafreoli">
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/168486966?v=4" width="100px;" alt=""/>
 <br />

    Criado com ❤️ por Lícya Oliveira 👋🏽.
[![Linkedin Badge](https://img.shields.io/badge/-Lícya-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/licyaoliveira)](https://www.linkedin.com/in/licyaoliveira)