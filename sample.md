# Comprehensive Markdown Test File

This file contains all supported Markdown syntax elements to test the Markdown to HTML converter.

---

## Headers Test

Markdown supports six levels of headers:

# H1 - Main Title Header
## H2 - Section Header
### H3 - Subsection Header
#### H4 - Minor Heading
##### H5 - Small Heading
###### H6 - Smallest Heading

---

## Text Formatting Test

### Bold Text
This is **bold text** using double asterisks.
This is __bold text__ using double underscores.

### Italic Text
This is *italic text* using single asterisks.
This is _italic text_ using single underscores.

### Combined Formatting
This is ***bold and italic*** text.
You can also have **bold with *nested italic* inside**.
Or *italic with **nested bold** inside*.

### Strikethrough (if supported)
~~This text is struck through~~

---

## Links Test

### Basic Links
[Link to Google](https://www.google.com)
[Link to GitHub](https://github.com)

### Links with Titles
[Link with title](https://www.example.com "This is a title attribute")

### URL Direct Display
<https://www.example.com>

### Reference Links
[This is a reference link][1]
[Another reference][ref-link]

[1]: https://www.example.com "Example Site"
[ref-link]: https://github.com "GitHub Homepage"

---

## Lists Test

### Unordered Lists

Simple unordered list:
- First item
- Second item
- Third item
- Fourth item

Alternative syntax with asterisks:
* Item A
* Item B
* Item C

Alternative syntax with plus:
+ Item X
+ Item Y
+ Item Z

### Ordered Lists

Simple numbered list:
1. First item
2. Second item
3. Third item
4. Fourth item

List with sub-paragraphs:
1. First item with more content
   
   This is a continuation paragraph.

2. Second item
3. Third item

---

## Nested Lists Test

### Complex Nested Structure

1. First top-level item
   - Nested unordered item
   - Another nested item
     - Deep nested item level 3
     - Another deep item
       - Even deeper level 4
   - Back to level 2
2. Second top-level item
   1. Nested ordered item
   2. Another nested ordered
      - Mix of ordered and unordered
      - Another mixed item
3. Third top-level item
   - Mixed nesting
     1. Ordered inside unordered
     2. Second ordered item
        - Unordered inside ordered
        - Deep nesting test

### Real-World Example

**Shopping List:**
1. Groceries
   - Fruits
     - Apples
     - Bananas
     - Oranges
   - Vegetables
     - Carrots
     - Broccoli
   - Dairy
     - Milk
     - Cheese
2. Hardware Store
   - Tools
     - Hammer
     - Screwdriver
   - Materials
     - Wood
     - Nails

---

## Paragraphs Test

This is a simple paragraph. Markdown automatically wraps text into paragraph tags. Multiple sentences in the same paragraph will stay together.

This is a second paragraph. Paragraphs are separated by blank lines.

This paragraph has a  
hard line break using two spaces at the end.

This is another way to create paragraphs with continuous flow. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

---

## Code Test

### Inline Code
This is `inline code` in a sentence.
You can use `const`, `let`, or `var` for JavaScript variables.
File paths like `/home/user/file.txt` often use inline code.

### Code Blocks

JavaScript example:
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
    return true;
}

const user = "World";
greet(user);
```

Python example:
```python
def calculate_sum(a, b):
    """Calculate the sum of two numbers."""
    return a + b

result = calculate_sum(10, 20)
print(f"Result: {result}")
```

Generic code block without language:
```
This is a generic code block
It preserves formatting
  Including indentation
    And multiple levels
```

Indented code block (4 spaces):

    function example() {
        return "indented code block";
    }

---

## Blockquotes Test

### Simple Blockquote
> This is a blockquote.
> It can span multiple lines.
> Each line starts with a greater-than symbol.

### Nested Blockquotes
> This is the first level of quoting.
>
> > This is nested blockquote (level 2).
> >
> > > This is deeply nested (level 3).
>
> Back to first level.

### Blockquotes with Other Elements
> ### Header in Blockquote
> 
> This blockquote contains:
> - A list item
> - Another list item
> 
> And a paragraph with **bold** and *italic* text.
>
> ```
> Even code blocks work
> ```

---

## Horizontal Rules Test

Three or more hyphens:

---

Three or more asterisks:

***

Three or more underscores:

___

---

## Tables Test

### Simple Table
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1 Col 1 | Row 1 Col 2 | Row 1 Col 3 |
| Row 2 Col 1 | Row 2 Col 2 | Row 2 Col 3 |
| Row 3 Col 1 | Row 3 Col 2 | Row 3 Col 3 |

### Table with Alignment
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left text | Center text | Right text |
| A | B | C |
| 1 | 2 | 3 |

### Table with Formatting
| Feature | Status | Notes |
|---------|--------|-------|
| **Bold** | ✓ | `code` works too |
| *Italic* | ✓ | [Links](https://example.com) work |
| ~~Strike~~ | ? | Depends on parser |

---

## Images Test (if supported)

![Alt text for image](https://via.placeholder.com/150 "Image title")

![Small image](https://via.placeholder.com/50x50)

---

## Special Characters Test

### HTML Entities
&copy; Copyright symbol  
&trade; Trademark symbol  
&reg; Registered symbol  
&lt; Less than  
&gt; Greater than  
&amp; Ampersand  

### Special Markdown Characters
Escaping special characters: \* \_ \{ \} \[ \] \( \) \# \+ \- \. \!

### Unicode Characters
Emoji: 😀 🎉 🚀 ⭐ 💻 ✅ ❌ 📝  
Symbols: → ← ↑ ↓ ✓ ✗ ★ ☆  
Math: ± × ÷ ≈ ≠ ≤ ≥  

---

## Edge Cases Test

### Very Long Line
This is a very long line of text that should test how the renderer handles word wrapping and overflow. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Very Long Word
Thisisaverylongwordwithoutanyspacestotesthowtherendererhandlesoverflowandwordbreakingbehaviorwhenlongcontinuousstringsarepresented.

### Empty Elements

Empty paragraph above.

### Multiple Consecutive Blank Lines




Should normalize to single spacing.

### Mixed Content in Lists
1. Item with **bold** and *italic*
2. Item with `inline code` and [link](https://example.com)
3. Item with multiple elements:
   - Nested list
   - With **formatting**
   - And `code`

---

## Complex Combined Example

### Project Documentation

**Project Name:** Markdown Test Suite  
**Version:** 1.0.0  
**Author:** Test Suite Generator  

#### Description
This project demonstrates *all* the **Markdown features** that are commonly supported. It includes:

1. Headers (all 6 levels)
2. Text formatting
   - Bold
   - Italic
   - Combined
3. Lists (ordered, unordered, nested)
4. Code blocks with syntax highlighting
5. And much more!

#### Installation

To install, run:
```bash
npm install markdown-test-suite
# or
yarn add markdown-test-suite
```

#### Usage

Basic usage example:
```javascript
const MarkdownParser = require('markdown-test-suite');

const parser = new MarkdownParser();
const html = parser.parse('# Hello World');
console.log(html);
```

#### Features Comparison

| Feature | Supported | Notes |
|---------|:---------:|-------|
| Headers | ✓ | All 6 levels |
| Lists | ✓ | Nested support |
| Code | ✓ | Syntax highlighting |
| Tables | ✓ | With alignment |
| Images | ✓ | Alt text support |

#### Contributing

> **Note:** This is an example blockquote in documentation.
>
> Please read the [contributing guidelines](https://example.com) before submitting pull requests.

#### License

MIT License - see [LICENSE](LICENSE) file for details.

---

## End of Test File

This comprehensive test file covers:
- ✅ All header levels (H1-H6)
- ✅ Bold and italic text formatting
- ✅ Links (basic, titled, reference)
- ✅ Ordered and unordered lists
- ✅ Deeply nested lists
- ✅ Paragraphs with various formatting
- ✅ Inline code and code blocks
- ✅ Blockquotes (simple and nested)
- ✅ Horizontal rules
- ✅ Tables with alignment
- ✅ Special characters and unicode
- ✅ Edge cases and stress tests

**Total sections:** 15+  
**Total lines:** 400+  
**Complexity:** Comprehensive
