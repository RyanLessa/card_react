"use client";

import './layout.css';

export default function WhatIWant({children}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
          {children}
      </body>
    </html>
  )
}