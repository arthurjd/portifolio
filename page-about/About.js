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

const sendEthButton = document.querySelector('#botao-send');
const valor = document.getElementById('value-eth')

let accounts = [0];

ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
    account = accounts[0];
    console.log(account);

    valor.addEventListener('change', () => {
        console.log(valor)
    })

    //Sending Ethereum to an address
    sendEthButton.addEventListener('click', () => {
        ethereum.request({method: 'eth_sendTransaction',params: [{
                        from: accounts[0],
                        to: '0xce1AcD66c209CB164fB59B05eDC4ED9B7cf7DdfA',
                        value: valor[0],
                        gasPrice: '0x09184e72a000',
                        gas: '0x2710',
                    }],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error);
    });
});

ethereumButton.addEventListener('click', () => {
    getAccount();
});

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}