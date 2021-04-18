// Elementos que se repetem em todas as páginas
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
