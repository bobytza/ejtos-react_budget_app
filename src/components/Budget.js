
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// const Budget = () => {
//     const { budget } = useContext(AppContext);
//     return (
//         <div className='alert alert-secondary'>
//             <span>Budget: £{budget}</span>
//         </div>
//     );
// };
// export default Budget;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);


    const handleChange = (event) => {
        event.preventDefault();
        let budget = event.target.value;

        if(budget > 20000) {
            alert("The value cannot exceed 20000");
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(budget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
};

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}<input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step="10"
                    style={{ marginLeft: '2rem' , size: 5}}
                    onChange={(event) => handleChange(event)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;