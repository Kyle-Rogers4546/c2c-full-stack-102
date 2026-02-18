# Lesson 11: Work Session

## Before You Start: Sync Your Fork

Because you are working from a fork, make sure your fork (and your Codespace) are up to date.

1. In the GitHub website, open **your fork** of this repo.
2. Click **Sync fork** (or **Fetch upstream**) and complete the prompts.
3. In your Codespace terminal (inside VS Code), pull the latest changes:

```bash
git pull
```

---

## Setup (2 Terminals)

1. Open **two terminals** in VS Code.

2. In **Terminal 1 (Client)**, run:

```bash
cd /workspaces/c2c-full-stack-102/lesson-11/app/client
```

Create `client/.env`:

```bash
cat > .env <<'EOF'
REACT_APP_API_BASE_URL=http://localhost:3001
EOF
```

Start the client:

```bash
npm install
npm start
```

This launches the React app on **http://localhost:3000**.

3. In **Terminal 2 (Server)**, run:

```bash
cd /workspaces/c2c-full-stack-102/lesson-11/app/server
```

Create `server/.env` (update `DB_PASSWORD` and `DB_NAME` to match your MySQL setup):

```bash
cat > .env <<'EOF'
# Environment configuration for the Express server
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=password
DB_NAME=ecommerce
PORT=3001
EOF
```

Start the server:

```bash
npm install
npm run dev
```

This runs the Express server with `nodemon` on **http://localhost:3001**.

---

## Section 1.1: Homepage Work

Update your featured products list to pull from your product database. Fetch products and render a small subset (e.g., five) as “featured.”

Sample code:

```js
import React, { useEffect, useState } from "react";
import axios from "axios";
import productImg from "../images/productImg.png";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/ecommerce/products")
      .then((res) => {
        const list = Array.isArray(res.data) ? res.data : [];
        setProducts(list.slice(0, 5));
      })
      .catch(() => setProducts([]));
  }, []);

  return (
    <>
      <div id="gallery-head">
        <h1>Gallery</h1>
      </div>
      <div id="card-container">
        {products.map((product, i) => (
          <div className="featured-card" key={product.id ?? i}>
            <img className="img" src={product.image_url || productImg} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
```

---

## Section 1.2: Open Work Time

Take the next 18 minutes to work on any aspect of your site that isn’t complete. This could be general styling, or addition of more components or features. Look through each of your pages and try to find points of improvement.

---

## Section 2.1: Feedback Session

View classmates’ websites and provide actionable feedback. Use the shared Google doc to leave “glow” (what works well) and “grow” (areas for improvement) feedback, plus general comments.

---

## Section 2.2: Using the Feedback

Take the next 10 minutes to use the feedback provided by your classmates and continue working on your site. Ask questions if you need help.

---

## Exit Ticket

Complete the exit ticket in Canvas. Review-based questions for today.

---

## Extension (Homework)

Continue working on your site outside of class. Prepare for the final day where you will present your website.
