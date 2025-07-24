import { StrikeRate } from '../../types/types';
import { create } from 'zustand';
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '', // corrected baseURL
  headers: {
    signature: 'GENERATE Signature',
  },
});

export interface IStrikeRate {
  data: StrikeRate[] | [];

  createStrikeRate: (location: string, data: StrikeRate) => Promise<void>;
  updateStrikeRate: (location: string, data: StrikeRate, id: string) => Promise<void>;
  getStrikeRate: (location: string) => Promise<void>;
  deleteStrikeRate: (location: string, id: string) => Promise<void>;
}

export const useStrikeRate = create<IStrikeRate>((set, get) => ({
  data: [],

  createStrikeRate: async (location, data) => {
    try {
      const response = await AxiosInstance.post<StrikeRate>(`/strike-rate/${location}`, data);
      const currentData = [...get().data, response.data];
      set({ data: currentData });
    } catch (error) {
      console.error('Error creating strike rate:', error);
    }
  },

  updateStrikeRate: async (location, data, id) => {
    try {
      const response = await AxiosInstance.put<StrikeRate>(`/strike-rate/${location}`, data, {
        params: { id },
      });
      let currentData = get().data.filter(item => item._id !== id);
      currentData.push(response.data);
      set({ data: currentData });
    } catch (error) {
      console.error('Error updating strike rate:', error);
    }
  },

  getStrikeRate: async (location) => {
    try {
      const response = await AxiosInstance.get<StrikeRate[]>(`/strike-rate/${location}`);
      set({ data: response.data });
    } catch (error) {
      console.error('Error fetching strike rate data:', error);
    }
  },

  deleteStrikeRate: async (location, id) => {
    try {
      await AxiosInstance.delete(`/strike-rate/${location}`, { params: { id } });
      const currentData = get().data.filter(item => item._id !== id);
      set({ data: currentData });
    } catch (error) {
      console.error('Error deleting strike rate:', error);
    }
  },
}));
