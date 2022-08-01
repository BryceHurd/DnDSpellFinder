
//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){

  //trying figure out away to remove ul   
  const classList = document.querySelector(`ul`); 

  //const subClassList = document.querySelector(`ul`);
    
  
  
  let choice = document.querySelector('input').value  
  //replacing spaces with -
  choice = choice.replace(" ", "-");
  //changing the input to all lower case
  choice = choice.toLowerCase(); 

  

  const url = `https://www.dnd5eapi.co/api/spells/${choice}`  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {        
        console.log(data);

        //Spell Name
        document.querySelector(`#name`).textContent = data.name;

        //Spell Description
        document.querySelector(`#desc`).textContent = data.desc;

        //Spell Level
        document.querySelector(`#spellLvl`).textContent = data.level;

        //Casting Time
        document.querySelector(`#castingTime`).textContent = data.casting_time;

        //Ritual true or false
        document.querySelector(`#ritual`).textContent = data.ritual;

        //Spell duration
        document.querySelector(`#duration`).textContent = data.duration;

        //Spell Range
        document.querySelector(`#range`).textContent = data.range;

        //components needed for spell
        document.querySelector(`#components`).textContent = data.components;

        //spell material
        document.querySelector(`#material`).textContent = data.material;

        //Spell School of magic 
        document.querySelector(`#school`).textContent = data.school.name;

        //Spell Damage and Damage type        
        document.querySelector(`#dmgType`).textContent = data.damage.damage_type.name;

        // need to make a loop
        document.querySelector(`#highLvl`).textContent = data.higher_level;
        document.querySelector(`#dmg`).textContent = data.damage.damage_type.damage_at_slot_level;
        
               
        
        // looping section

        // clear the Li before adding new on to the existing list

        while(classList.hasChildNodes()){
            data.classes.foreach(obj => {
            classList.removeChild(classList.firstChild)
          });          
        }


        // forEach loop, itertare through each element in an array
        data.classes.forEach(obj =>{
          console.log(obj.name)
          //create an li
          const li = document.createElement(`li`);
          //add text to li
          li.textContent = obj.name;
          //append li to ul
          document.querySelector(`#class`).appendChild(li);
        }) 
          
          // interate through each element in an array 
          data.subclasses.forEach(obj => {
            console.log(obj.name)
            //create an li
            const li = document.createElement(`li`);
            // add text to li
            li.textContent = obj.name;
            // append li to ul
            document.querySelector(`#subClass`).appendChild(li);

        })   
        
        
        

     })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}




//make a console log of inputed and a conditonal before the loops