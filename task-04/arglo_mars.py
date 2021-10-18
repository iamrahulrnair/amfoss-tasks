import argparse
import requests

my_parser = argparse.ArgumentParser(description='List the image based on filter,make sure use "," to seperate filter parameters',epilog='Enjoy the program!')

my_parser.add_argument('data',
                       metavar='data',
                       type=str,
                       help='the data for searching (eg: sol=INT/earth_date:YYYY-MM-DD)","camera=string')
my_parser.add_argument('id',
                       metavar='id',
                       type=int,
                       help='the id for selection')     
                
args = my_parser.parse_args()
data = args.data.split(",")
_id = args.id
api_key="6PTcQFYfO9yjXaUzWyrgeYvr9paVMqLEKRvH0qMD"
final_data="&".join(data)

payload={
    api_key:api_key,
}
BASE_URL=f"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?{final_data}&api_key={api_key}"
response=requests.get(BASE_URL)
data=response.json()['photos']
for i in data:
    if(i['id']==_id):
        print(i['img_src'])
