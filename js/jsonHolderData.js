
for(i = 1; i <= 20; i++){
    console.log(i)
fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
  .then((response) => response.json())
  .then((json) => {
  const div = document.createElement('div')
  div.innerHTML = `

    
  <div class="testimonial-item bg-success text-white">
  
  <h3 class="bg-primary text-white">Cliente numero ${json.id}</h3>
  <p>
    Opinion: "${json.body}"
  </p>
  
</div>

    
    `
    infoNose.append(div)
})
}