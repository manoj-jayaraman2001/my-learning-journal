
import {blogs} from './blogs.js'


const recentEl = document.getElementById('recent')
const moreBlogs =  document.getElementById('more-blogs')
// const viewMoreBtn = document.getElementById('view-more')
const hero = document.getElementById('hero')
const homeEl = document.getElementById('home')
const aboutMe = document.getElementById('about-me')
const heroText = document.getElementById('hero-text')

const wideScreen = document.getElementById('wide-screen')



let wideScreenHero = document.getElementById('wide-hero-text')
 
wideScreenHero.innerHTML = heroText.innerHTML


















let blogHtml = ``

let allBlogs = ``

for(let index = 0; index < Math.floor(blogs.length/2); index++){
    blogHtml += `
                    <div class="blog">
                        <img
                        class="blog-img"
                        src=${blogs[index].img}
                        />
                        <div>
                            <p class= 'date'>${blogs[index].date}</p>
                            <h4>${blogs[index].title}</h4>
                            <p class = 'desc'>${blogs[index].desc}</p>
                        </div>
                    </div>

`

}
for(let index = Math.floor(blogs.length/2); index < blogs.length; index++){
    allBlogs += `
                    <div class="blog">
                        <img
                        class="blog-img"
                        src=${blogs[index].img}
                        />
                        <div>
                            <p class= 'date'>${blogs[index].date}</p>
                            <h4>${blogs[index].title}</h4>
                            <p class = 'desc'>${blogs[index].desc}</p>
                        </div>
                    </div>

`
}
recentEl.innerHTML = blogHtml
moreBlogs.innerHTML = allBlogs

document.addEventListener('click',(e)=>{
    if(e.target.id === 'view-more'){
        if(moreBlogs.style.display === 'none'){
            moreBlogs.style.display = 'flex'
            viewMoreBtn.innerHTML = 'view less'
        }
        else {
            moreBlogs.style.display = 'none'
            viewMoreBtn.innerHTML = 'view more'
        }
    }
})
