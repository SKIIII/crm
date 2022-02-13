# author : whl
# time : 2022-01-26 10:55
import requests, pprint

payload = {
    'action': 'profile',
    'username': 'admin',
    'password': '88888888'
}

response = requests.post('http://localhost/api/mgr/signin',
                         data=payload)

pprint.pprint(response.json())
