import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type State = {
  isProgress: boolean;
  isOpenRenewPlan: boolean;
  isOpenPlanOverview: boolean;
  isOpenReminderPayment: boolean;
};

const slice = createSlice({
  name: 'plan',
  initialState: {
    isProgress: false,
    isOpenRenewPlan: false,
    isOpenPlanOverview: false,
    isOpenReminderPayment: false,
  } as State,
  reducers: {
    setIsProgress: (state, { payload }: PayloadAction<boolean>) => {
      state.isProgress = payload;
    },

    setIsOpenRenewPlan: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenRenewPlan = payload;
    },

    setIsOpenPlanOverview: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenPlanOverview = payload;
    },

    setIsOpenReminderPayment: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenReminderPayment = payload;
    },
  },
});

export const {
  setIsProgress,
  setIsOpenRenewPlan,
  setIsOpenPlanOverview,
  setIsOpenReminderPayment,
} = slice.actions;

export default slice.reducer;

export const selectIsProgress = (state: RootState) => state.progress.isProgress;

export const selectIsOpenRenewPlan = (state: RootState) => state.progress.isOpenRenewPlan;

export const selectIsOpenPlanOverview = (state: RootState) => state.progress.isOpenPlanOverview;

export const selectIsOpenReminderPayment = (state: RootState) =>
  state.progress.isOpenReminderPayment;
