//Nulish Coalescing Operador
// 0, ‘, [], false, undefined,  null => falsy


//document.body.innerText= 'A sua idade é ' + (idade ?? 'Valor nao informado');

/*
  const nome1= 'wilian';
  const idade= 15;

  const novo = {
    nome1,
    idade
  }

  //document.body.innerText=user?.age ?? '0';

  //document.body.innerText= Object.keys(user);

  //const { address } = user;
  //const endereco = user.address;
  
  document.body.innerText= JSON.stringify(novo);
  */

  //const { address, name='Nao' } = user;
  //document.body.innerText= JSON.stringify({address, name});



const user= {
    name: 'Wilian',
    ativo: true,
    age: 25,
    codigopostal: '4234234',
    address: {
      street: 'Rua teste',
      number: 100,
      zip: 533333
    }
}
  function getIdade({age}){
    return age;
  }
  //const {name, ...rest} = user;

  

  const array =[1,2,3,4,5,6,7,8,9,10];
  document.body.innerText=JSON.stringify();

