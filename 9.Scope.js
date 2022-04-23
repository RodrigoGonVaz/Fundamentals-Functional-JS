/*
    - Scope
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global:
    - Global variables are those declared outside of a block
    - Local variables are those declared inside of a block
*/

(function () {
    // typeof describe === 'function' - with two arguments ('string' and callback function)
    describe('Scope Exercises', function () {
        let ACTUAL;

        //This resets the value of ACTUAL (to null) before each test is run.
        beforeEach(function () {
            ACTUAL = nulL;
        });

        // typeof it === 'function' - with two arguments ('string of what it is testing' and callback function)
        // it is a inner function of describe function (en su bloque)
        it('a function has access to its own local scope variable', function(){
            let fn = function () { 
                let name = 'inner';
                ACTUAL = name;
            };
            fn();
            expect(ACTUAL === 'inner').to.be.true; //retunr: {to: {be: {'true': {}}}}
        });

        it('inputs to a function are treated as local scope variables', function(){
            let fn = function (name) {
                ACTUAL = name;
            };
            fn('inner');
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'inner' / retunr: {to: {be: {'true': {}}}}
        });

        it('block scope can be created with let', function () {
            var fn = function (){
                var where = 'outer'
                {
                    // if let is var where = 'inner' / ACTUAL === 'inner' / retunr: {to: {be: {'true': {}}}}
                    let where = 'inner'
                }
                ACTUAL = where
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'outer' / retunr: {to: {be: {'true': {}}}}
        });

        it('a function has access to the variables contained within the same scope that function was created in', function (){
            var name = 'outer';
            var fn = function (){
                ACTUAL = name;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'outer' / retunr: {to: {be: {'true': {}}}}
        });

        it('a function local scope variables are not available anywhere outside that function', function(){
            let firstFn = function(){
                let localToFirstFn = 'inner';
            };
            firstFn();
            expect(function(){
                ACTUAL = localToFirstFn;
            }).to.throw(); //throw an error / no access to localToFirstFn / ACTUAL is null
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'null' / retunr: {to: {be: {'true': {}}}} / line:11
        });
        
        it('a function local scope variables are not available anywhere outside that function, regardless of the context it is called in', function(){
            var firstFn = function(){
                var localToFirstFn = 'first';
                // Although false, it might seem reasonable to think that the secondFn (which mentions the localToFirstFn variable), should have access to the localToFirstFn variable, since it is being called here from within the scope where that variable is declared.
                secondFn();
            };
            var secondFn = function (){
                ACTUAL = localToFirstFn; // localToFirstFn is in another scope
            };
            expect(function (){
                // of course, calling the secondFn should throw an error in this case, since secondFn does not have access to the localToFirstFn variable
                secondFn();
            }).to.throw(); //throw an error / no access to localToFirstFn / ACTUAL is null
            expect(function (){
                // in addition, calling the firstFn (which in turn calls the secondFn) should also throw, sice it the calling context of secondFn has no influence over its scope access rules.
                firstFn();
            }).to.throw(); //throw an error / no access to localToFirstFn / ACTUAL is null 
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'null' / retunr: {to: {be: {'true': {}}}} / line:11
        });

        it('if an inner and outer variable share the same name, and the name is referenced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope variables inaccassible from anywhere within the inner function block', function() {
            var sameName = 'outer';
            var fn = function (){
                var sameName = 'inner';
                ACTUAL = sameName;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'inner' / retunr: {to: {be: {'true': {}}}}
        });

        it('if an inner and outer variable share the same name, and the name, and the name is referenced in the outer scope, the inner scope, the outer value binding will be used', function() {
            var sameName = 'outer';
            var fn = function () {
                var sameName = 'inner';
            };
            fn();
            ACTUAL = sameName;
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'outer' / retunr: {to: {be: {'true': {}}}}
        })

        it('a new variable scope is created for every call to a function, as exeplified with a counter', function() {
            var fn = function () {
                //the `||` symbol here is being used to set a default value for innerCounter. If innerCounter already contains a truthy value, then the value in that variable will be unchanged. If it is falsey however (such as if it were completely uninitialized), then this line will set it to the default value of 10.
                var innerCounter = innerCounter || 10;
                innerCounter = innerCounter + 1;
                ACTUAL = innerCounter;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === '11' / retunr: {to: {be: {'true': {}}}}
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === '11' / retunr: {to: {be: {'true': {}}}} // every time you call a function a brand new scope is created.
        });

        it('a new variable scope is created for each call to a function, as exeplified with uninitialized string variables', function () {
            //this  is a longer form of the same observation as above, using strings instead of numbers.
            var fn = function (){
                var localVariable;
                if (localVariable === undefined) {
                    //the variable will be initialized for the first time during this call to fn
                    ACTUAL = 'alpha';
                } else if (localVariable === 'initialized'){
                    //the variable has already been initialized by a previous call to fn
                    ACTUAL = 'omega';
                }
                //now that actual has been set, we will initialized localVariable to refer to a string
                localVariable = 'initialized';
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'alpha' / retunr: {to: {be: {'true': {}}}}
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'alpha' / retunr: {to: {be: {'true': {}}}}
        });

        it('an inner function can access both its local scope variables and variables in its containing scope, provided the variavles have different names', function (){
            var outerName = 'outer';
            var fn = function () {
                var innerName = 'inner';
                ACTUAL = innerName + outerName;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === 'innerouter' / outerName is in the parent scope
        });

        it('between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying those variables has a lasting effect between calls to the inner function', function (){
            var outerCounter = 10;

            var fn = function () {
                outerCounter = outerCounter + 1;
                ACTUAL = outerCounter;
            };
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === '11'
            fn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === '12' // we increment the outerCounter in the parent scope
        });

        it('the rule about retainging access to variables from an outer scope still applies, even after the outer function call (that crated the outer scope) has returned', function (){
            var outerFn = function () {
                //NOTE: the contents of this fuinction is the same as the entire body of the previous test
                var counterInOuterScope = 10;

                var innerIncrementingFn = function () {
                    counterInOuterScope = counterInOuterScope + 1;
                    ACTUAL = counterInOuterScope;
                };

                innerIncrementingFn();
                expect(ACTUAL === '???').to.be.true; // ACTUAL === '11'
                innerIncrementingFn();
                expect(ACTUAL === '???').to.be.true; // ACTUAL === '12'
                //Here we retain a reference to the newly created inner function for later, by assigning it to the global scope (window)
                window.retainedInnerFn = innerIncrementingFn; // global variable that is assigned to the innerIncrementingFn
            };
            //before we run outerFn, there will be no innerFn exported to the global scope
            expect(window.retainedInnerFn).to.equal.undefined;
            //running this outer function should have the same effect as running the whole previous test, with the addition of placing the innerFn somewhere that we can reach it after outerFn has returned
            outerFn();
            expect(window.retainedInnerFn).to.be.a('function'); // true
            //even though the outerFn has returned once the only call to it was completed a couple of lines above, the inner function remains available in the global scope, and still has access to the variables of that containing scope where it was first created
            window.retainedInnerFn();
            expect(ACTUAL === '???').to.be.true; // ACTUAL === '13'
        });
    });
})(); // Se invoca toda la funcion de la linea 8 ()
// I think I sae Miss Scarlet saving
// a stray kitten that night. - Rev Green