# MedicalSys

## Executando backend da aplicação:

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
5. Agora você pode rodar o servidor em desenvolvimento:
    ```
    python manage.py runserver
    ```
6. Abra seu browser e vá para http://127.0.0.1:8000/admin/ você verá uma página de login que confirmará o processo.

## Executando frontend da aplicação

1. Vá até a pasta frontend e execute os seguintes comandos a seguir:
    ```
    npm install
    ```
2. Inicia a app react:
    ```
    npm start
    ```
3. Abra seu browser e vá para http://127.0.0.1:3000/ e divirta-se!