import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true
  },
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    historyApiFallback: true,
    port: 5173,
    open: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  }
};