import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

/**
 *    -----> redux: redux saga.
 *    -----> colors sempre no mesmo padrão atual.
 *    -----> construir o maximo de componentes possivel.
 *    -----> pesquisar fontes para icons
 *    -----> Colocar firebase no readme.md
 *    -----> projeto inicial será o ler o mundo
 *    -----> utilizar enum para diferenciar os services e não posições do array.
 *
 *    -----> templates: um praticamente zerado. ( Um banner, um carousel e duas telas ).
 *    -----> templates mvp: uma aplicação completa. (Casa do saber).
 *    -----> template: uma tela em branco. (Cru).
 */

const Banner = () => {
  //const {} = useSelector((state) => state.course);

  return (
    <View>
      <Text>Banner</Text>
    </View>
  );
};

export default Banner;
