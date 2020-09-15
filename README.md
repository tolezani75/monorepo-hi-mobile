# Monorepo Gulf Mobile

Este aqui é o repositório de todas as aplicações mobile da Gulf. Diferente do Monorepo Web, o mobile irá exigir umas configurações a mais, mas nada assustador. Siga abaixo as instruções para conhecer e configurar todo o ambiente.

1. Clone o projeto em sua maquina: git clone https://github.com/hieducation/monorepo-gulf-mobile
2. execute: yarn
3. Vá até o package que você queira executar e execute os pods do projeto para instalar as dependencias do ambiente iOS.
4. Fique de olho no comando "scripts" do projeto. Siga os mesmos padrões para executar os projetos. Ou se preferir, vá até o projeto desejado e execute os comandos que você ja conhece(npx react-native run-android ou npx react-native run-ios).

### Obs: Quando você executar o comando npx react-native run-ios/run-android feche o metro bundler que for aberto e espere o projeto executar a build e logo após execute o comando npx react-native start. Isso deve ser feito pois o metro bundler que o react-native abre automaticamente não entende as configurações que foram feitas para o monorepo. Fique tranquilo que aqui neste README.md estará tudo explicado para você conseguir executar um projeto e trabalhar fluidamente.

Como o projeto web, o mobile também tem seu template. Para inicializar o projeto com o template da gulf execute o seguinte comando:

```
npx react-native init MyApp --template react-native-template-gulftech
```

Provavelmente, quando voce estiver esperando a aplicação ser baixada e instalada, voce irá se deparar com o seguinte erro.

![Image of Yaktocat]("./images/errorcocoapods.png")

Este erro ocorre pelo seguinte fato: a pasta do CocoaPods não achou a pasta node_modules raiz. Por este fato, as dependencias do cocoa pods não podem ser instaladas assim acusando este erro. Então abaixo, vamos as configurações para podermos executar o projeto.

passo 1:
Alterar todos os caminhos de referencia ao node_modules nas pastas android e ios. Isso, parece ser complicado, mas de fato não é.

yarn workspace @monorepo-gulf-mobile/shared add @types/react-native -D
