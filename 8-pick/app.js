"use strict";
function pickObjectKeys(obj, keys) {
    const result = {};
    keys.forEach((key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
}
const user = {
    name: "Vasiliy",
    age: 8,
    skills: ["typescript", "javascript"],
};
const res = pickObjectKeys(user, ["age", "skills"]);
console.log(res);
