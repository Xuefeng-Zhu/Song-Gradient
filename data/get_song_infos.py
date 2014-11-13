from pyechonest import config
from pyechonest import song
import json
import time
config.ECHO_NEST_API_KEY="W2XQXRYSFYPWBWDUV"

if __name__ == '__main__':
	with open('Billboard_year-end_top_30_singles.txt') as f:
		temp = f.readlines()
		lists = json.loads(temp[0])

	result = {}
	for year in lists:
		list = lists[year]
		temp = []
		i = 0
		while len(temp) < 10:
			time.sleep(1.1)
			search_results = song.search(artist=list[i][1], title=list[i][0])
			if len(search_results) > 0:
				a_s = search_results[0].audio_summary
				a_s['song_name'] = list[i][0]
				a_s['artist_name'] = search_results[0].artist_name
				temp.append(a_s)
			i += 1
		result[year] = temp

	with open('data.txt', 'w') as f:
		json.dump(result, f)
