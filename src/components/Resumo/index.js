import './style.css'

function Resumo(){
    return (
        <div className='container-resume'>
            <h3>Resumo</h3>
            <div>
                <span>Entradas</span>
                <strong className='in'>R$ 10,00</strong>
            </div>
            <div>
                <span>Saídas</span>
                <strong className='out'>R$ 50,00</strong>
            </div>
            <div className='containerBalance'>
                <span className='saldo'>Saldo</span>
                <strong className='balance saldo'>R$ -40,00</strong>
            </div>
        </div>
    )
};

export default Resumo;