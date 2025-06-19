    const geID=(id)=>document.getElementById(id);
class Fillterproduct{

checkEmpty(value,acountnoti,memo){
    if(value===""){
        geID(acountnoti).innerHTML=memo;
        return false
    }
    geID(acountnoti).innerHTML="";
    geID(acountnoti).style.display = "none";
        return true;
}
}
export default Fillterproduct;