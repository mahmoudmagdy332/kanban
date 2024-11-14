// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store"; 

import { MemberSliceType } from "../../types/type";

const initialState: MemberSliceType = {
  Unclaimed: [],
  FirstContact: [],
  PreparingWorkOffer: [],
  SendTherapist: [],
};

const MemberSlice = createSlice({
  name: "AboutUs",
  initialState,
  reducers: {
    setMembers: (state, action) => {
      state.Unclaimed = action.payload.aboutUs;
      state.FirstContact = action.payload.benefits;
      state.PreparingWorkOffer = action.payload.PreparingWorkOffer;
      state.SendTherapist = action.payload.SendTherapist;
    },
  },
});

export const { setMembers } = MemberSlice.actions;

export default MemberSlice.reducer;

export const useAboutUsSliceSelector = useSelector.withTypes<RootState>();
