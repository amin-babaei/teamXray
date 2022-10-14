import http from "./httpService";
import config from './config.json'

export const getAllTeams = () => {
    return http.get(`${config.serverapi}/api/teams`);
};
export const getTeam = (title)=>{
    return http.get(`${config.serverapi}/api/teams/${title}`)
}
export const newTeam = (team) => {
    return http.post(`${config.serverapi}/api/team`, team);
};
export const newplayer = (teamId,player) => {
    return http.post(`${config.serverapi}/api/players/${teamId}`, player);
};
export const deleteTeam = (id) => {
    return http.delete(`${config.serverapi}/api/teams/${id}`);
}
export const deletePlayer = (teamId,playerId) => {
    return http.delete(`${config.serverapi}/api/players/${teamId}/${playerId}`);
}