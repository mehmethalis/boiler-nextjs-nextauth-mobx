// Do not remove start line
import '../core/plugins';
import interceptors from "../core/helpers/axiosInterceptors";
import '../store';
// Do not remove end line
import '../styles/style.scss';
import type {AppProps} from 'next/app';
import {stores, StoreWrap} from "../store";
import {observer} from "mobx-react-lite";

const App = ({Component, pageProps}: AppProps) => {
    return <StoreWrap store={{...stores}}> <Component {...pageProps} /></StoreWrap>
}
export default observer(App)
