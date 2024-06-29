import { configureStore } from '@reduxjs/toolkit'
import { AllReducers } from '../ConfigureStore/ConfigureStore'
export const store = configureStore({
  reducer: AllReducers
})