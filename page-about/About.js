//---------Conectar Carteira; Pegar Info-Conta; Pegar Info-Saldo;---------//

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









//----------------------------Popup JavaScript----------------------------//

const popupAparecerBotao = document.querySelector('#enviarcripto')
const popup = document.querySelector('.popup-fundoescuro')

popupAparecerBotao.addEventListener('click', () => {
    popup.style.display = 'block'
});

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-fundoescuro']
    const deveFecharPopup = classNames.some(className => className === classNameOfClickedElement)

    if (deveFecharPopup) {
        popup.style.display = 'none'
    }
});














//----------------------------Enviando ETH----------------------------//
//-------O codigo a seguir esta porco, eu não entendi nada, mas tentei de tudo e deu certo-------//

const sendEthButton = document.querySelector('#botao-send'); // esse é o botao do pop-up NAO DELETE NUNCA

let accounts = [0]; //nao sei se isso serve para alguma coisa, mas coloquei na tentativa de puxar a carteira do usuario

ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
    account = accounts[0];

    //Sending Ethereum to an address
    sendEthButton.addEventListener('click', () => {

        let number = document.getElementById("value-eth").value; //esta pegando o valor do input
        let number2 = number * 1000000000000000000 //esta pegando o valor do number (que é em eth) e transformando em gwei
        let hexStr = number2.toString(16); //.toString(16) serve para transformar em Hexadecimal
        console.log(hexStr); //retorna no console o resultado para ver se deu certo

        const valorHex = hexStr //esta definindo a constante e seu valor, vai ser usado para indicar o valor da trnasacao

        ethereum.request({method: 'eth_sendTransaction',params: [{
                        from: accounts[0], //usuario logado
                        to: '0xce1AcD66c209CB164fB59B05eDC4ED9B7cf7DdfA', //conta de destino
                        value: valorHex, //valor que o usuario colocou no input
                    }],
            })
            .then((txHash) => console.log(txHash)) //nao tenho ideia do que é isso, só copiei da metamask
            .catch((error) => console.error) //nao tenho ideia do que é isso, só copiei da metamask
    })

});

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' }); //nao tenho ideia do que é isso, só copiei da metamask
}