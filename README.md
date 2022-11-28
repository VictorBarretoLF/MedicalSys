# MedicalSys

## Executando backend da aplicação:

1. Após clonar o projeto crie um ambiente virtual:
    ```
    # pode copiar e colar os comandos no CMD do windows
    cd ./backend && python -m venv venv
    ```
2. Ative o ambiente vitrual:
    ```
    cd ./venv/Scripts && activate
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