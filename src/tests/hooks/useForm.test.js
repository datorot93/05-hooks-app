import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'daniel',
        email: 'daniel@gmail.com'
    };    

    test('Debe regresar un formulario por defecto ', () => {
        // usar toEqual
        const { result } = renderHook( () => useForm(initialForm) );
        // console.log( result.current[0] );
        const [initialValue] = result.current;
        // console.log(initialValue);
        expect( initialValue ).toEqual(initialForm);
    });

    test('Debe cambiar el valor del formulario', () => {
        // Cambiar el name del initialForm
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alejandro'
                }
            });
        });
        
        const [ value ] = result.current;        
        expect( value ).toEqual({
            ...initialForm,
            name: 'Alejandro'
        });                

    });

    test('Debe re establecer el formulario con reset', () => {
        // Cambiar formulario y después reniciarlo.
        // Debe queddar igual que el initialState
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alejandro'
                }
            });

            reset();
        });
        
        const [ value ] = result.current;        
        expect( value ).toEqual(initialForm);    

    })
    
    
    
})
