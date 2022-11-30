# MedicalSys

## Executando aplicação usando o Docker Compose:

1. Após clonar o projeto, digite o seguinte comando dentro da pasta:
    ```
    docker-compose up
    ```
2. Por padrão, o frontend se encontrará na porta [http://localhost:3000/](http://localhost:3000/) e o backend na porta [http://localhost:8000/](http://localhost:8000/) 


## Executando aplicação manualmente:

### Executando Backend

1. Após clonar o projeto crie um ambiente virtual, entre na pasta backend e execute o seguinte comando:
    ```
    # pode copiar e colar os comandos no CMD do windows
    python -m venv venv
    ```
2. Ative o ambiente vitrual:
    ```
    cd ./venv/Scripts && activate && cd ../..
    ```
3. Instalar as dependencias do projeto:
    ```
    pip install -r requirements.txt
    ```
4. Aplique as migrations do banco de dados:
    ```
    python manage.py makemigrations patient users scheduling
    python manage.py migrate
    ```

5. Ainda na pasta backend, crie um arquivo chamado .env
   
6. Usando o arquivo .envxemple como exemplo, preencha as variáveis de ambiente de acordo com as chaves
   ```
   # exemplo:
   SOCIAL_AUTH_FACEBOOK_KEY=123456
   SOCIAL_AUTH_FACEBOOK_SECRET=abcd123456
   ```
   
7. Agora você pode rodar o servidor em desenvolvimento:
    ```
    python manage.py runserver
    ```
8. O servidor estará rodando na porta local 8000: [http://localhost:8000/](http://localhost:8000/) 

### Executando Frontend

1. Vá até a pasta frontend e execute os seguintes comandos a seguir:
    ```
    npm install
    ```
2. Ainda na pasta frontend, crie um arquivo chamado .env
   
3. Usando o arquivo .envxemple como exemplo, preencha as variáveis de ambiente de acordo com as chaves
    ```
   # exemplo:
   SOCIAL_AUTH_FACEBOOK_KEY=32exemplodaiddoappdofacebook643
    SOCIAL_AUTH_FACEBOOK_SECRET=exemplo7523asd

    REACT_APP_OAUTH2_CLIENT_SECRET=exemplodechavesecreta653434
    REACT_APP_OAUTH2_CLIENT_ID=exemplo123
   ```
4. Inicia a app react:
    ```
    npm start
    ```
5. O cliente estará rodando na porta local 3000, abra seu browser e vá para [http://localhost:3000/](http://localhost:3000/) e divirta-se!
   
OBS: Se as variáveis estiverem corretas, o app funcionará normalmente.

#### 💻 MAIN STACK BACKEND:

 - [x] Django
 - [x] Django Rest Framework Social OAuth2 (drf-social-oauth2)
 - [x] Protected routes
 - [x] JSON Web Tokens (JWT)
 - [x] Django Rest Framework (djangorestframework)

#### 💻 MAIN STACK FRONTEND:

 - [x] Axios Interceptors com Process Queue
 - [x] API ViaCEP
 - [x] Boostrap v5
 - [x] Immer (immer.js)
 - [x] React Input Mask para máscaras (react-input-mask) 