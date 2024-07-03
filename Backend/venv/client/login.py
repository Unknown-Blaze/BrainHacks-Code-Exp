import requests

username = input('What is your username?')
password = input('What is your password?')

response = requests.post('http://127.0.0.1:8000/auth/login/', data = {'username': username, 'password': password})

if response.status_code == 200:
    token = response.json().get('token')
    print('Login successful. Token: ', token)
else:
    print("Login failed:", response.json().get('error'))