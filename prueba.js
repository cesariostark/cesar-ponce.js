/** Javascript
- Cada función debe ser desarrollada con un código personalizado y devolver la data requerida
- Al final de la prueba estará un console.log de cada una de las funciones para validar si el resultado es válido.
- Las respuestas deben ser subidas a un git para su posterior revisión
- Enviar el link del git en el mismo correo enviado
Regla nº1: No modifiques el objeto original. Cada función debe retornar un nuevo set de datos.
Regla nº2: Queda prohibido ocupar librarías como lodash o Underscore, el objetivo de la prueba es evaluar las
habilidades con "vanilla" javascript
¡Suerte!
*/
const {clients, banks, accounts } = require('./data');
/**
Ejercicio 0
@description Retornar un arreglo con los ID de los clientes
*/
const exercise0 = () => {
    return clients.map(client =>client.id);
}
//Answer// => [1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
Ejercicio 1
@description Retornar un arreglo con los ID de los clientes ordenados por RUT
*/
const exercise1 = () => {
//TODO
    //Creo un nuevo array
    let rutSort = [...clients];

    //compareFn .sort()
    rutSort.sort((a,b)  => {
        if(a.rut > b.rut){
            return 1;
        }
        if(a.rut < b.rut){
            return -1;
        }
        return 0;
    });

    return rutSort.map(({id}) => id);
}
/**
Ejercicio 2
@description Retornar un arreglo con los nombres de los clientes, ordenados de mayor a menor
por la suma TOTAL de los saldos de las Cuentas 
*/
 const exercise2 = () => {
//TODO
    //creo un nuevo arreglo de obj cuentas
    let accountSort = [...accounts];
    let accountsTotal = accountSort.reduce((acum, accounts) => {
        //Filtro por id para sumar los balances
        let checkId = acum.find((client) => client.clientId === accounts.clientId);

        if(checkId){
            checkId.balance += accounts.balance;
        }else{
            acum.push({
                clientId: accounts.clientId,
                balance: accounts.balance
            });
        }
        return acum;
    }, []);
    //compareFn .sort()
    //Ordenar clientes por balance total 
    accountsTotal.sort( (a, b) => {
        if(a.balance < b.balance){
            return 1;
        }
        if(a.balance > b.balance){
            return -1;
        } 
        return 0; 
    });
    //Comparar id de clientes y si encuentra, mostrar nombre
    let nameSortByAccount = accountsTotal.map(accounts => {
        let find = clients.find(clientAcc => clientAcc.id === accounts.clientId);
        if(find){
            return find.name;
        }
        return null;
    });
    return nameSortByAccount;
}
/**
Ejercicio 3
@description Devuelve un objeto cuyo índice es el nombre de los bancos
y cuyo valor es un arreglo de los ruts de los clientes ordenados alfabéticamente por 'nombre'
*/
const exercise3 = () => {
//TODO
    //Creo un nuevo arreglo
    let bankReducer = [...accounts];
    let bankClients = bankReducer.reduce((acum, acc) => {
        let find = banks.find(bankCli => bankCli.id === acc.bankId);
        if(find){
            acum.push({
                clientId: acc.clientId,
                bankId: acc.bankId,
                bankName: find.name
            })
        }
        return acum;
    }, []);
    let rutClient = bankClients.reduce((acum, client) => {
        let find = clients.find((cli) => cli.id === client.clientId);
        if(find){
            return ({
                ...acum,
                [client.bankName]: find.rut
            });
        }
    }, {});

    return rutClient;
}
/**
Ejercicio 4
@description Devuelve un arreglo ordenado de mayor a menor con el saldo de los clientes que
tengan más de 25000 en el banco 'SCOTIABANK'
*/
const exercise4 = () => {
//TODO
    let amountScotia = [...accounts].filter((account) => account.balance > 25000 && account.bankId === 1);
    let amountSort = amountScotia.map((client) => client.balance).sort()
    return amountSort;
}
/**
Ejercicio 5
@description Devuelve un arreglo con la 'id' de los Bancos de menor a mayor por el
TOTAL de dinero que administran en las cuentas de sus clientes
*/
const exercise5 = () =>{
    let accountReducer = [...accounts];
    let accountsTotal = accountReducer.reduce((acum, accounts) => {
        //Filtro por id para sumar los balances
        let checkId = acum.find((client) => client.bankId === accounts.bankId);

        if(checkId){
            checkId.balance += accounts.balance;
        }else{
            acum.push({
                bankId: accounts.bankId,
                balance: accounts.balance
            });
        }
        return acum;
    }, []);

    accountsTotal.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    let bankSortByPoor = accountsTotal.map(bank => bank.bankId); 

    return bankSortByPoor;
}
/**
Ejercicio 6
@description Devuelve un objeto en donde la key son los nombre de los bancos
y el valor es la cantidad de clientes que solo tienen una cuenta en ese banco
*/
const exercise6 = () => {
//TODO:
    let bankReducer = [...accounts];
    let bankClients = bankReducer.reduce((acum, acc) => {
        let find = banks.find(bankCli => bankCli.id === acc.bankId);
        if(find){
            acum.push({
                clientId: acc.clientId,
                bankId: acc.bankId,
                bankName: find.name
            })
        }
        return acum;
    }, []);

    let uniqueBank = bankClients.reduce((acum, bank) => {
        
    }, {})
}
/**
Ejercicio 7
@description Devuelve un objeto en donde la key son el nombre de los bancos
y el valor es el 'id' de su cliente con menos dinero.
*/
const exercise7 = () => {
//TODO:

}
/**
No modificar.
Debes ejecutar este ejercicio con NodeJs y verificar si su código está dando los resultados correctos
@section CONSOLE LOG
*/
console.log("Ejercicio 0 --> ", exercise0() || "Ejercicio no resuelto");
console.log("Ejercicio 1 --> ", exercise1() || "Ejercicio no resuelto");
console.log("Ejercicio 2 --> ", exercise2() || "Ejercicio no resuelto");
console.log("Ejercicio 3 --> ", exercise3() || "Ejercicio no resuelto");
console.log("Ejercicio 4 --> ", exercise4() || "Ejercicio no resuelto");
console.log("Ejercicio 5 --> ", exercise5() || "Ejercicio no resuelto");
console.log("Ejercicio 6 --> ", exercise6() || "Ejercicio no resuelto");
console.log("Ejercicio 7 --> ", exercise7() || "Ejercicio no resuelto");
process.exit();
