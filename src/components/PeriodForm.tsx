import React, {useState} from 'react';
import {supabase} from '../supabaseClient';

const PeriodForm = () =>{
     const [startDate, setStartDate]= useState('');
     const [endDate, setEndDate] = useState('');
     const submitPeriod = async()=>{
          const {error} = await supabase.from('cycles').insert([{
               start_date:startDate, end_date: endDate},
          ]);
     if(error){
          alert('failed to save period cycles');
     }else{
          alert('Cycle saved sucessfully!');
     }
     };

     return(
          <div>
               <h1>生理周期の記録</h1>
               <input
               //入力が変更されたらstartDateを更新
                    type='date'
                    value={startDate}
                    onChange={(e)=> setStartDate(e.target.value)}
               />
               <input
               //入力が変更されたらendDateを更新
                    type="date"
                    value={endDate}
                    onChange={(e)=>setEndDate(e.target.value)}
               />
               <button onClick={submitPeriod}>Save</button>

          </div>
     );
};
export default PeriodForm;