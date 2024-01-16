
    let shareBtn = document.getElementById('mobileBtn');
    let webBtn = document.getElementById('webBtn');

    shareBtn.addEventListener('click', showMedia);
    webBtn.addEventListener('click', showMedia);
    
    function showMedia() {
        if(window.matchMedia('(max-width: 375px)').matches) {
            if(document.getElementById('id').style.display === '' || document.getElementById('id').style.display === 'flex') {
                document.getElementById('id').style.display = 'none';
                document.getElementById('id').style.opacity = '0'
                document.getElementById('popup').style.display = 'flex';
                setTimeout(function() {
                    document.getElementById('popup').style.height = '20%';
                    document.getElementById('popup').style.width = '100%';
                    document.getElementById('popup').style.opacity = '1';
                }, 20)
            } else if(document.getElementById('id').style.display === 'none') {
                document.getElementById('popup').style.display = 'none';
                document.getElementById('popup').style.height = '';
                document.getElementById('popup').style.width = '0';
                document.getElementById('popup').style.opacity = '0';
                document.getElementById('id').style.display = 'flex';
                setTimeout(function() {
                    document.getElementById('id').style.opacity = '1';
                }, 20)
            }
        } else {
            if(document.getElementById('popup1').style.display === '' || document.getElementById('popup1').style.display === 'none') {
                document.getElementById('popup1').style.display = 'flex'
                document.getElementById('arrowBottom').style.display = 'block'
                setTimeout(function() {
                    document.getElementById('popup1').style.opacity = '1'
                    document.getElementById('arrowBottom').style.opacity = '1'
                    document.getElementById('arrowBottom').style.padding = '10px'
                }, 20)

            } else if(document.getElementById('popup1').style.display === 'flex') {
                document.getElementById('popup1').style.opacity = '0'
                document.getElementById('arrowBottom').style.opacity = '0'
                document.getElementById('arrowBottom').style.padding = '0'
                setTimeout(function() {
                    document.getElementById('popup1').style.display = 'none'
                    document.getElementById('arrowBottom').style.display = 'none'
                }, 200)
            }
        }
    }



    