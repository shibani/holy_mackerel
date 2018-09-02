import chai from 'chai';
import { expect, assert, should } from 'chai';
import chaiFetchMock from 'chai-fetch-mock';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import { fetchRestaurantsApi } from '../js/utils/fetch-utils';

chai.use(chaiFetchMock);

describe('fetchRestaurantsApi', () => {
    
    beforeEach(() => {
        const restaurantsUrl = 'http://www.foo.com';
        fetchMock.get(restaurantsUrl, {})
    })
 
    it('calls fetch', () => {
        const expectedUrl = 'http://www.foo.com'; 
        return fetchRestaurantsApi(expectedUrl).then(() => {
        expect(fetchMock).route(expectedUrl).to.have.been.called;
        });
    });

    afterEach(() => {
        fetchMock.restore();
    })
});