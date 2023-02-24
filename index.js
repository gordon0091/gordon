// const TOKEN="5826157023:AAElOzDHSZlOwDvyRc-sgCYzsxD7tzZvwOc"
// const CHAT_ID="1241538694" 
// const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`
//https://api.telegram.org/bot5826157023:AAElOzDHSZlOwDvyRc-sgCYzsxD7tzZvwOc/getUpdates
// const success=document.getElementById("success")

// document.getElementById("tg").addEventListener("submit", function(e) {
//     e.preventDefault();
//     let message =` <b>Заявка с сайта!</b>\n`;
//     message += `<b>Отправител:</b> ${this.name.value}\n`;
//     // message += `<b>Номер:</b> ${this.number.value}\n`;
//     // message += `<b>Почта:</b> ${this.email.value}`;
//     console.log(message)

//     axios.post(URL_API, {
//         chat_id:CHAT_ID,
//         parse_mode:"html",
//         text:message
//     }).then((res)=>{
//         this.name.value=""
//         // this.number.value=""
//         // this.email.value=""
//         success.innerHTML="Сообшения отпраленно!"
//         success.style.display="block"
//     }).catch((err)=>{
//         console.log(err)
//     }).finally(()=>console.log("Success"))
// })

const TOKEN="5826157023:AAElOzDHSZlOwDvyRc-sgCYzsxD7tzZvwOc"
const CHAT_ID="1241538694" 
const URL_API=`https://api.telegram.org/bot${TOKEN}/sendDocument`
const success=document.getElementById("success")

document.getElementById("tg").addEventListener("submit",function(e){
    e.preventDefault()
    const formData=new FormData()
    formData.append("chat_id",CHAT_ID)
    formData.append("document",this.document.files[0])
    axios.post(URL_API,formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then((res)=>{
        this.document.value=""
        success.innerHTML="сообшение отправлено!"
        success.style.display="block"
    }).catch((err)=>{console.log(err)
    }).finally(()=>console.log("Success"))
    

})