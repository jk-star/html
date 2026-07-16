**Chapter 3 – HTML Tags, Elements, Attributes aur Empty Tags**

**Q1. HTML Tag Kya Hota Hai?**
- Tag browser ko batata hai ki content kis type ka hai.

**Example**

```<h1>Welcome</h1>```

**Yahan:**

- ```<h1>``` = Opening Tag
- ```</h1>``` = Closing Tag

**Q2. HTML Element Kya Hota Hai?**
- **Element = Opening Tag + Content + Closing Tag**

**Example:**

```<h1>``` Welcome ```</h1>```

**Easy Trick**

**Tag = Sirf Tag**

**Element = Complete Package**

**Interview Question**

Tag aur Element me difference?

| Tag                         | Element                     |
| --------------------------- | --------------------------- |
| Sirf opening ya closing tag | Opening + Content + Closing |
| `<p>`                       | `<p>Hello</p>`              |

**Q3. Empty Tag (Void Element) Kya Hota Hai?**
- Aise tags jinke closing tag nahi hote, unhe Empty Tag ya Void Element kehte hain.

**Examples**

```<br>```

```<hr>```

```<img>```

```<input>```

```<meta>```

```<link>```
- Ye sab self-closing nature ke hote hain.

**Q4. HTML Attribute Kya Hota Hai?**
- Attribute kisi HTML element ko additional information provide karta hai.

**Syntax:**

```<tag attribute="value">```

**Example**

```<a href="https://google.com">```
    Google
```</a>```

**Yahan:**

- href = Attribute
- https://google.com = Value

**Q5. Global Attributes**

**Common Global Attributes**

**1. id**

```<div id="header"></div>```  **Unique.**

**2. class**

```<div class="box"></div>``` **Multiple elements par use kar sakte hain.**

**3. style**

```<p style="color:red;">``` **Inline CSS.**

**4. title**

```<p title="This is paragraph">``` **Mouse hover karne par tooltip dikhta hai.**

**5. hidden**

```<div hidden>``` **Element browser me hide ho jata hai.**

**6. draggable**

```<div draggable="true">``` **Element ko drag kar sakte hain.**

**7. contenteditable**

```<p contenteditable="true">```  **User browser me hi text edit kar sakta hai.**


