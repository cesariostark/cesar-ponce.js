const clients = [
    { id: 1, rut: "89873550", name: "LARA RENE PETTY BERGER" },
    { id: 2, rut: "86833361", name: "CONWAY LANDRY POLLARD BRADLEY" },
    { id: 3, rut: "88271452", name: "MICHELLE LETITIA BATTLE MOONEY" },
    { id: 4, rut: "87252013", name: "SIMMONS NELSON WITT MONROE" },
    { id: 5, rut: "81706494", name: "BRADY MARY RANDALL FERNANDEZ" },
    { id: 6, rut: "71167355", name: "ACOSTA COLE ATKINSON PITTS" },
    { id: 7, rut: "79093176", name: "DOMINGUEZ HOUSE GONZALES SALAZAR" },
    { id: 8, rut: "91361017", name: "KIRSTEN COLLINS BYERS COFFEY" },
    { id: 9, rut: "9065642K", name: "FIELDS RATLIFF MORRIS QUINN" }
];
const banks = [
    { id: 1, name: 'SCOTIABANK' },
    { id: 2, name: 'BCI' },
    { id: 3, name: 'ITAU' },
    { id: 4, name: 'CONDELL' },
];
const accounts = [
    { clientId: 4, bankId: 1, balance: 79069 },
    { clientId: 6, bankId: 3, balance: 136060 },
    { clientId: 9, bankId: 3, balance: 74908 },
    { clientId: 2, bankId: 2, balance: 4391 },
    { clientId: 6, bankId: 2, balance: 116707 },
    { clientId: 1, bankId: 3, balance: 157627 },
    { clientId: 5, bankId: 4, balance: 136372 },
    { clientId: 7, bankId: 4, balance: 190204 },
    { clientId: 5, bankId: 4, balance: 149670 },
    { clientId: 2, bankId: 3, balance: 143321 },
    { clientId: 2, bankId: 4, balance: 67466 },
    { clientId: 2, bankId: 3, balance: 17956 },
    { clientId: 9, bankId: 2, balance: 43194 },
    { clientId: 5, bankId: 1, balance: 52245 },
    { clientId: 6, bankId: 2, balance: 41562 },
    { clientId: 3, bankId: 2, balance: 138046 },
    { clientId: 6, bankId: 3, balance: 196964 },
    { clientId: 8, bankId: 3, balance: 73803 },
    { clientId: 9, bankId: 2, balance: 150402 },
    { clientId: 7, bankId: 1, balance: 122869 },
    { clientId: 5, bankId: 4, balance: 65223 },
    { clientId: 7, bankId: 3, balance: 143589 },
    { clientId: 9, bankId: 3, balance: 43346 },
    { clientId: 2, bankId: 1, balance: 60421 },
    { clientId: 4, bankId: 4, balance: 184110 },
    { clientId: 8, bankId: 4, balance: 195903 },
    { clientId: 5, bankId: 2, balance: 77649 },
    { clientId: 8, bankId: 4, balance: 28170 },
    { clientId: 5, bankId: 1, balance: 132850 },
    { clientId: 1, bankId: 3, balance: 139679 },
    { clientId: 7, bankId: 4, balance: 119808 },
    { clientId: 4, bankId: 4, balance: 109201 },
    { clientId: 9, bankId: 3, balance: 112529 },
    { clientId: 1, bankId: 3, balance: 137914 },
    { clientId: 6, bankId: 2, balance: 122904 },
    { clientId: 5, bankId: 4, balance: 103142 },
    { clientId: 8, bankId: 2, balance: 69163 },
    { clientId: 2, bankId: 4, balance: 57812 },
    { clientId: 2, bankId: 3, balance: 32851 },
    { clientId: 7, bankId: 1, balance: 109763 },
    { clientId: 8, bankId: 3, balance: 147442 },
    { clientId: 9, bankId: 1, balance: 42217 },
    { clientId: 1, bankId: 1, balance: 39658 },
    { clientId: 6, bankId: 2, balance: 8664 },
    { clientId: 8, bankId: 1, balance: 41915 },
    { clientId: 7, bankId: 1, balance: 31879 },
    { clientId: 7, bankId: 4, balance: 117795 },
    { clientId: 1, bankId: 4, balance: 108862 },
    { clientId: 5, bankId: 1, balance: 18550 },
];



module.exports = {
    clients,
    banks,
    accounts
}