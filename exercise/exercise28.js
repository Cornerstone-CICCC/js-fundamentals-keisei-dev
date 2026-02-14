const facebookProfile = {
  name: "Joshua",
  friends: 100,
  messages: ["Hello world!", "Learning JavaScript is fun!", "Check out my new photo."],
  
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  

  addFriend: function() {
    facebookProfile.friends += 1;

  },
  
  removeFriend: function() {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends -= 1;
    }
  }
};

facebookProfile.postMessage("New status update!");
facebookProfile.addFriend();
console.log(facebookProfile.friends); // 101
console.log(facebookProfile.messages);
