const StandardVotingAge = 18

let user_age = -10

let years_required = StandardVotingAge - user_age

if (user_age >= StandardVotingAge){
    console.log("You are eligible to vote")
}
else if (user_age > 0){
    console.log(`you need ${years_required} more years to be eligible to vote`)
}
else{
    console.log("Invalid input")
}