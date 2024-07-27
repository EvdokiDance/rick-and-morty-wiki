import { ApiResponse, Character, Episode, Info } from "@/types/types";


export const fetchData = async <T> (url : string) : Promise<T> => {

         const res = await fetch(url);
         const data = await res.json();

        if (res.ok) {
            return JSON.parse(JSON.stringify(data));
        }

         throw new Error(`${data.error} Ошибка ${res.status}`);

}

export const getCharacter = async <T extends number | number[]>(id: T) => {
    return await fetchData<T extends number ? Character : Character[]>(`${import.meta.env.VITE_API_URL}/character/${JSON.stringify(id)}`);
}


export const getCharactersPerPage = async (page = 1, searchParam?: string) => {


    let params = new URLSearchParams({page: String(page)})

    if (searchParam) {
        params.append('name', searchParam);
    }

    let response = await fetchData<Info<Character[]>>(`${import.meta.env.VITE_API_URL}/character/?${params}`)
    return response;
}


export const getEpisode = async (episodeId : string | number | null) => {    
    return await fetchData<Episode>(`${import.meta.env.VITE_API_URL}/episode/${episodeId}`)
}


const urrls = ["https://rickandmortyapi.41/api/episode/1","https://rickandmortyapi.com/api/episode/2","https://rickandmortyapi.com/api/episode/999","https://rickandmortyapi.com/api/episode/4","https://rickandmortyapi.com/api/episode/5"]

export const getEpisodesByUrls = async (episodes: string[]) : Promise<Episode[]> => {

    const promises = episodes.map((url) => fetch(url));

    let res = await Promise.allSettled(promises);

     res = res.filter((r) => r.status === 'fulfilled');

     return await Promise.all<Episode[]>(res.map((r : any) => r.value.json()))
}

