import BasePage from '../components/pages/basePage'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <BasePage>
        <Component {...pageProps} />
    </BasePage>
  )
}

export default MyApp
