import requests
import csv
from bs4 import BeautifulSoup
from control import data


file = open('movie.csv', mode ='w', newline='')
writer = csv.writer(file)
writer.writerow(['영화 제목','평점','이미지 주소','감독', '출연자','개봉일자'])

MOVIE_URL = f'https://movie.naver.com/movie/running/current.nhn'
movie_html = requests.get(MOVIE_URL)
movie_soup = BeautifulSoup(movie_html.text, "html.parser")
movie_list_box = movie_soup.find('ul',{"class": "lst_detail_t1"})
movie_list = movie_list_box.find_all('li')


result = data(movie_list)
for item in result:
    row = []
    row.append(item['title'])
    row.append(item['score'])
    row.append(item['image'])
    row.append(item['director'])
    row.append(item['actors'])
    row.append(item['date'])
    writer.writerow(row)
