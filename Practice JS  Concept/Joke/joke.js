function tell_me_joke(){
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything.",
      "Why did the tomato turn red? Because it saw the salad dressing.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
      "Why don't ants get sick? They have tiny ant-bodies.",
      "Why was the math book sad? Because it had too many problems.",
      "Why don't oysters share their pearls? Because they're shellfish.",
      "Why don't ghosts go out in the rain? They're afraid of their own boo-boos.",
      "Why was the computer cold? It left its Windows open.",
      "Why did the cookie go to the doctor? Because it was feeling crumbly.",
      "Why did the frog call his insurance company? He had a jump in his car.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "Why do bees hum? They don't know the words.",
      "Why did the can crusher quit his job? Because it was soda pressing.",
      "Why do seagulls fly over the sea? Because if they flew over the bay, they would be bagels.",
      "Why don't scientists trust atoms? Because they make up everything.",
      "Why did the tomato turn red? Because it saw the salad dressing.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
      "Why don't ants get sick? They have tiny ant-bodies.",
      "Why was the math book sad? Because it had too many problems.",
      "Why don't oysters share their pearls? Because they're shellfish.",
      "Why don't ghosts go out in the rain? They're afraid of their own boo-boos.",
      "Why was the computer cold? It left its Windows open.",
      "Why did the cookie go to the doctor? Because it was feeling crumbly.",
      "Why did the frog call his insurance company? He had a jump in his car.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "Why do bees hum? They don't know the words.",
      "Why did the can crusher quit his job? Because it was soda pressing.",
      "Why do seagulls fly over the sea? Because if they flew over the bay, they would be bagels.",
      "Why don't scientists trust atoms? Because they make up everything.",
      "Why did the tomato turn red? Because it saw the salad dressing.",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
      "Why don't ants get sick? They have tiny ant-bodies.",
      "Why was the math book sad? Because it had too many problems.",
      "Why don't oysters share their pearls? Because they're shellfish.",
      "Why don't ghosts go out in the rain? They're afraid of their own boo-boos.",
      "Why was the computer cold? It left its Windows open."
    ]
    
    let random_joke = Math.floor(Math.random() * jokes.length - 1)
    // console.log(jokes[random_joke])
     return document.getElementById("joke").innerHTML = "<b>\"" + jokes[random_joke] + "\"</b>"
    }