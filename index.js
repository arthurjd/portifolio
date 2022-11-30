//---------Conectar Carteira; Pegar Info-Conta; Pegar Info-Saldo;---------//

document.getElementById('botaometamask').addEventListener('click', event => {
    let account;
    let button = event.target;
    ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        account = accounts[0];
        console.log(account);
        button.textContent = account;

        ethereum.request ({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {

            console.log(result);
            let wei = parseInt(result,16);
            let balance = wei / (10**18);
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