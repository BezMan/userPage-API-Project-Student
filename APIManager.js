//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  loadData() {
    //you should make all your API requests here
    //each request should update the `data` object accordingly

    this.fetchUsers(7);
  }


  fetchUsers(numUsers) {
    $.ajax({
      context: this, //opens our access to - this
      url: `https://randomuser.me/api/?results=${numUsers}`,
      success: function(usersResult) {
        this.data.users = usersResult;
        console.log(this.data);
      }
    });
  }
}
