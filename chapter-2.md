**Chapter 2: HTML Document Structure**

**Question 1: HTML Document Structure Kya Hota Hai?**
- Jab bhi hum HTML file banate hain, uska ek standard structure hota hai.
<code><pre>&lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
        &lt;title&gt;My Website&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
        &lt;h1&gt;Welcome&lt;/h1&gt;
        &lt;p&gt;This is my first HTML page.&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;</pre></code>

- Har HTML page lagbhag isi structure ko follow karta hai.

**1. &lt;!DOCTYPE html&gt; Kya Hai?**
- &lt;!DOCTYPE html&gt; browser ko batata hai ki ye document HTML5 me likha gaya hai.
- Ye browser ko Standards Mode me page render karne ke liye instruct karta hai.

**Agar Remove Kar Dein To?**
- Browser Quirks Mode me ja sakta hai.

**Result:**

- CSS alag behave kar sakti hai.
- Layout toot sakta hai.
- Different browsers me different output aa sakta hai.

 Isliye hamesha first line me likhte hain.

```html
<!DOCTYPE html>
```

**2. ```<html>``` Tag**
- Ye pure HTML document ka root element hota hai.

- Saare HTML elements isi ke andar hote hain.

**Example:**
```
<html>

<head>

</head>

<body>

</body>

</html>
```
**Interview Question**

**Q.1: HTML page ka root element kaunsa hota hai?**

```<html>```

**3. ```<head>``` Tag**
- Ye webpage ki background information rakhta hai.

- Ye information browser aur search engine ke liye hoti hai.

- User ko directly screen par nahi dikhti.

**Interview Question**

**Q: Kya ```<head>``` ka content webpage par visible hota hai?**

- Nahi. Sirf ```<title>``` browser tab me dikhta hai.
- Baaki tags directly page par visible nahi hote.

**4. ```<title>``` Tag**
- Browser tab me jo naam dikhta hai, wo ```<title>``` se aata hai.

**Example:**

```<title>Amazon India</title>```

*SEO*

- ```<title>``` SEO ke liye bhi bahut important hai.

- Google search results me bhi title dikhai deta hai.

**5. ```<meta>``` Tag**

- Meta tag webpage ke baare me extra information deta hai.

**Example:**
```<meta charset="UTF-8">```

**Meaning:**
- Browser ko batata hai ki page UTF-8 character encoding use kar raha hai.

- Isse Hindi, English aur special characters sahi dikhte hain.

**Viewport Meta**

```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
- Ye mobile responsive website banane ke liye important hai.

**Description Meta**

```<meta name="description" content="Best Online Shopping Website">```
- SEO me help karta hai.

**6. ```<link>``` Tag**
- External CSS file ko connect karne ke liye.

```<link rel="stylesheet" href="style.css">```

**7. ```<style>``` Tag**
- Internal CSS likhne ke liye.

<code><pre>
&lt;style&gt;
h1 { color:red; } 
&lt;/style&gt;
</pre></code>

**8. ```<script>``` Tag**
- JavaScript add karne ke liye.

<code><pre>
&lt;script&gt;
alert("Hello"); 
&lt;/script&gt;
</pre></code>

- Ya external JS file:

<code><pre>&lt;script src="app.js">&lt;/script&gt;</pre></code>

**9. ```<body>``` Tag**
- Jo bhi user browser me dekhta hai, wo sab ```<body>``` ke andar hota hai.

**Example:**
<cdoe><pre>&lt;body&gt;
&lt;h1&gt;Welcome&lt;/h1&gt;
&lt;p&gt;Hello World&lt;/p&gt;
&lt;img&gt;
&lt;button&gt;
&lt;/form&gt;
&lt;/form&gt;</pre></code>

**Browser HTML Ko Kaise Load Karta Hai?**

**Simple flow:**

- Browser HTML file ko read karta hai.
- HTML tags ko samajhta (parse) hai.
- DOM (Document Object Model) banata hai.
- CSS load karta hai.
- JavaScript execute karta hai.
- Final webpage screen par render (display) karta hai.

**Complete Example**
<code><pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt; My Website &lt;/title&gt;
&lt;meta charset="UTF-8"&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</pre></code>

**Quirks Mode Kya Hota Hai?**

**Simple Definition:**

- Quirks Mode browser ka ek compatibility mode hai, jisme browser purane (old) HTML/CSS rules follow karta hai taaki bahut purani websites bhi sahi chal sakein.