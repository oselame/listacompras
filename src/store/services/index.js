import axios from 'axios';

export const services = {
    getImages: (product) => {
        const params = {
            searchType: 'image',
            lr: 'lang_pt',
            num: 1,
            key: 'AIzaSyDQuKLfIN84QJSRbEXxb7pYqIlcWTznzMM',
            cx: '012648785220306455351:hsaxt5uohgy',
            q: product,
        };
        // console.log(params);
        
        return axios.get('https://www.googleapis.com/customsearch/v1', { params })
            .then( resp => resp.data.items[0].link )
            .catch( err => err );

    }
}