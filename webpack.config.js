// Import required modules
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set mode to "development" (use "production" for optimized builds)
  
  entry: "./source/index.js", // Entry point of the application
  
  output: {
    filename: "main.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory (absolute path)
    clean: true, // Cleans old files in "dist" before each build
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Generates HTML using this template
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i, // Matches CSS files
        use: ["style-loader", "css-loader"], // Injects styles and processes CSS
      },
      {
        test: /\.html$/i, // Matches HTML files
        loader: "html-loader", // Processes HTML for assets (like <img> tags)
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Matches image files
        type: "asset/resource", // Copies image files to the output folder
      },
    ],
  },
};