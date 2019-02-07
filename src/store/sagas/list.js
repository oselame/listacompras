import { call, put } from 'redux-saga/effects';

import { services } from '../services';
import { Creators as ListActions } from '../actions/list';

const genericImage = 'https://phadvocates.org/wp-content/themes/cardinal/images/default-thumb.png';

export function+ getImageRequest(action) {
    try {
        const img = yield call(services.getImages, action.product.product);
        yield put(ListActions.getImageSuccess(action.product, img));
    } catch (error) {
        console.log(error);
        yield put(ListActions.getImageFailure(action.product, genericImage));
    }
}