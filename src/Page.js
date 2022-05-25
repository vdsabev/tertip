import html from './html.js';

export default function Page({ metadata, posts }) {
  return html`
    <html>
      <head>
        <title>${metadata.title} | ${metadata.subtitle}</title>

        <style>
          html, body {
            margin: 0;
          }

          html {
            font-size: 62.5%;
          }

          main {
            width: 100%;
            max-width: 96em;
            margin: 0 auto;
          }

          article h1,
          article a {
            font-size: 2.4rem;
          }
        </style>
      </head>

      <body>
        <main>
          ${posts.map(Post)}
        </main>
      </body>
    </html>
  `;
}

function Post(post) {
  return html`
    <article>
      <h1>${post.title}</h1>
      <img src=${post.image} />
      <${ExternalLink} src=${post.url}>${post.url}<//>
    </article>
  `;
}

function ExternalLink({ children, ...props }) {
  return html`
    <a ...${props} rel="noopener noreferrer" target="_blank">
      ${children}
    </a>
  `;
}
