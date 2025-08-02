import { Yield } from '../../types/types';
import { create } from 'zustand';
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '', // corrected from import.meta.url
  headers: {
    signature: 'GENERATE Signature',
  },
});

export interface IYield {
  data: Yield[] | [];

  createYield: (location: string, data: Yield) => Promise<void>;
  updateYield: (location: string, data: Yield, id: string) => Promise<void>;
  getYield: (location: string) => Promise<void>;
  deleteYield: (location: string, id: string) => Promise<void>;
}

export const useYield = create<IYield>((set, get) => ({
  data: [],

  createYield: async (location, data) => {
   
    try {
      const response = await AxiosInstance.post<Yield>(`/yield/${location}`, data);
      console.log(response)
      let CurrentData = get().data as Yield[];
      CurrentData.push(response?.data);
      set({ data: CurrentData });
    } catch (error) {
      console.error('Error creating yield:', error);
    }
  },

  updateYield: async (location, data, id) => {
    try {
      const response = await AxiosInstance.put<Yield>(`/yield/${location}`, data, {
        params: { id },
      });
      let CurrentData = get().data;
      CurrentData = CurrentData.filter(item => item._id !== id);
      CurrentData.push(response.data);
      set({ data: CurrentData });
    } catch (error) {
      console.error('Error updating yield:', error);
    }
  },

  getYield: async (location) => {
    try {
      const response = await AxiosInstance.get<Yield[]>(`/yield/${location}`);
      set({ data: response.data });
    } catch (error) {
      console.error('Error fetching yield data:', error);
    }
  },

  deleteYield: async (location, id) => {
    try {
      await AxiosInstance.delete(`/yield/${location}`, { params: { id } });
      let CurrentData = get().data;
      CurrentData = CurrentData.filter(item => item._id !== id);
      set({ data: CurrentData });
    } catch (error) {
      console.error('Error deleting yield:', error);
    }
  },
}));
