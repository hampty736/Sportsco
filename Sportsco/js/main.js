<script>  <!--//need to fix scipt function from html page !!-->

    // begin function.
    function sidebar() {

        // Initialize our object data from our XHTML divs.	
        var bar = document.getElementById('sidebar');
        var barText = document.getElementById('sbText');
        var box = document.getElementById('content');

        // If the sidebar is expanded...
        if (bar.style.width < '300px') {

            // Collapse it by setting its width to 15px
            bar.style.width = '300px';

            // Hide the sbText div so that its text isn't visible or
            // repositioned.
            barText.style.display = 'block';

            // Resize the content div to its new, expanded width.
            box.style.width = '100%';
            box.style.float = 'none';

        // Otherwise, if the sidebar is already collapsed...
        } else {


            // Set the sidebar width back to 300.
            bar.style.width = '15px';

            // Make the sbText div visible again.
            barText.style.display = 'none';

            // Set the content div width back to 429.
            box.style.width = '80%';
            box.style.float = 'none';
        }
    }

    // -->
</script>