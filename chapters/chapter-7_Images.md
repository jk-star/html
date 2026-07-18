# 📘 Chapter 7 – HTML Images ( img Tag )

## Q1. Image Tag Kya Hota Hai?
- `<img>` tag webpage par image display karne ke liye use hota hai.

- Ye ek Void (Empty) Element hai.

- Iska closing tag nahi hota.

**Syntax**

`<img src="image.jpg" alt="Car Image">`

## Q2. src Attribute Kya Hai?

- src ka full form hai: **Source**

- Ye browser ko batata hai ki image kahan se load karni hai.

**Example:**

`<img src="car.jpg" alt="Car">`

## Q3. alt Attribute Kya Hai?

- alt ka full form hai: **Alternative Text**

- Agar image load na ho ya user screen reader use kar raha ho, to alt text ka use hota hai.

**Example**

`<img src="car.jpg" alt="Red Sports Car">`

**alt Kyu Important Hai?**

**1. Image load fail ho jaye**

- Image na aaye to alternative text dikhega.

**2. Accessibility**

- Jo users screen reader use karte hain, unke liye screen reader alt text padhkar image explain karta hai.

**3. SEO**

- Google image ko dekh nahi sakta.

- Wo alt text padhkar samajhta hai ki image kis baare me hai.

- Isliye SEO ke liye alt important hai.

## Interview Question

## Q4. Kya alt attribute mandatory hai?

- Technically browser bina alt ke bhi image dikha dega.

- Lekin best practice aur accessibility ke hisaab se alt dena chahiye.

## $Q5. Width aur Height

- Image ka size set karne ke liye.

```<img src="car.jpg" width="300" height="200" alt="Car">```

## Q6. Relative Image Path

- Agar image project ke andar hai.

**Example**

`<img src="images/car.jpg" alt="Car">`

## Q7. Absolute Image Path**

- Internet se image load karna.

`<img src="https://example.com/car.jpg" alt="Car">`

## Interview Difference

| Relative Path         | Absolute Path          |
| --------------------- | ---------------------- |
| Project ke andar      | Internet URL           |
| Fast                  | Network par depend     |
| Commonly use hota hai | External image ke liye |

## Q8. Image Formats**

**JPEG (.jpg)**

    ✅ Photos ke liye best.

    ✅ Small size.

**PNG (.png)**

    ✅ Transparent background support.

    ✅ Logo ke liye useful.

**SVG (.svg)**

    ✅ Vector image.

    ✅ Zoom karne par quality kharab nahi hoti.

    ✅ Logo aur icons ke liye best.

**WebP (.webp)**

    ✅ Modern format.

    ✅Same quality me size kam hota hai.

    ✅ Performance ke liye recommended.

## Interview Question

**Q.1 Logo ke liye kaunsa format best hai?**

- SVG (agar available ho), warna PNG.

**Q.2 Photo ke liye?**

- JPEG ya WebP.

**Q3. Lazy Loading**

- Modern websites me use hota hai.

`<img src="car.jpg" loading="lazy" alt="Car">`

**Kya Hota Hai?**

- Image tabhi load hoti hai jab user uske paas scroll karta hai.

**Benefits**
- Faster page load
- Kam internet usage
- Better performance

**Q10. figure aur figcaption**
- Image ke saath caption dikhane ke liye.

<code><pre>
&lt;figure&gt; 
&lt;img src="car.jpg" alt="BMW"&gt; 
&lt;figcaption&gt; BMW Car &lt;figcaption&gt; 
&lt;/figure&gt; 
</pre></code>