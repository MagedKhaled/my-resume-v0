import { personalData } from '@/assets/back-end-data/personal-data'
import { defineStore } from 'pinia'
export const useUserResumeDataStore = defineStore('userResumeData', () => {
  const getPersonalData = (target: string | undefined = undefined) => {
    return target ? _.get(personalData, target) : personalData
  }

  return { getPersonalData }
})
