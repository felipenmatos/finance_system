import './style.css'

function TableHeader(){
    return (
        <div className='table-head'>
            <div className='column-title'>Data</div>
            <div className='column-title'>Dia da Semana</div>
            <div className='column-title'>Descrição</div>
            <div className='column-title'>Categoria</div>
            <div className='column-title'>Valor</div>
        </div>
    )
};

export default TableHeader;