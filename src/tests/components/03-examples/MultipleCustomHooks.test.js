import { shallow } from "enzyme";
import React from "react";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";


describe('Pruenas en <MultipleCustomHooks />', () => {
    
    test('Debe mostrarse correctamente (snapshot)', () => {
        const wrapper = shallow( <MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
        
    });
});
