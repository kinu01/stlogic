import Loadable from 'react-loadable';
import PageLoading from 'components/PageLoading/PageLoading';

export default function PageLoadable(opts) {
    return Loadable(Object.assign({
        loading: PageLoading,
    }, opts));
}
