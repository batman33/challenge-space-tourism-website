import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import data from './data.json'

export interface IDestinationItem {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

export interface ICrewItem {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}

export interface ITechnologyItem {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}

export const useDestinationStore = defineStore('destinations', () => {
  const destinations = ref<IDestinationItem[]>(data.destinations)
  const activeTab = ref<number>(0)

  const destination = computed<IDestinationItem>(() => destinations.value[activeTab.value])

  function change(index: number) {
    activeTab.value = index
  }

  return { destinations, activeTab, change, destination }
})

export const useCrewStore = defineStore('crews', {
  state: () =>
    ({
      crews: data.crew,
      activeTab: 0
    } as {
      crews: ICrewItem[]
      activeTab: number
    }),
  getters: {
    crew: (state): ICrewItem => state.crews[state.activeTab]
  },
  actions: {
    change(index: number) {
      this.activeTab = index
    }
  }
})

export const useTechnologyStore = defineStore('technologies', () => {
  const technologies = ref<ITechnologyItem[]>(data.technology)
  const activeTab = ref<number>(0)

  const technology = computed<ITechnologyItem>(() => technologies.value[activeTab.value])

  function change(index: number) {
    activeTab.value = index
  }

  return { technologies, activeTab, change, technology }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDestinationStore, import.meta.hot))
  import.meta.hot.accept(acceptHMRUpdate(useCrewStore, import.meta.hot))
  import.meta.hot.accept(acceptHMRUpdate(useTechnologyStore, import.meta.hot))
}
