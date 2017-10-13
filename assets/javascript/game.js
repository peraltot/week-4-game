

        var targetNumber = Math.floor(Math.random() * 100) + 20;
        var loss = "0";
        var win = "0";
        var counter = 0;

        $("#number-to-guess").text(targetNumber);

        // Now for the hard part. Creating multiple crystals each with their own unique number value.

        // We begin by expanding our array to include four options.

        // Next we create a for loop to create crystals for every numberOption.

        $(document).ready(function () {

            if (counter === 0) {
                setcrystal();
            };

            function setcrystal() {

                for (var i = 0; i < 4; i++) {

                    // For each iteration, we will create an imageCrystal
                    var imageCrystal = $("<img>");

                    // First each crystal will be given the class ".crystal-image".
                    // This will allow the CSS to take effect.
                    imageCrystal.addClass("crystal-image");

                    imageCrystal.attr("src",
                        "assets/images/crystal"+(i+1)+".png"
                    );

                    // Each imageCrystal will be given a data attribute called data-crystalValue.
                    // This data attribute will be set equal to the array value.
                    
                    var numberOptions = Math.floor(Math.random() * 11) + 1;
                    imageCrystal.attr("data-crystalvalue", numberOptions);
                    
                    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
                    $("#crystals").append(imageCrystal);
                }
            };

            // This time, our click event applies to every single crystal on the page. Not just one.
            
            $("#crystals").on("click", ".crystal-image", function () {
                $("#player-end1").text("");
                $("#player-end2").text("");
                
                // Determining the crystal's value requires us to extract the value from the data attribute.
                // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
                // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
                // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
                
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                // We then add the crystalValue to the user's "counter" which is a global variable.
                // Every click, from every crystal adds to the global counter.
                counter += crystalValue;

                // All of the same game win-lose logic applies. So the rest remains unchanged.
                $("#player-score").text(counter);

                if (counter === targetNumber) {
                   
                    $("#player-end1").text("YOU WON!");
                    $("#player-end2").text("Try Again...");
                    win++;
                    $("#player-wins").text(win);
                    clearcrystal();
                    setcrystal();
                    setTimeout(resetvalue,3000);

                } else if (counter >= targetNumber) {
                    
                    $("#player-end1").text("YOU LOST!");
                    $("#player-end2").text("Try Again...");
                    win++;
                    loss++;
                    $("#player-losses").text(loss);
                    clearcrystal();
                    setcrystal();
                    setTimeout(resetvalue,3000);
                }

                function resetvalue() {
                    targetNumber = Math.floor(Math.random() * 100) + 20;
                    $("#number-to-guess").text(targetNumber);
                    counter = 0;
                    $("#player-score").text(counter);
                };

                function clearcrystal() {
                    var html1 = ("");
                    document.querySelector("#crystals").innerHTML = html1;

                };

            });

        });


