//Git section assignment
let employee1 = {
    name: "Alice",
    lastName: "Smily",
    age: "30",
    companies: ["Sobey's", "Metro", "No Frills"]
};
let employee2 = {
    name: "Bob",
    lastName: "Funny",
    age: "29",
    companies: ["Tim Hortons", "Wendies", "Starbucks", "Metro"]
};
function compareEmployees(employee1, employee2) {
    if (employee1.companies.length < employee2.companies.length){
        console.log (`${employee2.name} has worked at more companies.`);
    } else if (employee1.companies.length > employee2.companies.length){
        console.log (`${employee1.name} has worked at more companies.`);
    } else {
        console.log (`${employee1.name} and ${employee2.name} have worked at the same number of companies.`)
    }

    console.log (`\n${employee1.name}'s companies:`);
    for (let i=0; i< employee1.companies.length; i++) {
        console.log (employee1.companies[i]);
    }
    console.log (`\n${employee2.name}'s companies:`);
    for (let i=0; i< employee2.companies.length; i++) {
        console.log (employee2.companies[i]);
    }
}
compareEmployees(employee1, employee2);
