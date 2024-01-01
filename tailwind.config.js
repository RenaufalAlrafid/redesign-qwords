import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#ff6d0b",

                    secondary: "#000000",

                    accent: "#fff8f3",

                    neutral: "#ffffff",

                    "base-100": "#e5e7eb",

                    info: "#38bdf8",

                    success: "#84cc16",

                    warning: "#f97316",

                    error: "#f43f5e",
                },
            },
        ],
    },
    plugins: [forms, require("daisyui")],
};
