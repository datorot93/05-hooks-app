import { renderHook, act  } from '@testing-library/react-hooks';
import '../../hooks/useFetch';


describe('Pruebas en el useFetch', () => {
    test('Debe retornar la información por defecto', () => {
        
        const { result } = renderHook( useFetchch())

    });    
});
