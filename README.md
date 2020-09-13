# Monorepo Gulf Mobile

Este aqui é o repositório de todas as aplicações mobile da Gulf. Diferente do Monorepo Web, o mobile irá exigir umas configurações a mais, mas nada assustador. Siga abaixo as instruções para conhecer e configurar todo o ambiente.


1. Clone o projeto em sua maquina: git clone https://github.com/hieducation/monorepo-gulf-mobile
3. execute: yarn
4. Vá até o package que você queira executar e execute os pods do projeto para instalar as dependencias do ambiente iOS. 
5. Fique de olho no comando "scripts" do projeto. Siga os mesmos padrões para executar os projetos. Ou se preferir, vá até o projeto desejado e execute os comandos que você ja conhece(npx react-native run-android ou npx react-native run-ios). 

### Obs: Quando você executar o comando npx react-native run-ios/run-android feche o metro bundler que for aberto e espere o projeto executar a build e logo após execute o comando npx react-native start. Isso deve ser feito pois o metro bundler que o react-native abre automaticamente não entende as configurações que foram feitas para o monorepo. Fique tranquilo que aqui neste README.md estará tudo explicado para você conseguir executar um projeto e trabalhar fluidamente. 

Como o projeto web, o mobile também tem seu template. Para inicializar o projeto com o template da gulf execute o seguinte comando: 

```
npx react-native init MyApp --template react-native-template-gulftech
```



yarn workspace @monorepo-gulf-mobile/shared add @types/react-native -D
