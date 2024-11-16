<template>
  {{ personalData }}
</template>

<script lang="ts" setup>
  import { useUserResumeDataStore } from '@/stores/user-resume-data-store'
  const resumeStore = useUserResumeDataStore()
  const personalData = ref(resumeStore.getPersonalData())
</script>
