import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../hooks/HookApp';


describe('Prueba en HookApp', () => {
    test('debe tomar una snapshoot de mi HookApp', () => {
        const wrapper = shallow( <HookApp /> );
        expect( wrapper ).toMatchSnapshot();

    })
    
})
