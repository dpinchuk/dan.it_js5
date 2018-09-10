/*
 Реализовать функцию полного клонирования объекта.

 Технические требования:
 - Написать функцию для рекурсивного полного клонирования объекта (без единой передачи по ссылке, внутренняя вложенность свойств объекта может быть достаточно большой).
 - Функция должна успешно копировать свойства в виде объектов и массивов на любом уровне вложенности.
 - Использовать синтаксис ES6 для работы с перемеными, функциями и объектами.
*/

let cloneObject = (obj) => {
    if (!obj) {
        return obj;
    }
    let copyObj, key, value;
    copyObj = Array.isArray(obj) ? [] : {};
    for (key in obj) {
        value = obj[key];
        copyObj[key] = (typeof value === "object") ? cloneObject(value) : value;
    }
    return copyObj;
};

let user = {
    name: "Dima",
    position: "QA Teamlead",
    company: "TerraSoft",
    interest: {
        a: "1",
        b: "2",
        c: function (a) {
            return a;
        },
        d: {
            d1: true,
            d2: false,
            d3: function () {
                return this.d1;
            }
        }
    }
};

let newUser = cloneObject(user);

console.log(newUser === user);