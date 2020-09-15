# Monorepo Hi Mobile

Este aqui é o repositório de todas as aplicações mobile da Hi. Siga abaixo as instruções para conhecer e configurar todo o ambiente.

1. Clone o projeto em sua maquina: git clone https://github.com/hieducation/monorepo-hi-mobile
2. execute: `yarn`
3. Vá até o package que você queira executar e execute os pods do projeto para instalar as dependencias do ambiente iOS.
4. Fique de olho no comando "scripts" do projeto. Siga os mesmos padrões para executar os projetos. Ou se preferir, vá até o projeto desejado e execute os comandos que você ja conhece(npx react-native run-android ou npx react-native run-ios).

#### Obs: Quando você executar o comando npx react-native run-ios/run-android feche o metro bundler que for aberto e espere o projeto executar a build e logo após execute o comando npx react-native start. Isso deve ser feito pois o metro bundler que o react-native abre automaticamente não entende as configurações que foram feitas para o monorepo. Fique tranquilo que aqui neste README.md estará tudo explicado para você conseguir executar um projeto e trabalhar fluidamente.

### 1. Gerando um novo projeto

Como o projeto web, o mobile também tem seu template. Para inicializar o projeto com o template da hi execute o seguinte comando:

```
npx react-native init MyApp --template react-native-template-gulftech
```

Provavelmente, quando você estiver esperando a aplicação ser baixada e instalada, você irá se deparar com o seguinte erro.

![Error Cocoa Pods](https://github.com/hieducation/monorepo-gulf-mobile/blob/master/images/errorcocoapods.png)

Por que este erro ocorre: a pasta do CocoaPods não achou a pasta node_modules raiz. Por este fato, as dependencias do cocoa pods não podem ser instaladas assim acusando este erro. Então abaixo, vamos as configurações para podermos executar o projeto.

Passo 1:
Alterar todos os caminhos de referência ao node_modules nas pastas android e ios. Isso, parece ser complicado, mas de fato não é. É recomendado fazer da forma mais tradicional possível para não gerar problemas de build. Na pasta que voce acabou de gerar o projeto, clique com o botão direito e faça uma pesquisa na pasta filtrando por "node_modules", logo após, a partir do arquivo build.gradle vá alterando o direcionamento dos arquivos para a pasta node_modules root.

```
../../
```

Toda a pasta android deve sempre ter dois caminhos a mais.

![Path node modules](https://github.com/hieducation/monorepo-gulf-mobile/blob/master/images/pathnodemodules.png)

A mesma coisa deve ser feita para a pasta ios. A unica coisa que irá mudar, será a linha 9 do arquivo Podfile

Podfile antes:

![Before PodFile](https://github.com/hieducation/monorepo-gulf-mobile/blob/master/images/beforepodfile.png)

Podfile depois:

![After PodFile](https://github.com/hieducation/monorepo-gulf-mobile/blob/master/images/afterpodfile.png)

Antes de concluir esta etapa, é bom certificar-se de que todos os path que contém node_modules estão de acordo com o mencionado acima, caso não esteja, você irá ter problemas de build. Após a validação feita vá até a pasta ios e execute o comando

```
pod install
```

Isso fará com que todos os pods serão executados e instalados no projeto. O projeto mobile ja está complatamente configurado e pode servir de padrão para você seguir o exemplo.

### 2. Testes

Neste monorepo, todos os projetos que são instalados poderão ser executados os testes unitários. Apenas adicione o arquivos de teste e caso precise mockar algum teste, siga o padrão que já conterá na pasta **mocks**

### 3. Comandos

Adicionar nova lib em um unico package

```
yarn workspace @monorepo-hi-mobile/shared add @types/react-native ou yarn workspace @monorepo-hi-mobile/shared add @types/react-native -D (devDependencie)
```

Adicionar nova lib em todo o workspace

```
yarn workspace add @types/react-native -W ou yarn workspace add @types/react-native -WD
```

#### Obs: Sempre pense bem antes de adicionar uma lib se ela realmente vai ser daquele determinado projeto ou se poderá ser utilizada globalmente e vice-versa. Não instale libs globalmente desnecessariamente.

### 4. Novos packages de compartilhamento

Neste monorepo, todos os packages de compartilhamento estão dentro da pasta shared. Mas caso você queira criar mais um, para adicionar no projeto que irá utilizar, vá até o package.json do projeto desejado e adicione da seguinte forma.

![Shared Package](https://github.com/hieducation/monorepo-gulf-mobile/blob/master/images/shared.png)

Após feito isso, execute o comando `yarn` para executar a instalação do seu package.

### 4. Padrões

É implicitamente importante seguir os padrões de projeto. Independente do nome que você ao projeto, após feita a instalação mude o nome no package.json para o padrão:

```
@monorepo-hi-mobile/<name_of_package>
```

Assim mantemos o nosso monorepo fluido, fácil de entender e padronizado.
