# π Table Highlight

- νμ΄λΈ(Table)μμ κ²μμ΄(Search Text)λ₯Ό μ°Ύμ κ°μ‘° νμν©λλ€.
- Locate and highlight the search term in the table.
![Example](./examples/img/example.gif)

## π·οΈ κΈ°λ₯(Function)

- [Row Highlighting](#Row-Highlighting)
- [Text Highlighting](#Text-Highlighting)

## π‘ μ¬μ© μμ (Usage Example)

### μμ (Example)

```html
<input type="search" placeholder="Search..." title="search" oninput="rowHighlight(this.value,'#TableBody','tr','#0AA1DD','#FFF')">
```

### λ§€κ° λ³μ μ€λͺ(Parameter Description)

```html
<input type="search" placeholder="Search..." title="search" oninput="rowHighlight({0},{1},{2},{3},{4})">
```

- {0} : HTML `<input>` Tag Value(Search Text)
- {1} : HTML `<table>` Or `<tbody>` Tag ID
- {2} : HTML `<tr>` Tag
- {3} : Background Color(Hex color codes)
- {4} : Foreground Color(Hex color codes)

### Row Highlighting

- λ€μ μμ λ₯Ό [μμ (Example)](#Example)λ₯Ό μ°Έκ³ νμΈμ.

### Text Highlighting

- μ°ΎμΌλ €λ κ°μ `<td>` νκ·Έ μ `<div>` νκ·Έμ ν¬ν¨ν΄μΌν©λλ€.
- To use this feature, you must have the value you want to find in the `<div>` tag.

```html
    <tr>
        <td>
            <div>Rudyard Vaughn</div>
        </td>
        <td>
            <div>(127) 180-6271</div>
        </td>
        <td>
            <div>sapien@google.ca</div>
        </td>
        <td>
            <div>539-5771 Aliquet Av.</div>
        </td>
        <td>
            <div>Connacht</div>
        </td>
        <td>
            <div>Indonesia</div>
        </td>
    </tr>
```

### π λΈλΌμ°μ  μ§μ(Browser Support)

|Chrome|Microsoft Edge|Firefox|
|:-:|:-:|:-:|
|![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=GoogleChrome&logoColor=white)|![MicrosoftEdge](https://img.shields.io/badge/Edge-0078D7?style=flat-square&logo=MicrosoftEdge&logoColor=white)|![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=flat-square&logo=FirefoxBrowser&logoColor=white)
|`Latest` β|`Latest` β|`Latest` β|

## π μ λ³΄(Information)

### ποΈ μ μ(Author)

- [yeong-hyeon-kim](https://github.com/yeong-hyeon-kim) β codechemi@gmail.com

### βοΈ λΌμ΄μΌμ€(License)

- λ€μ λΌμ΄μΌμ€λ₯Ό μ€μνλ©° [License](./License)μμ μμΈν μ λ³΄λ₯Ό νμΈν  μ μμ΅λλ€.

- You comply with the following licenses and can find more information in the [License](./License)

## π λΉκ³ (Remark)

- λ¬Έμμ¬ν­(Issues)μ [μ΄κ³³](https://github.com/yeong-hyeon-kim/Table-Highlight/issues)μ μ°Έκ³ ν΄μ£ΌμΈμ.
