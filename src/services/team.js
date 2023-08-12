import http from "./httpService";

export const getAllTeams = () => {
    return http.get(`${process.env.REACT_APP_BASE_URL}/api/teams`);
};
export const getTeam = (title)=>{
    return http.get(`${process.env.REACT_APP_BASE_URL}/api/teams/${title}`)
}
export const newTeam = (team) => {
    return http.post(`${process.env.REACT_APP_BASE_URL}/api/team`, team);
};
export const editTeam = (teamId,team) => {
    return http.patch(`${process.env.REACT_APP_BASE_URL}/api/team/${teamId}`, team);
};
export const deleteTeam = (id) => {
    return http.delete(`${process.env.REACT_APP_BASE_URL}/api/teams/${id}`);
}