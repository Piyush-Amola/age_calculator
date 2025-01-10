 // Get the date input element
        let user_input = document.getElementById('date');
        
        // Set the maximum date for the input field to today's date
        user_input.max = new Date().toISOString().split("T")[0];

        function calculate_age() {
            // Get the birth date from the input field
            let birth_date = new Date(user_input.value);

            // Extract day, month, and year from the birth date
            let d1 = birth_date.getDate();
            let m1 = birth_date.getMonth(); // Months are 0-based
            let y1 = birth_date.getFullYear();

            // Get today's date
            let today = new Date();

            // Extract day, month, and year from today's date
            let d2 = today.getDate();
            let m2 = today.getMonth(); // Months are 0-based
            let y2 = today.getFullYear();

            // Variables to store the calculated age
            let d3, m3, y3;

            // Calculate the difference in years
            y3 = y2 - y1;

            // Calculate the difference in months
            if (m2 >= m1) {
                m3 = m2 - m1;
            } else {
                y3--; // Borrow a year if the current month is less than the birth month
                m3 = 12 + m2 - m1; // Adjust month calculation by adding 12
            }

            // Calculate the difference in days
            if (d2 >= d1) {
                d3 = d2 - d1;
            } else {
                m3--; // Borrow a month if the current day is less than the birth day
                d3 = new Date(y2, m2, 0).getDate() + d2 - d1; // Adjust day calculation
            }

            // Display the calculated age in the paragraph with id 'age'
            document.getElementById('age').innerText = `Your age is ${y3} years, ${m3} months, and ${d3} days.`;
        }