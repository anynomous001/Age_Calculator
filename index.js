// javascript
/*
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()+1
const date_ = date.getDate()
console.log(date.toLocaleDateString("en-us", {datestyle: "long"}))
function ageCount() {
    var now =new Date();                            //getting current date
    var currentY= now.getFullYear();                //extracting year from the date
    var currentM= now.getMonth();                   //extracting month from the date
     var currentD = now.getDate();
      
    var dobget =document.getElementById("birthday").value; //getting user input
    var dob= new Date(dobget);                             //formatting input as date
    var prevY= dob.getFullYear();                          //extracting year from input date
    var prevM= dob.getMonth();
    var prevD= dob.getDate();                             //extracting month from input date
      
    var ageY =currentY - prevY;
    var ageM =Math.abs(currentM- prevM);          //converting any negative value to positive
      var ageD = Math.abs(currentD- prevD);
      
    document.getElementById('demo').innerHTML = ageY +' years ' + ageM +' months'+ ageD
    }*/
    const dayInput = document.getElementById('day-input')
    const monthInput = document.getElementById('month-input')
    const yearInput = document.getElementById('year-input')
    
    document.getElementById('submit').addEventListener('click',(e)=>{
        e.preventDefault()
        
        const bDay = dayInput.value
        const bMonth =monthInput.value
        const bYear = yearInput.value
        
       console.log( typeof(bDay) )
        
      
        
        if(bDay || bMonth || bYear){
            if(!bDay || bDay < 1 || bDay > 31 || isNaN(bDay)  ){
                /*document.getElementById('label-day').style.color='red'
                document.getElementById('invalid-day').style.display = 'block' */
               dayInput.classList.add('invalid-color')
                document.getElementById('label-day').classList.add('invalid-color')
                document.getElementById('invalid-day').style.display = 'block'
            }
            
             if(!bMonth || bMonth < 1 || bMonth > 12 || isNaN(bMonth)){
                monthInput.classList.add('invalid-color')
                document.getElementById('label-month').classList.add('invalid-color')
                document.getElementById('invalid-month').style.display = 'block'
            } 
            
                var today = new Date();
                
            if(!bYear || bYear >  today.getFullYear() || isNaN(bYear) ){
                yearInput.classList.add('invalid-color')
                document.getElementById('label-year').classList.add('invalid-color')
                document.getElementById('invalid-year').style.display = 'block'
            }
            
      
       
       
            /*if(
                birthDate.getDate() !== bDay  || 
                birthDate.getFullYear() !== bYear || 
                birthDate.getMonth()+1 !== bMonth
            ){
                        dayInput.classList.add('invalid-color')
                        document.getElementById('label-day').classList.add('invalid-color')
                        document.getElementById('invalid-day').style.display = 'block'
                        
                        monthInput.classList.add('invalid-color')
                        document.getElementById('label-month').classList.add('invalid-color')
                        document.getElementById('invalid-month').style.display = 'block'
                        
                        yearInput.classList.add('invalid-color')
                        document.getElementById('label-year').classList.add('invalid-color')
                        document.getElementById('invalid-year').style.display = 'block'
            }*/
            
            
                /*let ageInMilliseconds  = today - birthDate*/
                let birthDate = new Date(`${bYear}-${bMonth}-${bDay}`)
                
               
        
                
                
                var ageYears = today.getFullYear() - birthDate.getFullYear();
                var ageMonths = Math.abs(today.getMonth() - birthDate.getMonth());
                var ageDays = today.getDate() - birthDate.getDate();
                if (ageDays < 0) {
                    ageMonths--;
                    ageDays += 30;
                }
            
                             
                document.getElementById('year-span').innerText = ageYears
                document.getElementById('month-span').innerText = ageMonths+1
                 document.getElementById('day-span').innerText = ageDays
            
            
          
        }
        
    })
    
    
   

   
   