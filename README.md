# MASHUPFY 

## Introduçao

  O Projeto consiste em um programa que simula o fluxo basico de um sistema Cashback. Desde a parte de login, procentagem(%) de volta por compra de produto e inclusive o resgate do saldo pendente para a conta corrente do usuario.
  
  ### Fluxo Basico
    1) Login
      - Nesta etapa devera ser inserido o email e senha do usuario(pré-cadastrado na pasta seeders)
    2) Home
      - Nesta etapa é mostrado o seguinte:
        - Uma lista de empresas
          - Nao sao editaveis nem sofrem alguma alteracao na hora de interagir. Sao meramente ilustrativos
        - Uma lista de produtos
          - Cada 'CARD'é sofre uma alteraçao de registro no momento que voce clica em 'COMPRAR'.
            A cada click que voce da no botao, voce envia para o sistema uma requisicao de compra e ele pega o valor do     
            produto e multiplica pela 'porcentagem' de cashback.
        ** Ao finalizar as compras "desejadas" deve dar um refresh para que apareça na parte do menu o valor.
        
    3) Profile
      - Nesta etapa é mostrado o seguinte:
        - Informaçoes do usuario logado
          - Email, Telefone
        - Dois campos iteraveis:
          1) Saldo Pendente
            - Mostra o saldo pendente que faltaria que as empresas 'fisicas' confirmassem o valor da compra.
              Voce podera simular essa confirmaçao clicando no botao 'Confirmar'
          2) Saldo Disponivel
            - Mostra o saldo disponivel para o usuario realizar o saque. Somente habilitado, apos a confirmaçao das compras 
              realizadas.

  ## Instalaçao
    
    Para a instalaçao e execuçao do programa, voce devera seguir as seguintes instruçoes, NA ORDEM EM QUE ESTIVEREM ESCRITAS.
    1) Executar o BackEnd
    2) Executar o Seeders
    3) Executar o FrontEnd