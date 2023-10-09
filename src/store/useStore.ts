import { defineStore } from "pinia"
import axios from "../composables/useAxiosInstance"
import {IFormattedPeople, IPeople, IPeopleResult, IState} from "../types"
import {GET_PEOPLE, GET_PEOPLES} from "../composables/useURL"

const FAVORITE_LIST_NAME = 'FAVORITE_LIST'

export const useStore = defineStore('people', {
    state: (): IState => ({
        count: null,
        peoples: [],
        searchResults: [],
        countSearchResult: null,
        favoriteList: JSON.parse(localStorage.getItem(FAVORITE_LIST_NAME) || '[]')
    }),
    getters: {
        formattedPeoples(state): IFormattedPeople[]{
            return state.peoples.map(({name, mass, hair_color, height, url}) => ({name, mass, hair_color, height, url}))
        }
    },
    actions: {
        setMainInfo(data: IPeopleResult){
            this.count = data.count
            this.peoples = data.results
        },
        clearMainInfo(){
            this.count = null
            this.peoples = []
        },
        setSearchResult(data: IPeopleResult){
            this.searchResults = data.results
            this.countSearchResult = data.count
        },
        clearSearchResult(){
            this.searchResults = []
            this.countSearchResult = null
        },
        removeFromFavorite(el: IPeople | IFormattedPeople){
            let favoriteTmpList = this.favoriteList
            favoriteTmpList = favoriteTmpList.filter(item => item.name !== el.name)
            return favoriteTmpList
        },
        addToFavorite(el: IPeople | IFormattedPeople){
            let favoriteTmpList = this.favoriteList
            favoriteTmpList.push(el)
            return favoriteTmpList
        },
        changeFavoriteContain(el: IPeople | IFormattedPeople, isDelete){
            let newList = isDelete ? this.removeFromFavorite(el) : this.addToFavorite(el)
            localStorage.setItem(FAVORITE_LIST_NAME, JSON.stringify(newList))
            this.favoriteList = newList

        },
        async getPeoples(page = 1){
            this.clearMainInfo()
            const { data } : { data: IPeopleResult } = await axios.get(GET_PEOPLES, {params: {page}})
            this.setMainInfo(data)
        },
        async getSearchPeoples(search: string){
            this.clearSearchResult()
            const {data}: { data: IPeopleResult } = await axios.get(GET_PEOPLES, {params:{search}})
            this.setSearchResult(data)
        },
        async getDetailedPeople(id){
            const {data}: { data: IPeople } = await axios.get(GET_PEOPLE(id))
            return data
        }
    }
})