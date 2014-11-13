Song Tiles
=====

CS 467 Social Visualization Project

URL: [http://xuefeng-zhu.github.io/Song-Gradient/app/#/main](http://xuefeng-zhu.github.io/Song-Gradient/app/#/main)
---------------------------------------------
## Overview
Music has dramatically changed throughout human history. However, there rarely are visualizations showing the trends of popular music. With the advance of computer technology, we can easily get and analyze attributes of music and visualize them to see if historical trends exist in popular songs.

We were inspired by the paper “In Situ Speech Visualization in Real-Time Interactive Installation and Performance”, which examines “phonesthesia” in a variety of interactive artworks. Our concept is similar in that we wish to examine synaesthesia with popular music.

## People 
+ Anne McLaughlin
+ Faizaan Mahmud
+ Xuefeng Zhu 
+ Teddy Marszalek

 
## Web application
We used the EchoNest API and the Spotify API in conjunction with Python scripts for data extraction and analysis. 

**Property Definitions** (from the EchoNest API documentation: http://developer.echonest.com/acoustic-attributes.html)

"**Danceability**

Describes how suitable a track is for dancing using a number of musical elements (the more suitable for dancing, the closer to 1.0 the value). The combination of musical elements that best characterize danceability include tempo, rhythm stability, beat strength, and overall regularity.

**Energy**

Represents a perceptual measure of intensity and powerful activity released throughout the track. Typical energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.

**Speechiness**

Detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.

**Liveness**

Detects the presence of an audience in the recording. The more confident that the track is live, the closer to 1.0 the attribute value. Due to the relatively small population of live tracks in the overall domain, the threshold for detecting liveness is higher than for speechiness. A value above 0.8 provides strong likelihood that the track is live. Values between 0.6 and 0.8 describe tracks that may or may not be live or contain simulated audience sounds at the beginning or end. Values below 0.6 most likely represent studio recordings.

**Acousticness**

Represents the likelihood a recording was created by solely acoustic means such as voice and acoustic instruments as opposed to electronically such as with synthesized, amplified, or effected instruments. Tracks with low acousticness include electric guitars, distortion, synthesizers, auto-tuned vocals, and drum machines, whereas songs with orchestral instruments, acoustic guitars, unaltered voice, and natural drum kits will have acousticness values closer to 1.0.

**Valence**

Describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g., happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry). This attribute in combination with energy is a strong indicator of acoustic mood, the general emotional qualities that may characterize the track's acoustics. Note that in the case of vocal music, lyrics may differ semantically from the perceived acoustic mood."



![](http://musicmachinery.files.wordpress.com/2010/08/ismir2010-45-pdf-page-3-of-12.png)
(Source: http://developer.echonest.com/forums/thread/1297)
(Note: In our case "arousal" equates to "energy")

**Mapping to Colors**


Upon getting the above values for each property we calculated a color for the songs in two different ways: by RGB and by HSL. 

For RGB, we allow the user to select from 3 properties like valence, acousticness, and speechiness for each of the red, green and blue values. 

For HSL, we allow the user to choose one property and see how it varies between a color gradient. More orange means the property is more prevalent, more blue means its less prevalent. This is easier to distinguish between colors and songs.

**Visualization 1**

We got the top 10 songs for each year since 1960, mapped them to colors, and created a tile for each color. Users can choose which properties of the songs they wish to visualize. This allows one to see trends or outliers in modern music history.

The RGB visual is less helpful in seeing overall trends, but more helpful in identifying outliers to examine. Furthermore, it offers more versatility and comparison options.

The HSL visual is more helpful in seeing overall trends, since it is only measuring one property at a time and there are less colors to process.

**Visualization 2**
This visualization allows you to enter a playlist and compare the song colors for different playlists. In our example, we tried to compare jazz, blues, soul, funk, classical and hiphop music, since they all have some common musical roots. 