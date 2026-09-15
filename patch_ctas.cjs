const fs = require('fs');

let content = fs.readFileSync('src/components/WebAEC.tsx', 'utf8');

// Replace all href="#contact" with href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")}
// We need to be careful to only replace it where it's an a tag string.
// Let's just do a global replace for `href="#contact"` to `href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")}`
// EXCEPT for the demo ternary operator, because adding an onClick handler inside a ternary operator string won't work in JSX.
// Wait, the ternary is: demo.title === ... ? ... : "#contact"
// If I globally replace `href="#contact"`, the ternary `#contact` won't match `href="#contact"`. It's a string `"#contact"`.

content = content.replace(/<a href="#contact" className="([^"]+)">/g, 
  '<a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="$1">');

fs.writeFileSync('src/components/WebAEC.tsx', content);
console.log('Successfully patched Pricing and Consulting CTAs.');
