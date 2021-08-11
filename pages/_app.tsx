// Do not remove start line
import '../core/plugins';
import interceptors from "../core/helpers/axiosInterceptors";
import '../store';
// Do not remove end line

import '../styles/style.scss';
import type {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}
export default App
