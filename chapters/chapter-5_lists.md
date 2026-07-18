# 📘 Chapter 5 – HTML Lists

## HTML List Kya Hoti Hai?

- Jab hume multiple related items ko ek organized format me dikhana hota hai, tab 
List use karte hain.

**Example:**

- Shopping List
- Menu
- Categories
- Steps
- Features

**HTML me 3 types ki lists hoti hain.**

- Unordered List (``<ul>``)
- Ordered List (``<ol>``)
- Description List (``<dl>``)

## 1. Unordered List ( ul )

- Jab items ka order important nahi hota, tab ``<ul>`` use karte hain.

- Ye by default bullet points (•) dikhata hai.

**Syntax**
<code><pre>
&lt;ul&gt;
&lt;li&gt; HTML &lt;/li&gt;
&lt;li&gt; CSS &lt;/li&gt;
&lt;li&gt; JavaScript &lt;/li&gt;
&lt;/ul&gt;
</pre></code>

## 2. Ordered List ( ol )

- Jab items ka sequence important ho, tab ``<ol>`` use karte hain.

- Browser numbers automatically de deta hai.

**Example**
<code><pre>
&lt;ol&gt;
&lt;li&gt; HTML &lt;/li&gt;
&lt;li&gt; CSS &lt;/li&gt;
&lt;li&gt; JavaScript &lt;/li&gt;
&lt;/ol&gt;
</pre></code>

**``<ol>`` Attributes**

- **type** Numbering ka style change karta hai.

``<ol type="A">``

- **start** Number kahan se start karna hai.

<code><pre>
&lt;ol start="5"&gt;
&lt;li&gt; HTML &lt;/li&gt;
&lt;li&gt; CSS &lt;/li&gt;
&lt;/ol&gt;
</pre></code>

- **reversed** Reverse numbering.

<code><pre>
&lt;ol reversed&gt;
&lt;li&gt; HTML &lt;/li&gt;
&lt;li&gt; CSS &lt;/li&gt;
&lt;/ol&gt;
</pre></code>

## 3. Description List ( dl )

- Jab kisi term aur uski description dikhani ho.

- Ye dictionary ki tarah hoti hai.

**Tags**
- ``<dl>`` → Description List
- ``<dt>`` → Description Term
- ``<dd>`` → Description Definition

**Example**
<code><pre>
&lt;dl&gt;
  &lt;dt&gt; HTML &lt;/dt&gt;
  &lt;dd&gt; Markup Language &lt;/dd&gt;
  &lt;dt&gt; CSS &lt;/dt&gt;
  &lt;dd&gt; Styling Language &lt;/dd&gt;
&lt;/dl&gt;
</pre></code>
**Output**
<code><pre>
HTML
    Markup Language

CSS
    Styling Language
</pre></code>

**Nested List**

- Ek list ke andar dusri list.
<cdoe><pre>
&lt;ul&gt;
&lt;li&gt; Frontend 
&lt;ul&gt;
&lt;li&gt; HTML &lt;/li&gt;
&lt;li&gt; CSS &lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt; Backend &lt;/li&gt;
&lt;/ul&gt;
</pre></code>

**Output**
<code><pre>
• Frontend
    • HTML
    • CSS
• Backend
</pre></code>
