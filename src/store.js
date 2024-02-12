import { reactive } from "vue";

export const store = reactive({
    loading: true,
    CharactersList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',

    https: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    ArrayArchetypes: []
});