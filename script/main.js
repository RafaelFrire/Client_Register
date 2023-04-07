    const ToggleModal = () =>{
        const btnclose = document.querySelector(".pop-button button#close-modal");
        const btnOpen = document.querySelector("td button#btn-register")
        const modal = document.querySelector(".modal");
        let authModal = modal.classList[1]
    
        function HandleClick(){
            if(authModal === "open"){
                modal.classList.toggle("open");
                modal.classList.toggle("close")
           
            }
            else{
                modal.classList.toggle("close")
                modal.classList.toggle("open")
             
            }
        }

        btnclose.addEventListener("click",HandleClick)
        btnOpen.addEventListener("click",HandleClick)

    }
    const btnRegister = document.querySelector(".button-register button#btn-register")
    let dataClient = document.querySelectorAll(".required")
    const spans = document.querySelectorAll(".span-required")
       

    function setError(index){
        dataClient[index].style.border = '1px solid #E32C05'
        spans[index].style.display = "block";
    }
    function removeError(index){
        dataClient[index].style.border = "";
        spans[index].style.display = "none";
    }

    function nameValidate(){
        let clientName = dataClient[0].value
        if(clientName.length < 3){
           setError(0)
        } 
        else{
            removeError(0)
        }
    }

    function emailValidate(){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let clientEmail = dataClient[1].value;

        if(!emailRegex.test(clientEmail)){
           setError(1)
        }
        else{
            removeError(1)
        }

        return clientEmail
    }

    function numberValidate(){
        const cellPhone = inputMask(dataClient[2].value)
        const action = dataClient[2] = cellPhone
        return action
       
    }
      

    function inputMask(phone){

        if(phone.length == 11){
            const ddd = phone.slice(0, 2)
            const part1 = phone.slice(2, 7)
            const part2 = phone.slice(7, 11)
            const filterNumber = `(${ddd}) ${part1}-${part2}`
            removeError(2)
            return filterNumber
        }
        else{
            setError(2)
        }

    }


   function insertData(){
        const Name = dataClient[0].value
        const Email = dataClient[1].value
        const CellPhone = numberValidate()
        const Adress = dataClient[3].value

        const tbody = document.querySelector('.main-body')
        const Newtr = document.createElement('tr');
        Newtr.classList.add("data-client");

        Newtr.innerHTML = 
        `
        <td id="client_Name"> ${Name}</td>
        <td id="client_Email"> ${Email}</td>
   
        <td id="client_Phone"> ${CellPhone}</td>
        <td id="client_city"> ${Adress}</td>
        <td id="remove_action"><i class="fa-solid fa-trash-can"></i></td>

        `

        tbody.appendChild(Newtr)
   }


   
ToggleModal()