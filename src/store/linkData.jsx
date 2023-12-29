import { createSlice } from "@reduxjs/toolkit";

const result = [
  {
    linkId: "r1",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003782#map",
  },
  {
    linkId: "r2",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001270#map",
  },
  {
    linkId: "r3",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003801#map",
  },
  {
    linkId: "r4",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001262#map",
  },
  {
    linkId: "r5",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003798#map",
  },
  {
    linkId: "r6",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003821#map",
  },
  {
    linkId: "r7",
    cate: "5",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003957#map",
  },
  {
    linkId: "r8",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001527#map",
  },
  {
    linkId: "r9",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003508#map",
  },
  {
    linkId: "r10",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003807#map",
  },
  {
    linkId: "r11",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001282#map",
  },
  {
    linkId: "r12",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003806#map",
  },
  {
    linkId: "r13",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001284#map",
  },
  {
    linkId: "r14",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003787#map",
  },
  {
    linkId: "r15",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001272#map",
  },
  {
    linkId: "r16",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003803#map",
  },
  {
    linkId: "r17",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003804#map",
  },
  {
    linkId: "r18",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003802#map",
  },
  {
    linkId: "r19",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000004609#map",
  },
  {
    linkId: "r20",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000004650#map",
  },
  {
    linkId: "r21",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001267#map",
  },
  {
    linkId: "r22",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000004072#map",
  },
  {
    linkId: "r23",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003964#map",
  },
  {
    linkId: "r24",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003795#map",
  },
  {
    linkId: "r25",
    cate: "5",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001496#map",
  },
  {
    linkId: "r26",
    cate: "5",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001495#map",
  },
  {
    linkId: "r27",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001276#map",
  },
  {
    linkId: "r28",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003820#map",
  },
  {
    linkId: "r29",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003819#map",
  },
  {
    linkId: "r30",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003808#map",
  },
  {
    linkId: "r31",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001285#map",
  },
  {
    linkId: "r32",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003800#map",
  },
  {
    linkId: "r33",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001268#map",
  },
  {
    linkId: "r34",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003805#map",
  },
  {
    linkId: "r35",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003817#map",
  },
  {
    linkId: "r36",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003822#map",
  },
  {
    linkId: "r37",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003818#map",
  },
  {
    linkId: "r38",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003789#map",
  },
  {
    linkId: "r39",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003785#map",
  },
  {
    linkId: "r40",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001264#map",
  },
  {
    linkId: "r41",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003786#map",
  },
  {
    linkId: "r42",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003814#map",
  },
  {
    linkId: "r43",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003790#map",
  },
  {
    linkId: "r44",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003791#map",
  },
  {
    linkId: "r45",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001255#map",
  },
  {
    linkId: "r46",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003796#map",
  },
  {
    linkId: "r47",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001256#map",
  },
  {
    linkId: "r48",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003809#map",
  },
  {
    linkId: "r49",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000004593#map",
  },
  {
    linkId: "r50",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003815#map",
  },
  {
    linkId: "r51",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003794#map",
  },
  {
    linkId: "r52",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001279#map",
  },
  {
    linkId: "r53",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001278#map",
  },
  {
    linkId: "r54",
    cate: "2",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003507#map",
  },
  {
    linkId: "r55",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003813#map",
  },
  {
    linkId: "r56",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003810#map",
  },
  {
    linkId: "r57",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003811#map",
  },
  {
    linkId: "r58",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003812#map",
  },
  {
    linkId: "r59",
    cate: "1",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001266#map",
  },
  {
    linkId: "r60",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001252#map",
  },
  {
    linkId: "r61",
    cate: "4",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003792#map",
  },
  {
    linkId: "r62",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000003793#map",
  },
  {
    linkId: "r63",
    cate: "3",
    url: "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001259#map",
  },
];

export let linkData = createSlice({
  name: "linkData",
  initialState: result,
});
