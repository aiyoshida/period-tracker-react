import React, {useEffect, useState} from 'react';
import {supabase} from '../supabaseClient';
const PeriodList = ()=>{
     const [cycles, setCycles]=useState([]);
     useEffect(()=>{
          const fetchCyles = async ()=>{
               const{data, error}=await supabase.from('cycles').select('*');
          }
     })
}