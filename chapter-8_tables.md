**📘 Chapter 8 – HTML Tables (Part 1)**

**Q.1 HTML Table Kya Hoti Hai?**
- HTML Table ka use data ko rows aur columns ke format me display karne ke liye hota hai.

**Table Banane Ke Main Tags**

| Tag         | Purpose                |
| ----------- | ---------------------- |
| `<table>`   | Table create karta hai |
| `<tr>`      | Table Row              |
| `<th>`      | Table Heading          |
| `<td>`      | Table Data             |
| `<caption>` | Table ka title         |
| `<thead>`   | Header section         |
| `<tbody>`   | Body section           |
| `<tfoot>`   | Footer section         |


**Q2. ``<caption>`` Kya Hai?**
- Table ka title.

**Example**
<code><pre>
&lt;table&gt; 
&lt;caption&gt; Student List &lt;/caption&gt; 
&lt;/table&gt;
</pre></code>

**Q3. ``<thead>`` Kya Hai?**
- `<thead>` ka matlab hai: Table Header Section

- Iske andar table ki heading wali rows aati hain.

**Example**
<code><pre>
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt; Name &lt;/th&gt;
&lt;th&gt; Age &lt;/th&gt;
&lt;th&gt; City &lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
</pre></code>

**Q4. ``<tbody>`` Kya Hai?**
- `<tbody>` me actual data aata hai.

**Example**
<code><pre>
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt; Jyoti &lt;/td&gt;
&lt;td&gt; 28 &lt;/td&gt;
&lt;td&gt; lucknow &lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
</pre></code>

**Q3. ``<tfoot>`` Kya Hai?**

- Table ke footer ke liye.

**Mostly:**
- Total
- Grand Total
- Summary
- show karne ke liye.

**Example**
<code><pre>
&lt;tfoot&gt;
&lt;tr&gt;
&lt;td&gt; colspan="3"&gt; Total Employees : 50 &lt;/td&gt;
&lt;/tr&gt;
&lt;/tfoot&gt;
</pre></code>

**Interview Question**

**Agar `<thead>` aur `<tbody>` na use kare to?**

- Table phir bhi chalegi.
- Ye optional hain.
- Lekin best practice hai use karna.
- Benefits:
    - Code readable hota hai.
    - JavaScript se manipulate karna easy hota hai.
    - CSS apply karna easy hota hai.
    - Accessibility improve hoti hai.

**Q4. colspan**
- Ek cell ko multiple columns me merge karna.

**Example**
<code><pre>
&lt;table border="1" &gt;
&lt;tr&gt;
&lt;th&gt; colspan="3"&gt; Student Details &lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt; Name &lt;/th&gt;
&lt;th&gt; Age &lt;/th&gt;
&lt;th&gt; city &lt;/th&gt;
&lt;/tr&gt;
&lt;/table&gt;
</pre></code>

**Output**  
<table border="1">
<tr>
    <th colspan="3"> Student Details </th>
</tr>
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
</tr>
</table>

**Q5. rowspan**
- Ek cell ko multiple rows me merge karna.

**Example**
<code><pre>
&lt;table border="1" &gt;
&lt;tr&gt;
&lt;td&gt; rowspan="2"&gt; PHP &lt;/td&gt;
&lt;td&gt; CI3 &lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt; CI4 &lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
</pre></code>

**Output** 
<table border="1">
<tr>
    <td rowspan="2"> PHP </td>
    <td>CI3</td>
</tr>
<tr>
    <td>CI4</td>
</tr>
</table>

**Difference**
| Colspan      | Rowspan   |
| ------------ | --------- |
| Column merge | Row merge |
| Horizontal   | Vertical  |
