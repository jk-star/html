# 📘 Chapter 11 – HTML5 Multimedia

## HTML5 se Pehle

- HTML5 se pehle audio aur video chalane ke liye Flash Player jaise plugins ki zarurat padti thi.
- HTML5 ke baad browser ne direct support de diya.
- Isliye aaj hum simply <audio> aur <video> tags use karte hain.

## Q1. audio Tag
- `<audio>` tag webpage par audio play karne ke liye use hota hai.

**Example**

<code><pre>
&lt;audio controls&gt;
&lt;source src="song.mp3" type="audio/mpeg"&gt;
&lt;Your browser does not support audio.&gt;
&lt;/audio&gt;
</pre></code>

**output** 

<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>

- ``controls`` Ye play button, pause button aur volume controls dikhata hai.
- Agar ``controls`` nahi doge: Audio page me hoga, lekin user usse play nahi kar payega.

## Q2. source Tag
- Ye browser ko batata hai ki media file ka source kya hai.

**Example:**

`<source src="song.mp3" type="audio/mpeg">`

- type se Browser ko pata chal jata hai ki file kis format ki hai.

**Multiple Source Example**
<code><pre>
&lt;audio controls&gt;
&lt;source src="song.mp3" type="audio/mpeg"&gt;
&lt;source src="song.ogg" type="audio/ogg"&gt;
&lt;/audio&gt;
</pre></code>

**Output**

<audio controls>
<source src="song.mp3" type="audio/mpeg">
<source src="song.ogg" type="audio/ogg">
</audio>

- Agar browser MP3 support nahi karta, to OGG try karega.

## Q3. video Tag
- Video play karne ke liye.

**Example**
<code><pre>
&lt;video width="500" controls&gt;
&lt;source src="movie.mp4" type="video/mp4"&gt;
&lt;/video&gt;
</pre></code>

**Output**

<video width="500" controls>

<source src="movie.mp4" type="video/mp4">

</video>

**Video Attributes**

**controls**

- Play/Pause buttons.

**autoplay**

- Page load hote hi video start.
- `<video autoplay>` ⚠️ Modern browsers aksar sound ke saath autoplay ko block kar dete hain.

**muted**
- Video mute rahegi. `<video muted>`

**loop**
- Video baar-baar chalegi. `<video loop>`

**poster**
- Video play hone se pehle thumbnail image. `<video poster="thumb.jpg">`

## Q4. track Tag

- Subtitles ya captions ke liye.

**Example**
<code><pre>
&lt;video controls&gt;
&lt;source src="movie.mp4"&gt;
&lt;track src="english.vtt" kind="subtitles" srclang="en" label="English"&gt;
&lt;/video&gt;
</pre></code>

<video controls>

<source src="movie.mp4">

<track src="english.vtt" kind="subtitles" srclang="en" label="English">

</video>

## Q5. iframe
- Ek webpage ke andar dusra webpage embed karna.

**YouTube Example**
<code><pre>
&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen &gt;
&lt;/iframe&gt;
</pre></code>

**Google Maps**

- Google Maps bhi iframe se embed hota hai.
<code><pre>
&lt;iframe src="Google Maps Embed URL" &gt;
&lt;/iframe&gt;
</pre></code>
