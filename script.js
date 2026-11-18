// define a list where we store image links
const images = [
    "https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-vibrant-uv-purple-neon-lights-in-hexagonal-abstract-background-perfect-for-image_3788687.jpg",
    "https://img.magnific.com/free-photo/neon-tunnel-with-glowing-circle_23-2151966356.jpg?semt=ais_hybrid&w=740&q=80",
    "https://wallpapers-clan.com/wp-content/uploads/2025/09/minecraft-world-stylized-cell-shaded-landscape-desktop-wallpaper-cover.jpg",
    "https://img.magnific.com/free-vector/neon-metaverse-tech-city-background-with-pyramid_107791-31775.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.magnific.com/free-vector/fantasy-planet-space-landscape-with-magic-portal-illustration-futuristic-door-outer-world-with-mystic-pink-lightning-energy-ui-screen-backdrop-starry-cosmos-universe-with-gate-entrance-hole_107791-22011.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.magnific.com/free-photo/color-year-purple-tones-abstract-landscape-with-fantasy-aesthetic_23-2151394089.jpg?semt=ais_hybrid&w=740&q=80",
    "https://wallpapercave.com/wp/wp12119170.jpg",
    "https://img.magnific.com/premium-photo/gaming-abstract-dark-black-red-technology-geometric-background-modern-futuristic-background_630787-4854.jpg?semt=ais_hybrid&w=740&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_l-M6RhbMNnxooSRarqA12oBeQscE0I-vBCRQXXeGw_-4XbymPXAMcF7j&s=10",
    "https://img.magnific.com/free-photo/view-powerful-3d-gun_23-2150888739.jpg?semt=ais_hybrid&w=740&q=80",
    "https://lacasadellafibra.com/cdn/shop/files/gaming-mural-wallpaper-neon-tunnel-with-purple-and-blue-lights-45XYZ789-6.jpg?v=1750802001&width=1214",
]

const photoFrame = document.getElementById("photo-frame")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const dropdown = document.getElementById("dropdown")
const goBtn = document.getElementById("goBtn")


let imagenum = 0

//define button click events
nextBtn.addEventListener("click", () => {
    imagenum = imagenum + 1
    
    //length - returns the 
    if(imagenum >= images.length)
    {
        imagenum = 0
    } 

    photoFrame.src = images[imagenum]
})


prevBtn.addEventListener("click", () => {
    imagenum = imagenum - 1
    
    //length - returns total
    if(imagenum < 0)
    {
        imagenum = images.length - 1
    } 

    photoFrame.src = images[imagenum]
})



goBtn.addEventListener("click", function () {
    const link = dropdown.value

    if(link=="")
    {
        alert("Please select a Scratch project first!")
        return
    }
    window.location.href = link

})