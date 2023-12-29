import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const result = await axios
    .get('http://api.kcisa.kr/openapi/service/rest/convergence2019/getConver05?serviceKey=ba439fea-c2e2-4419-967b-6230aa20a47d&numOfRows=63&pageNo=1')
    .then((res)=>res.data.response.body.items.item)

export let apiData = createSlice({
    name:'apiData',
    initialState:result
})