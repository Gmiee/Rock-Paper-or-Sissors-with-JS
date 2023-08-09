let user = prompt("Enter Rock, Paper or Sissors, Full word & enter first letter capital.")
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["Sissor", "Rock", "Paper"][cpuI]

const match = (cpu, user) =>{
  if (cpu === user){
    return "Nobody, Game Tied!"
  }
  else if(cpu === "Paper" && user==="Rock"){
    return "CPU"
  }
  else if(cpu === "Rock" && user==="Paper"){
    return "USER"
  }
  else if(cpu === "Sissor" && user==="Paper"){
    return "CPU"
  }
  else if(cpu === "Paper" && user==="Sissor"){
    return "USER"
  }
  else if(cpu === "Rock" && user==="Sissor"){
    return "CPU"
  }
  else if(cpu === "Sissor" && user==="Rock"){
    return "USER"
  }
  // else if(cpu === "R" && user==="S"){
  //   return "CPU"
  // }

  //Null value winner is CPU
  else if(cpu === "Rock" && user===""){
    return "CPU"
  }
  else if(cpu === "Paper" && user===""){
    return "CPU"
  }
  else if(cpu === "Sissor" && user===""){
    return "CPU"
  }

  //For NUll(if you cancel) values
  else if(cpu === "Sissor" && user===null){
    return "CPU"
  }
  else if(cpu === "Paper" && user===null){
    return "CPU"
  }
  else if(cpu === "Rock" && user===null){
    return "CPU"
  }
}
let result = match(cpu, user)
document.write( `CPU:${cpu}<br>USER:${user}<br> The winner is  ${result} `)
document.writeln(`<span>Refresh to play again</span>`)
// document.write( `<div>CPU:${cpu}</div><br><div>USER:${user}</div><br><div> The winner is  ${result}</div> `)
// let a = alert("Refresh to play again")
// console.log(a)*1

  // document.getElementById("demo").innerHTML ="Please refresh to play again";
