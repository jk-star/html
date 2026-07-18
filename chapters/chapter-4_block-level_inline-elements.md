# 📘 Chapter 4 – Block Level vs Inline Elements

## Q1. Block Level Element Kya Hota Hai?
- Block-level element hamesha new line se start hota hai aur by default parent ki poori available width occupy karta hai.
- Dhyan rahe: Hum aam taur par "full width" bol dete hain, lekin technically ye parent container ki available width hoti hai.

**Example**

```<div>Hello</div>```

```<div>World</div>```

**Common Block Elements**
<code><pre>
&lt;div&gt;
&lt;p&gt;
&lt;h1&gt; to &lt;h6&gt;
&lt;section&gt;
&lt;article&gt;
&lt;header&gt;
&lt;footer&gt;
&lt;nav&gt;
&lt;main&gt;
&lt;form&gt;
&lt;ul&gt;
&lt;ol&gt;
&lt;li&gt;
</pre></code>

**Properties**

✅ New line se start hota hai.

✅ Parent ki available width leta hai.

✅ Width aur Height easily set kar sakte hain.

✅ Margin aur Padding sab directions me achhe se work karte hain.

## Q2. Inline Element Kya Hota Hai?
- Inline element new line se start nahi hota.

- Ye sirf content jitni width leta hai.

**Example**

``<span>Hello</span>``

``<span>World</span>``

**Common Inline Elements**
<code><pre>
&lt;span&gt;
&lt;a&gt;
&lt;strong&gt;
&lt;b&gt;
&lt;em&gt;
&lt;i&gt;
&lt;label&gt;
&lt;small&gt;
&lt;sup&gt;
&lt;sub&gt;
</pre></code>

**Properties**

✅ Same line me rehta hai.

✅ Sirf content jitni width leta hai.

❌ width aur height normally apply nahi hote.

## Q3. display:inline-block Kya Hota Hai?

- Ye inline aur block dono ke features deta hai.

**Features**

✅ Same line me rehta hai.

✅ Width de sakte ho.

✅ Height de sakte ho.

**Example**
<code><pre>
.box{
    display:inline-block;
    width:200px;
    height:100px;
}
</pre></code>

## Interview Question

**Difference Between Block, Inline, Inline-block**

| Feature   | Block                     | Inline        | Inline-block               |
| --------- | ------------------------- | ------------- | -------------------------- |
| New Line  | ✅                         | ❌             | ❌                          |
| Width     | Parent ki available width | Content width | Custom width de sakte hain |
| Height    | ✅                         | ❌             | ✅                          |
| Width set | ✅                         | ❌             | ✅                          |


**Q4. div vs span**
| `<div>`                   | `<span>`       |
| ------------------------- | -------------- |
| Block element             | Inline element |
| New line                  | Same line      |
| Parent ki available width | Content width  |
| Layout                    | Text styling   |


**Q5. Kya Inline Element ke Andar Block Element Aa Sakta Hai?**
- Generally, nahi.

**Example:**

``<span>``

``<div>Hello</div>``

``</span>``
- Ye valid structure nahi maana jata.

**Q6. Kya Block Element ke Andar Inline Element Aa Sakta Hai?**
- Ha

``<div>``

``<span>``Hello``</span>``

``</div>``