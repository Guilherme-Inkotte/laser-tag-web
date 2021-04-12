## Laser Tag
Este projeto foi desenvolvido pelo terceiro ano A de informática da TECPUC
O projeto consiste em um jogo de tiro similar ao airsoft, com a grande diferença de que não se utilizam projéteis físicos, e sim laser.
Cada jogador utiliza um colete, que possui um receptor, e uma pistola, que emite um laser. Este laser carrega a identificação do jogador que deu o tiro, codificando-a em binário através de sua frequência. Caso o projétil atinja o colete de um jogador, o colete envia a informação para o website, que exibe em uma tela em tempo real todas as informações de uma partida.

### Tecnologias
O projeto foi desenvolvido com React.js para o frontend, Node.js e Express para o backend e Arduino para a construção do hardware.
A comunicação em tempo real é feita do Arduino para o backend, através de websockets, usando a biblioteca Socket.io

#### Links
Repo do código do Arduino: https://github.com/Guilherme-Inkotte/laser-tag
Repo da API do site: https://github.com/Matheus-Maica/laser-tag-api
