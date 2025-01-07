// Good luck!
const express = require('express');
const app = express()

let dogs = {
  doglist: [
    "Herding","Sporting","Working","Toy","Non-Sporting","Hound","Terrier","Mastiff","Doodle","SightHound"
  ],
    classes: [
      {
        name: "Herding",
        dog: "Border Collie",
       photo:"https://cdn.britannica.com/25/234625-050-6070814C/Border-Collie-dog.jpg",
    description: "Herding dogs are known for their intelligence and agility, often used to manage livestock. They are active and thrive in environments where they can engage in tasks that require focus and energy.",
        fun_fact: "Border Collies are often considered the smartest dog breed in the world."
      },
      {
        name: "Sporting",
        dog: "Labrador Retriever",
        photo:"https://cdn.britannica.com/82/232782-050-8062ACFA/Black-labrador-retriever-dog.jpg",
        description: "Sporting dogs are energetic and enthusiastic, making them excellent companions for activities like hunting and water sports. They are known for their love of outdoor adventures.",
        fun_fact: "Labrador Retrievers are consistently ranked as one of the most popular breeds in the United States."
      },
      {
        name: "Working",
        dog: "Saint Bernard",
        photo: "https://cdn.britannica.com/66/235666-050-751046D6/Saint-bernard-dog-st-bernard-standing-snow.jpg",
        description: "Working dogs are strong and sturdy, originally bred to perform tasks like guarding, pulling sleds, and rescue work. They are often highly protective and loyal.",
        fun_fact: "Saint Bernards were originally bred by monks to help rescue travelers in the Swiss Alps."
      },
      {
        name: "Toy",
        dog: "Chihuahua",
        photo: "https://cdn.britannica.com/44/233244-050-A65D4571/Chihuahua-dog.jpg",
        description: "Toy dogs are small in size but big in personality. They are often kept as companions due to their affectionate nature and manageable size, making them ideal for apartment living.",
        fun_fact: "Chihuahuas are known to be the smallest dog breed, yet they often think of themselves as much larger."
      },
      {
        name: "Non-Sporting",
        dog: " Dalmatian",
        photo: "https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg",
        description: "Non-sporting dogs are a diverse group, including breeds with different characteristics and roles. Some are companion dogs, while others have working backgrounds, often excelling in companionship and obedience.",
        fun_fact: "Dalmatians are famous for their spots, and they were originally bred to accompany fire trucks as carriage dogs."
      },
      {
        name: "Hound",
        dog: "Beagle",
        photo: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",
        description: "Hound dogs are renowned for their excellent sense of smell and hunting ability. Many of them were originally bred for tracking or chasing game and are still used in hunting today.",
        fun_fact: "Beagles are so well-known for their sense of smell that they are often used as detection dogs in airports."
      },
      {
        name: "Terrier",
        dog: "Jack Russell Terrier",
        photo: "https://cdn.britannica.com/21/234921-050-5B888CF3/Parson-Jack-Russell-Terrier-dog-smooth-coat-head.jpg",
        description: "Terriers are feisty and courageous, known for their energetic and determined nature. They were originally bred to hunt small animals and pests.",
        fun_fact: "The Jack Russell Terrier is incredibly energetic and can jump over 5 feet high!"
      },
      {
        name:"Mastiff",
        dog: "English Mastiff",
        photo: "https://cdn.britannica.com/02/234902-050-E6163C4B/Brindle-mastiff-dog.jpg",
        description: "Mastiffs are large, powerful dogs originally bred for guarding and protection. Despite their imposing size, they are often gentle giants with their families.",
        fun_fact: "English Mastiffs are one of the largest dog breeds, with some individuals weighing over 200 pounds."
      },
      {
        name: "Doodle",
        dog: "Labradoodle",
        photo: "https://pawsandpup.com/cdn/shop/articles/Labradoodle-Pros-and-Cons-1_1456x.png?v=1695971065",
        description: "Doodles are a crossbreed between Poodles and other dogs, known for their friendly personalities and hypoallergenic coats.",
        fun_fact: "Labradoodles were originally bred to be service dogs for people with allergies."
      },
      {
        name: "Sighthound",
        dog: "Saluki",
        photo: "https://cdn.britannica.com/75/257475-050-9E929F84/Saluki-dog-sighthound.jpg",
        description: "Sighthounds are fast, athletic dogs that rely on their keen eyesight to spot prey. They were originally bred for hunting game at high speeds.",
        fun_fact: "The Saluki is one of the oldest known dog breeds, with a history dating back over 5,000 years."
      }
    ]
  }
  

  app.use((req,res, next) =>{
    console.log(req.method + "" + req.url)
    next()
})



app.get("/home",(req,res)=>{
    res.send("Welcome to dog web")
})

app.get("/docs",(req,res)=>{
    res.send("go to /dname to get the list of dogs and put / with a number to get a photo of the dog and the fact about them ")
})


app.get("/dname",(req,res)=>{
  res.json(dogs.doglist)
})


app.get("/dname/:index",(req,res)=>{
  const index = req.params.index
  res.json(dogs.classes[index])
})


















app.listen(3000,()=>{
  console.log("sever is running")
})
