// Question 1
function instagramPost(authorHandle, content, imagelink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imagelink = imagelink;
    this.views = views;
    this.likes = likes;
  }
  
  // Question 2
const post1 = new instagramPost('@Ovuzo', 'I just got a new bag', 'https://res.cloudinary.com/dtp4mnbng/image/upload/v1678811620/hand-bag_ghmyo5.jpg', 1000, 200);
const post2 = new instagramPost('@Ovuzo', 'Its my Birthday!', 'https://res.cloudinary.com/dtp4mnbng/image/upload/v1629695784/237037314_860625384829572_1632813460372575555_n.jpg_cwaeja.jpg', 500, 50);

console.log(post1);
console.log(post2);

// Question 3a

function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    };
  }
  
  // create an object representing Musa
  const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

  
//   Question 3b

function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
  
  // create an object representing Musa's JAMB scores
const musaJambScores = createJambScores(70, 85, 82, 94);

musa.jambScores = musaJambScores; 
console.log(musaJambScores)
  



// Deep Copy: This method creates a new object with the same values as the original object.

let originalObj = {
  name: "Joe",
  age: 30,
  address: {
    street: "32 Apapa St",
    city: "Ikeja",
    state: "Lagos"
  }
};

// Cloning object using deep copy
let cloneObj1 = JSON.parse(JSON.stringify(originalObj));

// Modifying the address object in the original object
originalObj.address.state = "Calabar";

console.log(cloneObj.address.state); 

// Object.create() method: This method creates a new object with the prototype of the original object.

let Obj1 = {
  name: "Joe",
  age: 30,
  address: {
    street: "32 Apapa St",
    city: "Ikeja",
    state: "Lagos"
  }
};

// Cloning object using Object.create() method
let cloneObj2 = Object.create(Obj1);

// Modifying the address object in the original object
Obj1.address.state = "Calabar";

console.log(cloneObj2.address.state); 