from pyquery import PyQuery as pq

if __name__ == '__main__':
	result = {}
	for year in range(1959, 2014):
		list = []
		page = pq(url="http://en.wikipedia.org/wiki/Billboard_Year-End_Hot_100_singles_of_" + str(year))
		table = page('.wikitable')
		trs = table('tr')
		for i in range(1, len(trs)):
			tr = trs.eq(i)
			song = tr.children().eq(1).text().strip(' "')
			artist = tr.children().eq(2).text().strip(' "')
			list.append((song, artist))
		result[year] = list
	with open('Billboard_year-end_top_30_singles.txt', 'w') as f:
		import json 
		json.dump(result, f)
