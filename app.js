let friends = ['Dola', 'Manha', 'Arya', 'Araf', 'Farzan'];

for (let i = 0; i < friends.length; i++) {
      const names = friends[i];

      
      let friendDiv = document.createElement('div');
      friendDiv.className = 'friend';

      let friendNameH3 = document.createElement('h3');
      let friendNames = document.createTextNode(names);

      friendNameH3.appendChild(friendNames);

      friendDiv.appendChild(friendNames);

      document.body.appendChild(friendDiv);

      document.querySelector('.sing-button').addEventListener('click', function() {
            for (each in friends) {
            
                  for (let i = 99; i > 0; i--) {
                        let paragraph = document.createElement('p');

                        paragraph.innerHTML = `${i} lines of code in the file, ${i} lines of code; ${friends[each]} strikes one out, clears it all out, ${i-1} lines of code in the file..`;

                        friendDiv.appendChild(paragraph);
                  }
            }
      })
}


