import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import { Provider } from 'react-redux';
import { store } from '../store/store.ts';

export default function Root() {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
        </Provider>
    );
}