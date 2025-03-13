import requests

# URL da API JSONPlaceholder
url = "https://jsonplaceholder.typicode.com/users"

# Fazendo a requisição GET para buscar os usuários
response = requests.get(url)

# Verificando se a requisição foi bem-sucedida (status code 200)
if response.status_code == 200:
    users = response.json()  # Convertendo a resposta para JSON
    print(users)   
    # Exibindo os usuários
    for user in users:
        print(f"Nome: {user['name']}, Email: {user['email']}, Rua: {user['address']['street']}, Telefone: {user['phone']}")
else:
    print("Erro ao buscar dados:", response.status_code)

