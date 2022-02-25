import './style.css';
import close from '../../assets/close.svg';

function ModalTransactions  (){
    return (
        <div className='backdrop'>
            <div className='modal-content'>
                <img className='iconClose' src={close} alt="close incon" />
            </div>
        </div>
    )
};

export default ModalTransactions;