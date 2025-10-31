
## Fonts & Tailwind CSS Utility Classes

### For **NeueMontreal** (accessed via `font-sans`)

**Font Weight Utilities:**
- `font-extralight` (200) — maps to PPNeueMontreal-Thin.otf
- `font-light` (300) — maps to PPNeueMontreal-Book.otf
- `font-medium` (500) — maps to PPNeueMontreal-Medium.otf
- `font-semibold` (600) — maps to PPNeueMontreal-SemiBolditalic.otf (italic style)
- `font-bold` (700) — maps to PPNeueMontreal-Bold.otf

**Font Style Utilities:**
- `italic` — maps to PPNeueMontreal-Italic.otf (400 weight) or PPNeueMontreal-SemiBolditalic.otf (600 weight)
- `not-italic` — uses normal styles

**Combined Usage Examples:**
```jsx
<span className="font-sans font-bold">Bold Montreal</span>
<span className="font-sans font-medium">Medium Montreal</span>
<span className="font-sans font-light">Light Montreal (Book)</span>
<span className="font-sans font-extralight">Thin Montreal</span>
<span className="font-sans italic">Italic Montreal (400 weight)</span>
<span className="font-sans font-semibold italic">SemiBold Italic Montreal</span>
```

***

### For **EditorialNew** (accessed via `font-serif`)

**Font Weight Utilities:**
- `font-thin` (100) — maps to PPEditorialNew-Ultralight.otf
- `font-medium` (500) — maps to PPEditorialNew-Regular.otf
- `font-extrabold` (800) — maps to PPEditorialNew-Ultrabold.otf

**Font Style Utilities:**
- `italic` — maps to italic variants at 100, 500, or 800 weights
- `not-italic` — uses normal styles

**Combined Usage Examples:**
```jsx
<span className="font-serif font-extrabold">Ultrabold Editorial</span>
<span className="font-serif font-medium">Regular Editorial</span>
<span className="font-serif font-thin">Ultralight Editorial</span>
<span className="font-serif font-extrabold italic">Ultrabold Italic Editorial</span>
<span className="font-serif font-medium italic">Italic Editorial</span>
<span className="font-serif font-thin italic">Ultralight Italic Editorial</span>
```

***

### **Important Notes:**

1. **Missing Weights:** You don't have font files for certain standard weights like `font-normal` (400) for NeueMontreal normal style, or `font-semibold` (600) for EditorialNew. If you try to use those classes, the browser will attempt to synthesize the weight, which may look incorrect or fall back to the nearest available weight.

2. **Weight Mapping:** The actual font weight you defined in your font object tells the browser which font file to load when that specific weight is requested via CSS [1][2][3].

3. **Combining Font-Family + Weight + Style:** Always combine:
    - Font-family class (`font-sans` or `font-serif`)
    - Font-weight class (`font-bold`, `font-medium`, etc.)
    - Font-style class (`italic` or `not-italic`)