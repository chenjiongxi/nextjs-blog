import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// 只有在_app.js文件中才能使用全局css文件