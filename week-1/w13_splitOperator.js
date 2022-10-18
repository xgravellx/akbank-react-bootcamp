// En maliyetsiz yöntemdir.
const staff = {
    isim: 'hazal',
    yas: 24,
    company: {
        name: 'Ixrone',
        establishmentYear: 2021,
    }
}

const staffNew = {...staff};
console.log(staffNew);

const staffNew2 = {...staff, company:{...staff.company}};
console.log(staffNew2);

