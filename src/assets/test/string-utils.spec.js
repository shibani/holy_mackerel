import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { slugify } from '../js/utils/string-utils';

describe('slugify', () => {
    it('returns lowercase, hyphenated string to use as a restful url slug', () => {
        
        let name = "Five Leaves"
        expect(slugify(name)).to.equal("five-leaves")
    })
});