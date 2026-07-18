# 📘 Chapter 6 – HTML Links (Anchor Tag)**

## Q1. Anchor Tag ( a ) Kya Hota Hai?

- Anchor (``<a>``) tag ka use ek page se dusre page, ek website se dusri website, ya 
- same page ke kisi section par navigate karne ke liye hota hai.
- Isliye ise Hyperlink bhi kehte hain.

**Example:**

``<a href="https://www.google.com">Google</a>``

## Q2. href Kya Hai?

- **href ka full form hai:** Hypertext Reference

- Ye browser ko batata hai ki click karne ke baad kahan jana hai.

**Example:**

``<a href="about.html">About Us</a>``

**Yahan:**
- href = Attribute
- about.html = Destination

## Q3. Absolute URL vs Relative URL

**1. Absolute URL**

- Jab poora web address likha ho.

**Example:**

``<a href="https://www.google.com">Google</a>``

**Use:**

- External website open karni ho.

**2. Relative URL**

- Jab apni project ki file open karni ho.

**Example:**

``<a href="about.html">About</a>``

## Interview Difference

| Absolute URL     | Relative URL             |
| ---------------- | ------------------------ |
| Complete URL     | Project ke andar ka path |
| External website | Internal page            |
| `https://...`    | `about.html`             |

## Q4. target Attribute

- Ye decide karta hai link kahan open hoga.
- **_self** Default value. Same tab me open hota hai.

```<a href="about.html" target="_self">```
About
```</a>```

- **_blank** New tab me open hota hai.

``<a href="https://google.com" target="_blank">``
Google
``</a>``

## Interview Question

- Difference between _self and _blank?
    - _self → Same tab
    - _blank → New tab

## Q5. Email Link (mailto:)
- User ke email app ko open karta hai.

``<a href="mailto:test@gmail.com">``
Send Email
``</a>``

## Q6. Phone Link (tel:)
- Mobile me click karte hi dialer open ho jata hai.

``<a href="tel:+919876543210">``
Call Now
``</a>``

## Q7. Download Attribute
- File download karne ke liye.
- Click karte hi file download hogi.

`<a href="resume.pdf" download>`
Download Resume
`</a>`

## Q8. Bookmark Link (Same Page Navigation)

- Ek hi page ke kisi section par jump karna.

**Example:**
<code><pre>
&lt;h2 id="contact"&gt;Contact Us &lt;/h2&gt; 
&lt;a href="#contact" &gt; Go to Contact &lt;/a&gt; 
</pre></code>

**Yahan:**
- id="contact" → Destination
- href="#contact" → Link

## Q9. Image Ko Link Banana

- Image par click karne se page open ho.

<code><pre>
&lt;a href="about.html&gt; 
&lt;img src="logo.png" alt="Logo"&gt;
&lt;/a&gt; 
</pre></code>

## Q10. Empty Link

- Kabhi-kabhi temporary link banate hain.

`<a href="#">Click Here</a>`

ya

`<a href="javascript:void(0)"> Click</a>`