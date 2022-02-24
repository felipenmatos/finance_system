import './style.css';
import TableHeader from './TableHeader';
import edit from '../../assets/Edit.svg';
import deleteicon from '../../assets/Delete.svg';

function List(){
    return (
        <div className='table'>
            <TableHeader />
            <div className='table-body'>
                <div className='table-line'>
                    <div className='line-items'>01/09/21</div>
                    <div className='line-items'>Quarta</div>
                    <div className='line-items'>Venda dos brigadeiros</div>
                    <div className='line-items'>Pix</div>
                    <div className='line-items'>R$ 100,00</div>
                    <div className='line-items'>
                        <img className='cursor-pointer' src={edit} alt='edit icon'/>
                        <img className='cursor-pointer' src={deleteicon} alt='delete icon'/>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default List;