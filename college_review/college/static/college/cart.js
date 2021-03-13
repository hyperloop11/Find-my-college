
var UpdateBtns = document.getElementsByClassName('update-wishlist')

for(var i=0;i<UpdateBtns.length;i++){
    UpdateBtns[i].addEventListener('click', function(){
        var collegeId = this.dataset.college
        var action = this.dataset.action
        console.log('collegeid: ',collegeId, 'action: ', action)
        updateUserWishlist(collegeId, action)
    })


}

function updateUserWishlist(collegeId, action){
    var url = '/update_item/'

    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrftoken,
        },
        body: JSON.stringify({'collegeId': collegeId, 'action':action})
    })

    .then((response)=>{
        return response.json()
    })

    .then((data)=>{
        console.log('data:',data)
    })
}
