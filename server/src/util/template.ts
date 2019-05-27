// import 'bootstrap/dist/css/bootstrap.css';

export default ({ body , title, styles }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
      <link href="/public/css/bootstrap.min.css" rel="stylesheet">
      
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