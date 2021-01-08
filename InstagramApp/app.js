
const profileradius  = document.querySelector(".profile-radius");
const getUsername = document.querySelector("#getUsername");
const imageSet = document.querySelector(".imageSet");
const informationtoInstagram = document.querySelector(".informationtoInstagram");
async function getInstagramInfo(username) {
    const baseUrl = "https://www.instagram.com";
    const fullname = `${baseUrl}/${username}`;
    const controllerJson = `${fullname}/?__a=1`;
    const fetchInstagramUser = await fetch(controllerJson);
    const toJson =  fetchInstagramUser.json();
        console.log(toJson)
    if(fetchInstagramUser.ok) {
        return toJson;
    } else {
            throw new Error("Çalışmıyor !! ");
    }
}   

getInstagramInfo(prompt("İnstagram Account Giriniz .")).then(e=>{getInfo(e)}).catch(err=>{console.log(err)})


function getInfo(e) {
    const getInfoInstagramGraph = e.graphql.user;
    const getImage  = getInfoInstagramGraph.edge_owner_to_timeline_media.edges
    // console.log(getInfoInstagramGraph)
    // console.log(    profileradius.style)
    profileradius.style.backgroundImage=`url(${getInfoInstagramGraph.profile_pic_url})`
        profileradius.style.backgroundSize="cover";
        profileradius.style.backgroundRepeat="no-repeat";
        profileradius.style.backgroundPosition="center";
    //9 console.log(getUsername.textContent)
        getUsername.innerHTML = getInfoInstagramGraph.username.toLocaleUpperCase();
    // profileradius.className='profile-radius'
    // profileradius.classList.add('imageFix');
    // console.log()
        function AccountInformationFull() {
            this.userInfo = {
                "Biography":getInfoInstagramGraph.biography,
                "Username":getInfoInstagramGraph.username,
                "Followed_by":getInfoInstagramGraph.edge_followed_by.count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
                "Follow":getInfoInstagramGraph.edge_follow.count,
                
            }
            informationtoInstagram.innerText += 
            ` Username ${this.userInfo.Username}
                Takipçi : ${this.userInfo.Followed_by}
                Takip : ${this.userInfo.Follow}
                Bio:${this.userInfo.Biography}
            `
        
        }
        AccountInformationFull();
        // console.log();   
        getImage.map(image=>{
          var img = document.createElement("img");
            img.setAttribute('src',image.node.display_url)
            imageSet.appendChild(img);           
        })

}