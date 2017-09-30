function madLibs(){

    // Create parts-of-speech container
    var inputs = [];
    inputs[0] = "Enter a noun (i.e. prankster)"
    inputs[1] = "Enter a pronoun (i.e. he)"
    inputs[2] = "Enter a verb (i.e. laugh)"
    inputs[3] = "Enter an adjective (i.e. tricky)"
    inputs[4] = "Enter an adverb (i.e. crazily, trickily)"
    inputs[5] = "Enter a preposition (e.g. by, with, about, until)"
    inputs[6] = "Enter a conjunction (Joins phrases, e.g. and, but, because)"
    inputs[7] = "Enter an interjection (Expresses emotion, e.g. 'Wow!' or 'Doh!')"
    
    // Create word log containers
    var nouns = [];
    var pronouns = [];
    var verbs = [];
    var adjectives = [];
    var adverbs = [];
    var prepositions = [];
    var conjunctions = [];
    var interjections = [];
    
    // Request username and log greeting
    var name = prompt("Please enter your username!");
    console.log(`Hello ${name}! Let's write a random story!`)
    
    // Entering the loop
    for (var i = 1; i > 0; i++){
        var trap = Math.floor(Math.random() * 100)
        if (trap < 13){
            var word = prompt(inputs[0]);
            nouns.push(word);
        }
        else if (trap < 25){
            var word = prompt(inputs[1]);
            pronouns.push(word);
        }
        else if (trap < 38){
            var word = prompt(inputs[2]);
            verbs.push(word);
        }
        else if (trap < 51){
            var word = prompt(inputs[3]);
            adjectives.push(word);
        }
        else if (trap < 64){
            var word = prompt(inputs[4]);
            adverbs.push(word);
        }
        else if (trap < 76){
            var word = prompt(inputs[5]);
            prepositions.push(word);
        }
        else if (trap < 88){
            var word = prompt(inputs[6]);
            conjunctions.push(word);
        }
        else if (trap < 100){
            var word = prompt(inputs[7]);
            interjections.push(word);
        }
        // Break out of the loop
        if (word = null){
            break;
        }
    }

    // Define ratings based on total word count
    var rating = ""
    if (i < 11){
        rating = "They were not very patient."
    }
    else if (i < 20){
        rating = "They were very patient."
    }
    else if (i >= 20){
        rating = "They were very gullible."
    }
    
    // Print results
    console.log(`
        STORY:
        There once was a person named ${name}.
        ${rating}
        
        RESULT:
        You entered a total of ${i} words.
        Your nouns (${nouns.length}): ${nouns}
        Your pronouns (${pronouns.length}): ${pronouns}
        Your verbs (${verbs.length}): ${verbs}
        Your adjectives (${adjectives.length}): ${adjectives}
        Your adverbs (${adverbs.length}): ${adverbs}
        Your prepositions (${prepositions.length}): ${prepositions}
        Your conjunctions (${conjunctions.length}): ${conjunctions}
        Your interjections (${interjections.length}): ${interjections}
    `)    
}

madLibs();