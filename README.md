# Ciclotron
O Ciclotron é um algoritmo que simula a aceleração de partículas dentro de um ciclotron. As partículas utilizadas são elétrons, prótons e nêutrons, cada uma com um padrão de aceleração específico.

## Como funciona
O algoritmo aceita uma matriz quadrada como entrada, representando o ciclotron, e uma partícula como entrada. A matriz é preenchida inicialmente com '1', representando espaços vazios.

Em seguida, a partícula selecionada é acelerada dentro do ciclotron de acordo com as seguintes regras:

Elétron ('e'): O elétron é acelerado ocupando a primeira linha e a última coluna da matriz.

Próton ('p'): O próton é acelerado ocupando a primeira linha, a última coluna e o canto inferior direito da matriz.

Nêutron ('n'): O nêutron é acelerado ocupando apenas a primeira linha da matriz.


## Como usar
Para utilizar o algoritmo, basta chamar a função ciclotron(particula, matriz), onde particula é uma string representando a partícula a ser acelerada ('e', 'p' ou 'n'),
e matriz é uma matriz quadrada representando o ciclotron. A função retornará uma nova matriz com a partícula acelerada.

