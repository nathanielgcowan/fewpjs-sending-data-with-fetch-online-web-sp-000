// Add your code here
// Add your code here
fetch(destinationURL, configurationObject);

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
        }
    };

const configurationObject = {
    method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: /* Your data goes here */
};

"{"dogName":"Byron","dogBreed":"Poodle"}"

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
};

fetch("http://localhost:3000/dogs", configurationObject);



const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/dogs", configObj);


  const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    });

    {dogName: "Byron", dogBreed: "Poodle", id: 6} // Your ID value may be different

    let formData = {
        dogName: "Byron",
        dogBreed: "Poodle"
      };

      // method: "POST" is missing from the object below
      let configObj = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

      fetch("http://localhost:3000/dogs", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object);
        })
        .catch(function(error) {
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });
