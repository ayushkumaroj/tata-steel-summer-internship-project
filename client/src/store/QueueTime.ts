import { QueueTime } from '../../types/types';
import { create } from 'zustand';
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  headers: {
    signature: 'GENERATE Signature',
  },
});

export interface IQueueTime {
  data: QueueTime[] | [];

  createQueueTime: (location: string, data: QueueTime) => Promise<void>;
  updateQueueTime: (location: string, data: QueueTime, id: string) => Promise<void>;
  getQueueTime: (location: string) => Promise<void>;
  deleteQueueTime: (location: string, id: string) => Promise<void>;
}

export const useQueueTime = create<IQueueTime>((set, get) => ({
  data: [],

  createQueueTime: async (location, data) => {
    try {
      const response = await AxiosInstance.post<QueueTime>(`/queue-time/${location}`, data);
      const currentData = [...get().data, response.data];
      set({ data: currentData });
    } catch (error) {
      console.error('Error creating queue time:', error);
    }
  },

  updateQueueTime: async (location, data, id) => {
    try {
      const response = await AxiosInstance.put<QueueTime>(`/queue-time/${location}`, data, {
        params: { id },
      });
      let currentData = get().data.filter(item => item._id !== id);
      currentData.push(response.data);
      set({ data: currentData });
    } catch (error) {
      console.error('Error updating queue time:', error);
    }
  },

  getQueueTime: async (location) => {
    try {
      const response = await AxiosInstance.get<QueueTime[]>(`/queue-time/${location}`);
      set({ data: response.data });
    } catch (error) {
      console.error('Error fetching queue time:', error);
    }
  },

  deleteQueueTime: async (location, id) => {
    try {
      await AxiosInstance.delete(`/queue-time/${location}`, { params: { id } });
      const currentData = get().data.filter(item => item._id !== id);
      set({ data: currentData });
    } catch (error) {
      console.error('Error deleting queue time:', error);
    }
  },
}));
