import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';


describe('Pruebas en 08-imp-exp', () => {
    
    test('getById debe de retornar un Heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });


    test('getById debe de retornar undefined si no existe el ID', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();        

    });


    // Tarea:
    // getHeroesByOwner
    test('getHeroesByOwner debe de retornar heroes de DC', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);


        // Esta es la menera ideal, por si se carga más data evaluar de manera dinámica

        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        

    });


    test('getHeroesByOwner debe de retornar heroes de Marvel', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        
        expect( heroes ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

    });

});
