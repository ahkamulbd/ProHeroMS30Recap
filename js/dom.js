document.getElementById('adding-bg').addEventListener('click', function () {
    //console.log('Adding BG');
    const friends = document.getElementsByClassName('friend-list');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
        friend.style.padding = '20px';
        friend.style.margin = '20px';
    }
})

document.getElementById('apply-center').addEventListener('click', function () {
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center';
    thirdFriend.style.color = 'red';
})

document.getElementById('add-element').addEventListener('click', function () {
    const addElement = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend-list');
    newFriend.innerHTML = `
        <p>New Friend added</p>
    `
    addElement.appendChild(newFriend);
})