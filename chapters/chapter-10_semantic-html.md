# 📘 Chapter 10 – Semantic HTML

## Q1. Semantic HTML Kya Hota Hai?
- Semantic ka matlab hota hai "Meaning"  batana .
- Semantic HTML me hum aise tags use karte hain jo apne content ka purpose batate hain.

**Example:**
<code><pre>
&lt;header&gt;
&lt;nav&gt;
&lt;main&gt;
&lt;section&gt;
&lt;article&gt;
&lt;aside&gt;
&lt;footer&gt;
</pre></code>

- In tags ko dekhkar hi samajh aa jata hai ki ye page ka kaunsa part hai.

**Semantic Tags**
<code><pre>
&lt;header&gt;
&lt;nav&gt;
&lt;section&gt;
&lt;article&gt;
&lt;footer&gt;
</pre></code>

**1. `<header>` :** Website ka top part.

**Example**
<code><pre>
&lt;header&gt;
Logo
Menu
Search
&lt;/header&gt;
</pre></code>

**2. `<nav>` :** Navigation links.

**Example**
<code><pre>
&lt;nav&gt;
Home
About
Contact
&lt;/nav&gt;
</pre></code>

**3. `<main>` :** 
- Page ka main content.
- Ek page me generally ek hi `<main>` hona chahiye.

**4. `<section>` :** Page ka ek section.

**Example**
<code><pre>
Services
Testimonials
About
Contact
</pre></code>

**5. `<article>` :** Independent content.

**Example**
- Blog Post
- News
- Product Review

Ye content alag se bhi meaningful hota hai.

**6. `<aside>` :** Sidebar.

**Example**
- Recent Posts
- Advertisement
- Categories

**7. ``<footer>`` :** Page ka last part.
**Example**
- Copyright
- Privacy Policy
- Terms
- Contact

**Semantic tags ke advantages:**

**1. Code Readable Ho Jata Hai**
<code><pre>
&lt;header&gt;
&lt;nav&gt;
&lt;footer&gt;
</pre></code>

- Dekhte hi samajh aa gaya.

**2. SEO Improve Hota Hai**
- Google ko samajhne me aasani hoti hai.
- Kaunsa content:
    - Main hai
    - Navigation hai
    - Footer hai

**3. Accessibility Improve Hoti Hai**
- Screen Reader ko bhi structure samajhne me help milti hai.

**4. Maintain Karna Easy**
- Team me kaam karte waqt developer jaldi samajh jata hai.

## Interview Question

**Difference Between div vs header**

| div                 | header            |
| ------------------- | ----------------- |
| Non-semantic        | Semantic          |
| Meaning nahi batata | Header batata hai |
| Generic container   | Top section       |

**Difference Between section vs article**

**Section :** Ek topic ka part.

**Example**
<code><pre>
About Us
Services
Contact
</pre></code>

**Article :** Independent content.

**Example**
<code><pre>
Blog
News
Product Review
</pre></code>

- Article ko alag page par bhi dikha sakte ho.

**Kya ek page me multiple `<header>` ho sakte hain?**

✅ Haan.

**Example**
- Website Header
- Har Article ka Header

**Kya Multiple ``<main>`` Ho Sakte Hain?**
❌ Nahi. Generally ek page me sirf ek `<main>` hona chahiye.