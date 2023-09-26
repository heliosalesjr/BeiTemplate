# Boilerplate for a new React project using Vite + Tailwind

## How did I get here?

1. npm create vite@latest

2. npm install

3. Install Tailwind CSS with Vite:

    3.1  npm install -D tailwindcss postcss autoprefixer

    3.2 npx tailwindcss init -p

    3.3 Configuring taliwind.consig.js with this:

         /** @type {import('tailwindcss').Config} */
            export default {
                content: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
                ],
                theme: {
                    extend: {},
                },
                plugins: [],
            }
        

    4. Adding Tailwind to the main css file:

        4.1: 
            @tailwind base;
            @tailwind components;
            @tailwind utilities; 

    5. Building and testing with a couple classes to a component:

        5.1:
           
                    <h1 className="text-3xl font-bold underline">
                    Hello world!
                    </h1>
   

    6. DaisyUI:

        - npm i -D daisyui@latest

        - Go to tailwind.config.js and:

    
                plugins: [require("daisyui")],
            

    
        - Go to tailwind.config.js and:
           
           
                daisyui:
                    themes: ["business", "dark", "forest", "lofi", "synthwave", "retro", "cyberpunk", "halloween", "valentine", "garden", "christmas"],
            

Now just test some DaisyUI classes and you should be good to go!