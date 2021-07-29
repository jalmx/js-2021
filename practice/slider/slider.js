
; (
    function (d) {
        
        const path = './photos/'
        const photosPath = [
            `${path}photo_1.jpg`,
            `${path}photo_2.jpg`,
            `${path}photo_3.jpg`,
            `${path}photo_4.jpg`,
        ]

        let i = 0

        setInterval(function () {
            const header = d.getElementById('header')

            console.log(photosPath[i]);
            header.style.backgroundImage = `url(${photosPath[i]})`
            i++

            if (i >= photosPath.length) {
                i = 0
            }

        }, 4000)
    }
)(document)

