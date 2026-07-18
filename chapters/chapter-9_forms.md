# 📘 Chapter 9 – HTML Forms

## Q1. HTML Form Kya Hota Hai?
- HTML Form ka use user se data collect karne ke liye hota hai.

**Example:**

- Login Form
- Registration Form
- Contact Form
- Search Box
- Feedback Form

## Q2. form Tag

- Ye form ka container hota hai.
- Saare input fields isi ke andar hote hain.

`<form>`

`</form>`

## Q3. Basic Form
<code><pre>
&lt;form&gt;
&lt;label&gt; Name &lt;/label&gt;
&lt;input type="text"&gt;
&lt;button&gt; Submit &lt;/button&gt;
&lt;/form&gt;
</pre></code>

## Q4. action Attribute
- Ye batata hai ki form submit hone ke baad data kahan bhejna hai.

**Example**

`<form action="save.php">`

## Q5. method Attribute
- Ye batata hai ki data kaise send hoga.
- 2 methods hoti hain - GET, POST

## Q6. label Tag
- Ye input ka naam dikhata hai.
`<label> Email </label>`

**Label Kyu Use Karte Hain?**
- User ko pata chale field kisliye hai.
- Accessibility improve hoti hai.
- Label par click karne se input focus ho sakta hai (jab for aur id ka use ho).

## Q7. input Tag
- Input user se data leta hai.
`<input type="text">`

## Q8. name Attribute
`<input type="text" name="username">`
- Server name ke through data receive karta hai.
- $_POST['username']

## Q9. value Attribute
- Default value dene ke liye.

``<input type="text" value="Jyoti">``

## Q10. Difference between GET vs POST

| GET                   | POST                       |
| --------------------- | -------------------------- |
| URL me data           | Body me data               |
| Less Secure           | More Secure                |
| Bookmark ho sakta hai | Bookmark nahi hota         |
| Search ke liye        | Login/Register ke liye     |
| Data size limited     | Large data bhej sakte hain |

## Q11. Input Types

| Input Type       | Purpose                | Example                                    |
| ---------------- | ---------------------- | ------------------------------------------ |
| `text`           | Single line text input | Name                                       |
| `password`       | Hidden password field  | Password                                   |
| `email`          | Email validation       | [abc@gmail.com](mailto:abc@gmail.com)      |
| `number`         | Numeric value          | Age                                        |
| `tel`            | Mobile number          | +91 9876543210                             |
| `url`            | Website URL            | [https://example.com](https://example.com) |
| `search`         | Search box             | Search products                            |
| `date`           | Select date            | DOB                                        |
| `time`           | Select time            | Meeting Time                               |
| `datetime-local` | Date & Time together   | Appointment                                |
| `month`          | Select month           | Birth Month                                |
| `week`           | Select week            | Project Week                               |
| `color`          | Color picker           | Theme Color                                |
| `range`          | Slider input           | Volume                                     |
| `checkbox`       | Multiple selection     | Skills                                     |
| `radio`          | Single selection       | Gender                                     |
| `file`           | Upload file            | Resume                                     |
| `image`          | Image as submit button | Image Button                               |
| `hidden`         | Hidden data            | User ID                                    |
| `submit`         | Submit form            | Submit                                     |
| `reset`          | Reset form             | Reset                                      |
| `button`         | Custom button          | Click Me                                   |
