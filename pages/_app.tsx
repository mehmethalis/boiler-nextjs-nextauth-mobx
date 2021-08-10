import '../core/plugins';

import '../styles/style.scss';
import type {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}
export default App
