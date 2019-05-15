

export default ({ body , title, styles }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        ${styles}
        <style>
          body {
            padding : 0;
            margin : 0;
          }
        </style>
        </head>
        
        <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};