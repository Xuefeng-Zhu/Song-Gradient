class Song : 
    def __init__(self, line) :
        self.attributes = {}
        parts = line.split("||")
        for p in parts : 
            subpart = p.split(":")
            if len(subpart) == 2 :
                self.attributes[subpart[0]] = subpart[1]

    def getHexColor(self) :
        speech     = float(self.attributes['speech'])
        tempo      = float(self.attributes['tempo'])
        energy     = float(self.attributes['energy'])
        liveness   = float(self.attributes['liveness'])
        acoustic   = float(self.attributes['acoustic'])
        dance      = float(self.attributes['dance'])
        valence    = float(self.attributes['valence'])
        return rgb_to_hex( (((1-valence)+energy)*255*.5, acoustic*255, dance*255))

    def getLoudness(self) :
        if self.attributes.has_key("loudness") :
            return self.attributes["loudness"]
        return "0.0"

    def getOpacity(self) :
        loudness = float(self.getLoudness())
        return (loudness+100)/200

    def getName(self) :
        if self.attributes.has_key("name") :
            return self.attributes['name']
        return "Unknown"


    def getArtist(self) :
        if self.attributes.has_key("artist") :
            return self.attributes['artist']
        return "Unknown"

def rgb_to_hex(rgb_value):
    print str(rgb_value)
    return '#%02x%02x%02x' % rgb_value


divTemplate = '''
    <div style=\"background-color:{{HEXCOLOR}};opacity:{{OPACITY}};\">
        <p>{{SONG_NAME}}<br>{{SONG_ARTIST}}</p>
    </div>
'''

def getHTMLOutput(hexColor, name, artist, opacity) :
    if hexColor == "#000000" :
        return ""
    toRet = divTemplate.replace("{{HEXCOLOR}}", hexColor)   \
                       .replace("{{SONG_NAME}}", name)      \
                       .replace("{{SONG_ARTIST}}", artist)  \
                       .replace("{{OPACITY}}", "1")
    return toRet

f = open("results.txt", "r")
innards = ""
line = f.readline()
while line: 
    s = Song(line)
    innards = innards + getHTMLOutput(s.getHexColor(), s.getName(), s.getArtist(), str(s.getOpacity()))
    line = f.readline()


htmlDoc = \
'''<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Audio Visualization</title>
    <style>
        body {background-color:#ffffff;} 
        div {
            height:100px;
            width:200px;
            float:left;
            margin-left:0px;
            margin-top:0px;
            border-radius:8px;
        }   
        p {
            float:center;
            font-size:12px;
            font-family: Courier;
            color: white;
            text-align: center;
            vertical-align: middle;
            line-height:20px;
            width:60%;
            margin:15px auto;
        }
    </style>
</head>
<body>
{{INNARDS}}
</body>
</html>
'''

output = open("index.html", "w")
output.write(htmlDoc.replace("{{INNARDS}}", innards))
