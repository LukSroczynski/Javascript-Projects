/**
 * Created by Łukasz S. on 09.03.2017.
 * YDKJS: Modern Modules
 */

let Module = (function IIFE() {
    let modulesNames = {};

    function defineModule(name, deps, impl) {
        for (let i = 0; i < deps.length; i++) {
            deps[i] = modulesNames[deps[i]];
        }
        modulesNames[name] = impl.apply(impl,deps);
    }

    function getName(name) {
        return modulesNames[name];
    }

    return {
        defineModule: defineModule,
        getModuleName: getName
    };
})();

Module.defineModule("m1", [], function () {
    function introduceYourself(name) {
        console.log("My name is " + name);
    }

    return {
        introduceYourself: introduceYourself
    }
});

Module.defineModule("m2", ["m1"], function (me1) {

    let name = "Lukasz2"

    function intro2() {
        console.log("My name is " + me1.introduceYourself(name));
    }

    return {
        intro2: intro2
    }
});


let me1 = Module.getModuleName("m1");
me1.introduceYourself("Lukasz");

let me2 = Module.getModuleName("m2");
me2.intro2();

/*

output:
 My name is Lukasz
 My name is Lukasz2
 My name is undefined

1. Why there is 3rd line with undefined?

 */