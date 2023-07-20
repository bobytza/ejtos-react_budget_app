import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    }
    
    return (
        <div>
        <label className="alert alert-success dropdown" htmlFor="inputGroupSelect01">Currency<select style={{"background-color": "green"}} className="form-select form-select-sm green" value={currency} id="currency" onChange={(event) => setCurrency(event.target.value)}>
            <option value="$" name="dolar" style={{"background-color": "green"}}>$ Dollar</option>
            <option value="£" name="pound" style={{"background-color": "green"}}>£ Pound</option>
            <option value="€" name="euro" style={{"background-color": "green"}}>€ Euro</option>
            <option value="₹" name="ruppee" style={{"background-color": "green"}}>₹ Ruppee</option>
            </select>
            </label>
        </div>
    );
};
export default Currency;
