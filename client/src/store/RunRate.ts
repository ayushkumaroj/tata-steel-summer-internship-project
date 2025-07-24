import { RunRate } from '../../types/types';
import { create } from 'zustand';
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '', // Corrected baseURL
  headers: {
    signature: 'GENERATE Signature',
  },
});

export interface IRunRate {
  data: RunRate[] | [];

  createRunRate: (location: string, data: RunRate) => Promise<void>;
  updateRunRate: (location: string, data: RunRate, id: string) => Promise<void>;
  getRunRate: (location: string) => Promise<void>;
  deleteRunRate: (location: string, id: string) => Promise<void>;
}

export const useRunRate = create<IRunRate>((set, get) => ({
  data: [],

  createRunRate: async (location, data) => {
    try {
      const response = await AxiosInstance.post<RunRate>(`/run-rate/${location}`, data);
      const currentData = [...get().data, response.data];
      set({ data: currentData });
    } catch (error) {
      console.error('Error creating run rate:', error);
    }
  },

  updateRunRate: async (location, data, id) => {
    try {
      const response = await AxiosInstance.put<RunRate>(`/run-rate/${location}`, data, {
        params: { id },
      });
      let currentData = get().data.filter(item => item._id !== id);
      currentData.push(response.data);
      set({ data: currentData });
    } catch (error) {
      console.error('Error updating run rate:', error);
    }
  },

  getRunRate: async (location) => {
    try {
      const response = await AxiosInstance.get<RunRate[]>(`/run-rate/${location}`);
      set({ data: response.data });
    } catch (error) {
      console.error('Error fetching run rate:', error);
    }
  },

  deleteRunRate: async (location, id) => {
    try {
      await AxiosInstance.delete(`/run-rate/${location}`, { params: { id } });
      const currentData = get().data.filter(item => item._id !== id);
      set({ data: currentData });
    } catch (error) {
      console.error('Error deleting run rate:', error);
    }
  },
}));
