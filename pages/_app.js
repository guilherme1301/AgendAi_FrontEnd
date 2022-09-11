import BasePage from '../components/pageComponents/basePage'
import '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <BasePage>
        <Component {...pageProps} />
    </BasePage>
  )
}

export default MyApp
