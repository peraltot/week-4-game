
        // $(document).ready(function () {

        var targetNumber = Math.floor(Math.random() * 100) + 20;
        var loss = "0";
        var win = "0";
        var counter = 0;

        $("#number-to-guess").text(targetNumber);

        // Now for the hard part. Creating multiple crystals each with their own unique number value.

        // We begin by expanding our array to include four options.
        //   var numberOptions = Math.floor(Math.random() * 11) + 1;

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

                    // Each imageCrystal will be given a src link to the crystal image
                    // imageCrystal.attr("src",
                    //     "http://cdn.playbuzz.com/acdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"
                    // );

                    imageCrystal.attr("src",
                        "assets/images/crystal"+(i+1)+".png"
                    );

                    // Each imageCrystal will be given a data attribute called data-crystalValue.
                    // This data attribute will be set equal to the array value.
                    // imageCrystal.attr("data-crystalvalue", numberOptions[i]);
                    var numberOptions = Math.floor(Math.random() * 11) + 1;
                    imageCrystal.attr("data-crystalvalue", numberOptions);
                    // imageCrystal.attr("data-crystalvalue", numberOptions);
                    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
                    $("#crystals").append(imageCrystal);
                }
            };

            // This time, our click event applies to every single crystal on the page. Not just one.
            // $(".crystal-image").on("click", function () {
            $("#crystals").on("click", ".crystal-image", function () {
                $("#player-end").text("");
                // $("<img>").on("click", function () {
                // Determining the crystal's value requires us to extract the value from the data attribute.
                // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
                // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
                // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
                // var numberOptions = Math.floor(Math.random() * 11) + 1;
                // imageCrystal.attr("data-crystalvalue", numberOptions);
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                // We then add the crystalValue to the user's "counter" which is a global variable.
                // Every click, from every crystal adds to the global counter.
                counter += crystalValue;
                // var numberOptions = Math.floor(Math.random() * 11) + 1;
                // All of the same game win-lose logic applies. So the rest remains unchanged.
                // console.log(crystalValue);
                // console.log(counter);

                // alert("New score: " + counter);
                $("#player-score").text(counter);

                if (counter === targetNumber) {
                    // alert("You win!");
                    $("#player-end").html("You won! Try Again...");
                    win++;
                    $("#player-wins").text(win);
                    clearcrystal();
                    setcrystal();
                    setTimeout(resetvalue,5000);

                } else if (counter >= targetNumber) {
                    // alert("You lose!!");
                    $("#player-end").html("You lost! Try Again...");
                    loss++;
                    $("#player-losses").text(loss);
                    clearcrystal();
                    setcrystal();
                    setTimeout(resetvalue,5000);
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


