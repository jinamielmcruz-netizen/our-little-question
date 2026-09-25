# Proposal website — beginner guide

## Run it in Visual Studio Code

1. Open the `proposal-site` folder in VS Code.
2. Open `index.html` and double-click it, or install the **Live Server** VS Code extension.
3. With Live Server installed, right-click `index.html` and choose **Open with Live Server**. It will open the site in your browser.
4. Edit the text in `index.html`, save (`Ctrl + S`), then refresh the browser to see the change.

Every line in the three code files has a nearby comment explaining its purpose. Start with the comment lines that begin with `<!--` in HTML, `/*` in CSS, and `//` in JavaScript.

## Add a background photograph later

1. Put your image in this folder and name it `background.jpg`.
2. In `style.css`, find the `background:` line inside `body`.
3. Replace it with:

```css
background: linear-gradient(rgba(255, 217, 229, 0.55), rgba(255, 217, 229, 0.55)), url("background.jpg") center / cover fixed;
```

The translucent pink layer keeps the writing readable over the photo.

## Publish it free with GitHub Pages

1. Create a GitHub account at [github.com](https://github.com), if needed.
2. Click the **+** menu in the upper-right, choose **New repository**, name it something like `our-little-question`, choose **Public**, then click **Create repository**.
3. On the new repository page, click **Add file** → **Upload files**.
4. Drag in `index.html`, `style.css`, and `script.js` (plus `background.jpg` if you added it). Do **not** upload the outer folder if GitHub nests the files one level down.
5. Click **Commit changes**.
6. Open **Settings** → **Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then click **Save**.
7. Wait a minute, refresh the Pages screen, and GitHub will show your public link. It usually looks like `https://YOUR-USERNAME.github.io/our-little-question/`.

Before sharing it, test the link on your phone. Keep the GitHub repository public while using the free GitHub Pages option.

## Easy personal touches

- Change `my favorite person` and all the message text in `index.html`.
- Change `--pink` and `--dark-pink` near the top of `style.css`.
- Change the final `Now look behind you...` line to reveal the next part of your surprise.
