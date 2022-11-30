document.getElementById('botaometamask').addEventListener('click', event => {
    let account;
    let button = event.target;
    ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        account = accounts[0];
        console.log(account);
        button.textContent = account;

        ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
            console.log(result);
            let wei = parseInt(result, 16);
            let balance = wei / (10 ** 18);
            console.log(balance + " ETH");
        });
    });
});

/*
document.getElementById('enviarcripto').addEventListener('click', event => {
    let transactionParam = {
        to: '0xce1AcD66c209CB164fB59B05eDC4ED9B7cf7DdfA',
        from: account,
        value: AQUI TEM QUE COLOCAR O VALOR EM HEX ENTRE ''
    };
});
*/