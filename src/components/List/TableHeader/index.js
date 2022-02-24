import './style.css'
import ordenar from '../../../assets/ordenar.svg';
import desordenar from '../../../assets/desordenar.svg';
import { useState } from 'react';

function TableHeader(){
    const [filter, setFilter] = useState('date');
    const [order, setOrder] = useState('asc');

    function handleChangeFilter(type){
        if (filter === type) {
            setOrder(order === 'asc' ? 'desc' : 'asc')
            return;
        }
        setFilter(type);
    }

    return (
        <div className='table-head'>
            <div
            className='column-title cursor-pointer'
            onClick={() => handleChangeFilter('date')}
            >
                <span>Data</span>
                {filter === 'date' &&
                <img 
                src={order === 'asc' ? desordenar : ordenar} 
                alt='ordenar'
                />
                }
            </div>
            <div 
            className='column-title cursor-pointer'
            onClick={() => handleChangeFilter('weekDay')}
            >
                <span>Dia da Semana</span>
                {filter === 'weekDay' &&
                <img 
                src={order === 'asc' ? desordenar : ordenar} 
                alt='ordenar'
                />
                }
            </div>
            <div className='column-title'>
                <span>Descrição</span>
            </div>
            <div className='column-title'>
                <span>Categoria</span>
            </div>
            <div 
            className='column-title cursor-pointer'
            onClick={() => handleChangeFilter('value')}
            >
                <span>Valor</span>
                {filter === 'value' &&
                <img 
                src={order === 'asc' ? desordenar : ordenar} 
                alt='ordenar'
                />
                }
            </div>
        </div>
    )
};

export default TableHeader;