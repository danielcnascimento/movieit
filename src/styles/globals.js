import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

:root {
  --white: #ffffff;
  --red:#d13330;
  --text: #fafafa;
  --gray-line: #404040;
  --dark-line: #292B28;
  --background: #212121;
  --dark-shade-0: #0e0e0e;
  --dark-shade-1: #17161c;
  --dark-shade-2: #323231;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
}

body,
input,
textarea,
button {
  font: 400 1rem "Inter", sans-serif; /* weight, size, font-family*/
}

button {
  cursor: pointer;
}

a,
ul,
li {
  color: inherit;
  text-decoration: none;
  list-style-type: none;
}

`;
