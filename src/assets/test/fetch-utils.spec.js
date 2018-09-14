import chai from 'chai';
import { expect, assert, should } from 'chai';
import chaiFetchMock from 'chai-fetch-mock';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import * as apis from '../js/utils/fetch-utils';

chai.use(chaiFetchMock);

describe('fetchRestaurantsApi calls the expected URL', () => {
    
    beforeEach(() => {
        const restaurantsUrl = 'http://www.foo.com';
        fetchMock.get(restaurantsUrl, {})
    })
 
    it('calls fetch', () => {
        const expectedUrl = 'http://www.foo.com'; 
        return apis.fetchRestaurantsApi(expectedUrl).then(() => {
        expect(fetchMock).route(expectedUrl).to.have.been.called;
        });
    });

    afterEach(() => {
        fetchMock.restore();
    })
});

describe('postToRestaurantsApi calls the expected URL', () => {
    
    beforeEach(() => {
        const restaurantsUrl = 'http://www.bar.com';
        fetchMock.post(restaurantsUrl, {})
    })
 
    it('calls fetch', () => {
        const expectedUrl = 'http://www.bar.com'; 
        return apis.postToRestaurantsApi(expectedUrl).then(() => {
        expect(fetchMock).route(expectedUrl).to.have.been.called;
        });
    });

    afterEach(() => {
        fetchMock.restore();
    })
});

describe('postToRestaurantsApi', () => {
    
    beforeEach(() => {
        const restaurantsUrl = 'http://www.bar.com';
        fetchMock.post(restaurantsUrl, {})
    })
 
    it('calls fetch', () => {
        const expectedUrl = 'http://www.bar.com'; 
        return apis.postToRestaurantsApi(expectedUrl).then(() => {
        expect(fetchMock).route(expectedUrl).to.have.been.called;
        });
    });

    afterEach(() => {
        fetchMock.restore();
    })
});