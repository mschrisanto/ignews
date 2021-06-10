import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Provider as NextAuthProvider } from 'next-auth/client'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
    <Header /> { /* componente referente ao cabeçalho, importado no arquivo _app pois estará em todas as paginas */ }
    <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
