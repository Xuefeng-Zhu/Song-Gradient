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
		for s in range(10):
			time.sleep(1.1)
			search_results = song.search(title=s)
			a_s = search_results[0].audio_summary
			a_s['song_name'] = s
			a_s['artist_name'] = search_results[0].artist_name
			temp.append(a_s)
		result[year] = temp

	with open('data.txt', 'w') as f:
		json.dump(result, f)
