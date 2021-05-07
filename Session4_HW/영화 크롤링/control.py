def data(movie_list) :
    result = []
    for movie_item in movie_list:
        actor_list = []
        title = movie_item.find('dt', {"class": "tit"}).find('a').text
        score = movie_item.select('dl.info_star > dd>  div.star_t1 >a > span.num')[0].text
        image = movie_item.select('div.thumb > a> img')[0]['src']
        director = movie_item.select('dd:nth-child(4) > span.link_txt > a')[0].text
        actors = movie_item.select('dd:nth-child(6) > span.link_txt > a')
        date = movie_item.select('dl.info_txt1>dd:nth-child(2)')[0].text.rstrip()[-13:]
        for actor in actors:
            actor_list.append(actor.text)
        
        item = {
            'title' : title,
            'score' : score,
            'image' : image,
            'director' : director,
            'actors' : actor_list,
            'date' : date
        }
        result.append(item)
    return result