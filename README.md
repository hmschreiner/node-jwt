# node-jwt
Exemplo de API em Node.js usando JWT

## Instalar dependências
```
    npm install
```

## Gerando certificados

O algorítmo de encriptação do token usa o conteúdo de arquivos de certificados que contém as chaves pública e privada. Para gerar estes arquivos, execute o arquivo:

```
$ ./generateKeys.sh
```
A senha solicitada pelo comando pode ficar em branco. Os arquivos **_private.key_** e **_public.key_** serão gerados na pasta **_src_**.

## Iniciar o servidor
Para iniciar o servidor Express, use o comando:

```
   npm start
```

## Bônus - Ganhe até R$100 pra testar a hospedagem da Umbler!
Está procurando uma hospedagem bacana pra testar e até mesmo publicar tuas aplicações, sites e afins em alguns segundos? É só acessar [este link](http://bit.ly/CreditosNaUmbler) e ganhe até R$100 pra testar o serviço. 


## Referências
[Documentação do Express](https://expressjs.com)

[Documentação do JsonWebToken](https://github.com/auth0/node-jsonwebtoken)

## Observações
Este código faz parte do curso **_Desenvolvimento Back-end com Node.js_** na [Digital Inovation One](https://digitalinnovation.one).
