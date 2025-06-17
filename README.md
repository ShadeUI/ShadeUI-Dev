# ❖ ShadeUI

**ShadeUI** An A.I powered component library and code distribution platform designed to streamline your development workflow.

> This is a **beta release** — we’ve currently shipped only the `Button` `Input`, `Badge`, `Input` components. Other components are on the way.

---

## 🚀 Features

- Fast and minimal components
- Built with Tailwind CSS
- Designed for extensibility and customization
- Storybook and test-ready
- Tree-shakeable and lightweight

---

# ⚙ Installation

ShadeUI is easy to integrate into your react existing project.

## ✅ Prerequisites

Before installing ShadeUI, make sure your project has the following:

- **React 18+**
- **TypeScript**
- **Tailwind CSS 3+**
- **PostCSS**

> If you haven't set up Tailwind CSS yet, check out the official [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation).



## 🏗 Install the ShadeUI package

Install the ShadeUI package via npm:

```bash
npm install @shadeui/ui
# or
yarn add @shadeui/ui
```

## 🎨 Add ShadeUI styles
Make sure to import the ShadeUI base styles inside your global CSS:

```bash
@import '@shadeui/ui/styles';
```
This ensures ShadeUI components have access to design tokens, themes, and core styles.

## 💻 Usage

Using ShadeUI components in your React project is simple.

##  📥 Import Components

You can import any component directly from `@shadeui/ui`:

```javascript
import { Button, Input, Badge } from '@shadeui/ui';
```

## 📄 Example Usage
```javascript
import { Button } from '@shadeui/ui';

export default function Example() {
  return (
    <Button color="blue" variant="flat">
      Click Me
    </Button>
  );
}
```

## 🚀 Done!
You’re ready to start building with ShadeUI components.

Check out the Components section to start using fully designed, themeable components right out of the box.

