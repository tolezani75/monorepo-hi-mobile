# Monorepo Gulf Mobile

Este aqui é o repositório de todas as aplicações mobile da Gulf. Diferente do Monorepo Web, o mobile irá exigir umas configurações a mais, mas nada assustador. Siga abaixo as instruções para conhecer e configurar todo o ambiente.


1. Clone o projeto em sua maquina: git clone https://github.com/hieducation/monorepo-gulf-mobile
3. execute: yarn
4. Vá até o package que você queira executar e execute os pods do projeto para instalar as dependencias do ambiente iOS. 
5. Fique de olho no comando "scripts" do projeto. Siga os mesmos padrões para executar os projetos. 

### Obs: Quando você executar o comando npx react-native run-ios/run-android feche o metro bundler que for aberto e espere o projeto executar a build e logo após execute o comando npx react-native start. Isso deve ser feito pois o metro bundler que o react-native abre automaticamente não entende as configurações que foram feitas para o monorepo. 



yarn workspace @monorepo-gulf-mobile/shared add @types/react-native -D
