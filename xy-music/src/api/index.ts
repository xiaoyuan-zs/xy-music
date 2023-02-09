import server from "@/server";

export const getMusicRandom = () => server({
    url: '/music/test',
    method: 'get'
})