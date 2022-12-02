import http from "./httpService";

export const getAllTeams = () => {
    return http.get(`${process.env.SERVERAPI}/api/teams`);
};
export const getTeam = (title)=>{
    return http.get(`${process.env.SERVERAPI}/api/teams/${title}`)
}
export const newTeam = (team) => {
    return http.post(`${process.env.SERVERAPI}/api/team`, team);
};
export const newplayer = (teamId,player) => {
    return http.post(`${process.env.SERVERAPI}/api/players/${teamId}`, player);
};
export const deleteTeam = (id) => {
    return http.delete(`${process.env.SERVERAPI}/api/teams/${id}`);
}
export const deletePlayer = (teamId,playerId) => {
    return http.delete(`${process.env.SERVERAPI}/api/players/${teamId}/${playerId}`);
}