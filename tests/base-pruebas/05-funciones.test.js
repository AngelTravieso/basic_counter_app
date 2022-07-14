import { getUser, getUsuarioActivo } from '../../src/base-pruebas/base-pruebas/05-funciones';


describe('Pruenas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        
        expect( testUser ).toEqual( user );
        
    });


    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const name = 'Angel';

        const activeUser = getUsuarioActivo( name );
        
        expect( activeUser ).toEqual({
            uid: 'ABC567',
            username: name,
        });

    });
    

});
